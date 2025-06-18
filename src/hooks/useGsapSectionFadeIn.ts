"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export const useGsapFadeInSections = () => {
  useEffect(() => {
    let cleanup: (() => void) | null = null;

    import("gsap/ScrollTrigger").then(({ default: ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      const sections = document.querySelectorAll(".section");

      sections.forEach(section => {
        gsap.fromTo(
          section,
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      ScrollTrigger.refresh();

      cleanup = () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    });

    return () => {
      if (cleanup) cleanup();
    };
  }, []);
};
