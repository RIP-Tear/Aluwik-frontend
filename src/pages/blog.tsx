"use client";

import { Navbar } from "@/components/molecules/navbar/Navbar";
import { PageHead } from "@/components/molecules/page-head/PageHead";
import LenisProvider from "@/utils/LenisProvider";
import "../app/globals.css";

import { Footer } from "@/components/molecules/footer/Footer";
import BlogTemplate from "@/templates/BlogTemplate";
import NavbarContact from "@/components/molecules/navbar-contact/NavbarContact";

export default function BlogPage() {
  return (
    <>
      <PageHead
        title="Sztuczna co? | Blog"
        description="Czytaj najnowsze artykuły, inspiracje i aktualności od zespołu Sztuczna co?. Na naszym blogu znajdziesz porady, trendy i nowinki ze świata technologii, designu i sztucznej inteligencji."
      />
      <LenisProvider>
        <div className="hidden xl:block">
          <NavbarContact />
        </div>
        <Navbar />
        <BlogTemplate />
        <Footer />
      </LenisProvider>
    </>
  );
}
