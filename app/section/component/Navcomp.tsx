"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import sectionOrder from "../JSONData/SectionOrder.json";
import NavbarMobile from "./NavbarMobile";

const Navcomp = () => {
  const [isOpen, setisOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [active, setActive] = useState("");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedValue = localStorage.getItem("isDark");
    const theme =
      savedValue === "true" ||
      (!savedValue &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (theme) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sectionOrder.forEach((section) => {
      if (section.id) {
        const element = document.getElementById(section.id);
        if (element) observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleActiveNavbar = (id: string) => setActive(id);

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
    <nav className="fixed w-full z-[100] transition-all duration-500">
      <div
        className={`
        mx-auto flex justify-between items-center py-4 px-6 lg:px-12 transition-all duration-500
        ${
          isScroll && !isOpen
            ? "bg-white/90 dark:bg-[#03030d]/90 backdrop-blur-md shadow-lg py-3 border-b border-slate-200 dark:border-white/5"
            : "bg-transparent py-5"
        }
      `}
      >
        <div className="flex items-center">
          <a
            className={`font-black text-2xl lg:text-3xl tracking-tighter transition-colors duration-500
              ${isScroll ? "text-[#0b0ed4] dark:text-violet-400" : "text-[#0b0ed4] dark:text-white"}
            `}
            href="#"
          >
            A<span className="text-violet-600">.</span>
          </a>
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <div
            className={`flex gap-1 p-1 rounded-2xl transition-all duration-500 
            ${
              isScroll
                ? "bg-slate-200/60 dark:bg-white/5 border border-slate-300/50 dark:border-transparent"
                : "bg-black/5 dark:bg-white/10"
            }`}
          >
            {sectionOrder
              .filter((section) => section.isShowInNavbar)
              .sort((a, b) => a.order - b.order)
              .map((section) => (
                <a
                  href={`#${section.id}`}
                  key={section.id}
                  className={`
                    px-4 py-2 rounded-xl text-sm font-bold tracking-wide transition-all duration-300
                    ${
                      active === `#${section.id}`
                        ? "bg-[#0b0ed4] dark:bg-violet-600 text-white shadow-md scale-105"
                        : isScroll
                          ? "text-slate-700 dark:text-slate-400 hover:text-[#0b0ed4] dark:hover:text-white"
                          : "text-slate-900 dark:text-white hover:text-[#0b0ed4] dark:hover:text-white"
                    }
                  `}
                  onClick={() => handleActiveNavbar(`#${section.id}`)}
                >
                  {section.name}
                </a>
              ))}
          </div>

          <div className="flex items-center gap-3 ml-4">
            <button
              onClick={handleDarkMode}
              className={`
                w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500
                ${
                  isScroll
                    ? "bg-slate-200/60 dark:bg-white/5 text-slate-700 dark:text-white border border-slate-300/50"
                    : "bg-black/5 dark:bg-white/10 text-slate-900 dark:text-white"
                }
                hover:scale-110 active:scale-95
              `}
            >
              <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
            </button>

            <a
              className={`
                px-5 py-2.5 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-500
                ${
                  isScroll
                    ? "bg-[#0b0ed4] dark:bg-violet-600 text-white shadow-lg shadow-blue-500/20"
                    : "bg-[#0b0ed4] text-white dark:bg-violet-600 dark:text-white"
                }
                hover:-translate-y-1 active:translate-y-0
              `}
              href="https://drive.google.com/file/d/12m2T1lEx9RmIyah9HoPuQnvka-OmahCP/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="lg:hidden flex items-center">
          <NavbarMobile
            open={isOpen}
            funcIsOpen={setisOpen}
            func={handleActiveNavbar}
            funcHandleDarkMode={handleDarkMode}
            isActive={active}
            isDark={isDark}
            isScroll={isScroll}
          />

          <button
            className={`relative z-[110] flex flex-col gap-1.5 p-3 rounded-full transition-all duration-300
              ${isScroll && !isOpen ? "bg-slate-100 dark:bg-white/5" : ""}
            `}
            onClick={() => setisOpen(!isOpen)}
          >
            <span
              className={`w-5 h-0.5 rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2 bg-slate-900 dark:bg-white" : "bg-slate-900 dark:bg-white"}`}
            />
            <span
              className={`w-5 h-0.5 rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""} bg-slate-900 dark:bg-white`}
            />
            <span
              className={`w-5 h-0.5 rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2 bg-slate-900 dark:bg-white" : "bg-slate-900 dark:bg-white"}`}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navcomp;
