import { motion } from "framer-motion";
const AboutMe = () => {
  return (
    <div className="h-full min-h-[50svh]">
      <motion.section
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center container mx-auto px-4"
      >
        <div className="px-4 py-4 md:py-[8rem]">
          <span className="text-[#0b0ed4] font-bold text-2xl sm:text-5xl lg:text-7xl">
            About Me.
          </span>
          <span className="block py-5 font-bold text-sm md:text-lg">
            My name is Ahmad Alif Sofian, and i am a fresh graduate Computer
            Science Bachelor from Institut Teknologi Sumatera (GPA:3.61), I have
            an interest and skills in software development, in the past few
            months I have focused myself on learning more about the JavaScript,
            especially on the ReactJs and ExpressJs frameworks and until now I
            look for jobs according to my interests and skills so I can
            implement my previous experience in the world of work.
          </span>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutMe;
