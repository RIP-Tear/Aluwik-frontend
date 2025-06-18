import React, { useEffect, useState } from "react";
import background from "./background.module.css";

type Bar = {
  id: number;
  top: string;
  side: "left" | "right";
  color: string;
  width: number;
};

export const Background = ({ children }: { children: React.ReactNode }) => {
  const [bars, setBars] = useState<Bar[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const side = Math.random() > 0.5 ? "left" : "right";
      const maxWidth = Math.min(window.innerWidth * 0.3, 160);
      const minWidth = Math.max(window.innerWidth * 0.1, 60);

      setBars(prev => [
        ...prev,
        {
          id,
          top: `${Math.floor(Math.random() * 90)}%`,
          side,
          color: Math.random() > 0.5 ? "#ef2eb4" : "#3fe9c5",

          width: Math.floor(Math.random() * (maxWidth - minWidth)) + minWidth,
        },
      ]);

      setTimeout(() => {
        setBars(prev => prev.filter(bar => bar.id !== id));
      }, 3500);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10 overflow-hidden bg-shadowMind">
        {bars.map(bar => (
          <div
            key={bar.id}
            className={`absolute h-3 w-[160px] rounded-full opacity-80 ${
              bar.side === "left"
                ? background.barSlideInLeft + " left-5"
                : background.barSlideInRight + " right-5"
            }`}
            style={{
              top: bar.top,
              backgroundColor: bar.color,
              ["--bar-width" as any]: `${bar.width}px`,
              animationDuration: "3s",
              animationFillMode: "forwards",
            }}
          />
        ))}
      </div>
      <main className="relative z-10">{children}</main>
    </div>
  );
};
