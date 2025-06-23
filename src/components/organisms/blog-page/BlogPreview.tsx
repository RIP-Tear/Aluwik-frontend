"use client";

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
      {/* Główny post */}
      <div className="mb-10 border-2 border-orangeAccent rounded-xl overflow-hidden group bg-white">
        <div className="relative w-full h-[320px]">
          <Image
            src={first.image}
            alt={first.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <div className="p-4">
          <Heading label={first.title} as="h3" size={24} className="text-orangeAccent mb-2" />
          <Text text={first.excerpt} size={16} />
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

      {/* Pozostałe posty */}
      <div className="grid md:grid-cols-2 gap-8">
        {others.map(post => (
          <div
            key={post.href}
            className="flex gap-4 border-2 border-orangeAccent rounded-xl overflow-hidden h-full group bg-white"
          >
            <div className="relative w-32 h-auto min-h-32 flex-shrink-0">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col justify-between flex-1 p-3">
              <div>
                <Heading label={post.title} as="h4" size={16} className="mb-2 text-orangeAccent" />
                <Text text={post.excerpt} size={14} />
              </div>
              <div className="flex justify-end mt-4">
                <Button
                  label="Czytaj"
                  color="black"
                  size={14}
                  icon={<MoveUpRight size={14} />}
                  href={`/blog/${post.href}`}
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
