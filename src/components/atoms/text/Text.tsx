import React from "react";
import clsx from "clsx";

type AllowedSizes = 14 | 16 | 18 | 24 | 32 | 64;

const sizeMap: Record<AllowedSizes, string> = {
  14: "sm:text-sm text-xs",
  16: "sm:text-base text-sm",
  18: "sm:text-lg text-base",
  24: "sm:text-2xl text-lg",
  32: "sm:text-4xl text-2xl",
  64: "sm:text-6xl text-4xl",
};

type AllowedTags = "p" | "span" | "div";
type TextProps<Tag extends AllowedTags = "p"> = {
  as?: Tag;
  text: string | number | undefined;
  size?: AllowedSizes;
  className?: string;
  bold?: boolean;
  highlightWords?: string[];
  highlightColor?: string;
  linkWords?: string[];
  linkUrlMap?: Record<string, string>;
} & React.HTMLAttributes<HTMLElement>;

export const Text = <Tag extends AllowedTags = "p">({
  as,
  text,
  size = 24,
  className,
  bold = false,
  highlightWords = [],
  highlightColor,
  linkWords = [],
  linkUrlMap = {},
  ...props
}: TextProps<Tag>) => {
  const TagName = as ?? "p";
  const textStr = String(text ?? "");
  const sizeClass = sizeMap[size] ?? "text-base";
  const weightClass = bold ? "font-semibold" : "font-normal";

  const renderHighlightedText = () =>
    textStr.split(/(\s+)/).map((word, i) => {
      const clean = word.replace(/[^a-zA-Z0-9żźćńółęąśŻŹĆĄŚĘŁÓŃ]/g, "");
      const isHighlighted = highlightWords.includes(clean);
      const isLink = linkWords.includes(clean);
      const href = linkUrlMap[clean];

      const style: React.CSSProperties = {};

      if (isLink) {
        style.color = "#C16200";
        style.textDecoration = "underline";
      } else if (isHighlighted) {
        style.color = highlightColor ?? "#C16200";
      }

      if (isLink && href) {
        return (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={style}
            className="cursor-pointer"
          >
            {word}
          </a>
        );
      }

      return (
        <span key={i} style={style}>
          {word}
        </span>
      );
    });

  return (
    <TagName className={clsx(sizeClass, weightClass, "whitespace-pre-wrap", className)} {...props}>
      {renderHighlightedText()}
    </TagName>
  );
};
