// src/components/sections/BlogPreview.tsx
import React from "react";
import PageSection from "@/components/atoms/page-section/PageSection";
import Image from "next/image";
import { Heading } from "@/components/atoms/heading/Heading";
import { Text } from "@/components/atoms/text/Text";
import { Button } from "@/components/atoms/button/Button";
import { MoveUpRight } from "lucide-react";
import { blogPosts } from "@/utils/mock/blogPosts";

const BlogPreview = () => {
  if (blogPosts.length === 0) return null;

  const [first, ...others] = blogPosts;

  return (
    <PageSection className="mb-10 sm:mb-[100px]">
      <div className="mb-10">
        <div className="relative w-full h-[320px] overflow-hidden rounded-xl border-2 border-orangeAccent">
          <Image src={first.image} alt={first.title} fill className="object-cover" />
        </div>
        <div className="mt-4">
          <Heading label={first.title} as="h3" size={24} className="text-orangeAccent mb-2" />
          <Text text={first.excerpt} size={18} />
          <div className="flex justify-end mt-4">
            <Button
              label="Czytaj"
              color="black"
              size={14}
              icon={<MoveUpRight size={14} />}
              href={`/blog/${first.href}`}
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {others.map(post => (
          <div key={post.href} className="flex gap-4">
            <div className="relative w-32 h-32 overflow-hidden rounded-xl border-2 border-orangeAccent">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <Heading label={post.title} as="h4" size={16} className="mb-2 text-orangeAccent" />
              <Text text={post.excerpt} size={14} />
              <div className="flex justify-end mt-2">
                <Button
                  label="Czytaj"
                  color="black"
                  size={14}
                  icon={<MoveUpRight size={14} />}
                  href={`/blog/${first.href}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default BlogPreview;
