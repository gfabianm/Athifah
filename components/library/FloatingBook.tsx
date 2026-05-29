"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import BookModal from "./BookModal";

interface FloatingBookProps {
  title: string;
  author: string;
  content: string;
  rotate?: number;
}

export default function FloatingBook({
  title,
  author,
  content,
  rotate = 0,
}: FloatingBookProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        onClick={() => setOpen(true)}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.04,
          y: -12,
        }}
        style={{
          rotate: `${rotate}deg`,
        }}
        className="
          relative
          h-[180px]
          w-[130px]
          cursor-pointer
          rounded-xl
          border
          border-white/10
          bg-[linear-gradient(to_bottom,#1a1410,#2d221b)]
          p-4
          shadow-2xl
          backdrop-blur-xl
          transition-all
          duration-500
          sm:h-[220px]
          sm:w-[150px]
          sm:p-5
        "
      >
        <div
          className="
            absolute
            inset-0
            rounded-xl
            bg-[radial-gradient(circle_at_top,rgba(255,220,180,0.15),transparent_45%)]
          "
        />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div>
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-[#c8a97e]
                sm:text-xs
              "
            >
              Quiet Archive
            </p>

            <h3
              className="
                mt-3
                text-lg
                leading-tight
                text-[#f5f5f5]
                sm:mt-4
                sm:text-2xl
              "
            >
              {title}
            </h3>
          </div>

          <p
            className="
              text-xs
              text-[#8a8f98]
              sm:text-sm
            "
          >
            {author}
          </p>
        </div>
      </motion.div>

      <BookModal
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        content={content}
      />
    </>
  );
}