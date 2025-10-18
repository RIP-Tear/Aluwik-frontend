import { Navbar } from "@/components/molecules/navbar/Navbar";
import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../../app/globals.css";
import { Footer } from "@/components/molecules/footer/Footer";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import OknaTczew from "@/components/organisms/blog-page/posts/OknaTczew";

export default function OknaTczewPage() {
  return (
    <>
      <PageHead
        title="Okna Tczew - Blog | ALUWIK"
        description="Okna Tczew od lokalnego producenta. Energooszczędne okna przesuwane Tczew – funkcjonalne, estetyczne i trwałe rozwiązania do Twojego domu."
      />
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <OknaTczew />
      <ContactHero />
      <Footer />
    </>
  );
}
