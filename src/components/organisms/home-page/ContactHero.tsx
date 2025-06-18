import { Button } from "@/components/atoms/button/Button";
import { Heading } from "@/components/atoms/heading/Heading";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const ContactHero = () => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 -z-10">
        <Image src="/img/zdjecie2.png" alt="zdjęcie2" fill className="object-cover" priority />
      </div>
      <div className="flex justify-center px-5">
        <div className="text-white leading-relaxed max-w-[1200px] w-full py-10">
          <div className="max-w-[1200px] px-5 sm:flex">
            <div className="max-w-[800px]">
              <Heading
                label="Jesteś zainteresowany naszymi
usługami?"
                size={32}
                className="uppercase text-start mb-4 px-5"
                as="h2"
              />
            </div>
            <Button label="Przejdź do kontaktu" icon={<MoveUpRight />} className="mt-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
