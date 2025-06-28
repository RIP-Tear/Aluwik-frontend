import { Logo } from "@/components/atoms/logo/Logo";
import { Text } from "@/components/atoms/text/Text";
import clsx from "clsx";
import { MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "@/components/atoms/button/Button";
import { SiFacebook, SiLinkedin, SiWhatsapp } from "react-icons/si";

const navLinks = [
  { href: "/", label: "Strona główna" },
  { href: "/oferta", label: "Oferta" },
  { href: "/realizacje", label: "Realizacje" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={clsx("px-5 py-2 mx-auto relative z-50 mt-5")}>
      <nav className="flex items-center justify-between w-full">
        {/* Logo */}
        <Link href="/" className="cursor-active">
          <Logo />
        </Link>

        {/* Desktop links */}
        <div className="hidden xl:flex gap-x-10">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link key={href} href={href}>
                <Text
                  text={label}
                  size={18}
                  className={clsx("cursor-active hover:text-orangeAccent", {
                    "underline font-bold": isActive,
                    "hover:underline": !isActive,
                  })}
                />
              </Link>
            );
          })}
        </div>

        <div className="xl:flex items-center justify-center hidden gap-x-10">
          <a
            href="https://www.facebook.com/profile.php?id=61577515076852"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-active transition hover:scale-105 hover:text-orangeAccent text-black"
            aria-label="Odwiedź nasz profil na Facebooku (otwiera się w nowej karcie)"
          >
            <SiFacebook size={32} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/aluwik-technologia-aluminiowa/?viewAsMember=true"
            className=" cursor-active transition hover:scale-105 hover:text-orangeAccent text-black"
            aria-label="Odwiedź nasz profil na LinkedIn (otwiera się w nowej karcie)"
          >
            <SiLinkedin size={32} />
          </a>
          <a
            href="https://wa.me/48609604571"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 cursor-active transition hover:scale-105 hover:text-orangeAccent text-black"
            aria-label="Skontaktuj się z nami przez WhatsApp (otwiera się w nowej karcie)"
          >
            <SiWhatsapp size={32} />
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="xl:hidden flex items-center justify-center w-10 h-10 transition cursor-active"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu dropdown */}

      <div
        className={clsx(
          "xl:hidden fixed top-20 inset-x-0 mx-auto py-4 px-6 flex flex-col gap-4",
          "shadow-lg bg-greyVariant z-60",
          "transition-all duration-300 ease-in-out",
          {
            "opacity-100 translate-y-0 pointer-events-auto": menuOpen,
            "opacity-0 -translate-y-2 pointer-events-none": !menuOpen,
          },
        )}
      >
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href}>
            <Text text={label} size={18} className="hover:underline cursor-active" />
          </Link>
        ))}

        <div className="border border-black/20" />
        <div className="mt-2 flex flex-col gap-4">
          <div className="w-fit">
            <Button
              label={"609 604 571"}
              icon={<Phone />}
              color="black"
              href="tel:609604571"
              size={14}
            />
          </div>
          <div className="w-fit">
            <Button
              label={"798 953 877"}
              icon={<Phone />}
              color="black"
              href="tel:798953877"
              size={14}
            />
          </div>
          <div className="w-fit">
            <Button
              label={"biuro.aluwik@gmail.com"}
              icon={<MessageCircle />}
              color="black"
              href="mailto:biuro.aluwik@gmail.com"
              size={14}
            />
          </div>
          <div className="w-fit">
            <Button
              label={"Aleja Solidarności 8, 83-110 Tczew"}
              icon={<MapPin />}
              color="black"
              blank
              size={14}
              href="https://www.google.com/maps?q=Aleja+Solidarności+8,+83-110+Tczew"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
