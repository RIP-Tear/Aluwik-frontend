import { Button } from "@/components/atoms/button/Button";
import { Heading } from "@/components/atoms/heading/Heading";
import PageSection from "@/components/atoms/page-section/PageSection";
import { Text } from "@/components/atoms/text/Text";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/backgrounds/homeBg.webp"
          alt="O nas"
          fill
          className="object-cover"
          priority
        />
      </div>
      <PageSection className="text-white leading-relaxed py-5 sm:py-10">
        <Heading
          label={"Poznaj nas bliżej"}
          size={36}
          className="text-start mb-5 sm:mb-[50px]"
          as="h2"
          highlightWords={["bliżej"]}
        />
        <div className="max-w-[700px]">
          <Text
            text={`ALUWIK to doświadczony producent aluminiowej stolarki okiennej. 
Wyroby wyprodukowane w naszej firmie, zaopatrzone są we wszystkie potrzebne certyfikaty oraz aprobaty techniczne wymagane na polskim rynku budowlanym. 
Nasza siedziba znajduje się w Tczewie, jednak z powodzeniem obsługujemy klientów z całego kraju.`}
            size={16}
          />
          <Button
            label="Skontaktuj się"
            icon={<MoveUpRight />}
            className="mt-10"
            href="/kontakt/"
          />
        </div>
      </PageSection>
    </div>
  );
};

export default AboutUs;
