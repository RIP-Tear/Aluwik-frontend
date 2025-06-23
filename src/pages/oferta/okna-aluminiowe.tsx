"use client";

import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../../app/globals.css";
import { Navbar } from "@/components/molecules/navbar/Navbar";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import { Footer } from "@/components/molecules/footer/Footer";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import AluminiumWindowsOffer from "@/components/organisms/offer-page/offers/AluminiumWindowsOffer";

export default function AluminiumWindowsPage() {
  return (
    <>
      <PageHead
        title="ALUWIK | Okna aluminiowe – trwałość i nowoczesny design"
        description="Produkujemy energooszczędne i estetyczne okna aluminiowe na profilach Aluprof i Ponzio. Gwarancja trwałości, szczelności i eleganckiego wykończenia – idealne do nowoczesnych inwestycji."
      />
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <AluminiumWindowsOffer />
      <ContactHero />
      <Footer />
    </>
  );
}
