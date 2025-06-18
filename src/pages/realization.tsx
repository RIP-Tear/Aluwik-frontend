import { Navbar } from "@/components/molecules/navbar/Navbar";
import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../app/globals.css";
import LenisProvider from "@/utils/LenisProvider";
import { Footer } from "@/components/molecules/footer/Footer";

export default function RealizationPage() {
  return (
    <>
      <PageHead
        title="Sztuczna co? | Strona w budowie..."
        description="Nasza witryna jest w trakcie budowy. Wróć wkrótce!"
      />
      <LenisProvider>
        <Navbar />
        <Footer />
      </LenisProvider>
    </>
  );
}
