import { Heading } from "@/components/atoms/heading/Heading";
import React from "react";

const OfferCards = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-10 sm:mt-[100px]">
        <div className="max-w-[1200px] w-full">
          <Heading label="Oferta dopasowana" className="text-left px-5" bold size={32} as="h2" />
          <Heading
            label="
do twoich potrzeb"
            className="text-left px-5"
            bold
            size={32}
            as="h2"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 sm:mt-[100px]">
        <div className="max-w-[1200px] w-full">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default OfferCards;
