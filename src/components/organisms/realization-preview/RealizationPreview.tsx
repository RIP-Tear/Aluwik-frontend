import { Button } from "@/components/atoms/button/Button";
import { Heading } from "@/components/atoms/heading/Heading";
import { Text } from "@/components/atoms/text/Text";
import { MoveUpRight } from "lucide-react";
import React from "react";

const RealizationPreview = () => {
  return (
    <div className="bg-black w-full">
      {" "}
      <div className="flex justify-center px-5 mt-10 sm:mt-[100px]">
        <div className="text-white leading-relaxed max-w-[1200px] w-full py-10">
          <div className="max-w-[1200px] px-5 sm:flex">
            <div className="max-w-[800px]">
              <Heading
                label="Zapoznaj się z naszymi
realizacjami"
                size={32}
                className="text-start mb-4 px-5"
                as="h2"
              />
                        <div className="max-w-[600px] px-5">
            <Text
              text={`
Produkujemy stolarkę aluminiową i systemy okienno-drzwiowe w oparciu o profile firmy ALUPROF oraz PONZIO. 
Działamy kompleksowo – w zakres usług wchodzi doradztwo, produkcja, montaż oraz serwis. 
Możemy poszczycić się wieloletnim doświadczeniem, które przekłada się na wysoką jakość produktów stolarki okiennej aluminiowej oraz terminowe realizowanie zleceń. 
Dbamy o to, aby satysfakcja z wybranych rozwiązań szła w parze z atrakcyjnymi cenami.`}
              size={16}
            />
            <Button label="Zobacz nasze realizacje" icon={<MoveUpRight />} className="mt-10" />
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealizationPreview;
