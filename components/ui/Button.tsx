"use client";

import { motion } from "framer-motion";

import { useRouter } from "next/navigation";

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  const router = useRouter();

  return (
    <motion.button
      onClick={() => router.push("/library")}
      whileHover={{
        scale: 1.04,
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        relative
        overflow-hidden
        rounded-full
        border
        border-[#f6d7b0]/20
        bg-[#f6d7b0]/[0.03]
        px-10
        py-4
        text-sm
        tracking-[0.35em]
        text-[#f6d7b0]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-[#f6d7b0]/50
        hover:bg-[#f6d7b0]/10
      "
    >
      <span className="relative z-10">
        {text}
      </span>

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          hover:opacity-100
        "
      />
    </motion.button>
  );
}