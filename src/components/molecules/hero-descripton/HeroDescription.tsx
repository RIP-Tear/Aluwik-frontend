import React from "react";
import Image from "next/image"; // ⬅️ brakujący import
import clsx from "clsx";
import PageSection from "@/components/atoms/page-section/PageSection";
import { Text } from "@/components/atoms/text/Text";

type HeroDescriptionProps = {
  text: string;
  image: string;
  className?: string;
};

const HeroDescription: React.FC<HeroDescriptionProps> = ({ text, className, image }) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 -z-10">
        <Image src={image} alt="Zdjęcie tła sekcji" fill className="object-cover" priority />
      </div>
      <PageSection className={clsx(className)}>
        <div className="sm:w-3/4 py-5 sm:py-10">
          <Text text={text} size={16} className="text-white" />
        </div>
      </PageSection>
    </div>
  );
};

export default HeroDescription;
