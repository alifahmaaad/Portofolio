import { useEffect, useState } from "react";
import Jobcard from "./component/Jobcard";
import DataWorkExp from "./DataWorkExp";
const WorkExp = () => {
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     SetCardmaxindex(window.innerWidth >= 768 ? 2 : 1);
  //   }
  // }, []);
  // const [cardmaxindex, SetCardmaxindex] = useState<number>();
  return (
    <div className="h-full" id="work">
      <div className="min-h-[40rem] flex flex-col container mx-auto px-4 justify-center items-center max-w-[60rem] py-10">
        <span className="text-[#0b0ed4] dark:text-white font-bold text-xl md:text-3xl lg:text-5xl py-[2rem]">
          My Work Experience.
        </span>
        <div>
          {Object.entries(DataWorkExp.DataWorkExp)
            // .slice(0, cardmaxindex)
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
