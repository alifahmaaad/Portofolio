import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const Navcomp = () => {
  const [navbar, setNavbar] = useState("");
  const [defaultLogo, setLogo] = useState("");
  const [defaulttext, setText] = useState("");
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
    <nav className="fixed w-full z-[100]">
      <div className={navbar + "flex justify-between py-4  px-4 "}>
        <a
          className={defaultLogo + "  font-bold cherry text-md lg:text-2xl"}
          href="https://alifahmaaad.github.io/Portofolio/"
        >
          A
        </a>
        <div
          className={
            "flex justify-between gap-4 font-bold text-sm lg:text-lg px-0 lg:px-[2rem]"
          }
        >
          <motion.a
            whileHover={{ scale: 1.2 }}
            className={defaulttext + "hover:cursor-pointer hover:text-gray-500"}
            href="https://alifahmaaad.github.io/Portofolio/Resume-Ahmad Alif Sofian.pdf"
            target="_blank"
          >
            Click it! Download Resume
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navcomp;
