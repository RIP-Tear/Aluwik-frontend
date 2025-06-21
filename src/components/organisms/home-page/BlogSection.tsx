import React from "react";
import PageSection from "@/components/atoms/page-section/PageSection";
import Image from "next/image";
import { Button } from "@/components/atoms/button/Button";
import { Heading } from "@/components/atoms/heading/Heading";
import { MoveUpRight } from "lucide-react";
import { Text } from "@/components/atoms/text/Text";
import { blogPosts } from "@/utils/mock/blogPosts";

const BlogSection = () => {
  const [featuredPost, ...restPosts] = blogPosts;
  const otherPosts = restPosts.slice(0, 3);

  return (
    <PageSection className="mb-10 sm:mb-[100px]">
      <Heading
        label="Zobacz najnowsze wpisy na blogu"
        size={32}
        className="mb-5 sm:mb-[50px]"
        highlightWords={["wpisy"]}
        as="h2"
      />

      <div className="grid md:grid-cols-2 gap-8 items-start h-full">
        {featuredPost && (
          <div className="flex flex-col justify-between space-y-4">
            <div className="relative w-full h-[300px] overflow-hidden">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover border-2 border-orangeAccent rounded-xl"
              />
            </div>
            <div className="flex-1">
              <Heading
                label={featuredPost.title}
                as="h3"
                size={18}
                className="text-orangeAccent mb-2"
              />
              <Text text={featuredPost.excerpt} size={16} />
              <div className="flex justify-end items-center mt-5">
                <Button
                  label="Czytaj"
                  color="black"
                  size={14}
                  icon={<MoveUpRight size={14} />}
                  href={`/blog/${featuredPost.href}`}
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col justify-between h-full">
          {otherPosts.map((post, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="relative w-32 h-32 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover border-2 border-orangeAccent rounded-xl"
                />
              </div>
              <div className="flex-1 mb-5">
                <Heading label={post.title} as="h4" size={16} className="mb-2 text-orangeAccent" />
                <Text text={post.excerpt} size={14} />
                <div className="flex justify-end items-center mt-2">
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
      </div>

      <div className="mt-10 w-fit">
        <Button label="Zajrzyj na nasz blog" icon={<MoveUpRight />} href="/blog" />
      </div>
    </PageSection>
  );
};

export default BlogSection;
