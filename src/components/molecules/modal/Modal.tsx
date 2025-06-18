import { ReactNode } from "react";
import clsx from "clsx";
import { Title } from "@/components/atoms/heading/Heading";
import Line from "@/components/atoms/line/Line";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footerButton?: ReactNode;
  className?: string;
};

const Modal = ({ isOpen, title, children, footerButton, className }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        className={clsx("bg-shadowMind w-full max-w-2xl mx-4 rounded-[20px] shadow-lg", className)}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 ">
          <Title label={title} size={32} noAnimation />
        </div>
        <Line />

        {/* Body */}
        <div className="px-6 py-4">{children}</div>

        {/* Optional Footer Button */}
        {footerButton && <div className="px-6 py-4 text-right">{footerButton}</div>}
      </div>
    </div>
  );
};

export default Modal;
