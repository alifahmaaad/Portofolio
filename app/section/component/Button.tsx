const Button = (props: {
  buttonval: string;
  funct?: Function;
  link?: string;
}) => {
  return (
    <a href={props.link as string}>
      <button
        className="relative text-white font-bold rounded-full hover:pl-2 hover:pr-7 duration-700 p-2 md:p-3 border text-sm md:text-lg after:content-['\00bb'] after:absolute after:opacity-0 after:duration-200 hover:after:opacity-100 after:right-6 hover:after:right-2"
        onClick={() => (props.funct ? props.funct() : null)}
      >
        {props.buttonval}
      </button>
    </a>
  );
};

export default Button;
