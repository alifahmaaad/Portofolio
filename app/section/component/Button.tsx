import { motion } from "framer-motion";
const Button = (props: {
  buttonval: string;
  funct?: Function;
  link?: string;
}) => {
  return (
    <a href={props.link as string}>
      <motion.button
        whileHover={{ scale: 1.2 }}
        className="text-white font-bold rounded-full p-2 md:p-3 border text-sm md:text-lg"
        onClick={() => (props.funct ? props.funct() : null)}
      >
        {props.buttonval}
      </motion.button>
    </a>
  );
};

export default Button;
