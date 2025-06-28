import React from "react";
import clsx from "clsx";
import Image from "next/image";

type LogoProps = {
  className?: string;
  white?: boolean;
};

export const Logo = ({ className, white = false }: LogoProps) => {
  const logoSrc = white ? "/logos/logoWhite.webp" : "/logos/logoBlack.webp";

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
