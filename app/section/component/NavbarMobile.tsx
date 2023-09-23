import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const NavbarMobile = (props: {
  open: boolean;
  func: Function;
  isActive: string;
}) => {
  const [isDark, setIsDark] = useState(false);
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
    <div
      className={
        (props.open
          ? "w-screen h-full opacity-100"
          : "w-0 h-full opacity-0 px-0") +
        " top-0 left-0 bg-white dark:bg-gray-800 fixed z-30 flex flex-col gap-5 p-5 shadow-lg nav duration-700 overflow-hidden font-semibold pt-14"
      }
    >
      <button
        className="dark:text-white buttonDarkMode hover:scale-105 flex gap-2 items-center hover:cursor-pointer"
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
          className="font-mono dark:text-white hover:cursor-pointer"
        >
          {isDark ? "Set Light" : "Set Dark"}
        </label>
      </button>
      <a
        href="Portofolio/#aboutme"
        className={
          props.isActive == "#aboutme" ? "active " : "dark:text-white "
        }
        onClick={() => props.func("#aboutme")}
      >
        AboutMe
      </a>
      <a
        href="Portofolio/#skill"
        className={props.isActive == "#skill" ? "active " : "dark:text-white "}
        onClick={() => props.func("#skill")}
      >
        Skill
      </a>
      <a
        href="Portofolio/#project"
        className={
          props.isActive == "#project" ? "active " : "dark:text-white "
        }
        onClick={() => props.func("#project")}
      >
        Project
      </a>
      <a
        href="Portofolio/#work"
        className={props.isActive == "#work" ? "active " : "dark:text-white "}
        onClick={() => props.func("#work")}
      >
        Experience
      </a>
      <a
        href="Portofolio/#certificate"
        className={
          props.isActive == "#certificate" ? "active " : "dark:text-white "
        }
        onClick={() => props.func("#certificate")}
      >
        Certificate
      </a>
      <a
        href="Portofolio/#sendme"
        className={props.isActive == "#sendme" ? "active " : "dark:text-white "}
        onClick={() => props.func("#sendme")}
      >
        SendMe
      </a>
      <a
        href="https://alifahmaaad.github.io/Portofolio/Resume-Ahmad Alif Sofian.pdf"
        className="dark:text-white "
      >
        Download resume
      </a>
    </div>
  );
};

export default NavbarMobile;
