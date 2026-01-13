"use client";

import { notFound } from "next/navigation";
import { Navbar } from "@/components/molecules/navbar/Navbar";
import { Footer } from "@/components/molecules/footer/Footer";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import { blogPosts } from "@/utils/blogPosts";
import { JsonLd, createBreadcrumbSchema } from "@/components/seo/JsonLd";
import { createBlogPostingSchema } from "@/components/seo/schemas";
// import HolidayNavbar from "@/components/molecules/holiday-navbar/HolidayNavbar";

type Props = {
  slug: string;
};

export default function BlogPostClient({ slug }: Props) {
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  const PostComponent = post.component;

  // Generuj schema dla artykułu blogowego
  const blogSchema = createBlogPostingSchema({
    title: post.title,
    description: post.description,
    image: post.image || `/blog/${slug}.webp`,
    url: `/blog/${slug}/`,
    datePublished: post.date || new Date().toISOString(),
    dateModified: post.date || new Date().toISOString(),
  });

  // Breadcrumbs schema (tylko dla SEO, bez renderowania)
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Strona główna", url: "https://www.aluwik.pl/" },
    { name: "Blog", url: "https://www.aluwik.pl/blog/" },
    { name: post.title, url: `https://www.aluwik.pl/blog/${slug}/` },
  ]);

  return (
    <>
      <JsonLd data={blogSchema} />
      <JsonLd data={breadcrumbSchema} />
      {/* <HolidayNavbar /> */}
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <PostComponent />
      <ContactHero />
      <Footer />
    </>
  );
}
