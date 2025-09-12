"use client";

import { useEffect, useRef } from "react";
import Panzoom from "@panzoom/panzoom";

interface ZoomableImageProps {
  src: string;
  alt?: string;
  zoomScale?: number; // optional zoom factor
}

export default function PressZoomImage({
  src,
  alt,
  zoomScale = 2,
}: ZoomableImageProps) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const panzoomRef = useRef<any>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const panzoom = Panzoom(imgRef.current, {
      maxScale: 5,
      minScale: 1,
      contain: "outside",
    });
    panzoomRef.current = panzoom;

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return; // left-click only
      e.preventDefault();

      const currentScale = panzoom.getScale();
      const factor = zoomScale / currentScale;

      panzoom.zoom(factor, {
        animate: true,
        focal: { clientX: e.clientX, clientY: e.clientY },
      });
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (e.button !== 0) return; // left-click only
      e.preventDefault();

      const currentScale = panzoom.getScale();
      panzoom.zoom(1 / currentScale, { animate: true }); // reset to normal
    };

    imgRef.current.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      imgRef.current?.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      panzoom.destroy();
    };
  }, [zoomScale]);

  return (
    <div className="w-full h-fit border overflow-hidden mx-auto cursor-zoom-in">
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="block"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
