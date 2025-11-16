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
      canonical: `/blog/${slug}/`,
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
