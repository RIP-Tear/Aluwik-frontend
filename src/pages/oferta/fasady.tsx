"use client";

import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../../app/globals.css";
import { Navbar } from "@/components/molecules/navbar/Navbar";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import { Footer } from "@/components/molecules/footer/Footer";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import FacadesOffer from "@/components/organisms/offer-page/offers/FacadesOffer";

export default function FacadesPage() {
  return (
    <>
      <PageHead
        title="Aluwik - Technologia aluminiowa"
        description="Odkryj nowoczesne podejście do tworzenia treści, stron internetowych i projektowania graficznego z wykorzystaniem sztucznej inteligencji. Sprawdź, co potrafimy w Sztuczna co?"
      />

      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <FacadesOffer />
      <ContactHero />
      <Footer />
    </>
  );
}
