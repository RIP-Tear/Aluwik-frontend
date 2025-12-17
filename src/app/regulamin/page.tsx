import { Navbar } from "@/components/molecules/navbar/Navbar";
import { Footer } from "@/components/molecules/footer/Footer";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import TermsAndConditions from "@/components/organisms/terms-and-conditions-page/TermsAndConditions";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import type { Metadata } from "next";
import HolidayNavbar from "@/components/molecules/holiday-navbar/HolidayNavbar";

export const metadata: Metadata = {
  title: "Regulamin",
  description: "Regulamin świadczenia usług przez firmę ALUWIK - producenta stolarki aluminiowej.",
  alternates: {
    canonical: "https://aluwik.pl/regulamin/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <HolidayNavbar />
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <TermsAndConditions />
      <ContactHero />
      <Footer />
    </>
  );
}
