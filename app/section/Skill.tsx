import Navcomp from "./component/Navcomp";
import Skillcard from "./component/Skillcard";
import { motion } from "framer-motion";
const Skill = () => {
  return (
    <div className="h-full">
      <Navcomp />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="h-[100svh] flex flex-col px-[1rem] xl:px-[20rem] justify-center items-center"
      >
        <span className="text-[#0b0ed4] font-bold text-2xl sm:text-5xl lg:text-7xl">
          Skills
        </span>
        <div className="flex flex-wrap justify-center items-center gap-6 py-2 lg:py-10">
          <Skillcard src="react.webp" text="React" />
          <Skillcard src="redux.png" text="Redux" />
          <Skillcard src="javascript.png" text="JavaScript" />
          <Skillcard src="typescript.png" text="TypeScript" />
          <Skillcard src="tailwind.png" text="Tailwind CSS" />
          <Skillcard src="mui.png" text="Material UI" />
          <Skillcard src="html.jpg" text="HTML" />
          <Skillcard src="css.png" text="CSS" />
          <Skillcard src="bootstrap.png" text="Bootstrap CSS" />
          <Skillcard src="php.png" text="PHP" />
        </div>
      </motion.div>
    </div>
  );
};

export default Skill;
