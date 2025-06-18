import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export const useLenisScroll = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return;

    const lenis = new Lenis({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return { wrapperRef, contentRef };
};
