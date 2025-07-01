import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PageSection from "@/components/atoms/page-section/PageSection";
import { Heading } from "@/components/atoms/heading/Heading";
import { Text } from "@/components/atoms/text/Text";
import { Button } from "@/components/atoms/button/Button";
import { MoveUpRight } from "lucide-react";
import { offers } from "@/utils/mock/offers";

const CHANGE_INTERVAL = 3000;
const FADE_DURATION = 0.6;

const RealizationPreview = () => {
  const allImages = useMemo(() => offers.map(o => o.image), []);
  const [tiles, setTiles] = useState<string[]>(allImages.slice(0, 4));

  useEffect(() => {
    const interval = setInterval(() => {
      setTiles(prev => {
        const used = [...prev];
        const pool = allImages.filter(src => !used.includes(src));
        if (pool.length === 0) return prev;

        const tileIndex = Math.floor(Math.random() * prev.length);
        const newImage = pool[Math.floor(Math.random() * pool.length)];

        const updated = [...prev];
        updated[tileIndex] = newImage;
        return updated;
      });
    }, CHANGE_INTERVAL);

    return () => clearInterval(interval);
  }, [allImages]);

  return (
    <PageSection className="bg-black">
      <div className="text-white leading-relaxed py-5 sm:py-10">
        <div className="flex flex-col xl:flex-row gap-8 items-center">
          {/* Tekst */}
          <div className="flex-1 max-w-[800px]">
            <Heading
              label="Zapoznaj się z naszymi realizacjami"
              size={32}
              className="text-start mb-5 sm:mb-[50px]"
              as="h2"
              highlightWords={["realizacjami"]}
            />
            <div className="max-w-[600px]">
              <Text
                text={`Produkujemy stolarkę aluminiową i systemy okienno-drzwiowe w oparciu o profile firmy ALUPROF oraz PONZIO. 
Działamy kompleksowo – w zakres usług wchodzi doradztwo, produkcja, montaż oraz serwis. 
Możemy poszczycić się wieloletnim doświadczeniem, które przekłada się na wysoką jakość produktów oraz terminowe realizowanie zleceń. 
Dbamy o to, aby satysfakcja z wybranych rozwiązań szła w parze z atrakcyjnymi cenami.`}
                size={16}
              />
              <div className="w-fit mt-10 hidden sm:block">
                <Button label="Zobacz nasze realizacje" icon={<MoveUpRight />} href="/realizacje" />
              </div>
            </div>
          </div>

          {/* Mozaika 2x2 */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-[600px]">
            {tiles.map((src, index) => (
              <div
                key={index}
                className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border-2 border-orangeAccent"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: FADE_DURATION }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={src}
                      alt={`Realizacja ${index}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="sm:hidden block w-fit mt-10">
          <Button label="Zobacz nasze realizacje" icon={<MoveUpRight />} href="/realizacje" />
        </div>
      </div>
    </PageSection>
  );
};

export default RealizationPreview;
