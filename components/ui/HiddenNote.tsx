"use client";

import { motion } from "framer-motion";

import { translations } from "@/data/translations";

import { useLanguage } from "@/lib/LanguageContext";

export default function HiddenNote() {
  const { language } = useLanguage();

  const t = translations[language];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 4,
        duration: 2,
      }}
      className="
        fixed
        bottom-6
        left-6
        z-40
        max-w-xs
        rounded-2xl
        border
        border-white/10
        bg-black/20
        p-5
        text-sm
        leading-7
        text-white/50
        backdrop-blur-xl
      "
    >
      "{t.hiddenNote}"
    </motion.div>
  );
}