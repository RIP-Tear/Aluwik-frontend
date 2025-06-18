import { useEffect, useState } from "react";

type WindowSize = {
  width: number | undefined;
  height: number | undefined;
};

const useWindowSize = () => {
  const [size, setSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

export default useWindowSize;
