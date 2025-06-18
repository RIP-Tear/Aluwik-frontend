"use client";

import { Navbar } from "@/components/molecules/navbar/Navbar";
import { PageHead } from "@/components/molecules/page-head/PageHead";
import LenisProvider from "@/utils/LenisProvider";
import "../app/globals.css";

import { Footer } from "@/components/molecules/footer/Footer";

export default function WindowDoorSystemsPage() {
  return (
    <>
      <PageHead
        title="Sztuczna co? | Blog"
        description="Czytaj najnowsze artykuły, inspiracje i aktualności od zespołu Sztuczna co?. Na naszym blogu znajdziesz porady, trendy i nowinki ze świata technologii, designu i sztucznej inteligencji."
      />
      <LenisProvider>
        <Navbar />
        <Footer />
      </LenisProvider>
    </>
  );
}
