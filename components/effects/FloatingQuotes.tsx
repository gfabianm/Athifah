"use client";

import { motion } from "framer-motion";

const quotes = [
  "translation was never perfect",
  "pelan pelan",
  "Bogotá ↔ Solo",
  "trying to understand each other",
  "small human moments",
  "it's not morning here fabian 😖",
  "somewhere between languages",
];

export default function FloatingQuotes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {quotes.map((quote, index) => (
        <motion.p
          key={quote}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: [0, 0.08, 0],
            y: [30, 0, -30],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: index * 2,
            ease: "easeInOut",
          }}
          className="
            absolute
            text-xs
            tracking-[0.3em]
            text-white/10
          "
          style={{
            left: `${10 + index * 12}%`,
            top: `${20 + index * 10}%`,
          }}
        >
          {quote}
        </motion.p>
      ))}
    </div>
  );
}