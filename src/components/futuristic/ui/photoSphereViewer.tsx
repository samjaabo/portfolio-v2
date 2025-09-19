"use client";

import { useEffect, useRef } from "react";
import { Viewer } from "@photo-sphere-viewer/core";
import { AutorotatePlugin } from "@photo-sphere-viewer/autorotate-plugin";
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";

import "@photo-sphere-viewer/core/index.css";
import "@photo-sphere-viewer/markers-plugin/index.css";

interface Bg360Props {
  width?: string | number;
  height?: string | number;
  overlayColor?: string;
}

// Autorotate keypoints
const keypoints = [
  { yaw: 0, pitch: 0, pause: 2000 },
  { yaw: Math.PI / 4, pitch: 0, pause: 2000 },
  { yaw: Math.PI / 2, pitch: 0, pause: 2000 },
  { yaw: (3 * Math.PI) / 4, pitch: -0.1, pause: 2000 },
  { yaw: Math.PI, pitch: 0, pause: 2000 },
];

// Separate markers array
const markers = [
  {
    id: "marker-0",
    position: { yaw: 0, pitch: 0 },
    label: "Floating UI Panels",
  },
  {
    id: "marker-1",
    position: { yaw: Math.PI / 4, pitch: 0 },
    label: "Interactive Charts",
  },
  {
    id: "marker-2",
    position: { yaw: Math.PI / 2, pitch: 0 },
    label: "Layered Wireframes",
  },
  {
    id: "marker-3",
    position: { yaw: (3 * Math.PI) / 4, pitch: -0.1 },
    label: "Futuristic Menus",
  },
  {
    id: "marker-4",
    position: { yaw: Math.PI, pitch: 0 },
    label: "Digital Depth & Glow",
  },
];

export default function Bg360({
  width = "100%",
  height = "500px",
  overlayColor = "rgba(249,236,223,0.25)",
}: Bg360Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const viewerRef = useRef<Viewer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const viewer = new Viewer({
      container: containerRef.current,
      panorama: "/futuristic/3d-imgs/Scifi_Concept_Art.jpg",
      navbar: false,
      mousewheel: false,
      mousemove: true,
      touchmoveTwoFingers: false,
      defaultYaw: 0,
      defaultPitch: 0,
      fisheye: false,
      plugins: [
        // Autorotate plugin
        AutorotatePlugin.withConfig({
          autorotateSpeed: "2rpm",
          autostartDelay: 1000,
          autostartOnIdle: true,
          startFromClosest: true,
          keypoints: keypoints.map((kp) => ({
            position: { yaw: kp.yaw, pitch: kp.pitch },
            pause: kp.pause,
          })),
        }),
        // Markers plugin
        [
          MarkersPlugin,
          {
            markers: markers.map((m) => ({
              id: m.id,
              position: m.position,
              html: `<div class="bg-[#d8bfc0] text-[#5d3136] px-2 py-1 rounded shadow-lg text-sm font-semibold">${m.label}</div>`,
            })),
          },
        ],
      ],
    });

    viewerRef.current = viewer;

    // Rounded corners
    const psvContainer = containerRef.current.querySelector(
      ".psv-container"
    ) as HTMLDivElement;
    if (psvContainer) {
      psvContainer.style.borderRadius = "0.75rem";
      psvContainer.style.overflow = "hidden";
    }

    return () => {
      viewer.destroy();
      viewerRef.current = null;
    };
  }, []);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    const el = containerRef.current;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      el.requestFullscreen().catch((err) => {
        console.error("Error attempting to enable fullscreen mode:", err);
      });
    }
  };

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", minHeight: "50px" }}
      className="relative w-full h-full cursor-pointer"
    >
      {" "}
      <button
        onClick={toggleFullscreen}
        className="absolute top-4 right-4 z-50 bg-white/70 px-3 py-1 rounded shadow hover:bg-white"
      >
        Fullscreen
      </button>
    </div>
  );
}
