"use client";

import { PageHead } from "@/components/molecules/page-head/PageHead";
import LenisProvider from "@/utils/LenisProvider";
import "../app/globals.css";
import { Navbar } from "@/components/molecules/navbar/Navbar";
import HomeTemplate from "@/templates/HomeTemplate";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";

export default function HomePage() {
  return (
    <>
      <PageHead
        title="Aluwik - Technologia aluminiowa"
        description="Odkryj nowoczesne podejście do tworzenia treści, stron internetowych i projektowania graficznego z wykorzystaniem sztucznej inteligencji. Sprawdź, co potrafimy w Sztuczna co?"
      />
      <LenisProvider>
        <NavbarContact />
        <Navbar />
        <HomeTemplate />

        {/* <Footer /> */}
      </LenisProvider>
    </>
  );
}
