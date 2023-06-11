import { motion } from "framer-motion";
const NavCompfor = () => {
  return (
    <nav className="absolute w-full z-100">
      <div className="flex justify-between pt-4 pb-0 md:py-4  px-4 ">
        <a
          className="text-[#0b0ed4] font-bold cherry text-md lg:text-2xl"
          href="https://alifahmaaad.github.io/Portofolio/"
        >
          A
        </a>
        <div
          className={
            "text-[#0b0ed4] flex justify-between gap-4 font-bold text-sm lg:text-lg px-0 lg:px-[2rem]"
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

export default NavCompfor;
