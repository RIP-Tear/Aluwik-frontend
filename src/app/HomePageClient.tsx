"use client";

import { Navbar } from "@/components/molecules/navbar/Navbar";
import HomeTemplate from "@/templates/HomeTemplate";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import { Footer } from "@/components/molecules/footer/Footer";
import HolidayNavbar from "@/components/molecules/holiday-navbar/HolidayNavbar";

export default function HomePageClient() {
  return (
    <>
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
