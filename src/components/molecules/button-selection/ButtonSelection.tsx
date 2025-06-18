import clsx from "clsx";
import { Text } from "../../atoms/text/Text";
import style from "./buttonSelection.module.css";

type ButtonSelectionProps = {
  label: string;
  className?: string;
  onClick?: () => void;
  isSelected?: boolean;
};

export const ButtonSelection = ({
  label,
  className,
  onClick,
  isSelected = false,
}: ButtonSelectionProps) => {
  if (isSelected) {
    return (
      <button onClick={onClick} className={clsx(style["fancy-button"], "p-3 sm:p-5", className)}>
        <span className="flex items-center justify-center">
          <Text text={label} noAnimation className="text-white" size={18} />
        </span>
      </button>
    );
  }

  return (
    <div className={clsx(style.wrapper, style.hoverScale, className)}>
      <button
        onClick={onClick}
        className={clsx(style["glass-button"], "relative z-10 p-3 sm:p-5 w-full h-full text-white")}
      >
        <span className="flex items-center justify-center">
          <Text text={label} noAnimation className="text-white" size={18} />
        </span>
      </button>
    </div>
  );
};
