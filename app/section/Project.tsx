import Button from "./component/Button";
import Cardbox from "./component/Cardbox";
import Navcomp from "./component/Navcomp";

const Project = () => {
  return (
    <div className="h-full bg-[#0b0ed4]">
      <div className="h-[100vh] w-[100vw]">
        <Navcomp />
        <section className="flex items-center h-full px-0  md:px-[2rem]   2xl:px-[25rem]">
          <div>
            <header className="font-bold text-white text-5xl lg:text-7xl py-3">
              <h1 className="text-ellipsis">What I've been working on.</h1>
              <h3 className="text-xl font-normal pt-1 px-2">My Project </h3>
            </header>
            <div className="container flex flex-wrap justify-center gap-[1rem] sm:gap-[2rem] py-5 m-0 ">
              <Cardbox text="TEST DULU CIN" imgurl="/next.svg" />

              <Cardbox text="TEST DULU CINb" imgurl="/next.svg" />

              <Cardbox text="TEST DULU CINc" imgurl="/next.svg" />

              <Cardbox text="TEST DULU CINd" imgurl="/next.svg" />
            </div>
            <Button buttonval="See More" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;
