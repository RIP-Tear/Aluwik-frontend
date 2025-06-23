import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Text } from "@/components/atoms/text/Text";
import { Michroma } from "next/font/google";

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

type ImageModalProps = {
  src: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  categoryTitle: string;
  categoryIcon: React.ElementType;
};

const ImageModal: React.FC<ImageModalProps> = ({
  src,
  onClose,
  onPrev,
  onNext,
  categoryTitle,
  categoryIcon,
}) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  const CategoryIcon = categoryIcon;

  return createPortal(
    <div
      className="fixed inset-0 z-[1000] bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-6xl max-h-full w-full bg-greyVariant border-2 border-orangeAccent rounded overflow-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative z-30 flex justify-between items-center p-4 bg-white border-b-2 border-orangeAccent">
          <div className="flex gap-2">
            <CategoryIcon className="text-orangeAccent" size={24} />
            <Text text={categoryTitle} size={16} className={`text-black ${michroma.className}`} />
          </div>
          <button
            aria-label="Zamknij"
            onClick={onClose}
            className="text-white bg-alertRed p-2 rounded-full transition hover:scale-110 transform cursor-active"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nawigacja - lewa */}
        {onPrev && (
          <button
            aria-label="Poprzednie zdjęcie"
            onClick={onPrev}
            className="absolute top-1/2 px-2 sm:px-10 -translate-y-1/2 z-10 h-full bg-transparent hover:bg-orangeAccent/40 transition cursor-active"
          >
            <ChevronLeft size={64} className="text-orangeAccent" />
          </button>
        )}

        {/* Nawigacja - prawa */}
        {onNext && (
          <button
            aria-label="Następne zdjęcie"
            onClick={onNext}
            className="absolute right-0 h-full px-2 sm:px-10 top-1/2 -translate-y-1/2 z-10 bg-transparent hover:bg-orangeAccent/40 transition cursor-active"
          >
            <ChevronRight size={64} className="text-orangeAccent" />
          </button>
        )}

        {/* Obraz */}
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt="Podgląd realizacji"
            width={1920}
            height={1080}
            className="w-full h-auto rounded max-h-[80vh] object-contain mx-auto"
          />
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ImageModal;
