import PageSection from "@/components/atoms/page-section/PageSection";
import HeroText from "@/components/molecules/hero-text/HeroText";
import Image from "next/image";
import React from "react";
import { LucideIcon, MoveUpRight } from "lucide-react";
import { Heading } from "@/components/atoms/heading/Heading";
import { Text } from "@/components/atoms/text/Text";
import Link from "next/link";
import { offers } from "@/utils/mock/offers";

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
  relatedOffers: typeof offers;
};

const OfferPageTemplate = ({
  title,
  highlightWords,
  imageSrc,
  imageAlt,
  boxes,
  sections,
  relatedOffers,
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
              <div key={index} className="border-2 border-orangeAccent rounded-xl p-5 bg-white">
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
          <div className="lg:col-span-2 space-y-6 leading-relaxed">
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
            <Heading
              label="Sprawdź nasze inne oferty"
              className="mb-5 text-start mt-10"
              as="h2"
              size={24}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedOffers.map((offer, index) => (
                <div
                  key={index}
                  className="bg-white relative border-2 border-orangeAccent rounded-xl overflow-hidden group"
                >
                  <div className="p-4 pb-14">
                    <div className="flex items-center gap-2 justify-start mb-5">
                      <offer.icon size={24} className="text-orangeAccent flex-shrink-0" />
                      <Text text={offer.title} size={18} />
                    </div>
                  </div>

                  <Link
                    className="absolute bottom-4 right-4 bg-orangeAccent rounded-full text-white w-10 h-10 flex items-center justify-center shadow-md transition hover:scale-105 cursor-active"
                    href={offer.href}
                  >
                    <MoveUpRight size={20} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
};

export default OfferPageTemplate;
