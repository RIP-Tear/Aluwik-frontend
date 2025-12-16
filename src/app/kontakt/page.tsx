import type { Metadata } from "next";
import { Navbar } from "@/components/molecules/navbar/Navbar";
import ContactTemplate from "@/templates/ContactTemplate";
import { Footer } from "@/components/molecules/footer/Footer";
import HolidayNavbar from "@/components/molecules/holiday-navbar/HolidayNavbar";

export const metadata: Metadata = {
  title: "Kontakt - ALUWIK stolarka aluminiowa Tczew",
  description:
    "Skontaktuj się z ALUWIK - producentem stolarki aluminiowej w Tczewie. Telefon: 609 604 571, 798 953 877. Adres: Aleja Solidarności 8, 83-110 Tczew. Zapytaj o wycenę!",
  alternates: {
    canonical: "/kontakt/",
  },
};

export default function ContactPage() {
  return (
    <>
      <HolidayNavbar />
      <Navbar />
      <ContactTemplate />
      <Footer />
    </>
  );
}
