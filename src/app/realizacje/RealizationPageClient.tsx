"use client";

import { Navbar } from "@/components/molecules/navbar/Navbar";
import { Footer } from "@/components/molecules/footer/Footer";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import RealizationTemplate from "@/templates/RealizationTemplate";
import ContactHero from "@/components/organisms/home-page/ContactHero";

export default function RealizationPageClient() {
  return (
    <>
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <RealizationTemplate />
      <ContactHero />
      <Footer />
    </>
  );
}
