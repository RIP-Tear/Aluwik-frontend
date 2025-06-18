import { Navbar } from "@/components/molecules/navbar/Navbar";
import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../app/globals.css";
import ContactTemplate from "@/templates/ContactTemplate";
import { Footer } from "@/components/molecules/footer/Footer";

export default function ContactPage() {
  return (
    <>
      <PageHead
        title="Sztuczna co? | Kontact"
        description="Skontaktuj się z zespołem Sztuczna co? – chętnie odpowiemy na pytania dotyczące naszych usług, współpracy lub mediów społecznościowych. Jesteśmy dostępni mailowo, telefonicznie oraz na platformach takich jak Instagram, LinkedIn czy TikTok."
      />
      <Navbar />
      <ContactTemplate />
      <Footer />
    </>
  );
}
