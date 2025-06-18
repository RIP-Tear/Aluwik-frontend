import { Heading } from "@/components/atoms/heading/Heading";
import { Text } from "@/components/atoms/text/Text";
import Image from "next/image";
import React, { useState } from "react";

import { DoorOpen, Layers3, SunSnow, Flame, Umbrella } from "lucide-react";

const boxes = [
  {
    icon: <DoorOpen size={32} className="text-orangeAccent" />,
    title: "Systemy okienno drzwiowe",
    description: "Nowoczesne okna i drzwi dopasowane do Twoich potrzeb.",
    image: "/img/dzwi.jpg",
  },
  {
    icon: <Layers3 size={32} className="text-orangeAccent" />,
    title: "Fasady",
    description: "Estetyczne fasady aluminiowe do budynków i zadaszeń.",
    image: "/img/ogrody.webp",
  },
  {
    icon: <SunSnow size={32} className="text-orangeAccent" />,
    title: "Ogrody zimowe",
    description: "Szklane konstrukcje całoroczne idealne do relaksu.",
    image: "/img/tarasy.jpg",
  },
  {
    icon: <Flame size={32} className="text-orangeAccent" />,
    title: "Stolarka przeciwpożarowa",
    description: "Bezpieczne drzwi i okna odporne na ogień.",
    image: "/img/przeciwpozarowe.jpg",
  },
  {
    icon: <Umbrella size={32} className="text-orangeAccent" />,
    title: "Zadaszenia tarasów",
    description: "Trwałe zadaszenia chroniące przed deszczem i słońcem.",
    image: "/img/fasady.jpg",
  },
];

export default function OfferCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { image } = boxes[activeIndex];

  return (
    <div>
      {/* --- nagłówki --- */}
      <div className="flex justify-center mt-10 sm:mt-[100px]">
        <div className="max-w-[1200px] w-full">
          <Heading label="Oferta dopasowana" className="px-5 text-left" size={32} as="h2" />
          <Heading label="do twoich potrzeb" className="px-5 text-left" size={32} as="h2" />
        </div>
      </div>

      {/* --- sekcja kart --- */}
      <div className="flex justify-center mt-10 p-5">
        <div className="max-w-[1200px] w-full flex flex-col xl:grid xl:grid-cols-4 xl:grid-rows-2 gap-4">
          {/* zdjęcie z fade-in */}
          <div className="relative w-full aspect-[4/3] xl:aspect-auto xl:col-span-3 xl:row-span-2 rounded-lg overflow-hidden">
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
            {boxes.map(({ icon, title, description }, i) => {
              const active = i === activeIndex;
              return (
                <button
                  key={title + i}
                  onClick={() => setActiveIndex(i)}
                  className={`border-2 border-orangeAccent rounded-lg p-4 h-auto xl:h-52 transition
                        flex flex-col justify-start text-left
                        ${active ? "bg-white shadow-md" : "hover:bg-white"}`}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 shrink-0 flex items-center justify-center">{icon}</div>
                    <Text text={title} size={18} />
                  </div>

                  {/* Opis widoczny tylko na xl+ */}
                  <Text text={description} size={14} className="mt-5 text-start hidden xl:block" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
