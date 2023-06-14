import Contextindex from "@/app/context";
import { motion } from "framer-motion";
import { useContext } from "react";

const Navcomp = () => {
  const { slideIndex } = useContext(Contextindex);
  const colortext: string =
    slideIndex == 0 || slideIndex == 3 || slideIndex == 5
      ? "text-white "
      : "text-[#0b0ed4] ";
  const colortextforSlide1: string =
    slideIndex == 0
      ? "text-white md:text-[#0b0ed4] "
      : slideIndex == 3 || slideIndex == 5
      ? "text-white "
      : "text-[#0b0ed4] ";
  return (
    <nav className="absolute w-full z-100">
      <div className="flex justify-between pt-4 pb-0 md:py-4  px-4 ">
        <a
          className={colortext + "font-bold cherry text-md lg:text-2xl"}
          href="https://alifahmaaad.github.io/Portofolio/"
        >
          A
        </a>
        <div
          className={
            colortextforSlide1 +
            "flex justify-between gap-4 font-bold text-sm lg:text-lg px-0 lg:px-[2rem]"
          }
        >
          <motion.a
            whileHover={{ scale: 1.2 }}
            className={"hover:cursor-pointer hover:text-gray-500"}
            href="https://alifahmaaad.github.io/Portofolio/Resume-Ahmad Alif Sofian.pdf"
            target="_blank"
          >
            Check My CV
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navcomp;
