"use client";

import { Navbar } from "@/components/molecules/navbar/Navbar";
import { PageHead } from "@/components/molecules/page-head/PageHead";
import LenisProvider from "@/utils/LenisProvider";
import "../app/globals.css";

import { Footer } from "@/components/molecules/footer/Footer";
import OfferTemplate from "@/templates/OfferTemplate";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import ContactHero from "@/components/organisms/home-page/ContactHero";

export default function OfferPage() {
  return (
    <>
      <PageHead
        title="Sztuczna co? | Usługi"
        description="Skorzystaj z naszych usług: tworzymy strony internetowe, projektujemy UI/UX, wdrażamy sztuczną inteligencję i prowadzimy kampanie marketingowe. Sprawdź, jak możemy rozwinąć Twój biznes online."
      />
      <LenisProvider>
        <div className="hidden xl:block">
          <NavbarContact />
        </div>
        <Navbar />
        <OfferTemplate />
        <ContactHero />
        <Footer />
      </LenisProvider>
    </>
  );
}
