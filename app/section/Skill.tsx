import Skillcard from "./component/Skillcard";
import { motion } from "framer-motion";
const Skill = () => {
  return (
    <div className="h-full pb-[10rem] min-h-[50svh] pt-20" id="skill">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=" flex flex-col container mx-auto px-4 justify-center items-center min-h-[50svh] max-w-[60rem]"
      >
        <div className="flex">
          <span className="text-[#0b0ed4] dark:text-white font-bold text-xl md:text-3xl lg:text-5xl">
            Skills.
          </span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 py-2 lg:py-10">
          <Skillcard src="react.webp" text="React" />
          <Skillcard src="redux.png" text="Redux" />
          <Skillcard src="JavaScript.png" text="JavaScript" />
          {/* <Skillcard src="typescript.png" text="TypeScript" /> */}
          <Skillcard src="tailwind.png" text="Tailwind CSS" />
          <Skillcard src="mui.png" text="Material UI" />
          <Skillcard src="html.jpg" text="HTML" />
          <Skillcard src="css.png" text="CSS" />
          <Skillcard src="bootstrap.png" text="Bootstrap CSS" />
          <Skillcard src="php.png" text="PHP" />
          <Skillcard src="expressjs.jpg" text="Express JS" />
          <Skillcard src="springboot.png" text="SpringBoot" />
          <Skillcard src="java.webp" text="Java" />
        </div>
      </motion.div>
    </div>
  );
};

export default Skill;
