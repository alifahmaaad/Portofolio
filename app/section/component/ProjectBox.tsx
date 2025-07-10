const ProjectBox = (props: {
  text: string;
  title?: string;
  imgurl?: string;
  link?: string;
  linktext?: string;
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-700 text-xs md:text-normal w-full h-auto md:min-h-[10rem] shadow-lg overflow-hidden relative p-4">
      <div className="flex flex-col sm:flex-row items-center">
        <img
          alt={props.title}
          src={"https://alifahmaaad.github.io/Portofolio/" + props.imgurl}
          className="w-[8rem] lg:w-[10rem] h-[8rem] lg:h-[10rem] aspect-square object-contain shadow-md zoom"
        />
        <div className="p-2 px-2 md:px-4 flex justify-center flex-col">
          <h1 className="font-bold text-lg dark:text-gray-300">
            {props.title}
          </h1>
          <p className="whitespace-pre-line overflow-hidden dark:text-gray-300">
            {props.text}
          </p>
          {props.link && (
            <a
              href={props.link}
              target={props.link != "#" ? "_blank" : "_self"}
              className=" font-semibold hover:font-bold text-md text-[#0b0ed4] dark:text-white"
            >
              {props.linktext}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
