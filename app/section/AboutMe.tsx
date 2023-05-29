import { motion } from "framer-motion";
import Navcomp from "./component/Navcomp";
const AboutMe = () => {
  return (
    <div className="h-full">
      <Navcomp />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center h-[100vh] "
      >
        <div className="px-4 xl:px-[25rem]">
          <span className="text-[#0b0ed4] font-bold text-5xl lg:text-7xl">
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
