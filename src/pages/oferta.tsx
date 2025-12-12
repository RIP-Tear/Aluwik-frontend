"use client";

import { Navbar } from "@/components/molecules/navbar/Navbar";
import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../app/globals.css";

import { Footer } from "@/components/molecules/footer/Footer";
import OfferTemplate from "@/templates/OfferTemplate";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import HolidayNavbar from "@/components/molecules/holiday-navbar/HolidayNavbar";
import ContactHero from "@/components/organisms/home-page/ContactHero";

export default function OfferPage() {
  return (
    <>
      <PageHead
        title="ALUWIK | Oferta aluminiowych okien, drzwi, fasad i ogrodów zimowych"
        description="Poznaj ofertę ALUWIK – nowoczesne systemy aluminiowe dla domu i firmy. Specjalizujemy się w produkcji drzwi, okien, fasad i ogrodów zimowych z profili Aluprof i Ponzio. Jakość, trwałość i estetyka."
      />
      <HolidayNavbar />
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <OfferTemplate />
      <ContactHero />
      <Footer />
    </>
  );
}
