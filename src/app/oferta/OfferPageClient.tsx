"use client";

import { Navbar } from "@/components/molecules/navbar/Navbar";
import { Footer } from "@/components/molecules/footer/Footer";
import OfferTemplate from "@/templates/OfferTemplate";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import ContactHero from "@/components/organisms/home-page/ContactHero";

export default function OfferPageClient() {
  return (
    <>
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
