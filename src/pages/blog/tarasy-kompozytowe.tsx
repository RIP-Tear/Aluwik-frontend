import { Navbar } from "@/components/molecules/navbar/Navbar";
import { PageHead } from "@/components/molecules/page-head/PageHead";
import "@/app/globals.css";
import { Footer } from "@/components/molecules/footer/Footer";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import TarasyKompozytowe from "@/components/organisms/blog-page/posts/TarasyKompozytowe";
import ContactHero from "@/components/organisms/home-page/ContactHero";

export default function TarasyKompozytowePage() {
  return (
    <>
      <PageHead
        title="Tarasy kompozytowe – trwałość i styl na lata - Blog | ALUWIK"
        description="Sprawdź, dlaczego tarasy kompozytowe to idealne połączenie estetyki i odporności na warunki atmosferyczne. Poznaj ich zalety i dowiedz się, jak stworzyć elegancki taras na lata."
      />
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <TarasyKompozytowe />
      <ContactHero />
      <Footer />
    </>
  );
}
