import { motion } from "framer-motion";
const AboutMe = () => {
  return (
    <div className="h-full min-h-[50svh-24px] flex pt-10" id="aboutme">
      <motion.section
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center container mx-auto px-4"
      >
        <div className="px-4 py-4 md:py-[8rem]">
          <span className="text-[#0b0ed4] dark:text-white font-bold text-xl md:text-3xl lg:text-5xl">
            About Me.
          </span>
          <span className="block py-5 font-serif text-sm md:text-lg max-w-[35rem] dark:text-gray-300">
            Fresh graduate Computer Science Bachelor from Institut Teknologi
            Sumatera (GPA:3.61), Interest in{" "}
            <b className="font-semibold text-[#0b0ed4] dark:text-white">
              software Enginner
            </b>
            ,I usually develop Javascript and interest learn technologies that
            can improve my skills. My aim is to be able develop digitally
            products that have a positive impact on the environment.
          </span>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutMe;
