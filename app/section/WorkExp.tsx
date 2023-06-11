import { useEffect, useState } from "react";
import Jobcard from "./component/Jobcard";
import Navcomp from "./component/Navcomp";
import DataWorkExp from "./DataWorkExp";
const WorkExp = () => {
  useEffect(() => {
    SetCardmaxindex(window.innerWidth >= 768 ? 6 : 4);
  }, []);
  const [cardmaxindex, SetCardmaxindex] = useState<number>();
  return (
    <div className="h-full">
      <Navcomp />
      <div className="h-[100vh] flex flex-col px-[2rem] xl:px-[20rem] justify-center items-center">
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
