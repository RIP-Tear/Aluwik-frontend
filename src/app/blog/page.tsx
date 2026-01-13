import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog o stolarce aluminiowej i nowoczesnych rozwiązaniach",
  description:
    "Bądź na bieżąco z trendami i poradami dotyczącymi stolarki aluminiowej. Na blogu ALUWIK znajdziesz inspiracje, realizacje oraz wskazówki dotyczące okien, drzwi, fasad i ogrodów zimowych.",
  alternates: {
    canonical: "https://aluwik.pl/blog/",
  },
  openGraph: {
    title: "Blog ALUWIK - Wszystko o stolarce aluminiowej",
    description:
      "Porady, inspiracje i realizacje. Dowiedz się więcej o oknach, drzwiach, fasadach i ogrodach zimowych.",
    url: "https://aluwik.pl/blog/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog ALUWIK - Wszystko o stolarce aluminiowej",
    description:
      "Porady, inspiracje i realizacje dotyczące stolarki aluminiowej.",
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
