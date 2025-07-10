import ScrolledButton from "./microComponent/ScrolledButton";

const Slide1 = ({ id }: { id: string }) => {
  return (
    <div
      className="bg-gradient-to-b lg:bg-gradient-to-r dark:bg-[#34356d] bg-[#0b0ed4]  min-h-[50svh] h-full overflow-x-hidden"
      id={id}
    >
      <div className="min-h-[50svh] ">
        <div className="flex flex-col md:flex-row justify-around px-4 lg:px-[5rem] 2xl:px-[20rem] items-center pt-10 min-h-[50svh] ">
          <div>
            <article className="nama md:px-[5rem] flex md:flex-col flex-row items-center md:items-start gap-5">
              <div>
                <span className="flex py-4 text-white  font-black text-xl md:text-3xl lg:text-5xl">
                  Hi! I'm <br />
                  Ahmad Alif Sofian
                </span>
                <div className="text-white font-bold typewriter flex items-start w-fit text-lg">
                  <h2>Software Developer.</h2>
                </div>
              </div>
              <span className="block pt-5">
                <ScrolledButton buttonval="Let's Talk" />
              </span>
            </article>
          </div>
          <div className=" w-full lg:h-full contents "></div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
