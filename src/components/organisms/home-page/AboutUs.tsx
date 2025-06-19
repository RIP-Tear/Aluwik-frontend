import { Button } from "@/components/atoms/button/Button";
import { Heading } from "@/components/atoms/heading/Heading";
import { Text } from "@/components/atoms/text/Text";
import { aboutUsBg } from "@/utils/images/aboutUsBg";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 -z-10">
        <Image src={aboutUsBg} alt="zdjęcie1" fill className="object-cover" priority />
      </div>
      <div className="flex justify-center mt-10 sm:mt-[100px]">
        <div className="text-white leading-relaxed max-w-[1200px] w-full py-10">
          <Heading label={"Dowiedz się"} size={24} className="uppercase text-start px-5" as="h5" />
          <Heading
            label={"więcej o nas"}
            size={24}
            className="uppercase text-start mb-4 px-5"
            as="h5"
          />
          <div className="max-w-[700px] px-5">
            <Text
              text={`ALUWIK to doświadczony producent aluminiowej stolarki okiennej. 
Wyroby wyprodukowane w naszej firmie, zaopatrzone są we wszystkie potrzebne certyfikaty oraz aprobaty techniczne wymagane na polskim rynku budowlanym. 
Nasza siedziba znajduje się w Tczewie, jednak z powodzeniem obsługujemy klientów z całego kraju.`}
              size={16}
            />
            <Button label="Skontaktuj się" icon={<MoveUpRight />} className="mt-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
