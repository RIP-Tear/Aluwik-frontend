"use client";

import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../../app/globals.css";
import { Navbar } from "@/components/molecules/navbar/Navbar";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import HolidayNavbar from "@/components/molecules/holiday-navbar/HolidayNavbar";
import { Footer } from "@/components/molecules/footer/Footer";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import SlidingWindowsOffer from "@/components/organisms/offer-page/offers/SlidingWindowsOffer";

export default function SlidingWindowsPage() {
  return (
    <>
      <PageHead
        title="ALUWIK | Okna przesuwne – więcej światła, mniej ograniczeń"
        description="Nowoczesne systemy okien przesuwnych z aluminium. Maksymalna ilość światła, płynność ruchu i oszczędność przestrzeni. Sprawdź rozwiązania idealne do domów, tarasów i ogrodów zimowych."
      />
      <HolidayNavbar />
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <SlidingWindowsOffer />
      <ContactHero />
      <Footer />
    </>
  );
}
