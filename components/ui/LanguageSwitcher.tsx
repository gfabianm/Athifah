"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/lib/LanguageContext";

const languages = [
  {
    label: "ES",
    value: "es",
  },

  {
    label: "EN",
    value: "en",
  },

  {
    label: "ID",
    value: "id",
  },
] as const;

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-3">
      {languages.map((item) => (
        <motion.button
          key={item.value}
          onClick={() => setLanguage(item.value)}
          whileHover={{
            y: -2,
          }}
          className={`
            rounded-full
            border
            px-4
            py-2
            text-xs
            tracking-[0.2em]
            backdrop-blur-md
            transition-all
            duration-300

            ${
              language === item.value
                ? "border-[#f6d7b0]/40 bg-[#f6d7b0]/10 text-white"
                : "border-white/10 bg-white/5 text-white/70 hover:border-[#f6d7b0]/30 hover:text-white"
            }
          `}
        >
          {item.label}
        </motion.button>
      ))}
    </div>
  );
}