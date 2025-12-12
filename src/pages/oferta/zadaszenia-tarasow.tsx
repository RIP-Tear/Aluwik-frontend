"use client";

import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../../app/globals.css";
import { Navbar } from "@/components/molecules/navbar/Navbar";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import HolidayNavbar from "@/components/molecules/holiday-navbar/HolidayNavbar";
import { Footer } from "@/components/molecules/footer/Footer";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import TerraceRoofingOffer from "@/components/organisms/offer-page/offers/TerraceRoofingOffer";

export default function TerraceRoofingPage() {
  return (
    <>
      <PageHead
        title="ALUWIK | Zadaszenia tarasów"
        description="Nowoczesne i trwałe zadaszenia tarasów od ALUWIK – idealne połączenie designu i funkcjonalności. Ochrona przed deszczem i słońcem, dopasowana do Twojej przestrzeni."
      />
      <HolidayNavbar />
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <TerraceRoofingOffer />
      <ContactHero />
      <Footer />
    </>
  );
}
