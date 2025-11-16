import HeroDescription from "@/components/molecules/hero-descripton/HeroDescription";
import HeroText from "@/components/molecules/hero-text/HeroText";
import AboutPage from "@/components/organisms/about-page/AboutPage";

const AboutTemplate = () => {
  return (
    <div>
      <HeroText label="O firmie ALUWIK" highlightWords={["ALUWIK"]} />
      <HeroDescription
        image="/backgrounds/aboutUsBg.webp"
        text="Jesteśmy doświadczonym producentem stolarki aluminiowej z Tczewa obsługującym całe województwo pomorskie. Specjalizujemy się w produkcji okien aluminiowych, drzwi aluminiowych, fasad aluminiowych oraz ogrodów zimowych. Jako producent stolarki okiennej używamy wyłącznie najwyższej jakości profili aluminiowych marki Aluprof i Ponzio."
      />
      <AboutPage />
    </div>
  );
};

export default AboutTemplate;
