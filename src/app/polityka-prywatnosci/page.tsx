import { Navbar } from "@/components/molecules/navbar/Navbar";
import { Footer } from "@/components/molecules/footer/Footer";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import PrivacyPolicy from "@/components/organisms/privacy-policy-page/PrivacyPolicy";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import type { Metadata } from "next";
import HolidayNavbar from "@/components/molecules/holiday-navbar/HolidayNavbar";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Polityka prywatności serwisu ALUWIK. Informacje o przetwarzaniu danych osobowych zgodnie z RODO.",
  alternates: {
    canonical: "/polityka-prywatnosci/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <HolidayNavbar />
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <PrivacyPolicy />
      <ContactHero />
      <Footer />
    </>
  );
}
