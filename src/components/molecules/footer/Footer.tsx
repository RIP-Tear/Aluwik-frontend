import { Home, FileText, Mail, ChevronRight, Bolt, CircleUserRound } from "lucide-react";
import { SiFacebook, SiLinkedin, SiTiktok } from "react-icons/si";
import Link from "next/link";
import clsx from "clsx";
import React, { useState } from "react";
import { Logo } from "@/components/atoms/logo/Logo";
import { Text } from "@/components/atoms/text/Text";
import styles from "./footer.module.css";
import Image from "next/image";

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
    <div className="w-full sm:max-w-[300px]">
      <button
        onClick={() => setOpen(prev => !prev)}
        className="w-full flex items-center justify-between mb-3 cursor-active group lg:cursor-default"
      >
        <Text text={title} bold size={24} noAnimation className="text-start" />
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
  icon,
  label,
  href,
  isExternal = false,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  isExternal?: boolean;
}) => {
  const Wrapper = isExternal ? "a" : Link;
  const wrapperProps = isExternal
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };

  return (
    <li className="flex items-center gap-2 mb-3">
      {icon}
      <Wrapper {...wrapperProps} className="cursor-active">
        <Text text={label} size={16} noAnimation className="text-softSync" />
      </Wrapper>
    </li>
  );
};

export const Footer = () => {
  return (
    <footer
      className={clsx(
        styles.footer,
        "bg-shadowMind text-softSync px-5 py-3 mb-3 rounded-3xl w-[98%] mx-auto relative z-50",
      )}
    >
      <div className="flex flex-col lg:flex-row gap-10 justify-between items-start">
        {/* Logo */}
        <div className="shrink-0 flex items-center justify-center h-full min-h-[64px]">
          <Link href="/" className="inline-block cursor-active">
            <Logo size={32} />
          </Link>
        </div>

        {/* Sections */}
        <Section title="Nawigacja">
          <ul>
            <ListItem icon={<Home size={24} />} label="Strona główna" href="/" />
            <ListItem icon={<FileText size={24} />} label="Blog" href="/blog" />
            <ListItem icon={<Bolt size={24} />} label="Usługi" href="/services" />
            <ListItem icon={<CircleUserRound size={24} />} label="Kontakt" href="/contact" />
          </ul>
        </Section>

        <Section title="Media społecznościowe">
          <ul>
            <ListItem
              icon={<SiLinkedin size={24} />}
              label="LinkedIn"
              href="https://www.linkedin.com/company/sztucznaco/posts/?feedView=all"
              isExternal
            />
            <ListItem
              icon={<SiFacebook size={24} />}
              label="Facebook"
              href="https://www.facebook.com/sztucznaco"
              isExternal
            />
            <ListItem
              icon={<SiTiktok size={24} />}
              label="TikTok"
              href="https://www.tiktok.com/@sztucznaco"
              isExternal
            />
          </ul>
        </Section>

        <Section title="Kontakt">
          <ul>
            <ListItem
              icon={<Mail size={24} />}
              label="pytania@sztucznaco.pl"
              href="mailto:pytania@sztucznaco.pl"
              isExternal
            />
          </ul>
        </Section>
      </div>

      {/* Bottom line */}
      <div className="mt-10 flex flex-col items-center text-xs gap-2 text-center">
        <Text
          text="© 2025 Sztuczna co? · Wszelkie prawa zastrzeżone · Projekt i realizacja:"
          size={16}
          noAnimation
          className="text-softSync"
        />
        <Link
          href="https://www.rip-tear.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline flex items-center gap-2 cursor-active"
        >
          <Text text="RIP & Tear" size={16} noAnimation className="text-softSync underline" />
          <Image
            src="https://www.rip-tear.com/favicon.ico"
            alt="RIP & Tear"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </footer>
  );
};
