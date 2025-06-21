import HeroText from "@/components/molecules/hero-text/HeroText";
import BlogPreview from "@/components/organisms/blog-page/BlogPreview";
import { useGsapFadeInSections } from "@/hooks/useGsapSectionFadeIn";

const BlogTemplate = () => {
  useGsapFadeInSections();

  return (
    <div>
      <HeroText label="Najnowsze artykuły z naszego bloga" highlightWords={["artykuły"]} />
      <BlogPreview />
    </div>
  );
};

export default BlogTemplate;
