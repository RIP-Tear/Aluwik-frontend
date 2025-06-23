import PageSection from "@/components/atoms/page-section/PageSection";
import HeroText from "@/components/molecules/hero-text/HeroText";
import Image from "next/image";
import React from "react";
import { LucideIcon } from "lucide-react";
import { Heading } from "@/components/atoms/heading/Heading";
import { Text } from "@/components/atoms/text/Text";
import Link from "next/link";

type LinkItem = {
  label: string;
  href: string;
};

type BoxItem = {
  icon: LucideIcon;
  title: string;
  items?: string[];
  links?: LinkItem[];
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
        <div className="relative w-full h-[250px] rounded-xl overflow-hidden mb-10 border-2 border-orangeAccent">
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" priority />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* BOXY */}
          <div className="space-y-6">
            {boxes.map(({ icon: Icon, title, items, links }, index) => (
              <div
                key={index}
                className="border-2 border-orangeAccent rounded-xl p-5 bg-white shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-5 h-5 flex-shrink-0 text-orangeAccent" />
                  <Heading
                    label={title}
                    as="h3"
                    size={18}
                    className="text-start text-orangeAccent"
                  />
                </div>

                {items && (
                  <ul className="list-disc list-inside space-y-1">
                    {items.map((item, i) => (
                      <li key={i}>
                        <Text text={item} size={14} as="span" />
                      </li>
                    ))}
                  </ul>
                )}

                {links && (
                  <ul className="space-y-1 list-none pl-1">
                    {links.map((link, i) => (
                      <li key={i}>
                        <Link href={link.href} className="cursor-active">
                          <Text
                            as="span"
                            text={link.label}
                            size={14}
                            className="text-orangeAccent hover:underline"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
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
                      <li key={i}>
                        <Text as="span" html={item} size={14} />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Text as="p" html={section.content} size={14} />
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
