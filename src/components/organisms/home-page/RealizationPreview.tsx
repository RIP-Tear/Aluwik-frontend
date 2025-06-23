import { Button } from "@/components/atoms/button/Button";
import { Heading } from "@/components/atoms/heading/Heading";
import { Text } from "@/components/atoms/text/Text";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import PageSection from "@/components/atoms/page-section/PageSection";
import { offers } from "@/utils/mock/offers";

const CHANGE_INTERVAL = 1500;
const FADE_DURATION = 0.5;

type FadeTile = {
  visible: string;
  incoming: string | null;
};

const RealizationPreview = () => {
  const allImages = useMemo(() => offers.map(b => b.image), []);
  const [tiles, setTiles] = useState<FadeTile[]>(
    allImages.slice(0, 4).map(src => ({ visible: src, incoming: null })),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTiles(prev => {
        const used = prev.map(t => t.visible);
        const pool = allImages.filter(src => !used.includes(src));
        if (pool.length === 0) return prev;

        const tileIndex = Math.floor(Math.random() * prev.length);
        const newImage = pool[Math.floor(Math.random() * pool.length)];

        return prev.map((t, i) =>
          i === tileIndex ? { visible: t.visible, incoming: newImage } : t,
        );
      });

      setTimeout(() => {
        setTiles(prev =>
          prev.map(tile => (tile.incoming ? { visible: tile.incoming, incoming: null } : tile)),
        );
      }, FADE_DURATION * 1000);
    }, CHANGE_INTERVAL);

    return () => clearInterval(interval);
  }, [allImages]);

  return (
    <PageSection className="bg-black ">
      <div className="text-white leading-relaxed py-10">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Tekst po lewej */}
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
          <div className="grid grid-cols-2 gap-4 w-full max-w-[600px] mt-8 sm:mt-0">
            {tiles.map((tile, i) => (
              <div key={i} className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                {/* Widoczny obrazek */}
                <Image
                  src={tile.visible}
                  alt={`Visible ${i}`}
                  fill
                  className="object-cover transition-opacity duration-700"
                />

                {/* Nadchodzący obrazek */}
                {tile.incoming && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: FADE_DURATION }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={tile.incoming}
                      alt={`Incoming ${i}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                )}
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
