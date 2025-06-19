import { Heading } from "@/components/atoms/heading/Heading";
import React from "react";

type HeroTextProps = {
  label: string;
  highlightWords?: string[];
};

const HeroText: React.FC<HeroTextProps> = ({ label, highlightWords }) => {
  return (
    <div className="flex justify-center items-center mt-10 sm:mt-[100px]">
      <div className="w-full max-w-[1200px] px-5">
        <Heading label={label} className="text-left" size={64} highlightWords={highlightWords} />
      </div>
    </div>
  );
};

export default HeroText;
