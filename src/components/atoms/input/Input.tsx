import React from "react";
import clsx from "clsx";
import { Text } from "../text/Text";

type InputProps = {
  label?: string;
  labelError?: string;
  icon?: React.ReactNode;
  type?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};

const Input: React.FC<InputProps> = ({
  label,
  labelError,
  icon,
  type = "text",
  value,
  onChange,
  onKeyDown,
  placeholder,
  disabled,
  className,
}) => {
  return (
    <div className={clsx("w-full", className)}>
      {label && (
        <div className="mb-1 sm:text-base text-sm text-softSync">
          <Text text={labelError ? `${label} ` : label} noAnimation className="inline" size={16} />
          {labelError && (
            <Text
              text={`(${labelError})`}
              noAnimation
              className="inline text-coreGlow ml-1"
              size={16}
            />
          )}
        </div>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          className={clsx(
            "w-full px-4 py-2 border sm:text-lg text-base text-softSync border-neroMint focus:border-coreGlow rounded-[10px] focus:outline-none",
            icon && "pl-10",
            disabled && "bg-gray-100 text-gray-400 cursor-not-allowed",
          )}
        />
      </div>
    </div>
  );
};

export default Input;
