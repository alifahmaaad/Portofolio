import "../../cardbox.css";
const Skillcard = (props: { src: string; text: string }) => {
  return (
    <div className="min-h-[2rem] md:min-h-[5rem] w-[6rem] lg:w-[11rem] shadow-lg rounded-lg zoom">
      <div className="h-[5rem] lg:h-[11rem] flex">
        <img
          className="w-full h-[5rem] lg:h-auto self-center aspect-square object-contain"
          src={"https://alifahmaaad.github.io/Portofolio/" + props.src}
        />
      </div>
      <div className="items-center flex justify-center text-sm lg:text-lg font-semibold ">
        {props.text}
      </div>
    </div>
  );
};

export default Skillcard;
