import React from "react";
import clsx from "clsx";
import { Text } from "../text/Text";

type InputAreaProps = {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  rows?: number;
  className?: string;
};

const InputArea: React.FC<InputAreaProps> = ({
  label,
  value,
  onChange,
  placeholder,
  disabled,
  rows = 5,
  className,
}) => {
  return (
    <div className={clsx("w-full", className)}>
      {label && (
        <Text text={label} className="block mb-1 sm:text-base text-sm text-softSync" noAnimation />
      )}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        className={clsx(
          "w-full px-4 py-2 border sm:text-lg text-base text-softSync border-neroMint focus:border-coreGlow rounded-[10px] focus:outline-none resize-y",
          disabled && "bg-gray-100 text-gray-400 cursor-not-allowed",
        )}
      />
    </div>
  );
};

export default InputArea;
