"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import SunsetAudio from "@/components/ui/SunsetAudio";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

import FloatingQuotes from "@/components/effects/FloatingQuotes";

import BookModal from "@/components/library/BookModal";

import { useLanguage } from "@/lib/LanguageContext";

import { books } from "@/data/books";

export default function Home() {
  const { language } = useLanguage();

  const [selectedBook, setSelectedBook] =
    useState<number | null>(null);

  const currentBooks = books[language];

  const title =
    language === "es"
      ? "algunas conversaciones duran más de lo esperado"
      : language === "id"
      ? "beberapa percakapan tinggal lebih lama dari yang diperkirakan"
      : "some conversations stay longer than expected";

  const bookColors = [
    "from-[#c6a27f] to-[#b98d68]",
    "from-[#8e9bb4] to-[#74839e]",
    "from-[#b9825d] to-[#9f6c49]",
    "from-[#9f857a] to-[#8d7168]",
    "from-[#705d69] to-[#5f4e59]",
    "from-[#7f8796] to-[#6d7482]",
  ];

  return (
    <main
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#1a120d]
        px-4
        py-24
      "
    >
      <FloatingQuotes />

      <SunsetAudio />

      {/* warm background */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,180,120,0.18),transparent_35%)]
        "
      />

      {/* sunset glow */}
      <div
        className="
          absolute
          bottom-[-250px]
          left-1/2
          h-[500px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-[#ffb36b]/10
          blur-3xl
        "
      />

      {/* center light */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[400px]
          w-[400px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#ffb36b]/[0.06]
          blur-3xl
        "
      />

      {/* cinematic overlay */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15),rgba(20,10,5,0.55))]
        "
      />

      <div
        className="
          relative
          z-10
          flex
          max-w-7xl
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        {/* language switch */}
        <div className="mb-14">
          <LanguageSwitcher />
        </div>

        {/* title */}
        <h1
          className="
            max-w-5xl
            text-4xl
            font-light
            leading-[1.1]
            text-[#fff7ed]
            sm:text-5xl
            md:text-7xl
          "
        >
          {title}
        </h1>

        {/* books */}
        <div
          className="
            mt-24
            flex
            flex-wrap
            items-center
            justify-center
            gap-12
            px-8
          "
        >
          {currentBooks.map((book, index) => (
            <div
              key={book.title}
              onClick={() => setSelectedBook(index)}
              className={`
                group
                relative
                flex
                h-[290px]
                w-[190px]
                cursor-pointer
                items-center
                justify-center
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-gradient-to-b
                ${bookColors[index]}
                px-8
                text-center
                shadow-[0_25px_80px_rgba(0,0,0,0.45)]
                transition-all
                duration-500
                hover:-translate-y-4
                hover:scale-[1.03]
                hover:border-[#ffb36b]/30
                ${
                  index % 2 === 0
                    ? "-rotate-2"
                    : "rotate-2"
                }
              `}
            >
              {/* glow */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                  bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_70%)]
                "
              />

              {/* spine */}
              <div
                className="
                  absolute
                  left-5
                  top-0
                  h-full
                  w-[1px]
                  bg-white/20
                "
              />

              {/* inner shadow */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-[28px]
                  shadow-[inset_0_0_60px_rgba(0,0,0,0.12)]
                "
              />

              {/* title */}
              <h2
                className="
                  relative
                  max-w-[140px]
                  text-3xl
                  font-light
                  leading-tight
                  text-[#fff7ed]
                  drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]
                "
              >
                {book.title}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* modal */}
      <BookModal
        open={selectedBook !== null}
        onClose={() => setSelectedBook(null)}
        title={
          selectedBook !== null
            ? currentBooks[selectedBook].title
            : ""
        }
        content={
          selectedBook !== null
            ? currentBooks[selectedBook].content
            : ""
        }
      />
    </main>
  );
}