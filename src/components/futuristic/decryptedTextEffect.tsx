"use client";
import clsx from "clsx";
import { useState } from "react";

export interface LinkButtonProps {
  children: string;
  href?: string;
  duration?: number; // total time in ms
  intervalMs?: number; // frame rate
  variant?: "primary" | "secondary" | "link";
  allowUnderLineHover?: boolean;
  AllowDecryptedTextHover?: boolean;
  letters?: string;
}

export function LinkButton({
  children,
  href = "#",
  duration = 900, // total time in ms
  intervalMs = 32, // frame rate
  variant = "primary",
  allowUnderLineHover = false,
  AllowDecryptedTextHover = true,
  letters = "0123456789ZXAYUIO#$",
}: LinkButtonProps) {
  const [text, setText] = useState(children);
  const original = children as string;

  function handleHover() {
    if (!AllowDecryptedTextHover) return;
    const totalFrames = Math.floor(duration / intervalMs);
    let frame = 0;

    const interval = setInterval(() => {
      setText(() =>
        original
          .split("")
          .map((char, i) => {
            // decide when this char should lock in
            const revealFrame = Math.floor((i / original.length) * totalFrames);

            if (frame >= revealFrame) {
              return original[i];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      frame++;
      if (frame >= totalFrames) {
        clearInterval(interval);
        setText(original); // final clean
      }
    }, intervalMs);
  }

  return (
    <a
      href={href}
      onMouseEnter={handleHover}
      className={clsx("hidden lg:inline-block cursor-pointer capitalize", {
        "hover-underline-link": allowUnderLineHover,
        "btn ": variant === "primary",
        "btn-secondary": variant === "secondary",
      })}
    >
      {text}
    </a>
  );
}
