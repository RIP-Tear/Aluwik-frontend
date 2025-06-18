import React from "react";
import clsx from "clsx";
import styles from "./line.module.css";

type LineProps = {
  vertical?: boolean;
  length?: string;
  className?: string;
};

const Line = ({ vertical = false, length, className }: LineProps) => {
  const directionClass = vertical ? styles.vertical : styles.horizontal;

  const style: React.CSSProperties = vertical
    ? { height: length ?? "100%" }
    : { width: length ?? "100%" };

  return (
    <div className={clsx(styles.wrapper, directionClass, className)} style={style}>
      <div className={styles.inner} />
    </div>
  );
};

export default Line;
