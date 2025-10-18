import { Navbar } from "@/components/molecules/navbar/Navbar";
import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../../app/globals.css";
import { Footer } from "@/components/molecules/footer/Footer";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import ContactHero from "@/components/organisms/home-page/ContactHero";
import DrzwiAluminioweTczew from "@/components/organisms/blog-page/posts/DrzwiAluminioweTczew";

export default function DrzwiAluminioweTczewPage() {
  return (
    <>
      <PageHead
        title="Drzwi aluminiowe Tczew - Blog | ALUWIK"
        description="Drzwi aluminiowe Tczew i drzwi przesuwane Tczew od lokalnego producenta. Nowoczesny design, trwałość i elegancja dopasowana do Twojego domu."
      />
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <DrzwiAluminioweTczew />
      <ContactHero />
      <Footer />
    </>
  );
}
