import Contextindex from "@/app/context";
import { motion } from "framer-motion";
import { useContext } from "react";

const Navcomp = () => {
  const { slideIndex } = useContext(Contextindex);
  return (
    <nav className="absolute w-full z-100">
      <div className="flex justify-between pt-4 pb-0 md:py-4  px-4 ">
        <span className="font-bold text-[#0b0ed4] cherry  text-md lg:text-2xl">
          A
        </span>
        <div className="flex justify-between gap-4 font-bold text-[#0b0ed4] text-sm lg:text-lg px-0 lg:px-[2rem]">
          <motion.a
            whileHover={{ scale: 1.2 }}
            className="hover:cursor-pointer hover:text-gray-500"
          >
            Check My CV
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navcomp;
