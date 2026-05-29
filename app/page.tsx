"use client";

import Button from "@/components/ui/Button";
import AudioPlayer from "@/components/ui/AudioPlayer";
import WorldClock from "@/components/ui/WorldClock";
import HiddenNote from "@/components/ui/HiddenNote";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

import RainBackground from "@/components/effects/RainBackground";
import FloatingQuotes from "@/components/effects/FloatingQuotes";

import { translations } from "@/data/translations";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const { language } = useLanguage();

  const t = translations[language];

  const birthdayTitle =
    language === "es"
      ? "Feliz Cumpleaños,"
      : language === "id"
      ? "Selamat Ulang Tahun,"
      : "Happy Birthday,";

  return (
    <main
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        px-4
        py-24
        sm:px-6
      "
    >
      <RainBackground />

      <FloatingQuotes />

      <WorldClock />

      <HiddenNote />

      <AudioPlayer />

      <div
        className="
          absolute
          bottom-[-200px]
          left-1/2
          h-[300px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-[#f6d7b0]/[0.04]
          blur-3xl
          md:h-[500px]
          md:w-[900px]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,220,180,0.12),transparent_30%)]
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#f6d7b0]/[0.06]
          blur-3xl
          md:h-[500px]
          md:w-[500px]
        "
      />

      <div
        className="
          absolute
          inset-0
          opacity-30
          bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.7))]
        "
      />

      <div
        className="
          relative
          z-10
          flex
          w-full
          max-w-6xl
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        <div className="mb-8 flex justify-center md:mb-10">
          <LanguageSwitcher />
        </div>

        <p
          className="
            mb-4
            text-center
            text-[10px]
            uppercase
            tracking-[0.35em]
            text-[#8a8f98]
            sm:text-xs
            md:mb-5
            md:text-sm
          "
        >
          Colombia ↔ Indonesia
        </p>

        <h1
          className="
            text-center
            text-5xl
            font-light
            leading-none
            text-[#f5f5f5]
            sm:text-6xl
            md:text-8xl
          "
        >
          {birthdayTitle}

          <br />

          <span className="text-[#f6d7b0]">
            Athifah
          </span>
        </h1>

        <div
          className="
            mt-6
            flex
            w-full
            justify-center
            md:mt-8
          "
        >
          <p
            className="
              max-w-2xl
              text-center
              text-sm
              leading-7
              text-[#b0b0b0]
              sm:text-base
              md:text-lg
              md:leading-8
            "
          >
            {t.birthdayText}
          </p>
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <Button text={t.button} />
        </div>
      </div>
    </main>
  );
}