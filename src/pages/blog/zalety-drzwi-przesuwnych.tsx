import { Navbar } from "@/components/molecules/navbar/Navbar";
import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../../app/globals.css";
import { Footer } from "@/components/molecules/footer/Footer";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import ZaletyDzwiPrzesuwanych from "@/components/organisms/blog-page/posts/ZaletyDzwiPrzesuwanych";
import ContactHero from "@/components/organisms/home-page/ContactHero";

export default function ContactPage() {
  return (
    <>
      <PageHead
        title="5 zalet drzwi przesuwnych w nowoczesnych wnętrzach | Blog ALUWIK"
        description="Poznaj największe atuty drzwi przesuwnych – oszczędność miejsca, elegancki design i funkcjonalność. Sprawdź, dlaczego to idealne rozwiązanie do współczesnych domów i mieszkań."
      />
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <ZaletyDzwiPrzesuwanych />
      <ContactHero />
      <Footer />
    </>
  );
}
