import { Button } from "@/components/atoms/button/Button";
import { Heading } from "@/components/atoms/heading/Heading";
import PageSection from "@/components/atoms/page-section/PageSection";
import { Text } from "@/components/atoms/text/Text";
import { offers } from "@/utils/mock/offers";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile"; // ← zakładam że plik znajduje się tam
import { AnimatePresence, motion } from "framer-motion";

export default function OfferCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();

  const iconSize = isMobile ? 24 : 32;
  const textSize = isMobile ? 16 : 18;
  const moveIconSize = isMobile ? 16 : 20;

  const topCards = offers.slice(0, 4);
  const rightCards = offers.slice(4, 6);
  const bottomCards = offers.slice(6, 9);

  const renderCard = (
    { icon: Icon, title, description, href }: (typeof offers)[number],
    index: number,
  ) => {
    const active = index === activeIndex;
    return (
      <button
        key={title}
        onClick={() => setActiveIndex(index)}
        className={`relative border-2 border-orangeAccent rounded-xl p-4 transition
  flex flex-col text-left cursor-active
  ${active ? "bg-white shadow-md" : "hover:bg-white"}
  xl:min-h-[208px] ${isMobile ? "w-fit shrink-0" : ""}`}
      >
        <div className={`flex items-center gap-2 ${isMobile ? "justify-between" : ""}`}>
          <div className="flex items-center gap-3">
            <Icon size={iconSize} className="text-orangeAccent shrink-0" />
            <Text
              text={title}
              size={textSize}
              className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[180px] sm:max-w-none"
            />
          </div>

          {isMobile && (
            <a
              href={href}
              className="ml-auto bg-orangeAccent rounded-full text-white p-4 w-6 h-6 flex items-center justify-center shadow-md transition hover:scale-105 cursor-active"
              aria-label={`Przejdź do ${title}`}
            >
              <MoveUpRight size={moveIconSize} className="shrink-0" />
            </a>
          )}
        </div>

        <div className="flex flex-col grow">
          {!isMobile && (
            <Text text={description} size={14} className="mt-4 text-start hidden xl:block" />
          )}

          {!isMobile && (
            <a
              href={href}
              className="mt-auto ml-auto bg-orangeAccent rounded-full text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow-md transition hover:scale-105 cursor-active shrink-0"
              aria-label={`Przejdź do ${title}`}
            >
              <MoveUpRight size={moveIconSize} />
            </a>
          )}
        </div>
      </button>
    );
  };

  return (
    <div>
      <PageSection>
        <Heading
          label="Oferta dopasowana"
          size={32}
          as="h2"
          highlightWords={["Oferta"]}
          className="text-left"
        />
        <Heading
          label="do twoich potrzeb"
          size={32}
          as="h2"
          className="text-left mb-5 lg:mb-[50px]"
        />

        <div className="flex flex-col gap-4 xl:grid xl:grid-cols-4 xl:auto-rows-auto xl:gap-4">
          {/* Karty desktop (3 sekcje) */}
          {!isMobile && (
            <>
              {/* 4 karty (rząd 1) */}
              <div className="grid grid-cols-2 gap-4 xl:grid-cols-4 xl:col-span-4 xl:row-start-1">
                {topCards.map((card, i) => renderCard(card, i))}
              </div>

              {/* 2 karty obok zdjęcia */}
              <div className="grid grid-cols-2 gap-4 xl:flex xl:flex-col xl:col-start-4 xl:row-start-2">
                {rightCards.map((card, i) => renderCard(card, i + 4))}
              </div>

              {/* 3 dolne karty */}
              <div className="grid grid-cols-2 gap-4 xl:flex xl:flex-row xl:col-span-3 xl:row-start-3">
                {bottomCards.map((card, i) => renderCard(card, i + 6))}
              </div>
            </>
          )}

          {/* ZDJĘCIE */}
          <div
            className="border-2 border-orangeAccent relative w-full aspect-[4/3] lg:aspect-[4/3]
    rounded-xl overflow-hidden xl:aspect-auto h-[250px] lg:h-[350px] xl:h-[470px] xl:col-span-3 xl:row-start-2"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={offers[activeIndex].image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <Image
                  src={offers[activeIndex].image}
                  alt={offers[activeIndex].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {isMobile && (
            <div className="overflow-x-auto flex gap-4 pb-2 -mx-4 px-4 mobile-scroll-hide">
              {[...topCards, ...rightCards, ...bottomCards].map((card, i) => renderCard(card, i))}
            </div>
          )}
        </div>

        <Button
          label="Sprawdź naszą ofertę"
          icon={<MoveUpRight />}
          href="/oferta"
          className="mt-10"
        />
      </PageSection>
    </div>
  );
}
