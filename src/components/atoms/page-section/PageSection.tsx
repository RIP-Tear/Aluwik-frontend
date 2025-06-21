import React from "react";
import clsx from "clsx";

type PageSectionProps = {
  children: React.ReactNode;
  className?: string;
  noMarginTop?: boolean;
};

const PageSection: React.FC<PageSectionProps> = ({ children, className, noMarginTop = false }) => {
  return (
    <div
      className={clsx(
        "flex justify-center items-center",
        !noMarginTop && "mt-5 sm:mt-[50px]",
        className,
      )}
    >
      <div className="w-full max-w-[1200px] px-5">{children}</div>
    </div>
  );
};

export default PageSection;
