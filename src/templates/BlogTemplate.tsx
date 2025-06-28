import HeroDescription from "@/components/molecules/hero-descripton/HeroDescription";
import HeroText from "@/components/molecules/hero-text/HeroText";
import BlogPreview from "@/components/organisms/blog-page/BlogPreview";

const BlogTemplate = () => {
  return (
    <div>
      <HeroText label="Najnowsze artykuły z naszego bloga" highlightWords={["artykuły"]} />
      <HeroDescription
        image="/backgrounds/blogBg.webp"
        text="Poznaj nasz blog – wiedza, inspiracje i nowości
Na blogu dzielimy się doświadczeniem, trendami i praktycznymi poradami z zakresu stolarki aluminiowej, architektury oraz nowoczesnych rozwiązań budowlanych. Znajdziesz tu również aktualności z życia firmy i przykłady zastosowań naszych produktów w codziennych realizacjach."
      />
      <BlogPreview />
    </div>
  );
};

export default BlogTemplate;
