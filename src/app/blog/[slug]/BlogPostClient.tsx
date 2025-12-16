"use client";

import { notFound } from "next/navigation";
import { Navbar } from "@/components/molecules/navbar/Navbar";
import { Footer } from "@/components/molecules/footer/Footer";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import { blogPosts } from "@/utils/blogPosts";

type Props = {
  slug: string;
};

export default function BlogPostClient({ slug }: Props) {
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  const PostComponent = post.component;

  return (
    <>
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
