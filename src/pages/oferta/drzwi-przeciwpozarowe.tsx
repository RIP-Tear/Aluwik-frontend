"use client";

import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../../app/globals.css";
import { Navbar } from "@/components/molecules/navbar/Navbar";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import HolidayNavbar from "@/components/molecules/holiday-navbar/HolidayNavbar";
import { Footer } from "@/components/molecules/footer/Footer";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import FireDoorsOffer from "@/components/organisms/offer-page/offers/FireDoorsOffer";

export default function FireDoorsPage() {
  return (
    <>
      <PageHead
        title="ALUWIK | Drzwi przeciwpożarowe – bezpieczeństwo i certyfikaty"
        description="Drzwi przeciwpożarowe ALUWIK zapewniają skuteczną ochronę życia i mienia. Spełniają normy EI30, EI60, EI120, są odporne na ogień i dym, idealne do obiektów publicznych i komercyjnych. Zaufaj sprawdzonym rozwiązaniom aluminiowym."
      />
      <HolidayNavbar />
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <FireDoorsOffer />
      <ContactHero />
      <Footer />
    </>
  );
}
