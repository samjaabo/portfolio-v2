"use client";

import clsx from "clsx";
import { useState, useEffect } from "react";

export default function TypingText({
  text,
  speed = 32,
}: {
  text: string;
  speed?: number;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isAnimationEnded, setIsAnimationEnded] = useState(false);
  // animate only when visible

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => {
        clearTimeout(timeout);
      };
    } else {
      setIsAnimationEnded(true);
    }
  }, [index, text, speed]);

  return (
    <span className=" text-lg relative">
      {displayedText}
      <span
        className={clsx(
          "animate-blink inline-block w-px h-full bg-line-color",
          {
            " opacity-0 ": isAnimationEnded,
          }
        )}
      >
        &nbsp;
      </span>
    </span>
  );
}
