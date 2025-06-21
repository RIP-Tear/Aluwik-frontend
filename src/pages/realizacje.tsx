import { Navbar } from "@/components/molecules/navbar/Navbar";
import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../app/globals.css";
import LenisProvider from "@/utils/LenisProvider";
import { Footer } from "@/components/molecules/footer/Footer";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import RealizationTemplate from "@/templates/RealizationTemplate";
import ContactHero from "@/components/organisms/home-page/ContactHero";

export default function RealizationPage() {
  return (
    <>
      <PageHead
        title="Sztuczna co? | Strona w budowie..."
        description="Nasza witryna jest w trakcie budowy. Wróć wkrótce!"
      />
      <LenisProvider>
        <div className="hidden xl:block">
          <NavbarContact />
        </div>
        <Navbar />
        <RealizationTemplate />
        <ContactHero />
        <Footer />
      </LenisProvider>
    </>
  );
}
