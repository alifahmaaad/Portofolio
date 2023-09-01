import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavbarMobile from "./NavbarMobile";
const Navcomp = () => {
  const [navbar, setNavbar] = useState("");
  const [defaultLogo, setLogo] = useState("");
  const [defaulttext, setText] = useState("");
  const [isOpen, setisOpen] = useState(false);
  const url = usePathname();
  const changeBackground = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 66) {
        setNavbar("bg-white shadow-lg transition duration-700 ease-in-out ");
        setLogo("text-[#0b0ed4] ");
        setText("text-[#0b0ed4] ");
      } else {
        setNavbar("");
        setLogo("text-white ");
        setText("text-white md:text-[#0b0ed4] ");
      }
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <nav className="fixed w-full z-20">
      <div className={navbar + "flex justify-between py-4  px-4 "}>
        <a
          className={defaultLogo + "  font-bold cherry text-md lg:text-2xl"}
          href="https://alifahmaaad.github.io/Portofolio/"
        >
          A
        </a>
        <NavbarMobile open={isOpen} />
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
                ? "rotate-45 bg-[#0b0ed4] "
                : window.scrollY >= 66
                ? "bg-[#0b0ed4] "
                : "bg-white md:bg-[#0b0ed4] ") + "w-4 h-[2px]  duration-700"
            }
          />
          <span
            className={
              (isOpen ? "opacity-0 " : "opacity-100 ") +
              (window.scrollY >= 66
                ? "bg-[#0b0ed4] "
                : "bg-white md:bg-[#0b0ed4] ") +
              "w-4 h-[2px]  duration-700"
            }
          />
          <span
            className={
              (isOpen
                ? "-rotate-45 absolute bg-[#0b0ed4] "
                : window.scrollY >= 66
                ? "bg-[#0b0ed4] "
                : "bg-white md:bg-[#0b0ed4] ") + "w-4 h-[2px]"
            }
          />
        </div>
        <div
          className={
            "hidden lg:flex justify-between gap-4 font-semibold text-sm lg:text-base px-0 lg:px-[2rem] nav"
          }
        >
          <a
            href="#aboutme"
            className={defaulttext + "rounded-full bg-white px-2 py-1 border"}
          >
            AboutMe
          </a>
          <a
            href="#skill"
            className={defaulttext + "rounded-full bg-white px-2 py-1 border"}
          >
            Skill
          </a>
          <a
            href="#project"
            className={defaulttext + "rounded-full bg-white px-2 py-1 border"}
          >
            Project
          </a>
          <a
            href="#work"
            className={defaulttext + "rounded-full bg-white px-2 py-1 border"}
          >
            Experience
          </a>
          <a
            href="#certificate"
            className={defaulttext + "rounded-full bg-white px-2 py-1 border"}
          >
            Certificate
          </a>
          <a
            href="#sendme"
            className={defaulttext + "rounded-full bg-white px-2 py-1 border"}
          >
            SendMe
          </a>
          <a
            className={defaulttext + "rounded-full bg-white px-2 py-1 border"}
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
