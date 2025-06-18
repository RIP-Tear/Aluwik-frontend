import { Heading } from "@/components/atoms/heading/Heading";
import React from "react";

const MainText = () => {
  return (
    <div className="flex justify-center items-center mt-10 sm:mt-[100px]">
      <div className="max-w-[1200px]">
        <Heading
          label="Jesteśmy producentem aluminiowej
          stolarki okiennej"
          className="text-left px-5"
          bold
          size={64}
          highlightWords={["aluminiowej"]}
        />
      </div>
    </div>
  );
};

export default MainText;
