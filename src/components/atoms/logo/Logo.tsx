import React from "react";
import clsx from "clsx";
import Image from "next/image";

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={clsx("w-[160px] sm:w-[200px]", className)}>
      <Image
        src="/img/logo-text.png"
        alt="logo"
        width={200}
        height={200}
        className="-mt-[10px] w-full h-auto"
      />
    </div>
  );
};
