import React, { useState } from "react";
import { useRealizations } from "@/services/useRealizations";
import Image from "next/image";
import clsx from "clsx";
import PageSection from "@/components/atoms/page-section/PageSection";
import { MoonLoader } from "react-spinners";
import { Text } from "@/components/atoms/text/Text";
import { DoorOpen, Layers3, SunSnow, Flame, TriangleAlert } from "lucide-react";

const CATEGORY_CONFIG: Record<string, { title: string; icon: React.ElementType }> = {
  systemyOkiennoDzwiowe: {
    title: "Systemy okienno-dzwiowe",
    icon: DoorOpen,
  },
  fasady: {
    title: "Fasady",
    icon: Layers3,
  },
  stolarkaPrzeciwpozarowa: {
    title: "Stolarka przeciwpożarowa",
    icon: Flame,
  },
  ogrodyZimowe: {
    title: "Ogrody zimowe",
    icon: SunSnow,
  },
};

const CATEGORY_KEYS = Object.keys(CATEGORY_CONFIG);

const CategoryPreviewRealization = () => {
  const { data, isLoading, isError } = useRealizations();
  const [activeCategory, setActiveCategory] = useState("systemyOkiennoDzwiowe");

  const mobileCategoryButtons = (
    <div className="flex flex-col gap-4 w-full md:hidden mb-6">
      {CATEGORY_KEYS.map(key => {
        const { title, icon: Icon } = CATEGORY_CONFIG[key];
        return (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={clsx(
              "relative w-full border-2 border-orangeAccent rounded-lg p-4 transition flex items-center gap-3 text-left",
              activeCategory === key ? "bg-white shadow-md" : "hover:bg-white",
            )}
          >
            <Icon size={32} className="text-orangeAccent" />
            <Text text={title} size={18} />
          </button>
        );
      })}
    </div>
  );

  const desktopCategorySidebar = (
    <div className="hidden md:flex flex-col gap-4 sticky top-10 h-fit self-start">
      {CATEGORY_KEYS.map(key => {
        const { title, icon: Icon } = CATEGORY_CONFIG[key];
        return (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={clsx(
              "relative w-full border-2 border-orangeAccent rounded-lg p-4 transition flex items-center gap-3 text-left cursor-active",
              activeCategory === key ? "bg-white shadow-md" : "hover:bg-white",
            )}
          >
            <Icon size={32} className="text-orangeAccent" />
            <Text text={title} size={18} />
          </button>
        );
      })}
    </div>
  );

  if (isLoading)
    return (
      <PageSection>
        <div className="flex flex-col md:flex-row gap-8">
          {mobileCategoryButtons}
          {desktopCategorySidebar}
          <div className="mb-10 sm:mb-[300px] text-center flex flex-col justify-center items-center">
            <MoonLoader color="#C16200" />
          </div>
        </div>
      </PageSection>
    );
  if (isError || !data?.data)
    return (
      <PageSection>
        <div className="flex flex-col md:flex-row gap-8">
          {mobileCategoryButtons}
          {desktopCategorySidebar}
          <div className="mb-10 sm:mb-[300px] text-center flex flex-col justify-center items-center">
            <TriangleAlert color="#D32027" size={64} />
            <Text
              size={16}
              text="Wystąpił problem z pobieraniem danych."
              className="text-alertRed"
            />
            <Text
              size={16}
              text="Proszę sie skontakować z serwisem RIP & Tear - service@rip-tear.com"
              className="text-alertRed"
            />
          </div>
        </div>
      </PageSection>
    );

  const filtered = data.data.filter(realization => realization.category === activeCategory);

  return (
    <PageSection>
      <div className="flex flex-col md:flex-row gap-8 min-h-screen">
        {mobileCategoryButtons}
        {desktopCategorySidebar}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 flex-1 mb-10 sm:mb-[100px]">
          {filtered.map(realization => (
            <div
              key={realization.id}
              className="relative w-full aspect-[4/3] rounded overflow-hidden"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}${realization.image.formats.medium?.url || realization.image.url}`}
                alt={realization.image.name}
                fill
                className="object-cover"
              />
            </div>
          ))}
          {filtered.length === 0 && (
            <Text
              text="Brak realizacji w tej kategorii."
              className="text-greyVariant col-span-full"
            />
          )}
        </div>
      </div>
    </PageSection>
  );
};

export default CategoryPreviewRealization;
