"use client";

import { motion, useSpring } from "framer-motion";
import { RefObject, useEffect, useRef, useState } from "react";

export default function Drag() {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(ref);
  const [visible, setVisible] = useState(true);

  const lastMoveRef = useRef(Date.now());

  // Update last movement timestamp
  useEffect(() => {
    const handlePointerMove = () => {
      lastMoveRef.current = Date.now();
      if (!visible) setVisible(true);
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [visible]);

  // Efficient loop to hide after inactivity
  useEffect(() => {
    let animFrame: number;

    const checkIdle = () => {
      if (Date.now() - lastMoveRef.current > 500) {
        setVisible(false);
      }
      animFrame = requestAnimationFrame(checkIdle);
    };

    animFrame = requestAnimationFrame(checkIdle);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <motion.div
      className="hidden lg:inline-block fixed top-0 left-0 z-50 w-2 h-2 border-dashed border border-white bg-transparent pointer-events-none mix-blend-difference"
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
