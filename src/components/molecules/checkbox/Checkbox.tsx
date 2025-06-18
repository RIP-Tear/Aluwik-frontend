// components/atoms/checkbox/Checkbox.tsx
import React from "react";
import clsx from "clsx";
import { Text } from "@/components/atoms/text/Text";

type CheckboxProps = {
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  className?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange, name, className }) => {
  return (
    <label
      className={clsx("flex items-center gap-3 cursor-active text-softSync select-none", className)}
    >
      <div className="relative mt-2">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="peer appearance-none w-5 h-5 border border-coreGlow rounded-sm checked:border-neroMint checked:bg-neroMint transition-all duration-200"
        />
        <svg
          className="w-4 h-4 text-white absolute top-[2px] left-[2px] pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <Text text={label} noAnimation className="text-softSync" size={18} />
    </label>
  );
};

export default Checkbox;
