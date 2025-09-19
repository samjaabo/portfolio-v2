"use client";

import { useEffect, useRef } from "react";
import { Viewer } from "@photo-sphere-viewer/core";
import {
  AutorotateKeypoint,
  AutorotatePlugin,
} from "@photo-sphere-viewer/autorotate-plugin";
import "@photo-sphere-viewer/core/index.css";

interface Bg360Props {
  width?: string | number; // Tailwind class or px/em
  height?: string | number; // Tailwind class or px/em
  overlayColor?: string; // optional semi-transparent overlay
}

const keypoints: AutorotateKeypoint[] = [
  {
    position: { yaw: 0, pitch: 0 },
    pause: 2000,
    tooltip: { content: "Floating UI Panels" },
  },
  {
    position: { yaw: Math.PI / 4, pitch: 0 },
    pause: 2000,
    tooltip: { content: "Interactive Charts" },
  },
  {
    position: { yaw: Math.PI / 2, pitch: 0 },
    pause: 2000,
    tooltip: { content: "Layered Wireframes" },
  },
  {
    position: { yaw: (3 * Math.PI) / 4, pitch: -0.1 },
    pause: 2000,
    tooltip: { content: "Futuristic Menus" },
  },
  {
    position: { yaw: Math.PI, pitch: 0 },
    pause: 2000,
    tooltip: { content: "Digital Depth & Glow" },
  },
];

export default function Bg360() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const viewerRef = useRef<Viewer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const viewer = new Viewer({
      container: containerRef.current,
      panorama: "/futuristic/3d-imgs/Neo_Tokyo.jpg",
      navbar: false,
      mousewheel: false,
      mousemove: true,
      touchmoveTwoFingers: false,
      defaultYaw: 0,
      defaultPitch: 0,
      fisheye: false,
      plugins: [
        // Use the official plugin properly via withConfig()
        AutorotatePlugin.withConfig({
          autorotateSpeed: "2rpm", // Adjust speed
          autostartDelay: 1000, // Delay before auto-rotation starts
          autostartOnIdle: true, // Restart if user interacts
          autorotatePitch: 1, // Keep level
          autorotateZoomLvl: -1, // Maintain current zoom
          startFromClosest: true, // Start from nearest point
          keypoints: keypoints,
        }),
      ],
    });

    viewerRef.current = viewer;

    // Apply rounded corners to PSV container
    const psvContainer = containerRef.current.querySelector(
      ".psv-container"
    ) as HTMLDivElement;
    if (psvContainer) {
      psvContainer.style.borderRadius = "0.75rem"; // Tailwind rounded-xl
      psvContainer.style.overflow = "hidden";
    }

    return () => {
      viewer.destroy();
      viewerRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", minHeight: "50px" }}
      className="w-full h-full"
    />
  );
}
