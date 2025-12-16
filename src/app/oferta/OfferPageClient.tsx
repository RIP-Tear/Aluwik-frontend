"use client";

import { Navbar } from "@/components/molecules/navbar/Navbar";
import { Footer } from "@/components/molecules/footer/Footer";
import OfferTemplate from "@/templates/OfferTemplate";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import HolidayNavbar from "@/components/molecules/holiday-navbar/HolidayNavbar";

export default function OfferPageClient() {
  return (
    <>
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
