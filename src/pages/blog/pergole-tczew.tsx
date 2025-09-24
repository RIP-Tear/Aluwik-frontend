import { Navbar } from "@/components/molecules/navbar/Navbar";
import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../../app/globals.css";
import { Footer } from "@/components/molecules/footer/Footer";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import PergoleTarasoweTczew from "@/components/organisms/blog-page/posts/PergoleTarasoweTczew";

export default function PergoleTarasoweTczewPage() {
  return (
    <>
      <PageHead
        title="Pergole tarasowe Tczew z montażem | Pergole Tczew – ALUWIK"
        description="Pergole tarasowe Tczew z montażem od lokalnego producenta. Nowoczesne pergole Tczew – eleganckie, funkcjonalne i dopasowane do Twojego tarasu."
      />
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
