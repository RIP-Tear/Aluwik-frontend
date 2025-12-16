"use client";

import { Navbar } from "@/components/molecules/navbar/Navbar";
import HomeTemplate from "@/templates/HomeTemplate";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import { Footer } from "@/components/molecules/footer/Footer";

export default function HomePageClient() {
  return (
    <>
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <HomeTemplate />
      <Footer />
    </>
  );
}
