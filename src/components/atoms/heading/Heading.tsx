// heading.tsx
import React from "react";
import clsx from "clsx";
import styles from "./heading.module.css";
import { AllowedSizes, sizeMap } from "@/utils/sizeMap";

type AllowedTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

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
  size = 60,
  className,
  highlightWords = [],
  highlightColor,
  bold = false,
  ...props
}: HeadingProps<Tag>) => {
  const TagName = as ?? "h1";
  const sizeClass = sizeMap[size] ?? "text-base";

  const defaultGradient = "linear-gradient(90deg, #A15000 0%, #D32027 100%)";

  const renderHighlightedText = () =>
    label.split(/(\s+)/).map((word, i) => {
      const clean = word.replace(/[^a-zA-Z0-9żźćńółęąśŻŹĆĄŚĘŁÓŃ]/g, "");
      const isHighlighted = highlightWords.includes(clean);

      const style = isHighlighted
        ? highlightColor
          ? { color: highlightColor, fontWeight: bold ? 700 : undefined }
          : {
              backgroundImage: defaultGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              fontWeight: bold ? 700 : undefined,
            }
        : bold
          ? { fontWeight: 700 }
          : undefined;

      return (
        <span key={i} style={style}>
          {word}
        </span>
      );
    });

  return (
    <TagName
      className={clsx(
        "text-softSync leading-snug break-words",
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
