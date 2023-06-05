const Cardbox = (props: { text: string; title?: string; imgurl?: string }) => {
  return (
    <div className="bg-white text-gray-700 text-xs sm:text-normal w-[10rem] md:w-72 min-h-[5rem] md:min-h-[10rem] shadow-lg rounded-md overflow-hidden">
      <img src={props.imgurl} className="w-full h-[5rem] md:h-[10rem]" />
      <div className="p-2 px-4">
        <h1 className="font-bold">{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Cardbox;
