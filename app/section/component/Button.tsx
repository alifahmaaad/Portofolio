"use client";

const Button = ({
  buttonval,
  funct,
  link,
  isPrimary = true,
}: {
  buttonval: string;
  funct?: Function;
  link?: string;
  isPrimary?: boolean;
}) => {
  return (
    <a
      href={link as string}
      onClick={(e) => {
        if (!link) e.preventDefault();
        funct?.();
      }}
      className={`
        relative inline-flex items-center justify-center overflow-hidden
        px-6 py-2 md:px-8 md:py-3 
        rounded-full font-bold text-sm md:text-base tracking-wide
        transition-all duration-500 ease-out
        group cursor-pointer
        ${
          isPrimary
            ? "bg-[#0b0ed4] dark:bg-violet-600 text-white shadow-[0_10px_20px_-10px_rgba(11,14,212,0.5)] dark:shadow-[0_10px_20px_-10px_rgba(139,92,246,0.5)]"
            : "bg-white/10 dark:bg-white/5 text-[#0b0ed4] dark:text-violet-400 backdrop-blur-md border border-[#0b0ed4]/20 dark:border-violet-500/20"
        }
        hover:pr-10 hover:shadow-xl active:scale-95
      `}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
      <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">
        {buttonval}
      </span>
      <span
        className={`
        absolute right-4 opacity-0 -translate-x-2 transition-all duration-300 ease-out
        group-hover:opacity-100 group-hover:translate-x-0
        ${isPrimary ? "text-white" : "text-[#0b0ed4] dark:text-violet-400"}
      `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14m-7-7 7 7-7 7" />
        </svg>
      </span>
      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </a>
  );
};

export default Button;
