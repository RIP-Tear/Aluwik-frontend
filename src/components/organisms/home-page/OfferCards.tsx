import { Button } from "@/components/atoms/button/Button";
import { Heading } from "@/components/atoms/heading/Heading";
import PageSection from "@/components/atoms/page-section/PageSection";
import { Text } from "@/components/atoms/text/Text";
import { offers } from "@/utils/mock/offers";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile"; // ← zakładam że plik znajduje się tam

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
          ${active ? "bg-white shadow-md" : "hover:bg-white"} xl:min-h-[208px]`}
      >
        <div className="sm:flex items-center gap-2">
          {/* kontener dla ikonki i strzałki */}
          <div className="flex items-center w-full sm:w-auto mb-2 sm:mb-0">
            <Icon size={iconSize} className="text-orangeAccent" />

            {/* strzałka tylko na mobile, wypchnięta na prawą stronę */}
            <a
              href={href}
              className="ml-auto bg-orangeAccent rounded-full text-white w-8 h-8 sm:hidden flex items-center justify-center shadow-md transition hover:scale-105 cursor-active"
              aria-label={`Przejdź do ${title}`}
            >
              <MoveUpRight size={moveIconSize} />
            </a>
          </div>

          {/* tytuł obok na desktopie */}
          <Text text={title} size={textSize} className="ml-0 sm:ml-2" />
        </div>

        <div className="flex flex-col grow">
          {!isMobile && (
            <Text text={description} size={14} className="mt-4 text-start hidden xl:block" />
          )}

          {!isMobile && (
            <a
              href={href}
              className="mt-auto ml-auto bg-orangeAccent rounded-full text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow-md transition hover:scale-105 cursor-active"
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
          {/* ZDJĘCIE */}
          <div
            className="order-1 xl:order-none border-2 border-orangeAccent relative w-full aspect-[4/3] lg:aspect-[4/3]
                       rounded-xl overflow-hidden xl:aspect-auto h-[250px] lg:h-[350px] xl:h-[470px] xl:col-span-3 xl:row-start-2"
          >
            <Image
              key={offers[activeIndex].image}
              src={offers[activeIndex].image}
              alt={offers[activeIndex].title}
              fill
              className="object-cover opacity-0 transition-opacity duration-500"
              onLoadingComplete={img => img.classList.remove("opacity-0")}
            />
          </div>

          {/* 4 karty (rząd 1) */}
          <div className="order-2 xl:order-none grid grid-cols-2 gap-4 xl:grid xl:grid-cols-4 xl:col-span-4 xl:row-start-1">
            {topCards.map((card, i) => renderCard(card, i))}
          </div>

          {/* 2 karty obok zdjęcia */}
          <div className="order-3 xl:order-none grid grid-cols-2 gap-4 xl:flex xl:flex-col xl:col-start-4 xl:row-start-2">
            {rightCards.map((card, i) => renderCard(card, i + 4))}
          </div>

          {/* 3 dolne karty */}
          <div className="order-4 xl:order-none grid grid-cols-2 gap-4 xl:flex xl:flex-row xl:col-span-3 xl:row-start-3">
            {bottomCards.map((card, i) => renderCard(card, i + 6))}
          </div>
        </div>

        {/* przycisk */}
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
