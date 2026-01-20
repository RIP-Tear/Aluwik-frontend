"use client";

import { ChevronRight } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si";
import Link from "next/link";
import clsx from "clsx";
import React, { useState } from "react";
import { Logo } from "@/components/atoms/logo/Logo";
import { Text } from "@/components/atoms/text/Text";
import Image from "next/image";
import PageSection from "@/components/atoms/page-section/PageSection";
import { offers } from "@/utils/mock/offers";

const Section = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="w-full lg:max-w-[300px]">
      <button
        onClick={() => setOpen(prev => !prev)}
        className="w-full flex items-center justify-between mb-3 cursor-active group lg:cursor-default"
      >
        <Text text={title} bold size={24} className="text-start" />
        <ChevronRight
          size={20}
          className={clsx("transition-transform duration-300 lg:hidden", open && "rotate-90")}
        />
      </button>
      <div
        className={clsx(
          "overflow-hidden transition-all duration-300 ease-in-out lg:block",
          open ? "max-h-[400px]" : "max-h-0 lg:max-h-none",
        )}
      >
        {children}
      </div>
    </div>
  );
};

const ListItem = ({
  label,
  href,
  isExternal = false,
}: {
  label: string;
  href: string;
  isExternal?: boolean;
}) => {
  const Wrapper = isExternal ? "a" : Link;
  const wrapperProps = isExternal ? { href } : { href };

  return (
    <li className="flex items-center gap-2 mb-3">
      <Wrapper {...wrapperProps} className="cursor-active">
        <Text text={label} size={14} className="text-greyVariant hover:underline" />
      </Wrapper>
    </li>
  );
};

export const Footer = () => {
  return (
    <footer
      className={clsx(
        "bg-black text-white py-10 mx-auto relative z-50 flex justify-center items-center",
      )}
    >
      <PageSection noMarginTop>
        <div className="lg:flex justify-between">
          <div className="shrink-0 flex items-center justify-center lg:justify-start h-full min-h-[64px]">
            <Link href="/" className="inline-block cursor-active">
              <Logo white />
            </Link>
          </div>
          <div className="text-center lg:text-end mt-2 lg:mt-0">
            <Text text={"Śledź nasze social media"} size={16} />
            <div className="flex justify-center lg:justify-end gap-4 mt-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61577515076852"
                className="cursor-active transition hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Odwiedź nasz profil na Facebooku (otwiera się w nowej karcie)"
              >
                <SiFacebook size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/aluwik_pl/"
                className="cursor-active transition hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Odwiedź nasz profil na Instagramie (otwiera się w nowej karcie)"
              >
                <SiInstagram size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/aluwik-technologia-aluminiowa/?viewAsMember=true"
                className=" cursor-active transition hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Odwiedź nasz profil na LinkedIn (otwiera się w nowej karcie)"
              >
                <SiLinkedin size={24} />
              </Link>
              <Link
                href="https://wa.me/48609604571"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-black cursor-active transition hover:scale-105"
                aria-label="Skontaktuj się z nami przez WhatsApp (otwiera się w nowej karcie)"
              >
                <SiWhatsapp size={24} color="#fff" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border border-white/20 w-full my-10" />
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-start">
          {/* Sections */}
          <Section title="Nawigacja">
            <ul>
              <ListItem label="Strona główna" href="/" />
              <ListItem label="Oferta" href="/oferta" />
              <ListItem label="O firmie" href="/o-firmie/" />
              <ListItem label="Realizacja" href="/realizacje/" />
              <ListItem label="Blog" href="/blog" />
              <ListItem label="Kontakt" href="/kontakt/" />
            </ul>
          </Section>

          <Section title="Oferta">
            <ul>
              {offers.map(offer => (
                <ListItem key={offer.href} label={offer.title} href={offer.href} isExternal />
              ))}
            </ul>
          </Section>

          <Section title="Kontakt">
            <ul>
              <ListItem label="609 604 571" href="tel:609604571" isExternal />
              <ListItem label="886 347 417" href="tel:886347417" isExternal />
              <ListItem label="biuro@aluwik.pl" href="mailto:biuro@aluwik.pl" isExternal />
              <ListItem
                label="Aleja Solidarności 8, 83-110 Tczew"
                href="https://www.google.com/maps?q=Aleja+Solidarności+8,+83-110+Tczew"
              />
            </ul>
          </Section>

          <Section title="Informacje">
            <ul>
              <ListItem label="Regulamin" href="/regulamin/" />
              <ListItem label="Polityka prywatności" href="/polityka-prywatnosci/" />
            </ul>
          </Section>
        </div>
        <div className="mt-10 flex justify-center items-center text-xs gap-2 text-center">
          <Text
            text="© 2025 ALUWIK · Wszelkie prawa zastrzeżone"
            size={14}
            className="text-greyVariant"
          />{" "}
          | <Text text={"Realizacja"} size={14} />
          <Link
            href="https://www.rip-tear.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-2 cursor-active"
          >
            <Image
              src="https://www.rip-tear.com/favicon.ico"
              alt="RIP & Tear"
              width={30}
              height={30}
            />
            <Text text="RIP & Tear" size={14} className="text-greyVariant" />
          </Link>
        </div>
      </PageSection>
    </footer>
  );
};
