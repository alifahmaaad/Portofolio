"use client";
const Button = (props: {
  buttonval: string;
  funct?: Function;
  link?: string;
}) => {
  return (
    <a
      href={props.link as string}
      onClick={() => props.funct?.()}
      className="buttonComp relative text-white hover:cursor-pointer dark:hover:text-white font-bold rounded-full min-w-fit hover:pl-2 hover:pr-7 duration-700 px-2 md:px-3 py-1 border text-sm md:text-lg after:content-['»'] after:absolute after:opacity-0 after:duration-200 hover:after:opacity-100 after:right-6 hover:after:right-2"
    >
      {props.buttonval}
    </a>
  );
};

export default Button;
