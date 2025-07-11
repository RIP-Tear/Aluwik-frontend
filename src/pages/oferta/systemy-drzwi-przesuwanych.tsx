"use client";

import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../../app/globals.css";
import { Navbar } from "@/components/molecules/navbar/Navbar";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import { Footer } from "@/components/molecules/footer/Footer";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import SlidingDoorSystemsOffer from "@/components/organisms/offer-page/offers/SlidingDoorSystemsOffer";

export default function SlidingDoorSystemsPage() {
  return (
    <>
      <PageHead
        title="ALUWIK | Systemy drzwi przesuwnych"
        description="Nowoczesne i trwałe systemy drzwi przesuwnych od ALUWIK. Oferujemy konstrukcje o wysokiej izolacyjności cieplnej i estetyce – idealne do tarasów, balkonów i ogrodów zimowych."
      />
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <SlidingDoorSystemsOffer />
      <ContactHero />
      <Footer />
    </>
  );
}
