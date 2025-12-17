import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog o stolarce aluminiowej i nowoczesnych rozwiązaniach",
  description:
    "Bądź na bieżąco z trendami i poradami dotyczącymi stolarki aluminiowej. Na blogu ALUWIK znajdziesz inspiracje, realizacje oraz wskazówki dotyczące okien, drzwi, fasad i ogrodów zimowych.",
  alternates: {
    canonical: "https://aluwik.pl/blog/",
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
