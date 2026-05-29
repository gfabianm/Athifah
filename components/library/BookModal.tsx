"use client";

interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export default function BookModal({
  open,
  onClose,
  title,
  content,
}: Props) {
  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-black/70
        backdrop-blur-xl
        p-6
      "
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          flex
          h-[88vh]
          w-full
          max-w-5xl
          flex-col
          overflow-hidden
          rounded-[38px]
          border
          border-white/10
          bg-[#1b120d]/95
          shadow-[0_30px_120px_rgba(0,0,0,0.65)]
        "
      >
        {/* subtle ambient light */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top,rgba(255,170,100,0.06),transparent_45%)]
            pointer-events-none
          "
        />

        {/* overlay texture */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_bottom,rgba(255,255,255,0.01),transparent)]
            pointer-events-none
          "
        />

        {/* close button */}
        <button
          onClick={onClose}
          className="
            absolute
            right-8
            top-8
            z-20
            text-3xl
            font-light
            text-white/35
            transition-all
            duration-300
            hover:rotate-90
            hover:text-white
          "
        >
          ×
        </button>

        {/* scroll container */}
        <div
          className="
            relative
            z-10
            flex-1
            overflow-y-auto
            px-10
            pb-20
            pt-16
            md:px-20
            md:pb-24
          "
        >
          {/* title */}
          <h1
            className="
              mb-14
              max-w-4xl
              text-5xl
              font-light
              leading-tight
              text-[#fff7ed]
              md:text-7xl
            "
          >
            {title}
          </h1>

          {/* content */}
          <div
            className="
              whitespace-pre-line
              pr-6
              text-lg
              leading-[2.6]
              text-white/72
              md:text-[22px]
            "
          >
            {content}
          </div>

          {/* extra spacing bottom */}
          <div className="h-16" />
        </div>
      </div>
    </div>
  );
}