// heading.tsx
import React from "react";
import clsx from "clsx";
import styles from "./heading.module.css";

type AllowedSizes = 14 | 16 | 18 | 24 | 32 | 64;
type AllowedTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const sizeMap: Record<AllowedSizes, string> = {
  14: "sm:text-sm text-xs",
  16: "sm:text-base text-sm",
  18: "sm:text-lg text-base",
  24: "sm:text-2xl text-lg",
  32: "sm:text-4xl text-2xl",
  64: "sm:text-6xl text-4xl",
};

type HeadingProps<Tag extends AllowedTags = "h1"> = {
  as?: Tag;
  label: string;
  size?: AllowedSizes;
  className?: string;
  highlightWords?: string[];
  highlightColor?: string;
  bold?: boolean;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const Heading = <Tag extends AllowedTags = "h1">({
  as,
  label,
  size = 64,
  className,
  highlightWords = [],
  highlightColor,
  bold = false,
  ...props
}: HeadingProps<Tag>) => {
  const TagName = as ?? "h1";
  const sizeClass = sizeMap[size] ?? "text-base";

  const renderHighlightedText = () =>
    label.split(/(\s+)/).map((word, i) => {
      const clean = word.replace(/[^a-zA-Z0-9żźćńółęąśŻŹĆĄŚĘŁÓŃ]/g, "");
      const isHighlighted = highlightWords.includes(clean);
      const color = isHighlighted ? (highlightColor ?? "#C16200") : undefined;
      return (
        <span key={i} style={color ? { color } : undefined}>
          {word}
        </span>
      );
    });

  return (
    <TagName
      className={clsx(
        "text-softSync leading-snug break-words text-center",
        sizeClass,
        bold && styles["bold-fake"],
        className,
      )}
      {...props}
    >
      {renderHighlightedText()}
    </TagName>
  );
};
