import "../../cardbox.css";
const Cardbox = (props: {
  text: string;
  title?: string;
  imgurl?: string;
  link?: string;
  linktext?: string;
}) => {
  return (
    <div className="bg-white text-gray-700 text-xs md:text-normal w-72 h-[16rem] sm:h-auto md:min-h-[10rem] shadow-lg rounded-md overflow-hidden zoom relative">
      <a href={props.link}>
        {props.link && (
          <div className="absolute flex items-center justify-center w-full h-full opacity-0 hover:opacity-70 bg-black text-white font-bold">
            {props.linktext}
          </div>
        )}

        <div className="flex justify-center">
          <img
            src={"https://alifahmaaad.github.io/Portofolio" + props.imgurl}
            className="w-[10rem] lg:w-full h-[5rem] lg:h-[10rem] self-center my-2 lg:my-0"
          />
        </div>
        <div className="p-2 px-2 md:px-4">
          <h1 className="font-bold">{props.title}</h1>
          <p className="overflow-hidden">{props.text}</p>
          {/* {props.link && (
            <a href={props.link} className="text-blue-500 hover:font-bold">
              {props.linktext}
            </a>
          )} */}
        </div>
      </a>
    </div>
  );
};

export default Cardbox;
