"use client";

import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../../app/globals.css";
import { Navbar } from "@/components/molecules/navbar/Navbar";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import HolidayNavbar from "@/components/molecules/holiday-navbar/HolidayNavbar";
import { Footer } from "@/components/molecules/footer/Footer";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import InteriorStructuresOffer from "@/components/organisms/offer-page/offers/InteriorStructuresOffer";

export default function InteriorStructuresPage() {
  return (
    <>
      <PageHead
        title="ALUWIK | Zabudowania wewnętrzne – nowoczesność i trwałość"
        description="Oferujemy zabudowania wewnętrzne o wysokiej odporności, izolacyjności i nowoczesnym wyglądzie. Idealne do domów, biur i budynków komercyjnych. Zaufaj jakości profili Aluprof i Ponzio."
      />

      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <InteriorStructuresOffer />
      <ContactHero />
      <Footer />
    </>
  );
}
