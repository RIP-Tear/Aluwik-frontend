import React from "react";
import { useGsapFadeInSections } from "@/hooks/useGsapSectionFadeIn";
import { Heading } from "@/components/atoms/heading/Heading";

const HomeTemplate = () => {
  useGsapFadeInSections();

  return (
    <>
      <div className="flex justify-center items-center mt-10 sm:mt-[100px]">
        <div className="max-w-[1200px]">
          <Heading
            label="Jesteśmy producentem aluminiowej
      stolarki okiennej"
            className="text-left"
            bold
            size={64}
          />
        </div>
      </div>
    </>
  );
};

export default HomeTemplate;
