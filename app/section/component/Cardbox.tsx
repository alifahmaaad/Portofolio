const Cardbox = (props: { text: string; title?: string; imgurl?: string }) => {
  return (
    <div className="bg-white text-gray-700 text-xs sm:text-normal w-[11rem] md:w-72 h-[15rem] sm:h-auto md:min-h-[10rem] shadow-lg rounded-md overflow-hidden">
      <img
        src={"https://alifahmaaad.github.io/Portofolio" + props.imgurl}
        className="w-full h-[5rem] md:h-[10rem]"
      />
      <div className="p-2 px-0 md:px-4">
        <h1 className="font-bold">{props.title}</h1>
        <p className="overflow-hidden">{props.text}</p>
      </div>
    </div>
  );
};

export default Cardbox;
