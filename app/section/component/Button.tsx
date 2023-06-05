import { motion } from "framer-motion";
const Button = (props: { buttonval: string; funct?: Function }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      className="text-white font-bold rounded-full p-3 border"
      onClick={() => (props.funct ? props.funct() : null)}
    >
      {props.buttonval}
    </motion.button>
  );
};

export default Button;
