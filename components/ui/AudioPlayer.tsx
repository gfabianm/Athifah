"use client";

import { useEffect, useRef, useState } from "react";
import { Howl } from "howler";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioPlayer() {
  const soundRef = useRef<Howl | null>(null);

  const [muted, setMuted] = useState(false);

  useEffect(() => {
    // Crear UNA sola instancia
    soundRef.current = new Howl({
      src: ["/audio/rain.mp3"],
      loop: true,
      volume: 0.25,
      // QUITAR html5:true
    });

    const startAudio = () => {
      if (soundRef.current && !soundRef.current.playing()) {
        soundRef.current.play();
      }
    };

    // Solo una vez
    window.addEventListener("click", startAudio, {
      once: true,
    });

    return () => {
      window.removeEventListener(
        "click",
        startAudio
      );

      soundRef.current?.stop();

      // liberar memoria
      soundRef.current?.unload();
    };
  }, []);

  const toggleMute = () => {
    if (!soundRef.current) return;

    const newMuted = !muted;

    soundRef.current.mute(newMuted);

    setMuted(newMuted);
  };

  return (
    <button
      onClick={toggleMute}
      className="
        fixed
        bottom-6
        right-6
        z-50
        rounded-full
        border
        border-white/10
        bg-black/40
        p-4
        text-white/70
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-[#f6d7b0]/30
        hover:text-white
      "
    >
      {muted ? (
        <VolumeX size={18} />
      ) : (
        <Volume2 size={18} />
      )}
    </button>
  );
}