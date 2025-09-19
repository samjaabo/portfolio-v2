"use client";

import { useEffect, useRef } from "react";
import { Viewer } from "@photo-sphere-viewer/core";
import { AutorotatePlugin } from "@photo-sphere-viewer/autorotate-plugin";

import "@photo-sphere-viewer/core/index.css";

export default function Bg360() {
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
      fisheye: true,
      defaultZoomLvl: 0,
      plugins: [
        // Autorotate plugin
        AutorotatePlugin.withConfig({
          autorotateSpeed: "2rpm",
          autostartDelay: 1000,
          autostartOnIdle: true,
          startFromClosest: true,
        }),
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

export function AbsBg360() {
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
      fisheye: true,
      defaultZoomLvl: 0,
      plugins: [
        // Autorotate plugin
        AutorotatePlugin.withConfig({
          autorotateSpeed: "2rpm",
          autostartDelay: 1000,
          autostartOnIdle: true,
          startFromClosest: true,
        }),
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
      style={{ width: "100%", minHeight: "50px", height: "100%" }}
      className="absolute inset-0 z-0 w-full h-full cursor-pointer"
    ></div>
  );
}
