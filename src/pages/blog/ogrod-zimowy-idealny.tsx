import { Navbar } from "@/components/molecules/navbar/Navbar";
import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../../app/globals.css";
import { Footer } from "@/components/molecules/footer/Footer";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import OgrodZimowyIdealny from "@/components/organisms/blog-page/posts/OgrodZimowyIdealny";
import ContactHero from "@/components/organisms/home-page/ContactHero";

export default function OgrodZimowyIdealnyPage() {
  return (
    <>
      <PageHead
        title="Jak zorganizować idealny ogród zimowy? | Blog ALUWIK"
        description="Poznaj praktyczne wskazówki, jak zaprojektować i urządzić ogród zimowy. Dowiedz się, jakie materiały wybrać, jak zadbać o izolację i jak stworzyć przytulną przestrzeń przez cały rok."
      />
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <OgrodZimowyIdealny />
      <ContactHero />
      <Footer />
    </>
  );
}
