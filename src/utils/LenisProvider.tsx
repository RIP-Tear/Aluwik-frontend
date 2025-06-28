"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.setAttribute("lang", "pl");
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    import("gsap/ScrollTrigger").then(({ default: ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value?: number) {
          return value !== undefined ? lenis.scrollTo(value) : lenis.scroll;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: document.body.style.transform ? "transform" : "fixed",
      });

      lenis.on("scroll", ScrollTrigger.update);
      ScrollTrigger.defaults({ scroller: document.body });
      ScrollTrigger.refresh();
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
