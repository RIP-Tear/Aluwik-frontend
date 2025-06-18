import React from "react";
import clsx from "clsx";
import styles from "./box.module.css";

type BoxProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
};

export const Box = ({ children, className, onClick, href }: BoxProps) => {
  const isClickable = typeof onClick === "function" || typeof href === "string";
  const Tag = href ? "a" : "div";

  const isExternal =
    href?.startsWith("http") || href?.startsWith("mailto") || href?.startsWith("tel");

  return (
    <Tag
      className={clsx(
        styles.wrapper,
        "block transform",
        isClickable && "transition hover:scale-[1.05] active:scale-[1] cursor-active",
      )}
      onClick={onClick}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={e => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className={clsx("relative z-10 p-5", className)}>{children}</div>
    </Tag>
  );
};
