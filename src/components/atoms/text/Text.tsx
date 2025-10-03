import React from "react";
import clsx from "clsx";
import { AllowedSizes, sizeMap } from "@/utils/sizeMap";

type AllowedTags = "p" | "span" | "div";
type TextProps<Tag extends AllowedTags = "p"> = {
  as?: Tag;
  href?: string;
  text?: string | number | undefined;
  size?: AllowedSizes;
  html?: string;
  className?: string;
  bold?: boolean;
  highlightWords?: string[];
  highlightColor?: string;
  linkWords?: string[];
  linkUrlMap?: Record<string, string>;
} & React.HTMLAttributes<HTMLElement>;

export const Text = <Tag extends AllowedTags = "p">({
  as,
  href,
  text = "",
  html,
  size = 24,
  className,
  bold = false,
  highlightWords = [],
  highlightColor,
  linkWords = [],
  linkUrlMap = {},
  ...props
}: TextProps<Tag>) => {
  const TagName = (href ? "a" : as) ?? "p";
  const sizeClass = sizeMap[size] ?? "text-base";
  const weightClass = bold ? "font-semibold" : "font-normal";

  if (html) {
    return (
      <TagName
        className={clsx(sizeClass, weightClass, "whitespace-pre-wrap", className)}
        dangerouslySetInnerHTML={{ __html: html }}
        {...props}
      />
    );
  }

  const textStr = String(text ?? "");

  const renderHighlightedText = () =>
    textStr.split(/(\s+)/).map((word, i) => {
      const clean = word.replace(/[^a-zA-Z0-9żźćńółęąśŻŹĆĄŚĘŁÓŃ]/g, "");
      const isHighlighted = highlightWords.includes(clean);
      const isLink = linkWords.includes(clean);
      const href = linkUrlMap[clean];

      const style: React.CSSProperties = {};

      if (isLink) {
        style.color = "#A15000";
        style.textDecoration = "underline";
      } else if (isHighlighted) {
        style.color = highlightColor ?? "#A15000";
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
