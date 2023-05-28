import { motion } from "framer-motion";
const AboutMe = () => {
  return (
    <div>
      <nav className="sticky z-100">
        <div className="flex justify-between pt-4 pb-0 md:py-4  px-4 ">
          <span className="font-bold text-[#4942E4] cherry  text-md lg:text-2xl">
            A
          </span>
          <div className="flex justify-between gap-4 font-bold text-[#4942E4]  text-sm lg:text-lg px-0 lg:px-[2rem]">
            <motion.a
              whileHover={{ scale: 1.2 }}
              className="hover:cursor-pointer hover:text-gray-500"
            >
              Download Resume
            </motion.a>
          </div>
        </div>
      </nav>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center h-[100vh] "
      >
        <div className="px-4 lg:px-[30rem]">
          <span className="text-[#4942E4] font-bold text-5xl lg:text-7xl">
            About Me.
          </span>
          <span className="block text-gray-500 py-5">
            My name is Ahmad Alif Sofian im fresh grasudasdwn dwadhawda
            jwhdahidwaioldwa dhawiodhaw iahwdoiawhda dhwaidhaowilhd whdiahda
            ihwda Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quasi, nam repellat assumenda dolorum modi aperiam magnam facilis.
            Perspiciatis non, sit error suscipit blanditiis itaque voluptatum ut
            esse in quod officia.lorem Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Et odio quidem dolor autem a. Est debitis nostrum
            necessitatibus, placeat consequatur quod veniam in corporis odio
            maxime accusamus officia laudantium cupiditate.
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
