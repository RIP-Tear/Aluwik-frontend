import { notFound } from "next/navigation";
import { blogPosts, blogSlugs } from "@/utils/blogPosts";
import BlogPostClient from "./BlogPostClient";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return blogSlugs.map(slug => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: "Artykuł nie znaleziony",
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://aluwik.pl/blog/${slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://aluwik.pl/blog/${slug}/`,
      type: "article",
      publishedTime: post.date,
      authors: ["ALUWIK"],
      images: [
        {
          url: post.image || `https://aluwik.pl/blog/${slug}.webp`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image || `https://aluwik.pl/blog/${slug}.webp`],
    },
  };
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return <BlogPostClient slug={slug} />;
}
