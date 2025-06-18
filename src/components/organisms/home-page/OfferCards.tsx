import { Heading } from "@/components/atoms/heading/Heading";
import { Text } from "@/components/atoms/text/Text";
import { boxes } from "@/utils/mock/boxes";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function OfferCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { image } = boxes[activeIndex];

  return (
    <div>
      {/* --- nagłówki --- */}
      <div className="flex justify-center mt-10 sm:mt-[100px]">
        <div className="max-w-[1200px] w-full">
          <Heading
            label="Oferta dopasowana"
            className="px-5 text-left"
            size={32}
            as="h2"
            highlightWords={["Oferta"]}
          />
          <Heading label="do twoich potrzeb" className="px-5 text-left" size={32} as="h2" />
        </div>
      </div>

      {/* --- sekcja kart --- */}
      <div className="flex justify-center mt-10 p-5">
        <div className="max-w-[1200px] w-full flex flex-col xl:grid xl:grid-cols-4 xl:grid-rows-2 gap-4">
          {/* zdjęcie z fade-in */}
          <div className="border-2 border-orangeAccent relative w-full aspect-[4/3] xl:aspect-auto xl:col-span-3 xl:row-span-2 rounded-lg overflow-hidden">
            <Image
              key={image}
              src={image}
              alt={boxes[activeIndex].title}
              fill
              className="object-cover opacity-0 transition-opacity duration-500"
              onLoadingComplete={img => img.classList.remove("opacity-0")}
            />
          </div>

          {/* boxy */}
          <div className="flex flex-col xl:contents gap-4 xl:gap-0">
            {boxes.map(({ icon: Icon, title, description, href }, i) => {
              const active = i === activeIndex;
              return (
                <button
                  key={title + i}
                  onClick={() => setActiveIndex(i)}
                  className={`relative border-2 border-orangeAccent rounded-lg p-4 h-auto xl:h-52 transition
                    flex flex-col justify-start text-left cursor-active
                    ${active ? "bg-white shadow-md" : "hover:bg-white"}`}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 shrink-0 flex items-center justify-center">
                      <Icon size={32} className="text-orangeAccent" />
                    </div>
                    <Text text={title} size={18} />
                  </div>

                  <Text text={description} size={14} className="mt-5 text-start hidden xl:block" />

                  <a
                    href={href}
                    className="absolute bottom-4 right-4 bg-orangeAccent rounded-full text-white w-10 h-10 flex items-center justify-center shadow-md transition hover:scale-105 cursor-active"
                    aria-label={`Przejdź do ${title}`}
                  >
                    <MoveUpRight size={20} />
                  </a>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
