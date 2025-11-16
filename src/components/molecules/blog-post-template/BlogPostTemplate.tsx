import HeroText from "@/components/molecules/hero-text/HeroText";
import PageSection from "@/components/atoms/page-section/PageSection";
import { Heading } from "@/components/atoms/heading/Heading";
import { Text } from "@/components/atoms/text/Text";
import { Button } from "@/components/atoms/button/Button";
import Image from "next/image";
import { blogPosts } from "@/utils/mock/blogPosts";
import { MoveUpRight } from "lucide-react";

type BlogPostTemplateProps = {
  slug: string;
  title: string;
  highlightWords: string[];
  heroImage: { src: string; alt: string };
  sections: { heading: string; text: string }[];
};

const BlogPostTemplate = ({
  slug,
  title,
  highlightWords,
  heroImage,
  sections,
}: BlogPostTemplateProps) => {
  const relatedPosts = blogPosts.filter(post => post.href !== slug).slice(0, 3);

  return (
    <>
      <HeroText label={title} highlightWords={highlightWords} />

      <PageSection className="bg-black text-white">
        <div className="flex flex-col lg:flex-row gap-10 mb-5 sm:mb-[50px]">
          {/* Lewa kolumna */}
          <div className="lg:w-3/4 space-y-8 leading-relaxed my-10">
            {sections.map(section => (
              <div key={section.heading} className="space-y-4">
                <Heading label={section.heading} as="h2" size={24} className="text-orangeAccent" />
                <Text text={section.text} size={16} />
              </div>
            ))}
          </div>

          {/* Prawa kolumna */}
          <div className="lg:w-1/4 flex flex-col gap-6 mt-0 sm:mt-10">
            <div className="relative w-full h-[250px] rounded-xl overflow-hidden border-2 border-orangeAccent">
              <Image src={heroImage.src} alt={heroImage.alt} fill className="object-cover" />
            </div>

            <div className="border border-orangeAccent" />

            {/* Related posts (lokalnie osadzone) */}
            <div className="space-y-4">
              <Heading label="Zobacz inne posty" as="h4" size={18} className="text-orangeAccent" />
              <div className="grid gap-4">
                {relatedPosts.map(post => (
                  <div
                    key={post.href}
                    className="relative flex flex-col border border-orangeAccent bg-white rounded-xl overflow-hidden hover:shadow-md transition"
                  >
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <Text
                        as="span"
                        text={post.title}
                        size={14}
                        className="text-orangeAccent leading-snug mb-3"
                      />
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
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
};

export default BlogPostTemplate;
