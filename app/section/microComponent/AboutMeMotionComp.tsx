"use client";
import { motion } from "framer-motion";

const AboutMeMotionComp = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center w-full overflow-hidden">
    <motion.div
      initial={{
        opacity: 0,
        x: 150,
        skewX: -5,
        filter: "blur(20px)",
        clipPath: "inset(0% 0% 0% 100%)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        skewX: 0,
        filter: "blur(0px)",
        clipPath: "inset(0% 0% 0% 0%)",
      }}
      viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
      transition={{
        duration: 1.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      }}
      className="w-full flex justify-center"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 2,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2,
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </motion.div>
  </div>
);

export default AboutMeMotionComp;
