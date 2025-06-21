import { Button } from "@/components/atoms/button/Button";
import { Heading } from "@/components/atoms/heading/Heading";
import PageSection from "@/components/atoms/page-section/PageSection";
import { Text } from "@/components/atoms/text/Text";
import HeroText from "@/components/molecules/hero-text/HeroText";
import { blogPosts } from "@/utils/mock/blogPosts";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

type RelatedPostsProps = {
  currentSlug: string;
};

const RelatedPosts = ({ currentSlug }: RelatedPostsProps) => {
  const filteredPosts = blogPosts.filter(post => post.href !== currentSlug).slice(0, 3);

  return (
    <div className="space-y-4">
      <Heading label="Zobacz inne posty" as="h4" size={18} className="text-orangeAccent" />
      <div className="grid gap-4">
        {filteredPosts.map(post => (
          <div
            key={post.href}
            className="relative flex flex-col border border-orangeAccent bg-white rounded-xl overflow-hidden hover:shadow-md transition"
          >
            <div className="p-4 flex-1 flex flex-col justify-between">
              <Text
                as="span"
                text={post.title}
                size={14}
                className="text-orangeAccent leading-snug mb-3"
              />
              <div className="flex justify-end mt-4">
                <Button
                  label="Czytaj"
                  color="black"
                  size={14}
                  icon={<MoveUpRight size={14} />}
                  href={`/blog/${post.href}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const OgrodZimowyIdealny = () => {
  return (
    <>
      <HeroText label="Jak zorganizować idealny ogród zimowy?" highlightWords={["ogród"]} />
      <PageSection className="bg-black text-white">
        <div className="flex flex-col lg:flex-row gap-10 mb-10 sm:mb-[100px]">
          {/* Lewa strona – główny artykuł */}
          <div className="lg:w-3/4 space-y-6 leading-relaxed my-10">
            <Heading
              label="Czym jest ogród zimowy?"
              as="h2"
              size={24}
              className="text-orangeAccent"
            />
            <Text
              text="Ogród zimowy to wyjątkowa przestrzeń, która pozwala cieszyć się światłem, zielenią i
              kontaktem z naturą niezależnie od pory roku. Stanowi nie tylko efektowne przedłużenie
              domu, ale także praktyczne miejsce do codziennego użytku – od strefy relaksu, przez
              domowe biuro, aż po przestrzeń do uprawy roślin."
              size={16}
            />

            <Heading
              label="Projektowanie idealnego ogrodu"
              as="h2"
              size={24}
              className="text-orangeAccent"
            />
            <Text
              text="Kluczem do stworzenia idealnego ogrodu zimowego jest odpowiedni projekt – dopasowany
              zarówno do architektury budynku, jak i indywidualnych oczekiwań domowników. Istotne są
              tutaj m.in. właściwy dobór szyb (najczęściej zespolone, z powłoką niskoemisyjną),
              solidne profile aluminiowe zapewniające trwałość i estetykę, a także skuteczna
              wentylacja i systemy grzewcze, które umożliwią komfortowe użytkowanie przestrzeni
              nawet w mroźne dni."
              size={16}
            />

            <Heading label="Aranżacja wnętrza" as="h2" size={24} className="text-orangeAccent" />
            <Text
              text="Przemyślany wystrój, naturalne materiały i dobrze dobrana roślinność sprawiają, że
              ogród zimowy staje się przytulnym azylem – miejscem, w którym można wypić poranną
              kawę, popracować w ciszy czy spędzić wieczór z rodziną. Warto również zaplanować
              odpowiednie oświetlenie, które pozwoli korzystać z przestrzeni także po zmroku."
              size={16}
            />

            <Heading label="Zalety inwestycji" as="h2" size={24} className="text-orangeAccent" />
            <Text
              text="Inwestycja w ogród zimowy to nie tylko zysk estetyczny i funkcjonalny, ale także
              realne podniesienie wartości nieruchomości. Dobrze zaprojektowana i wykonana
              konstrukcja zwiększa metraż użytkowy domu, poprawia bilans energetyczny oraz wpływa
              pozytywnie na samopoczucie domowników."
              size={16}
            />

            <Heading
              label="Dlaczego warto z nami?"
              as="h2"
              size={24}
              className="text-orangeAccent"
            />
            <Text
              text="W naszej firmie pomagamy kompleksowo przejść przez cały proces – od koncepcji, przez
              projekt, aż po wykonanie. Korzystamy wyłącznie z najwyższej jakości materiałów i
              sprawdzonych technologii, które gwarantują trwałość i satysfakcję z użytkowania na
              lata. Jeśli marzysz o ogrodzie zimowym, który zachwyca formą i funkcjonalnością –
              jesteś we właściwym miejscu."
              size={16}
            />
          </div>

          {/* Prawa strona – zdjęcie + przekierowania */}
          <div className="lg:w-1/4 flex flex-col gap-6 mt-10">
            <div className="relative w-full h-[250px] rounded-xl overflow-hidden border-2 border-orangeAccent">
              <Image
                src="/img/ogrody-zimowe.jpg"
                alt="Ogród zimowy"
                fill
                className="object-cover"
              />
            </div>
            <div className="border border-orangeAccent" />

            <RelatedPosts currentSlug="ogrod-zimowy-idealny" />
          </div>
        </div>
      </PageSection>
    </>
  );
};

export default OgrodZimowyIdealny;
