"use client";
import { motion } from "framer-motion";

export default ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col container mx-auto px-4 justify-center items-center min-h-[50svh] max-w-[60rem]"
  >
    {children}
  </motion.div>
);
