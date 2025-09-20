import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scrollCoordinates, setScrollCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollCoordinates({ x: window.scrollX, y: window.scrollY });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollCoordinates;
};
