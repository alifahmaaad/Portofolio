const Button = (props: { buttonval: string }) => {
  return (
    <button className="text-[#CCF381] font-bold rounded-full p-3 border">
      {props.buttonval}
    </button>
  );
};

export default Button;
