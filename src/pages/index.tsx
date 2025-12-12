"use client";

import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../app/globals.css";
import { Navbar } from "@/components/molecules/navbar/Navbar";
import HomeTemplate from "@/templates/HomeTemplate";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import { Footer } from "@/components/molecules/footer/Footer";
import HolidayNavbar from "@/components/molecules/holiday-navbar/HolidayNavbar";

export default function HomePage() {
  return (
    <>
      <PageHead
        title="ALUWIK | Producent stolarki aluminiowej"
        description="Aluwik to doświadczony producent okien, drzwi, fasad i ogrodów zimowych z aluminium. Realizujemy nowoczesne i trwałe rozwiązania dla domu i biznesu. Zaufaj jakości profili Aluprof i Ponzio."
      />
      <HolidayNavbar />
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <HomeTemplate />
      <Footer />
    </>
  );
}
