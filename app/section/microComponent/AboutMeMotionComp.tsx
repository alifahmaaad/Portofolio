"use client";
import { motion } from "framer-motion";

const AboutMeMotionComp = ({ children }: { children: React.ReactNode }) => (
  <motion.section
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    className="flex items-center justify-center container mx-auto px-4"
  >
    {children}
  </motion.section>
);

export default AboutMeMotionComp;
