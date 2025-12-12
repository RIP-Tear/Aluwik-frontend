"use client";

import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../../app/globals.css";
import { Navbar } from "@/components/molecules/navbar/Navbar";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import HolidayNavbar from "@/components/molecules/holiday-navbar/HolidayNavbar";
import { Footer } from "@/components/molecules/footer/Footer";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import RoofSkylightsOffer from "@/components/organisms/offer-page/offers/RoofSkylightsOffer";

export default function RoofSkylightsPage() {
  return (
    <>
      <PageHead
        title="ALUWIK | Świetliki dachowe – nowoczesność i trwałość"
        description="Oferujemy świetliki dachowe o wysokiej odporności, izolacyjności i nowoczesnym wyglądzie. Idealne do domów, biur i budynków komercyjnych. Zaufaj jakości profili Aluprof i Ponzio."
      />
      <HolidayNavbar />
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <RoofSkylightsOffer />
      <ContactHero />
      <Footer />
    </>
  );
}
