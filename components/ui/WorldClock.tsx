"use client";

import { useEffect, useState } from "react";

import { translations } from "@/data/translations";

import { useLanguage } from "@/lib/LanguageContext";

export default function WorldClock() {
  const { language } = useLanguage();

  const t = translations[language];

  const [bucaramangaTime, setBucaramangaTime] =
    useState("");

  const [surakartaTime, setSurakartaTime] =
    useState("");

  const [bucaramangaDate, setBucaramangaDate] =
    useState("");

  const [surakartaDate, setSurakartaDate] =
    useState("");

  useEffect(() => {
    const updateClock = () => {
      const colombiaNow = new Date();

      const indonesiaNow = new Date();

      const locale =
        language === "es"
          ? "es-ES"
          : language === "id"
          ? "id-ID"
          : "en-US";

      const colombiaTime =
        colombiaNow.toLocaleTimeString(locale, {
          timeZone: "America/Bogota",
          hour: "2-digit",
          minute: "2-digit",
        });

      const indonesiaTime =
        indonesiaNow.toLocaleTimeString(locale, {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
        });

      const colombiaDate =
        colombiaNow.toLocaleDateString(locale, {
          timeZone: "America/Bogota",
          day: "numeric",
          month: "long",
          year: "numeric",
        });

      const indonesiaDate =
        indonesiaNow.toLocaleDateString(locale, {
          timeZone: "Asia/Jakarta",
          day: "numeric",
          month: "long",
          year: "numeric",
        });

      setBucaramangaTime(colombiaTime);

      setSurakartaTime(indonesiaTime);

      setBucaramangaDate(colombiaDate);

      setSurakartaDate(indonesiaDate);
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, [language]);

  return (
    <div
      className="
        fixed
        left-6
        top-6
        z-50
        rounded-2xl
        border
        border-white/10
        bg-black/30
        px-5
        py-4
        backdrop-blur-xl
      "
    >
      <div className="space-y-4 text-sm">
        <div className="space-y-1">
          <p className="text-white/80">
            🇨🇴 {t.cities.colombia} — {bucaramangaTime}
          </p>

          <p className="text-white/50 text-xs">
            {bucaramangaDate}
          </p>
        </div>

        <div className="h-px bg-white/10" />

        <div className="space-y-1">
          <p className="text-white/80">
            🇮🇩 {t.cities.indonesia} — {surakartaTime}
          </p>

          <p className="text-white/50 text-xs">
            {surakartaDate}
          </p>
        </div>
      </div>
    </div>
  );
}