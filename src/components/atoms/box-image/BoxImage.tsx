import React from "react";
import clsx from "clsx";
import Image from "next/image";
import styles from "./boxImage.module.css";

type BoxImageProps = {
  src: string;
  className?: string;
  size?: number;
};

export const BoxImage = ({ src, className, size = 200 }: BoxImageProps) => {
  return (
    <div
      className={clsx(styles.wrapper, className)}
      style={{
        width: size,
        height: size,
      }}
    >
      <div className={styles.inner}>
        <Image src={src} alt="" fill className={styles.image} sizes={`${size}px`} />
      </div>
    </div>
  );
};
