const Jobcard = (props: {
  imgurl?: string;
  text: string;
  role?: string;
  companie?: string;
  year?: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:min-h-[5rem] gap-[1rem] py-3">
      <img src={props.imgurl} className="h-full w-[5rem] md:w-[10rem]" />
      <div className="flex flex-col">
        <h1 className="font-bold text-xl">{props.role}</h1>
        <h2 className="font-bold">
          {props.companie} - {props.year}
        </h2>
        <p className=" text-gray-500 py-2 overflow-hidden">{props.text}</p>
      </div>
    </div>
  );
};

export default Jobcard;
