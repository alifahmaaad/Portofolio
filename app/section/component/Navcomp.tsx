import { useEffect, useState } from "react";
import NavbarMobile from "./NavbarMobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
const Navcomp = () => {
  const [navbar, setNavbar] = useState("");
  const [defaultLogo, setLogo] = useState("text-[#0b0ed4] dark:text-white");
  const [defaulttext, setText] = useState("");
  const [isOpen, setisOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [active, setActive] = useState("");
  const [isDark, setIsDark] = useState(false);
  const changeBackground = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 66) {
        setNavbar(
          "bg-white dark:bg-gray-800 shadow-lg transition duration-700 ease-in-out "
        );
        setLogo("text-[#0b0ed4] dark:text-white ");
        setText("text-[#0b0ed4] dark:text-white ");
        setIsScroll(true);
      } else {
        setNavbar("");
        setLogo("text-white ");
        setText("text-white md:text-[#0b0ed4] dark:text-white ");
        setIsScroll(false);
      }
    }
  };
  const handleActiveNavbar = (id: string) => {
    setActive(id);
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  const handleDarkMode = () => {
    if (document.documentElement.className == "dark") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
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
          func={handleActiveNavbar}
          isActive={active}
        />
        <div
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
        </div>
        <div
          className={
            "hidden lg:flex justify-between gap-4 font-semibold text-sm lg:text-base px-0 lg:px-[2rem] nav"
          }
        >
          <button
            className={
              defaulttext +
              "rounded-md bg-white dark:bg-gray-800 px-2 py-1 buttonDarkMode hover:scale-105 flex gap-2 items-center hover:cursor-pointer"
            }
            onClick={() => {
              handleDarkMode();
            }}
          >
            {isDark ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
            <label
              htmlFor="button"
              className={defaulttext + " font-mono hover:cursor-pointer"}
            >
              {isDark ? "Set Light" : "Set Dark"}
            </label>
          </button>
          <a
            href="/#aboutme"
            className={
              defaulttext +
              (active == "#aboutme" ? "active " : "") +
              "rounded-md bg-white dark:bg-gray-800 px-2 py-1 "
            }
            onClick={() => handleActiveNavbar("#aboutme")}
          >
            AboutMe
          </a>
          <a
            href="/#skill"
            className={
              defaulttext +
              (active == "#skill" ? "active " : "") +
              "rounded-md bg-white dark:bg-gray-800 px-2 py-1 "
            }
            onClick={() => handleActiveNavbar("#skill")}
          >
            Skill
          </a>
          <a
            href="/#project"
            className={
              defaulttext +
              (active == "#project" ? "active " : "") +
              "rounded-md bg-white dark:bg-gray-800 px-2 py-1 "
            }
            onClick={() => handleActiveNavbar("#project")}
          >
            Project
          </a>
          <a
            href="/#work"
            className={
              defaulttext +
              (active == "#work" ? "active " : "") +
              "rounded-md bg-white dark:bg-gray-800 px-2 py-1 "
            }
            onClick={() => handleActiveNavbar("#work")}
          >
            Experience
          </a>
          <a
            href="/#certificate"
            className={
              defaulttext +
              (active == "#certificate" ? "active " : "") +
              "rounded-md bg-white dark:bg-gray-800 px-2 py-1 "
            }
            onClick={() => handleActiveNavbar("#certificate")}
          >
            Certificate
          </a>
          <a
            href="/#sendme"
            className={
              defaulttext +
              (active == "#sendme" ? "active " : "") +
              "rounded-md bg-white dark:bg-gray-800 px-2 py-1 "
            }
            onClick={() => handleActiveNavbar("#sendme")}
          >
            SendMe
          </a>
          <a
            className={
              defaulttext + "rounded-md bg-white dark:bg-gray-800 px-2 py-1 "
            }
            href="https://alifahmaaad.github.io/Portofolio/Resume-Ahmad Alif Sofian.pdf"
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
