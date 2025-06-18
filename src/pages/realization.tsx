import { Navbar } from "@/components/molecules/navbar/Navbar";
import { PageHead } from "@/components/molecules/page-head/PageHead";
import "../app/globals.css";

export default function UnderConstructionPage() {
  return (
    <>
      <PageHead
        title="Sztuczna co? | Strona w budowie..."
        description="Nasza witryna jest w trakcie budowy. Wróć wkrótce!"
      />
      <Navbar />
    </>
  );
}
