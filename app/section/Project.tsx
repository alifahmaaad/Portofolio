import { useEffect, useState } from "react";
import DataProjectExp from "./DataProjectExp";
import Button from "./component/Button";
import Cardbox from "./component/Cardbox";
import Navcomp from "./component/Navcomp";

const Project = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      SetCardmaxindex(window.innerWidth >= 768 ? 6 : 4);
    }
  }, []);
  const [cardmaxindex, SetCardmaxindex] = useState<number>();
  return (
    <div className="h-full bg-[#0b0ed4]">
      <div className="h-[100svh] w-[100svw]">
        <Navcomp />
        <section className="flex items-center h-full px-0  md:px-[2rem]   2xl:px-[25rem]">
          <div className="w-full">
            <header className="font-bold text-white text-2xl md:text-5xl lg:text-7xl py-3">
              <h1 className="text-ellipsis">What I've been working on.</h1>
              <h3 className="text-xl font-normal pt-1 px-2">My Project </h3>
            </header>
            <div className="grid justify-items-center grid-cols-2 md:grid-cols-3 gap-[1rem] sm:gap-[2rem] py-1 sm:py-5 m-0 ">
              {Object.entries(DataProjectExp.DataProjectExp)
                .slice(0, cardmaxindex)
                .map(([key, i]) => (
                  <Cardbox
                    key={key}
                    imgurl={i.imgurl}
                    text={i.text}
                    title={i.title}
                  />
                ))}
            </div>
            <Button buttonval="See More" link="AllProject" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;
