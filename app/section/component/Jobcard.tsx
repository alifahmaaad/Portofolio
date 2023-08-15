import "../../cardbox.css";
const Jobcard = (props: {
  imgurl?: string;
  text: string;
  role?: string;
  companie?: string;
  year?: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:min-h-[5rem] gap-[1rem] py-3">
      <img
        src={"https://alifahmaaad.github.io/Portofolio" + props.imgurl}
        className="h-[8rem] w-[8rem] sm:w-[10rem] sm:h-[10rem] zoom aspect-square object-contain"
      />
      <div className="flex flex-col">
        <h1 className="font-bold text-md sm:text-xl">{props.role}</h1>
        <h2 className="font-bold text-sm sm:text-md">
          {props.companie} - {props.year}
        </h2>
        <p className=" text-gray-500 py-2 overflow-hidden text-sm sm:text-md">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default Jobcard;
