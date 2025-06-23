"use client";

import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../../app/globals.css";
import { Navbar } from "@/components/molecules/navbar/Navbar";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import { Footer } from "@/components/molecules/footer/Footer";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import AluminiumDoorsOffer from "@/components/organisms/offer-page/offers/AluminiumDoorsOffer";

export default function AluminiumDoorsPage() {
  return (
    <>
      <PageHead
        title="ALUWIK | Drzwi aluminiowe – nowoczesność i trwałość"
        description="Oferujemy aluminiowe drzwi zewnętrzne i wewnętrzne o wysokiej odporności, izolacyjności i nowoczesnym wyglądzie. Idealne do domów, biur i budynków komercyjnych. Zaufaj jakości profili Aluprof i Ponzio."
      />

      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <AluminiumDoorsOffer />
      <ContactHero />
      <Footer />
    </>
  );
}
