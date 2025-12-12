import { Navbar } from "@/components/molecules/navbar/Navbar";
import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../../app/globals.css";
import { Footer } from "@/components/molecules/footer/Footer";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import HolidayNavbar from "@/components/molecules/holiday-navbar/HolidayNavbar";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import SwietlikiDachowe from "@/components/organisms/blog-page/posts/SwietlikiDachowe";

export default function SwietlikiDachowePage() {
  return (
    <>
      <PageHead
        title="Świetliki dachowe Tczew - Blog | ALUWIK"
        description="Świetliki dachowe Tczew od lokalnego producenta. Nowoczesny design, trwałość i elegancja dopasowana do Twojego domu."
      />
      <HolidayNavbar />
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <SwietlikiDachowe />
      <ContactHero />
      <Footer />
    </>
  );
}
