"use client";

import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../../app/globals.css";
import { Navbar } from "@/components/molecules/navbar/Navbar";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import { Footer } from "@/components/molecules/footer/Footer";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import WinterGardensOffer from "@/components/organisms/offer-page/offers/WinterGardensOffer";

export default function WinterGardensPage() {
  return (
    <>
      <PageHead
        title="ALUWIK | Ogrody zimowe – komfort przez cały rok"
        description="Tworzymy eleganckie i funkcjonalne ogrody zimowe z aluminium, które zapewniają naturalne światło i przestrzeń do relaksu. Konstrukcje o wysokiej izolacyjności cieplnej, odporne na warunki atmosferyczne."
      />
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <WinterGardensOffer />
      <ContactHero />
      <Footer />
    </>
  );
}
