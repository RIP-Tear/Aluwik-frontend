import { Heading } from "@/components/atoms/heading/Heading";
import PageSection from "@/components/atoms/page-section/PageSection";
import { Text } from "@/components/atoms/text/Text";
import React from "react";
import { SiFacebook, SiLinkedin, SiWhatsapp } from "react-icons/si";

const InformationContact = () => {
  return (
    <PageSection className="bg-black py-10 text-white">
      {/* GRID INFO */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">
        {/* KONTAKT */}
        <div className="flex flex-col space-y-2">
          <Heading label="Kontakt" as="h2" size={24} className="text-orangeAccent" />
          <Text text="609 604 571" size={16} />
          <Text text="798 953 877" size={16} />
          <Text text="biuro.aluwik@gmail.com" size={16} />
        </div>

        {/* GODZINY OTWARCIA */}
        <div className="flex flex-col space-y-2">
          <Heading label="Godziny otwarcia" as="h2" size={24} className="text-orangeAccent" />
          <Text text="Pon–Pt: 07:00–16:00" size={16} />
          <Text text="Sobota: 09:00–14:00" size={16} />
          <Text text="Niedziela: nieczynne" size={16} />
        </div>

        {/* ADRES */}
        <div className="flex flex-col space-y-2">
          <Heading label="Adres" as="h2" size={24} className="text-orangeAccent" />
          <Text text="Aleja Solidarności 8" size={16} />
          <Text text="83-110 Tczew" size={16} />
        </div>

        {/* SOCIAL MEDIA */}
        <div className="flex flex-col space-y-2">
          <Heading label="Social Media" as="h2" size={24} className="text-orangeAccent" />
          <a
            className="flex items-center gap-2 cursor-active hover:underline"
            href="https://www.facebook.com/profile.php?id=61577515076852"
            target="_blank"
          >
            <SiFacebook size={24} />
            <Text text="Facebook" size={16} />
          </a>
          <a
            className="flex items-center gap-2 cursor-active hover:underline"
            href="https://www.linkedin.com/company/aluwik-technologia-aluminiowa/?viewAsMember=true"
            target="_blank"
          >
            <SiLinkedin size={24} />
            <Text text="LinkedIn" size={16} />
          </a>
          <a
            className="flex items-center gap-2 cursor-active hover:underline"
            href="https://wa.me/48609604571"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiWhatsapp size={24} />
            <Text text="WhatsApp" size={16} />
          </a>
        </div>
      </div>

      {/* MAPA GOOGLE */}
      <div className="w-full h-[300px] rounded-xl overflow-hidden border-2 border-orangeAccent mt-5 sm:mt-[50px]">
        <iframe
          title="Mapa dojazdu"
          src="https://www.google.com/maps?q=Aleja+Solidarności+8,+83-110+Tczew&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        />
      </div>
    </PageSection>
  );
};

export default InformationContact;
