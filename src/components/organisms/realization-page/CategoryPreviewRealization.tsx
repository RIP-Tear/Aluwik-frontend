"use client";
import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PageSection from "@/components/atoms/page-section/PageSection";
import clsx from "clsx";
import { MoonLoader } from "react-spinners";
import { Text } from "@/components/atoms/text/Text";
import { TriangleAlert, MoveUpRight } from "lucide-react";
import ImageModal from "./ImageModal";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { useCloudinaryRealizations } from "@/hooks/useCloudinaryRealizations";

import { offers } from "@/utils/mock/offers";
import Link from "next/link";

const CATEGORY_CONFIG = offers.reduce(
  (acc, offer) => {
    acc[offer.value] = { title: offer.title, icon: offer.icon };
    return acc;
  },
  {} as Record<string, { title: string; icon: React.ElementType }>,
);

const CATEGORY_KEYS = Object.keys(CATEGORY_CONFIG);

const buildImageSrc = (img: any) => img.url;

const CategoryPreviewRealization: React.FC = () => {
  const { data, isLoading, isError, error } = useCloudinaryRealizations();

  const searchParams = useSearchParams();
  const categoryHeaderRef = React.useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState(CATEGORY_KEYS[0]);

  useEffect(() => {
    const cat = searchParams.get("kategoria");
    if (typeof cat === "string" && CATEGORY_KEYS.includes(cat)) {
      setActiveCategory(cat);
    } else if (!cat) {
      setActiveCategory(CATEGORY_KEYS[0]);
    }
  }, [searchParams]);

  useEffect(() => {
    if (categoryHeaderRef.current) {
      categoryHeaderRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeCategory]);

  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  const cld = useMemo(
    () =>
      new Cloudinary({
        cloud: { cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME! },
      }),
    [],
  );

  const mobileCategoryButtons = (
    <div className="flex flex-row flex-wrap gap-4 md:hidden mb-6">
      {CATEGORY_KEYS.map(key => {
        const { icon: Icon } = CATEGORY_CONFIG[key];
        return (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={clsx(
              "relative max-w-xs border-2 border-orangeAccent rounded-xl p-4 transition flex items-center gap-3 text-left cursor-active",
              activeCategory === key ? "bg-white shadow-md" : "hover:bg-white",
            )}
          >
            <Icon size={24} className="text-orangeAccent" />
          </button>
        );
      })}
    </div>
  );

  const desktopCategorySidebar = (
    <div className="hidden md:flex flex-col gap-4 sticky top-10 self-start h-fit">
      {CATEGORY_KEYS.map(key => {
        const { icon: Icon } = CATEGORY_CONFIG[key];
        return (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={clsx(
              "relative w-full border-2 border-orangeAccent rounded-xl p-4 transition flex items-center gap-3 text-left cursor-active",
              activeCategory === key ? "bg-white shadow-md" : "hover:bg-white",
            )}
          >
            <Icon size={24} className="text-orangeAccent" />
          </button>
        );
      })}
    </div>
  );

  if (isLoading) {
    return (
      <PageSection>
        <div className="flex flex-col md:flex-row gap-8">
          {mobileCategoryButtons}
          {desktopCategorySidebar}
          <div className="flex flex-col items-center justify-center text-center flex-1 mb-10 sm:mb-[300px]">
            <MoonLoader color="#A15000" />
          </div>
        </div>
      </PageSection>
    );
  }

  if (isError || !data) {
    return (
      <PageSection>
        <div className="flex flex-col md:flex-row gap-8">
          {mobileCategoryButtons}
          {desktopCategorySidebar}
          <div className="flex flex-col items-center justify-center text-center flex-1 gap-2">
            <TriangleAlert color="#D32027" size={64} />
            <Text
              size={16}
              text={
                error instanceof Error ? error.message : "Wystąpił problem z pobieraniem danych."
              }
              className="text-alertRed text-center"
            />
            <Text
              size={16}
              text="Proszę skontaktować się z serwisem RIP & Tear — service@rip-tear.com"
              className="text-alertRed text-center"
            />
          </div>
        </div>
      </PageSection>
    );
  }

  const realizations = data; // już w docelowym formacie
  const filtered = realizations.filter(r => r.category === activeCategory);

  const openModal = (index: number) => setOpenedIndex(index);
  const closeModal = () => setOpenedIndex(null);

  return (
    <PageSection>
      <div className="flex flex-col md:flex-row gap-8">
        {mobileCategoryButtons}
        {desktopCategorySidebar}

        <div className="flex-1 w-full">
          <div 
            ref={categoryHeaderRef}
            className="w-full border-2 border-orangeAccent rounded-xl p-4 mb-6 bg-white flex items-center gap-3 justify-between"
          >
            <div className="flex items-center gap-3">
              {(() => {
                const Icon = CATEGORY_CONFIG[activeCategory].icon;
                return Icon ? <Icon size={24} className="text-orangeAccent" /> : null;
              })()}
              <Text text={CATEGORY_CONFIG[activeCategory].title} size={18} />
            </div>
            <Link
              href={offers.find(o => o.value === activeCategory)?.href || "#"}
              className="bg-orangeAccent rounded-full text-white w-10 h-10 flex items-center justify-center shadow-md transition hover:scale-105 cursor-active"
              title="Przejdź do oferty"
            >
              <MoveUpRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-10 sm:mb-[100px]">
            {filtered.map(({ id, image }, index) => {
              const cldImg = cld
                .image(image.publicId)
                .format("auto")
                .quality("auto")
                .resize(auto().gravity(autoGravity()).width(800).height(600));

              return (
                <div
                  key={id}
                  className="border-2 border-orangeAccent group relative w-full aspect-[4/3] overflow-hidden rounded-xl cursor-active"
                  onClick={() => openModal(index)}
                >
                  <AdvancedImage
                    cldImg={cldImg}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              );
            })}

            {filtered.length === 0 && (
              <Text
                text="Brak realizacji w tej kategorii."
                className="text-greyVariant col-span-full"
              />
            )}
          </div>
        </div>
      </div>

      {openedIndex !== null && (
        <ImageModal
          src={buildImageSrc(filtered[openedIndex].image)}
          onClose={closeModal}
          categoryIcon={CATEGORY_CONFIG[activeCategory].icon}
          categoryTitle={CATEGORY_CONFIG[activeCategory].title}
          onPrev={openedIndex > 0 ? () => setOpenedIndex(openedIndex - 1) : undefined}
          onNext={
            openedIndex < filtered.length - 1 ? () => setOpenedIndex(openedIndex + 1) : undefined
          }
        />
      )}
    </PageSection>
  );
};

export default CategoryPreviewRealization;
