"use client";

import clsx from "clsx";
import { motion, useSpring } from "framer-motion";
import { RefObject, useEffect, useRef, useState } from "react";

export default function Drag() {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(ref);
  const [visible, setVisible] = useState(true);
  const [clicked, setClicked] = useState(false);

  const lastMoveRef = useRef(Date.now());

  // Update last movement timestamp
  useEffect(() => {
    const handlePointerClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 500);
      lastMoveRef.current = Date.now();
      if (!visible) setVisible(true);
    };
    const handlePointerMove = () => {
      lastMoveRef.current = Date.now();
      if (!visible) setVisible(true);
    };
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("click", handlePointerClick, {
      passive: true,
    });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("click", handlePointerClick);
    };
  }, [visible]);

  // Efficient loop to hide after inactivity
  useEffect(() => {
    let animFrame: number;

    const checkIdle = () => {
      if (Date.now() - lastMoveRef.current > 300) {
        setVisible(false);
      }
      animFrame = requestAnimationFrame(checkIdle);
    };

    animFrame = requestAnimationFrame(checkIdle);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <motion.div
      className={clsx(
        "w-3 h-3 hidden lg:inline-block fixed top-0 left-0 z-50  bg-transparent pointer-events-none after:absolute after:inset-0  after:rotate-45",
        "after:outline after:outline-color  after:transition-all after:duration-300 ",
        clicked && "after:w-2 after:h-2 ",
        !clicked && "after:w-3 after:h-3",
        "before:absolute before:inset-0 before:rotate-45  before:outline before:outline-offset-8 before:outline-line-color-soft"
      )}
      ref={ref}
      style={{
        x,
        y,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    />
  );
}

const spring = { damping: 25, stiffness: 180, mass: 0.8, restDelta: 0.001 };

function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      x.set(clientX - (ref.current?.offsetWidth ?? 0) / 2);
      y.set(clientY - (ref.current?.offsetHeight ?? 0) / 2);
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [x, y, ref]);

  return { x, y };
}
