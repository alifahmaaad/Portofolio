import { motion } from "framer-motion";
import Navcomp from "./component/Navcomp";
const AboutMe = () => {
  return (
    <div className="h-full">
      <Navcomp />
      <motion.section
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center h-[100svh]"
      >
        <div className="px-4 xl:px-[25rem]">
          <span className="text-[#0b0ed4] font-bold text-2xl sm:text-5xl lg:text-7xl">
            About Me.
          </span>
          <span className="block text-gray-500 py-5">
            My name is Ahmad Alif Sofian, and i am a fresh graduate Computer
            Science Bachelor from Institut Teknologi Sumatera (GPA:3.61), I have
            an interest and skill in software development, especially in
            frontend development, I have worked on several projects using
            javascript libraries such as ReactJS, Redux, React Router, Context
            etc. Frontend frameworks like React Native, NextJS, Laravel ,etc.
            CSS frameworks like Tailwind, Material UI, and Bootstrap. Now, I
            want to improve my skills by studying such as CSS, HTML, Frontend
            Framework, Javascript and Finding a job that supports my interests.
          </span>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutMe;
