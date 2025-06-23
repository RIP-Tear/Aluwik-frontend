import React, { JSX } from "react";
import clsx from "clsx";
import { Text } from "../text/Text";
import { MoonLoader } from "react-spinners";

type AllowedSizes = 14 | 16 | 18 | 24 | 32 | 64;

type ButtonProps = {
  label?: string;
  color?: string;
  icon?: JSX.Element;
  size?: AllowedSizes;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  disabled?: boolean;
};

export const Button = ({
  label,
  icon,
  className,
  size = 18,
  style,
  color = "orangeAccent",
  onClick,
  href,
  type = "button",
  loading = false,
  disabled = false,
}: ButtonProps) => {
  const isDisabled = loading || disabled;
  const content = (
    <span
      className={`flex flex-nowrap items-center justify-center border-2 border-${color} text-black rounded-full bg-white hover:bg-black hover:text-white transition-colors duration-300 whitespace-nowrap`}
    >
      {label && <Text text={label} size={size} className="px-3" />}
      <span className={`border-2 p-2 rounded-full text-white bg-${color}`}>
        {loading ? (
          <div className="flex items-center justify-center">
            <MoonLoader size={size} color="#ffffff" loading />
          </div>
        ) : (
          icon
        )}
      </span>
    </span>
  );

  return href ? (
    <a
      href={href}
      style={style}
      className={clsx("cursor-active block w-fit", className)}
      rel="noopener noreferrer"
    >
      {content}
    </a>
  ) : (
    <button
      style={style}
      onClick={isDisabled ? undefined : onClick}
      type={type}
      className={clsx("cursor-active", className)}
      disabled={loading}
    >
      {content}
    </button>
  );
};
