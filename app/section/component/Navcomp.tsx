import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const Navcomp = () => {
  const [navbar, setNavbar] = useState("");
  const [defaultLogo, setLogo] = useState("");
  const [defaulttext, setText] = useState("");
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
        {/* <div className="font-bold flex lg:hidden">X</div> */}
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
