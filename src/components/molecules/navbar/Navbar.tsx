import { Logo } from "@/components/atoms/logo/Logo";
import { Text } from "@/components/atoms/text/Text";
import clsx from "clsx";
import { Bolt, CircleUserRound, FileText, House, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./navbar.module.css";
import { Button } from "@/components/atoms/button/Button";
import { SiFacebook, SiLinkedin, SiWhatsapp } from "react-icons/si";

const navLinks = [
  { href: "/", label: "Strona główna", icon: House },
  { href: "/offer", label: "Oferta", icon: CircleUserRound },
  { href: "/realization", label: "Realizacje", icon: Bolt },
  { href: "/blog", label: "Blog", icon: FileText },
  { href: "/contact", label: "Kontakt", icon: CircleUserRound },
];

export const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={clsx("px-5 py-2w-[98%] mx-auto relative z-50 mt-5")}>
      <nav className="flex items-center justify-between w-full">
        {/* Logo */}
        <Link href="/" className="cursor-active">
          <Logo />
        </Link>

        {/* Desktop links */}
        <div className="hidden xl:flex gap-x-10">
          {navLinks.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link href={href}>
                <Text text={label} size={18} className="hover:underline cursor-active" />
              </Link>
            );
          })}
        </div>

        <div className="xl:flex items-center justify-center hidden gap-x-10">
          <Link href="https://www.facebook.com/profile.php?id=61577515076852" className="cursor-active">
            <SiFacebook color={"#000"} size={32} />
          </Link>
          <Link href="https://www.linkedin.com/company/aluwik-technologia-aluminiowa/?viewAsMember=true" className=" cursor-active">
            <SiLinkedin color={"#000"} size={32} />
          </Link>
          <a
            href="https://wa.me/48609604571"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-black cursor-active"
          >
            <SiWhatsapp color="#000" size={32} />
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="xl:hidden flex items-center justify-center w-10 h-10 rounded-md transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu dropdown */}

      <div
        className={clsx(
          styles.navbarSide,
          "xl:hidden absolute top-full left-0 w-full bg-shadowMind mt-2 rounded-[40px] py-4 px-6 flex flex-col gap-4 transition-all duration-300 ease-in-out",
          {
            "opacity-100 translate-y-0 pointer-events-auto": menuOpen,
            "opacity-0 -translate-y-2 pointer-events-none": !menuOpen,
          },
        )}
      >
        {navLinks.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={clsx("text-base")}
            >
              <Icon className={isActive ? "text-neroMint" : "text-current"} />
              <Text text={label} className="text-softSync" />
            </Link>
          );
        })}
      </div>
    </header>
  );
};
