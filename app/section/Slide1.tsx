import Button from "./component/Button";
import { motion } from "framer-motion";

const Slide1 = () => {
  const executeScroll = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  return (
    <div
      className="bg-gradient-to-b lg:bg-gradient-to-r from-white md:from-[#0b0ed4] from-50% to-white md:to-white to-50% min-h-[50svh] h-full overflow-x-hidden"
      id="slide1"
    >
      {/* <div className="min-h-[50svh]  bg-gradient-to-b md:bg-gradient-to-r from-[#0b0ed4] from-50% to-white to-50%"> */}
      <div className="min-h-[50svh] bg-[#0b0ed4]">
        <div className="flex flex-col md:flex-row justify-around px-4 lg:px-[5rem] 2xl:px-[20rem] items-center pt-10 min-h-[50svh] ">
          <div>
            <article className="nama md:px-[5rem] flex md:flex-col flex-row items-center md:items-start gap-5">
              <div>
                <span className="flex py-4 text-white  font-black text-xl md:text-3xl lg:text-5xl">
                  Hi! I'm <br />
                  Ahmad Alif Sofian
                </span>
                <div className="text-white font-bold typewriter flex items-start w-fit text-lg">
                  <h2>Software Engineer.</h2>
                </div>
              </div>
              <span className="block pt-5">
                <Button funct={executeScroll} buttonval="Let's Talk" />
              </span>
            </article>
          </div>
          <div className=" w-full lg:h-full contents ">
            {/* <svg
                className="absolute -z-0 w-[22rem] h-[22rem] lg:w-[35rem] lg:h-[35rem] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#0b0ed4"
                  d="M18.7,-26.8C32.5,-20.1,57.7,-29,64.3,-26C70.8,-23,58.6,-8.2,50.9,3.4C43.2,15.1,40,23.5,36.1,35.3C32.1,47,27.4,62.1,17.4,70.1C7.3,78,-8,78.8,-22.9,75.6C-37.9,72.4,-52.4,65.2,-52.2,52.5C-52,39.7,-37.1,21.5,-36.8,6.8C-36.5,-7.8,-50.8,-18.8,-53.7,-29.5C-56.5,-40.2,-47.9,-50.7,-37,-58.7C-26.2,-66.6,-13.1,-72.2,-5.3,-63.9C2.4,-55.5,4.8,-33.4,18.7,-26.8Z"
                  transform="translate(100 100)"
                />
              </svg> */}
            <motion.img
              initial={{ x: "50%", y: "-50%", opacity: "0" }}
              whileInView={{
                x: "0",
                y: "0",
                opacity: "100%",
                transition: {
                  duration: 0.7,
                },
              }}
              className="w-[13rem] h-[13rem] lg:w-[19rem] lg:h-[19rem] rounded-full border-4 border-black border-opacity-40 shadow-2xl my-10 lg:my-0 object-cover object-top"
              src="https://alifahmaaad.github.io/Portofolio/profile-pic.jpg"
              alt="profile picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
