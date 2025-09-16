"use client";
import { useState } from "react";

export default function DecryptText({
  children,
  href = "#",
  duration = 1000, // total time in ms
  intervalMs = 100, // frame rate
}: {
  children: string;
  href?: string;
  duration?: number;
  intervalMs?: number;
}) {
  const [text, setText] = useState(children);
  const original = children;
  const letters = ".-+*#%?<>^$@!X01";

  function handleHover() {
    const totalFrames = Math.floor(duration / intervalMs);
    let frame = 0;

    // Each character gets a random frame at which it "locks in"
    const lockFrames = original
      .split("")
      .map(() => Math.floor(Math.random() * totalFrames));

    const interval = setInterval(() => {
      setText(() =>
        original
          .split("")
          .map((char, i) => {
            if (frame >= lockFrames[i]) {
              return original[i]; // locked in
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      frame++;
      if (frame >= totalFrames) {
        clearInterval(interval);
        setText(original); // ensure final clean
      }
    }, intervalMs);
  }

  return (
    <a
      href={href}
      onMouseEnter={handleHover}
      className="hidden lg:inline-block cursor-pointer hover-underline-link capitalize"
    >
      {text}
    </a>
  );
}

export function DecryptTextButton({
  children,
  href = "#",
  duration = 900, // total time in ms
  intervalMs = 64, // frame rate
}: {
  children: string;
  href?: string;
  duration?: number;
  intervalMs?: number;
}) {
  const [text, setText] = useState(children);
  const original = children;
  const letters = ".-+*#%?<>[]{}^$@!";

  function handleHover() {
    const totalFrames = Math.floor(duration / intervalMs);
    const halfFrames = Math.floor(totalFrames / 2);
    let frame = 0;

    const interval = setInterval(() => {
      setText(() =>
        original
          .split("")
          .map((char, i) => {
            // left → right phase
            if (frame <= halfFrames) {
              if (frame > halfFrames * (i / original.length)) {
                return original[i];
              }
            }
            // right → left phase
            else {
              const progress = frame - halfFrames;
              if (
                progress >
                halfFrames * ((original.length - 1 - i) / original.length)
              ) {
                return original[i];
              }
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
      className="hidden lg:inline-block cursor-pointer btn-secondary set-top-left-corner  capitalize"
    >
      {text}
    </a>
  );
}
