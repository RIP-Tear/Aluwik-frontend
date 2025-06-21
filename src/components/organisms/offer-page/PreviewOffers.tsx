import PageSection from "@/components/atoms/page-section/PageSection";
import { Text } from "@/components/atoms/text/Text";
import { offers } from "@/utils/mock/offers";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const PreviewOffers = () => {
  return (
    <PageSection className="mb-10 sm:mb-[100px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <a
            key={index}
            href={offer.href}
            className="relative border-2 border-orangeAccent rounded-xl overflow-hidden group cursor-active"
          >
            <div className="relative w-full h-48">
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1024px) 50vw,
                       33vw"
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4 pb-14">
              <div className="flex items-center gap-2 justify-start mb-5">
                <offer.icon size={24} className="text-orangeAccent flex-shrink-0" />
                <Text text={offer.title} size={18} />
              </div>
              <Text text={offer.description} size={14} />
            </div>

            <button className="absolute bottom-4 right-4 bg-orangeAccent rounded-full text-white w-10 h-10 flex items-center justify-center shadow-md transition hover:scale-105 cursor-active">
              <MoveUpRight size={20} />
            </button>
          </a>
        ))}
      </div>
    </PageSection>
  );
};

export default PreviewOffers;
