"use client";

import { useEffect, useRef, useState } from "react";

import { Volume2, VolumeX } from "lucide-react";

export default function SunsetAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;

      audioRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/sunset.mp3" loop />

      <button
        onClick={toggleAudio}
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-black/30
          backdrop-blur-md
          transition-all
          duration-300
          hover:scale-105
          hover:bg-black/50
        "
      >
        {isPlaying ? (
          <Volume2 className="h-5 w-5 text-white" />
        ) : (
          <VolumeX className="h-5 w-5 text-white" />
        )}
      </button>
    </>
  );
}
