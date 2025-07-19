import { Heading } from "@/components/atoms/heading/Heading";
import PageSection from "@/components/atoms/page-section/PageSection";
import { Text } from "@/components/atoms/text/Text";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { SiFacebook, SiLinkedin, SiWhatsapp } from "react-icons/si";

const InformationContact = () => {
  return (
    <PageSection noMarginTop className="bg-black py-10 text-white">
      {/* GRID INFO */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">
        {/* KONTAKT */}
        <div className="flex flex-col space-y-2">
          <Heading label="Kontakt" as="h2" size={24} className="text-orangeAccent" />
          <Link
            href="tel:609604571"
            className="cursor-active hover:underline flex items-center gap-2"
          >
            <Phone size={18} />
            <Text text="609 604 571" size={16} />
          </Link>
          <Link
            href="tel:798953877"
            className="cursor-active hover:underline flex items-center gap-2"
          >
            <Phone size={18} />
            <Text text="798 953 877" size={16} />
          </Link>
          <Link
            href="mailto:biuro.aluwik@gmail.com"
            className="cursor-active hover:underline flex items-center gap-2"
          >
            <Mail size={16} />
            <Text text="biuro.aluwik@gmail.com" size={16} />
          </Link>
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
          <Link
            href="https://www.google.com/maps?q=Aleja+Solidarności+8,+83-110+Tczew"
            className="cursor-active hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <Text text="Aleja Solidarności 8" size={16} />
            </div>
            <Text text="83-110 Tczew" size={16} />
          </Link>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="flex flex-col space-y-2">
          <Heading label="Social Media" as="h2" size={24} className="text-orangeAccent" />
          <Link
            className="flex items-center gap-2 cursor-active hover:underline"
            href="https://www.facebook.com/profile.php?id=61577515076852"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Odwiedź nasz profil na Facebooku (otwiera się w nowej karcie)"
          >
            <SiFacebook size={18} />
            <Text text="Facebook" size={16} />
          </Link>
          <Link
            className="flex items-center gap-2 cursor-active hover:underline"
            href="https://www.linkedin.com/company/aluwik-technologia-aluminiowa/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Odwiedź nasz profil na LinkedIn (otwiera się w nowej karcie)"
          >
            <SiLinkedin size={18} />
            <Text text="LinkedIn" size={16} />
          </Link>
          <Link
            className="flex items-center gap-2 cursor-active hover:underline"
            href="https://wa.me/48609604571"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Skontaktuj się z nami przez WhatsApp (otwiera się w nowej karcie)"
          >
            <SiWhatsapp size={18} />
            <Text text="WhatsApp" size={16} />
          </Link>
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
