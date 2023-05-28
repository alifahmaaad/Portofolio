import { motion } from "framer-motion";
const Button = (props: { buttonval: string }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      className="text-[#CCF381] font-bold rounded-full p-3 border"
    >
      {props.buttonval}
    </motion.button>
  );
};

export default Button;
