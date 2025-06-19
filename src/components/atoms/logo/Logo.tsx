import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { logoWhite } from "@/utils/images/logoWhite";
import { logoBlack } from "@/utils/images/logoBlack";

type LogoProps = {
  className?: string;
  white?: boolean;
};

export const Logo = ({ className, white = false }: LogoProps) => {
  const logoSrc = white ? logoWhite : logoBlack;

  return (
    <div className={clsx("w-[160px] sm:w-[200px]", className)}>
      <Image
        src={logoSrc}
        alt="logo"
        width={200}
        height={200}
        className="-mt-[10px] w-full h-auto"
      />
    </div>
  );
};
