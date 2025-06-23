import { Navbar } from "@/components/molecules/navbar/Navbar";
import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../../app/globals.css";
import { Footer } from "@/components/molecules/footer/Footer";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import DzwiPrzeciwpozarowe from "@/components/organisms/blog-page/posts/DzwiPrzeciwpozarowe";
import ContactHero from "@/components/organisms/home-page/ContactHero";

export default function ContactPage() {
  return (
    <>
      <PageHead
        title="Drzwi przeciwpożarowe – bezpieczeństwo w nowoczesnej formie | Blog ALUWIK"
        description="Dowiedz się, dlaczego drzwi przeciwpożarowe są kluczowym elementem zabezpieczeń w nowoczesnym budownictwie. Sprawdź, jak łączymy estetykę z funkcjonalnością i odpornością na ogień."
      />

      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <DzwiPrzeciwpozarowe />
      <ContactHero />
      <Footer />
    </>
  );
}
