import { Navbar } from "@/components/molecules/navbar/Navbar";
import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../../app/globals.css";
import { Footer } from "@/components/molecules/footer/Footer";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import HolidayNavbar from "@/components/molecules/holiday-navbar/HolidayNavbar";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import ZabudowyAluminiowe from "@/components/organisms/blog-page/posts/ZabudowyAluminiowe";

export default function ZabudowyAluminiowePage() {
  return (
    <>
      <PageHead
        title="Zabudowy aluminiowe Tczew - Blog | ALUWIK"
        description="Zabudowy aluminiowe Tczew od lokalnego producenta. Nowoczesny design, trwałość i elegancja dopasowana do Twojego domu."
      />
      <HolidayNavbar />
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <ZabudowyAluminiowe />
      <ContactHero />
      <Footer />
    </>
  );
}
