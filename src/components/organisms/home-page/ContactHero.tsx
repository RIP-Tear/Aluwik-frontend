import { Button } from "@/components/atoms/button/Button";
import { Heading } from "@/components/atoms/heading/Heading";
import PageSection from "@/components/atoms/page-section/PageSection";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const ContactHero = () => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 -z-10">
        <Image
          src="../backgrounds/contactBg.webp"
          alt="Kontakt"
          fill
          className="object-cover"
          priority
        />
      </div>
      <PageSection noMarginTop>
        <div className="text-white leading-relaxed py-5 sm:py-10">
          <div className="sm:flex justify-between">
            <Heading
              label="Jesteś zainteresowany naszymi
usługami?"
              size={32}
              className=" text-start mb-4"
              as="h2"
              highlightWords={["usługami"]}
            />
            <div className="sm:w-[400px] sm:flex justify-end">
              <div className="w-fit mt-10">
                <Button label="Idź do kontaktu" icon={<MoveUpRight />} href="/kontakt" />
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </div>
  );
};

export default ContactHero;
