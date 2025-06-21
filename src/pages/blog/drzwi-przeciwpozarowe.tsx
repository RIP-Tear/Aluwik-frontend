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
        title="Sztuczna co? | Kontact"
        description="Skontaktuj się z zespołem Sztuczna co? – chętnie odpowiemy na pytania dotyczące naszych usług, współpracy lub mediów społecznościowych. Jesteśmy dostępni mailowo, telefonicznie oraz na platformach takich jak Instagram, LinkedIn czy TikTok."
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
