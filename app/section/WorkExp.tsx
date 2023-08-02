import { useEffect, useState } from "react";
import Jobcard from "./component/Jobcard";
import DataWorkExp from "./DataWorkExp";
const WorkExp = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      SetCardmaxindex(window.innerWidth >= 768 ? 2 : 1);
    }
  }, []);
  const [cardmaxindex, SetCardmaxindex] = useState<number>();
  return (
    <div className="h-full">
      <div className="min-h-[100svh] flex flex-col px-[2rem] xl:px-[20rem] justify-center items-center">
        <span className="text-[#0b0ed4] font-bold text-2xl sm:text-5xl lg:text-7xl py-[2rem]">
          My Work Experience.
        </span>
        <div>
          {Object.entries(DataWorkExp.DataWorkExp)
            .slice(0, cardmaxindex)
            .map(([key, i]) => (
              <Jobcard
                key={key}
                imgurl={i.imgurl}
                role={i.role}
                year={i.year}
                companie={i.companie}
                text={i.text}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExp;
