import { useEffect, useState } from "react";
import DataProjectExp from "./DataProjectExp";
import Button from "./component/Button";
import ProjectBox from "./component/ProjectBox";

const Project = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      SetCardmaxindex(window.innerWidth >= 768 ? 6 : 4);
    }
  }, []);
  const [cardmaxindex, SetCardmaxindex] = useState<number>();
  return (
    <div className="h-full bg-[#0b0ed4]">
      <div className="min-h-[100svh] py-10">
        <section className="flex items-center h-full min-h-[100svh] container mx-auto px-4">
          <div className="w-full">
            <header className="font-bold text-white text-2xl md:text-5xl lg:text-7xl py-3">
              <h1 className="text-ellipsis">What I've been working on.</h1>
              <h3 className="text-xl font-normal pt-1 px-2">Projects </h3>
            </header>
            <div className="grid justify-items-center gap-[1rem] sm:gap-[2rem] py-5  m-0 ">
              {Object.entries(DataProjectExp.DataProjectExp)
                .slice(0, cardmaxindex)
                .map(([key, i]) => (
                  <ProjectBox
                    key={key}
                    imgurl={i.imgurl}
                    text={i.text}
                    title={i.title}
                    link={i.link != undefined ? i.link : undefined}
                    linktext={i.link != undefined ? "See Live!" : undefined}
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
