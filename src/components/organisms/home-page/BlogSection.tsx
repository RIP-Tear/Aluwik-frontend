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
  const otherPosts = restPosts.slice(0, 2);

  return (
    <PageSection className="mb-5 sm:mb-[50px]">
      <Heading
        label="Zobacz najnowsze wpisy na blogu"
        size={36}
        className="mb-5 sm:mb-[50px]"
        highlightWords={["wpisy"]}
        as="h2"
      />

      <div className="grid md:grid-cols-2 gap-4 sm:gap-8 items-start h-full">
        {/* Główny post */}
        {featuredPost && (
          <div className="flex flex-col border-2 border-orangeAccent rounded-xl overflow-hidden h-full bg-white">
            <div className="relative w-full h-[200px]">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col flex-1 p-3 justify-between">
              <div>
                <Heading
                  label={featuredPost.title}
                  as="h3"
                  size={18}
                  className="text-orangeAccent mb-2"
                />
                <Text text={featuredPost.excerpt} size={16} />
              </div>
              <div className="flex justify-end items-center mt-6">
                <Button
                  label="Czytaj"
                  color="black"
                  size={14}
                  icon={<MoveUpRight size={14} />}
                  href={`/blog/${featuredPost.href}/`}
                />
              </div>
            </div>
          </div>
        )}

        {/* Pozostałe posty */}
        <div className="flex flex-col justify-between h-full space-y-4">
          {otherPosts.map((post, idx) => (
            <div
              key={idx}
              className="flex gap-4 border-2 border-orangeAccent rounded-xl overflow-hidden h-[calc(50%-0.5rem)] bg-white"
            >
              <div className="relative w-32 h-auto aspect-[1/1] flex-shrink-0">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="flex-1 p-3 flex flex-col justify-between">
                <div>
                  <Heading
                    label={post.title}
                    as="h4"
                    size={16}
                    className="mb-2 text-orangeAccent"
                  />
                  <Text text={post.excerpt} size={14} />
                </div>
                <div className="flex justify-end items-center mt-2">
                  <Button
                    label="Czytaj"
                    color="black"
                    size={14}
                    icon={<MoveUpRight size={14} />}
                    href={`/blog/${post.href}/`}
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
