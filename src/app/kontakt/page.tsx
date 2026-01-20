import type { Metadata } from "next";
import { Navbar } from "@/components/molecules/navbar/Navbar";
import ContactTemplate from "@/templates/ContactTemplate";
import { Footer } from "@/components/molecules/footer/Footer";
// // import HolidayNavbar from "@/components/molecules/holiday-navbar/HolidayNavbar";

export const metadata: Metadata = {
  title: "Kontakt - ALUWIK stolarka aluminiowa Tczew",
  description:
    "Skontaktuj się z ALUWIK - producentem stolarki aluminiowej w Tczewie. Telefon: 609 604 571, 886 347 417. Adres: Aleja Solidarności 8, 83-110 Tczew. Zapytaj o wycenę!",
  alternates: {
    canonical: "https://aluwik.pl/kontakt/",
  },
  openGraph: {
    title: "Kontakt - ALUWIK Tczew",
    description:
      "Telefon: 609 604 571, 886 347 417. Adres: Aleja Solidarności 8, 83-110 Tczew.",
    url: "https://aluwik.pl/kontakt/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kontakt - ALUWIK Tczew",
    description: "Skontaktuj się z nami: 609 604 571, Tczew",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* <HolidayNavbar /> */}
      <Navbar />
      <ContactTemplate />
      <Footer />
    </>
  );
}
