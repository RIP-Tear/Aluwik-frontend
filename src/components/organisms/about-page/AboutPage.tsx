import { Button } from "@/components/atoms/button/Button";
import { Heading } from "@/components/atoms/heading/Heading";
import PageSection from "@/components/atoms/page-section/PageSection";
import { Text } from "@/components/atoms/text/Text";
import { Award, Building2, Clock, MapPin, Shield, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <>
      {/* Main Content */}
      <PageSection className="py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Heading
              label="Nasza historia i doświadczenie"
              size={36}
              className="text-start mb-6"
              as="h1"
              highlightWords={["doświadczenie"]}
            />
            <div className="space-y-4">
              <Text
                text="ALUWIK to profesjonalny producent stolarki aluminiowej z siedzibą w Tczewie. Jako doświadczony producent okien aluminiowych, drzwi aluminiowych oraz systemów fasadowych, obsługujemy klientów w całym województwie pomorskim i w całej Polsce."
                size={16}
                className="leading-relaxed"
              />
              <Text
                text="Nasza oferta obejmuje kompleksową produkcję stolarki okiennej i drzwiowej z aluminium, w tym okna Tczew, pergole Tczew, ogrody zimowe Tczew oraz zabudowy aluminiowe. Wykorzystujemy wyłącznie certyfikowane profile aluminiowe konstrukcyjne marki Aluprof i Ponzio."
                size={16}
                className="leading-relaxed"
              />
              <Text
                text="Jako producent ślusarki aluminiowej z wieloletnim doświadczeniem, gwarantujemy najwyższą jakość wykonania i terminowość realizacji. Wszystkie nasze wyroby z aluminium posiadają wymagane certyfikaty i aprobaty techniczne."
                size={16}
                className="leading-relaxed"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-[170px] border-2 border-orangeAccent rounded-xl overflow-hidden">
              <Image
                src="/img/okna-aluminiowe.webp"
                alt="Okna aluminiowe ALUWIK - wysokiej jakości stolarka okienna"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[170px] border-2 border-orangeAccent rounded-xl overflow-hidden">
              <Image
                src="/img/drzwi-aluminiowe.webp"
                alt="Drzwi aluminiowe ALUWIK - bezpieczne i eleganckie"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[170px] border-2 border-orangeAccent rounded-xl overflow-hidden">
              <Image
                src="/img/fasady.webp"
                alt="Fasady aluminiowe ALUWIK - nowoczesne systemy fasadowe"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[170px] border-2 border-orangeAccent rounded-xl overflow-hidden">
              <Image
                src="/img/ogrody-zimowe.webp"
                alt="Ogrody zimowe ALUWIK - konstrukcje aluminiowe do relaksu"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[170px] border-2 border-orangeAccent rounded-xl overflow-hidden">
              <Image
                src="/img/swietliki-dachowe.webp"
                alt="Świetliki dachowe ALUWIK - naturalne doświetlenie"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[170px] border-2 border-orangeAccent rounded-xl overflow-hidden">
              <Image
                src="/img/zadaszenia-tarasow.webp"
                alt="Zadaszenia tarasów ALUWIK - ochrona i komfort"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </PageSection>

      {/* Features Grid - Full Width Section */}
      <div className="w-full bg-black py-10">
        <div className="w-full max-w-[1200px] mx-auto px-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orangeAccent/20 rounded-full mb-4">
                <Award className="w-8 h-8 text-orangeAccent" />
              </div>
              <Heading label="Certyfikowana jakość" size={18} as="h3" className="mb-3 text-white" />
              <Text
                text="Jako producent stolarki aluminiowej posiadamy wszystkie wymagane certyfikaty i aprobaty techniczne, gwarantując najwyższą jakość systemu aluminiowego."
                size={14}
                className="text-white"
              />
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orangeAccent/20 rounded-full mb-4">
                <Building2 className="w-8 h-8 text-orangeAccent" />
              </div>
              <Heading
                label="Nowoczesne technologie"
                size={18}
                as="h3"
                className="mb-3 text-white"
              />
              <Text
                text="Wykorzystujemy najnowsze technologie produkcji stolarki okiennej i wysokiej jakości profile aluminiowe konstrukcyjne Aluprof i Ponzio."
                size={14}
                className="text-white"
              />
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orangeAccent/20 rounded-full mb-4">
                <Users className="w-8 h-8 text-orangeAccent" />
              </div>
              <Heading
                label="Indywidualne podejście"
                size={18}
                as="h3"
                className="mb-3 text-white"
              />
              <Text
                text="Każdy projekt traktujemy indywidualnie, dostosowując rozwiązania do specyficznych potrzeb klienta."
                size={14}
                className="text-white"
              />
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orangeAccent/20 rounded-full mb-4">
                <Shield className="w-8 h-8 text-orangeAccent" />
              </div>
              <Heading label="Gwarancja i serwis" size={18} as="h3" className="mb-3 text-white" />
              <Text
                text="Oferujemy kompleksową gwarancję na wszystkie produkty oraz profesjonalny serwis posprzedażowy."
                size={14}
                className="text-white"
              />
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orangeAccent/20 rounded-full mb-4">
                <Clock className="w-8 h-8 text-orangeAccent" />
              </div>
              <Heading
                label="Terminowość realizacji"
                size={18}
                as="h3"
                className="mb-3 text-white"
              />
              <Text
                text="Dbamy o terminową realizację zleceń, zachowując najwyższą jakość wykonania każdego produktu."
                size={14}
                className="text-white"
              />
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orangeAccent/20 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-orangeAccent" />
              </div>
              <Heading label="Zasięg ogólnopolski" size={18} as="h3" className="mb-3 text-white" />
              <Text
                text="Z siedzibą w Tczewie obsługujemy klientów w całym województwie pomorskim i Polsce, oferując montaż stolarki otworowej."
                size={14}
                className="text-white"
              />
            </div>
          </div>
        </div>
      </div>

      <PageSection className="py-10 mb-10">
        {/* Location and Contact CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Heading
              label="Odwiedź nas w Tczewie"
              size={36}
              className="text-start mb-6"
              as="h2"
              highlightWords={["Tczewie"]}
            />
            <div className="space-y-4 mb-8">
              <Text
                text="Nasze biuro i zakład produkcyjny znajdują się w Tczewie przy Alei Solidarności. Jako doświadczony producent stolarki okiennej i drzwiowej prowdzimy tutaj pełną produkcję wyrobów z aluminium - od projektowania po gotowy produkt."
                size={16}
                className="leading-relaxed"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                label={"Aleja Solidarności 8, 83-110 Tczew"}
                icon={<MapPin />}
                blank
                size={14}
                href="https://www.google.com/maps?q=Aleja+Solidarności+8,+83-110+Tczew"
              />
            </div>
          </div>
          <div className="relative h-[300px] border-2 border-orangeAccent rounded-xl overflow-hidden">
            <Image
              src="/img/siedziba.webp"
              alt="Siedziba ALUWIK - nowoczesne rozwiązania aluminiowe"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </PageSection>
    </>
  );
};

export default AboutPage;
