import { Button } from "@/components/atoms/button/Button";
import { Heading } from "@/components/atoms/heading/Heading";
import PageSection from "@/components/atoms/page-section/PageSection";
import { contactBg } from "@/utils/images/contactBg";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const ContactHero = () => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 -z-10">
        <Image src={contactBg} alt="zdjęcie2" fill className="object-cover" priority />
      </div>
      <PageSection noMarginTop>
        <div className="text-white leading-relaxed py-10">
          <div className="max-w-[1200px] px-5 sm:flex">
            <div className="max-w-[800px]">
              <Heading
                label="Jesteś zainteresowany naszymi
usługami?"
                size={32}
                className=" text-start mb-4"
                as="h2"
                highlightWords={["usługami"]}
              />
            </div>
            <Button label="Przejdź do kontaktu" icon={<MoveUpRight />} className="mt-10" />
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export default ContactHero;
