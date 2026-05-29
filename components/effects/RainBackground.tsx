"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface RainDrop {
  left: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function RainBackground() {
  const [rain, setRain] = useState<RainDrop[]>([]);

  useEffect(() => {
    const generatedRain = Array.from({ length: 80 }).map(() => ({
      left: Math.random() * 100,
      duration: Math.random() * 1 + 0.8,
      delay: Math.random() * 2,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    setRain(generatedRain);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {rain.map((drop, index) => (
        <motion.div
          key={index}
          initial={{
            y: -200,
            opacity: drop.opacity,
          }}
          animate={{
            y: "120vh",
          }}
          transition={{
            duration: drop.duration,
            repeat: Infinity,
            delay: drop.delay,
            ease: "linear",
          }}
          className="
            absolute
            top-0
            h-24
            w-[1px]
            bg-gradient-to-b
            from-transparent
            via-blue-200/40
            to-transparent
          "
          style={{
            left: `${drop.left}%`,
          }}
        />
      ))}
    </div>
  );
}