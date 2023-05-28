import Button from "./component/Button";
import { motion } from "framer-motion";

const Slide1 = () => {
  return (
    <div className="bg-gradient-to-b lg:bg-gradient-to-r from-[#4942E4] from-50% to-[#CCF381] to-50% h-[100vh]">
      <nav className="sticky z-100">
        <div className="flex justify-between pt-4 pb-0 md:py-4  px-4 ">
          <span className="font-bold text-white cherry  text-md lg:text-2xl">
            A
          </span>
          <div className="flex justify-between gap-4 font-bold text-white md:text-[#4942E4]  text-sm md:text-lg px-0 md:px-[2rem]">
            <motion.a
              whileHover={{ scale: 1.2 }}
              className="hover:cursor-pointer hover:text-white"
            >
              Download Resume
            </motion.a>
          </div>
        </div>
      </nav>
      <div className="content flex flex-col lg:flex-row justify-between px-4 lg:pl-[10rem] lg:pr=[5rem] 2xl:px-[20rem] items-center py-4 h-full md:h-auto">
        <article className="nama px-[5rem] ">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="flex py-4 text-[#CCF381] font-black text-5xl lg:text-7xl test">
              Frontend <br />
              Developer.
            </span>
            <span className="text-white font-bold text-3xl">
              Ahmad Alif Sofian
            </span>

            <span className="block pt-5">
              <Button buttonval="Check Me" />
            </span>
          </motion.div>
        </article>
        <motion.div
          initial={{ x: "250" }}
          whileInView={{
            x: 0,
            transition: {
              type: "easein",
              duration: 0.8,
            },
          }}
          className="w-[25rem] h-[25rem] lg:w-[35rem] lg:h-[35rem] 2xl:w-[50rem] 2xl:h-[50rem] foto py-4 flex items-center justify-center"
        >
          <svg
            className="absolute -z-0"
            width="550"
            height="550"
            viewBox="-40 0 240 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#4942E4"
              d="M59.1,-58.2C75,-43.1,85.5,-21.5,80.3,-5.2C75.1,11.2,54.3,22.3,38.3,33.5C22.3,44.6,11.2,55.8,-5,60.7C-21.1,65.7,-42.2,64.6,-57.6,53.4C-72.9,42.2,-82.5,21.1,-76.8,5.6C-71.2,-9.9,-50.4,-19.7,-35.1,-34.8C-19.7,-49.9,-9.9,-70.2,5.8,-76C21.5,-81.8,43.1,-73.2,59.1,-58.2Z"
              transform="translate(100 100)"
            />
          </svg>
          <img
            className="absolute border-2 rounded-full drop-shadow-2xl"
            width={250}
            height={250}
            src="https://alifahmaaad.github.io/Portofolio/myimg.jpg"
            alt="profile picture"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Slide1;
