const Cardbox = (props: { text: string; title?: string; imgurl?: string }) => {
  return (
    <div className="bg-white text-gray-700 w-[7rem] md:w-72 min-h-[5rem] md:min-h-[10rem] shadow-lg rounded-md overflow-hidden">
      <img src={props.imgurl} className="w-full h-[5rem] md:h-[10rem]" />
      <span>
        <h1 className="font-bold">Ahmad alif Sofian</h1>
        <p>
          testsetstets
          {props.text}
        </p>
      </span>
    </div>
  );
};

export default Cardbox;
