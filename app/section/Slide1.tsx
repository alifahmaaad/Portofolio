import Button from "./component/Button";
import { motion } from "framer-motion";
import Navcomp from "./component/Navcomp";

const Slide1 = () => {
  return (
    <div className="bg-gradient-to-b lg:bg-gradient-to-r from-white md:from-[#0b0ed4] from-50% to-white md:to-white to-50% h-full">
      <div className="relative h-[100vh] bg-gradient-to-b md:bg-gradient-to-r from-[#0b0ed4] from-50% to-white to-50%">
        <Navcomp />
        <div className="flex flex-col md:flex-row justify-around px-4 lg:pr=[5rem] 2xl:px-[20rem] items-center py-4 h-full ">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <article className="nama px-[5rem] contents ">
              <span className="flex py-4 text-white  font-black text-5xl lg:text-7xl test">
                Hi! I'm <br />
                Ahmad Alif <br /> Sofian
              </span>
              <span className="text-white font-bold text-3xl">
                A Frontend Developer.
              </span>

              <span className="block pt-5">
                <Button buttonval="Let's Talk" />
              </span>
            </article>
          </motion.div>
          <div className="contents">
            <motion.div
              initial={{ x: "100%", y: "-100%" }}
              whileInView={{
                x: "0",
                y: "0",
                transition: {
                  duration: 0.7,
                },
              }}
              className="relative w-full md:w-[20rem] h-[20rem] lg:h-full"
            >
              <svg
                className="absolute -z-0 w-[22rem] h-[22rem] lg:w-[35rem] lg:h-[35rem] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#0b0ed4"
                  d="M18.7,-26.8C32.5,-20.1,57.7,-29,64.3,-26C70.8,-23,58.6,-8.2,50.9,3.4C43.2,15.1,40,23.5,36.1,35.3C32.1,47,27.4,62.1,17.4,70.1C7.3,78,-8,78.8,-22.9,75.6C-37.9,72.4,-52.4,65.2,-52.2,52.5C-52,39.7,-37.1,21.5,-36.8,6.8C-36.5,-7.8,-50.8,-18.8,-53.7,-29.5C-56.5,-40.2,-47.9,-50.7,-37,-58.7C-26.2,-66.6,-13.1,-72.2,-5.3,-63.9C2.4,-55.5,4.8,-33.4,18.7,-26.8Z"
                  transform="translate(100 100)"
                />
              </svg>
              <motion.img
                className="border-2   shadow-2xl w-[180px] h-[180px] lg:w-[250px] lg:h-[250px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                src="https://alifahmaaad.github.io/Portofolio/myimg.jpg"
                alt="profile picture"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
