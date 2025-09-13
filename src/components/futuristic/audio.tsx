"use client";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { BsFillPauseFill } from "react-icons/bs";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  useEffect(() => {
    if (audioRef.current) {
    }
  }, []);
  // Sync state with audio events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.2; // 20% volume

    const handlePlay = () => setPlaying(true);
    const handlePause = () => setPlaying(false);
    // const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    // audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      //   audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="relative top-0 left-0">
      <div className="pointer-events-none absolute top-0 left-0 border border-color animate-ping w-full h-full rounded-full"></div>
      <audio ref={audioRef} loop>
        <source src="/futuristic/nn-the-floor.mp3" type="audio/mpeg" />
      </audio>
      <button
        onClick={togglePlay}
        className={clsx(
          "p-2 aspect-square max-w-8 max-h-8 rounded-full bg-bg text-soft",
          {
            "animate-none": playing,
          }
        )}
      >
        {playing ? <BsFillPauseFill /> : <BsFillPlayFill />}
      </button>
    </div>
  );
}
