import { Navbar } from "@/components/molecules/navbar/Navbar";
import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../../app/globals.css";
import { Footer } from "@/components/molecules/footer/Footer";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import HolidayNavbar from "@/components/molecules/holiday-navbar/HolidayNavbar";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import PergoleTarasoweTczew from "@/components/organisms/blog-page/posts/PergoleTarasoweTczew";

export default function PergoleTarasoweTczewPage() {
  return (
    <>
      <PageHead
        title="Pergole tarasowe Tczew z montażem - Blog | ALUWIK"
        description="Pergole tarasowe Tczew z montażem od lokalnego producenta. Nowoczesne pergole Tczew – eleganckie, funkcjonalne i dopasowane do Twojego tarasu."
      />
      <HolidayNavbar />
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <PergoleTarasoweTczew />
      <ContactHero />
      <Footer />
    </>
  );
}
