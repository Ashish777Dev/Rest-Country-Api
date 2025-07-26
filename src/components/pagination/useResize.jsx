import React, { useEffect, useState } from "react";

const useResize = () => {
  const [windowSize, setWindowSize] = useState({
    // window.innerWidth -> browser Environment     1200 -> Node js if window.innerWidth don't work
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const windowResize = () => {
      setWindowSize({ width: window.innerWidth });
    };

    windowResize();

    window.addEventListener("resize", windowResize);

    return () => window.removeEventListener("resize", windowResize);
  }, []);

  
  return windowSize.width;
};

export default useResize;
