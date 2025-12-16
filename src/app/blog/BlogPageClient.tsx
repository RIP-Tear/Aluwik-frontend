"use client";

import { Navbar } from "@/components/molecules/navbar/Navbar";
import { Footer } from "@/components/molecules/footer/Footer";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import BlogTemplate from "@/templates/BlogTemplate";
import HolidayNavbar from "@/components/molecules/holiday-navbar/HolidayNavbar";

export default function BlogPageClient() {
  return (
    <>
      <HolidayNavbar />
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <BlogTemplate />
      <ContactHero />
      <Footer />
    </>
  );
}
