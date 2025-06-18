import React, { JSX } from "react";
import clsx from "clsx";
import button from "./button.module.css";
import { Text } from "../text/Text";

type AllowedSizes = 14 | 16 | 18 | 24 | 32 | 64;

type ButtonProps = {
  label?: string;
  icon?: JSX.Element;
  size?: AllowedSizes;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
};

export const Button = ({
  label,
  icon,
  className,
  size = 18,
  style,
  onClick,
  href,
  type = "button",
}: ButtonProps) => {
  const content = (
    <span className="flex items-center justify-center border-2 border-black rounded-full bg-white hover:bg-black hover:text-white transition-colors duration-300">
      {label && <Text text={label} size={size} className="px-3" />}
      <span className={"border-2 p-2 border-black rounded-full text-white bg-black"}>{icon}</span>
    </span>
  );

  return href ? (
    <a href={href} style={style} className={clsx("cursor-active", className)}>
      {content}
    </a>
  ) : (
    <button
      style={style}
      onClick={onClick}
      type={type}
      className={clsx("cursor-active", className)}
    >
      {content}
    </button>
  );
};
