"use client";

import { Navbar } from "@/components/molecules/navbar/Navbar";
import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../app/globals.css";

import { Footer } from "@/components/molecules/footer/Footer";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import BlogTemplate from "@/templates/BlogTemplate";
import HolidayNavbar from "@/components/molecules/holiday-navbar/HolidayNavbar";

export default function BlogPage() {
  return (
    <>
      <PageHead
        title="ALUWIK | Blog o stolarce aluminiowej i nowoczesnych rozwiązaniach"
        description="Bądź na bieżąco z trendami i poradami dotyczącymi stolarki aluminiowej. Na blogu ALUWIK znajdziesz inspiracje, realizacje oraz wskazówki dotyczące okien, drzwi, fasad i ogrodów zimowych."
      />
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
