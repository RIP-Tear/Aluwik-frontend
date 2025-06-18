import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.matchMedia("(max-width: 639px)").matches);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isMobile;
};
