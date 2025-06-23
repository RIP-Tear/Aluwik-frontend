"use client";

import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../../app/globals.css";
import { Navbar } from "@/components/molecules/navbar/Navbar";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import { Footer } from "@/components/molecules/footer/Footer";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import FirePartitionWallsOffer from "@/components/organisms/offer-page/offers/FirePartitionWallsOffer";

export default function FirePartitionWallsPage() {
  return (
    <>
      <PageHead
        title="ALUWIK | Ściany oddzielenia przeciwpożarowego"
        description="Bezpieczne i certyfikowane ściany oddzielenia przeciwpożarowego od ALUWIK. Tworzymy konstrukcje aluminiowe EI30, EI60 i EI120 zgodne z normami pożarowymi. Sprawdź nasze realizacje!"
      />

      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <FirePartitionWallsOffer />
      <ContactHero />
      <Footer />
    </>
  );
}
