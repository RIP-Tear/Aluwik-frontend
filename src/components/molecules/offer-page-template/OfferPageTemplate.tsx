import PageSection from "@/components/atoms/page-section/PageSection";
import HeroText from "@/components/molecules/hero-text/HeroText";
import Image from "next/image";
import React from "react";
import { LucideIcon } from "lucide-react";
import { Heading } from "@/components/atoms/heading/Heading";
import { Text } from "@/components/atoms/text/Text";

type BoxItem = {
  icon: LucideIcon;
  title: string;
  items: string[];
};

type SectionItem = {
  heading: string;
  content: string | string[];
};

type OfferPageTemplateProps = {
  title: string;
  highlightWords: string[];
  imageSrc: string;
  imageAlt: string;
  boxes: BoxItem[];
  sections: SectionItem[];
};

const OfferPageTemplate = ({
  title,
  highlightWords,
  imageSrc,
  imageAlt,
  boxes,
  sections,
}: OfferPageTemplateProps) => {
  return (
    <>
      <HeroText label={title} highlightWords={highlightWords} />

      <PageSection className="mb-10 sm:mb-[100px]">
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-10">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* BOXY */}
          <div className="space-y-6">
            {boxes.map(({ icon: Icon, title, items }, index) => (
              <div
                key={index}
                className="border-2 border-orangeAccent rounded-xl p-5 bg-white shadow-sm"
              >
                <div className="flex items-center gap-2 text-orangeAccent mb-3">
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <Heading label={title} as="h3" size={18} />
                </div>
                <ul className="list-disc list-inside space-y-1">
                  {items.map((item, i) => (
                    <li key={i}>
                      <Text text={item} size={14} as="span" />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* OPIS */}
          <div className="lg:col-span-2 space-y-6 text-gray-800 text-sm leading-relaxed">
            {sections.map((section, index) => (
              <div key={index}>
                <Heading label={section.heading} className="mb-2 text-start" as="h2" size={24} />
                {Array.isArray(section.content) ? (
                  <ul className="list-disc list-inside space-y-1">
                    {section.content.map((item, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: section.content }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </PageSection>
    </>
  );
};

export default OfferPageTemplate;
