import { Navbar } from "@/components/molecules/navbar/Navbar";
import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../app/globals.css";
import { Footer } from "@/components/molecules/footer/Footer";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";
import TermsAndConditions from "@/components/organisms/terms-and-conditions-page/TermsAndConditions";
import ContactHero from "@/components/organisms/home-page/ContactHero";

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHead
        title="ALUWIK | Regulamin serwisu i warunki korzystania"
        description="Sprawdź regulamin aluwik.pl: zasady korzystania z serwisu, składanie zamówień, płatności, reklamacje, odstąpienie od umowy oraz dane kontaktowe."
      />
      <div className="hidden xl:block">
        <NavbarContact />
      </div>
      <Navbar />
      <TermsAndConditions />
      <ContactHero />
      <Footer />
    </>
  );
}
