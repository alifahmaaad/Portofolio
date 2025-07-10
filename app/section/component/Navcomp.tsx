"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import sectionOrder from "../JSONData/SectionOrder.json";
import NavbarMobile from "./NavbarMobile";

const Navcomp = () => {
  const [navbar, setNavbar] = useState("");
  const [defaultLogo, setDefaultLogo] = useState(
    "text-[#0b0ed4] dark:text-white"
  );
  const [defaultText, setDefaultText] = useState("");
  const [isOpen, setisOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [active, setActive] = useState("");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedValue = localStorage.getItem("isDark");
    if (savedValue === "true") document.documentElement.classList.add("dark");
    if (savedValue) {
      setIsDark(savedValue === "true");
    } else {
      localStorage.setItem("isDark", isDark.toString());
    }
  }, []);

  useLayoutEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  const changeBackground = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 66) {
        setNavbar(
          "bg-white dark:bg-gray-800 shadow-lg transition duration-700 ease-in-out "
        );
        setDefaultLogo("text-[#0b0ed4] dark:text-white ");
        setDefaultText("text-[#0b0ed4] dark:text-white ");
        setIsScroll(true);
      } else {
        setNavbar("");
        setDefaultLogo("text-white");
        setDefaultText("text-white md:text-[#0b0ed4] dark:text-white ");
        setIsScroll(false);
      }
    }
  };

  const handleActiveNavbar = (id: string) => {
    setActive(id);
  };

  const handleDarkMode = () => {
    if (document.documentElement.className == "dark") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
    const newIsDark = !isDark;
    localStorage.setItem("isDark", newIsDark.toString());
  };

  return (
    <nav className="fixed w-full z-20">
      <div className={navbar + "flex justify-between py-4  px-4"}>
        <div className="flex gap-2">
          <a
            className={defaultLogo + "  font-bold cherry text-md lg:text-2xl"}
            href="https://alifahmaaad.github.io/Portofolio/"
          >
            A
          </a>
        </div>
        <NavbarMobile
          open={isOpen}
          funcIsOpen={setisOpen}
          func={handleActiveNavbar}
          funcHandleDarkMode={handleDarkMode}
          isActive={active}
          isDark={isDark}
        />
        <button
          className={
            (isOpen ? "translate-y-2 " : "") +
            "font-bold flex lg:hidden absolute z-50 right-0 top-0 p-5 flex-col gap-1 group duration-700"
          }
          onClick={() => setisOpen(!isOpen)}
        >
          <span
            className={
              (isOpen
                ? "rotate-45 dark:bg-[#34356d] bg-[#0b0ed4] "
                : isScroll
                ? "dark:bg-[#34356d] bg-[#0b0ed4] "
                : "bg-white dark:bg-gray-800 ") + "w-4 h-[2px]  duration-700"
            }
          />
          <span
            className={
              (isOpen ? "opacity-0 " : "opacity-100 ") +
              (isScroll
                ? "dark:bg-[#34356d] bg-[#0b0ed4] "
                : "bg-white dark:bg-gray-800 ") +
              "w-4 h-[2px]  duration-700"
            }
          />
          <span
            className={
              (isOpen
                ? "-rotate-45 absolute dark:bg-[#34356d] bg-[#0b0ed4] "
                : isScroll
                ? "dark:bg-[#34356d] bg-[#0b0ed4] "
                : "bg-white dark:bg-gray-800 ") + "w-4 h-[2px]"
            }
          />
        </button>
        <div
          className={
            "hidden lg:flex justify-between gap-4 font-semibold text-sm lg:text-base px-0 lg:px-[2rem] nav"
          }
        >
          <button
            className={
              defaultText +
              "rounded-md bg-white dark:bg-gray-800 px-2 py-1 buttonDarkMode hover:scale-105 flex gap-2 items-center hover:cursor-pointer"
            }
            onClick={() => {
              handleDarkMode();
            }}
          >
            {isDark ? (
              <FontAwesomeIcon icon={faSun} className="max-h-[1rem]" />
            ) : (
              <FontAwesomeIcon icon={faMoon} className="max-h-[1rem]" />
            )}
            <label
              htmlFor="button"
              className={
                defaultText +
                " font-mono hover:cursor-pointer w-fit line-clamp-1"
              }
            >
              {isDark ? "Set Light" : "Set Dark"}
            </label>
          </button>
          {sectionOrder
            .filter((section) => section.isShowInNavbar)
            .toSorted((a, b) => a.order - b.order)
            .map((section) => {
              return (
                <a
                  href={`#${section.id}`}
                  key={section.id}
                  className={
                    defaultText +
                    (active == `#${section.id}` ? "active " : "") +
                    "rounded-md bg-white dark:bg-gray-800 px-2 py-1 "
                  }
                  onClick={() => handleActiveNavbar(`#${section.id}`)}
                >
                  {section.name}
                </a>
              );
            })}
          <a
            className={
              defaultText + "rounded-md bg-white dark:bg-gray-800 px-2 py-1 "
            }
            href="https://alifahmaaad.github.io/Portofolio/CV_AhmadAlifSofian_2025.pdf"
            target="_blank"
          >
            Click it! Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navcomp;
