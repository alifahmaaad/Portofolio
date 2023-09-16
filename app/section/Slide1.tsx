import Button from "./component/Button";
import { motion } from "framer-motion";

const Slide1 = () => {
  const executeScroll = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  return (
    <div
      className="bg-gradient-to-b lg:bg-gradient-to-r dark:bg-[#34356d] bg-[#0b0ed4]  min-h-[50svh] h-full overflow-x-hidden"
      id="slide1"
    >
      {/* <div className="min-h-[50svh]  bg-gradient-to-b md:bg-gradient-to-r from-[#0b0ed4] from-50% to-white to-50%"> */}
      <div className="min-h-[50svh] ">
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
