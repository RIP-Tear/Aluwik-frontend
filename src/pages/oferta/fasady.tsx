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
        title="ALUWIK | Fasady – nowoczesna elewacja budynku"
        description="Nowoczesne fasady aluminiowe ALUWIK to połączenie estetyki, trwałości i energooszczędności. Tworzymy elewacje dopasowane do budynków komercyjnych, biurowców i inwestycji premium. Systemy Aluprof i Ponzio."
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
