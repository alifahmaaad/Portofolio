"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const GoToHomePage = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY >= 20);
    };

    const savedValue = localStorage.getItem("isDark");
    if (savedValue === "true") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("isDark", newIsDark.toString());
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScroll
          ? "py-3 bg-white/80 dark:bg-[#03030d]/80 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="group flex items-center gap-2 w-fit">
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
              isScroll
                ? "bg-[#0b0ed4] text-white dark:bg-violet-500"
                : "bg-white dark:bg-white/10 text-[#0b0ed4] dark:text-white shadow-md"
            } group-hover:-translate-x-1`}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
          </div>

          <span
            className={`font-black tracking-tighter text-lg lg:text-xl transition-colors duration-300 ${
              isScroll
                ? "text-slate-900 dark:text-white"
                : "text-[#0b0ed4] dark:text-white drop-shadow-md"
            }`}
          >
            Back <span className="hidden sm:inline">to Home</span>
          </span>
        </Link>

        <button
          onClick={handleDarkMode}
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500
            ${
              isScroll
                ? "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-white border border-slate-200/50 dark:border-transparent"
                : "bg-white/20 dark:bg-white/10 text-[#0b0ed4] dark:text-white backdrop-blur-md border border-white/30"
            }
            hover:scale-110 active:scale-95 shadow-sm
          `}
        >
          <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="text-lg" />
        </button>
      </div>
    </nav>
  );
};

export default GoToHomePage;
