import { Button } from "@/components/atoms/button/Button";
import { Heading } from "@/components/atoms/heading/Heading";
import { Text } from "@/components/atoms/text/Text";
import { boxes } from "@/utils/mock/boxes";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const CHANGE_INTERVAL = 1500;
const FADE_DURATION = 0.5;

type FadeTile = {
  visible: string;
  incoming: string | null;
};

const RealizationPreview = () => {
  const allImages = useMemo(() => boxes.map(b => b.image), []);
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
    <div className="bg-black w-full py-10 sm:py-[100px] mt-10 sm:mt-[100px]">
      <div className="flex justify-center px-5">
        <div className="text-white leading-relaxed max-w-[1200px] w-full py-10">
          <div className="px-5 sm:flex gap-8">
            {/* Lewa kolumna */}
            <div className="flex-1 max-w-[800px]">
              <Heading
                label="Zapoznaj się z naszymi realizacjami"
                size={32}
                className="text-start mb-4 px-5"
                as="h2"
                highlightWords={["realizacjami"]}
              />
              <div className="max-w-[600px] px-5">
                <Text
                  text={`Produkujemy stolarkę aluminiową i systemy okienno-drzwiowe w oparciu o profile firmy ALUPROF oraz PONZIO. 
Działamy kompleksowo – w zakres usług wchodzi doradztwo, produkcja, montaż oraz serwis. 
Możemy poszczycić się wieloletnim doświadczeniem, które przekłada się na wysoką jakość produktów oraz terminowe realizowanie zleceń. 
Dbamy o to, aby satysfakcja z wybranych rozwiązań szła w parze z atrakcyjnymi cenami.`}
                  size={16}
                />
                <Button label="Zobacz nasze realizacje" icon={<MoveUpRight />} className="mt-10" />
              </div>
            </div>

            {/* Mozaika po prawej */}
            <div className="hidden sm:grid grid-cols-2 gap-4 w-full max-w-[600px]">
              {tiles.map((tile, i) => (
                <div key={i} className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                  {/* Widoczny obrazek */}
                  <Image
                    src={tile.visible}
                    alt={`Visible ${i}`}
                    fill
                    className="object-cover transition-opacity duration-700"
                  />

                  {/* Nadchodzący obrazek – fade-in */}
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
        </div>
      </div>
    </div>
  );
};

export default RealizationPreview;
