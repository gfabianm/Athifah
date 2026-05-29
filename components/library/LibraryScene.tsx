"use client";

import FloatingBook from "./FloatingBook";

import { translations } from "@/data/translations";
import { useLanguage } from "@/lib/LanguageContext";

export default function LibraryScene() {
  const { language } = useLanguage();

  const t = translations[language];

  return (
    <div
      className="
        relative
        mt-16
        flex
        flex-wrap
        items-center
        justify-center
        gap-6
        md:mt-24
        md:gap-10
      "
    >
      <FloatingBook
        title={t.books.first.title}
        author="Fabian & Athifah"
        rotate={-6}
        content={`"Should I learn Spanish so we can communicate?"\n\nSometimes the distance between two people isn't measured in kilometers, but in words they still don't know how to say.`}
      />

      <FloatingBook
        title={t.books.second.title}
        author="Indonesia Archive"
        rotate={4}
        content={`A quiet city.\nMotorcycles under rain.\nWarm lights reflected on wet streets.\nA teacher coming home exhausted after another long day.`}
      />

      <FloatingBook
        title={t.books.third.title}
        author="Quiet Conversations"
        rotate={-2}
        content={`Religion.\nCulture.\nSleep schedules.\nBooks.\nGym routines.\nLanguages.\nSmall jokes that didn't translate correctly.\n\nAnd still, somehow, understanding kept happening.`}
      />
    </div>
  );
}