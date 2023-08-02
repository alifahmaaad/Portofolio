import { useContext, useEffect, useState } from "react";
import DataCertificate from "./DataCertificate";
import Button from "./component/Button";
import Cardbox from "./component/Cardbox";
const Certificate = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      SetCardmaxindex(window.innerWidth >= 768 ? 6 : 4);
    }
  }, []);
  const [cardmaxindex, SetCardmaxindex] = useState<number>();
  return (
    <div className="h-full bg-[#0b0ed4]">
      <div className="min-h-[100svh]">
        <section className="flex items-center w-full h-full px-[2rem]   2xl:px-[25rem] py-10 ">
          <div className="w-full">
            <header className="font-bold text-white text-2xl sm:text-5xl lg:text-7xl py-3">
              <h1 className="text-ellipsis">My Certificate.</h1>
            </header>
            <div className="grid justify-items-center grid-cols-1 md:grid-cols-3 gap-[1rem] sm:gap-[2rem] py-5 m-0 ">
              {Object.entries(DataCertificate.DataCertificate)
                .slice(0, cardmaxindex)
                .map(([key, i]) => (
                  <Cardbox
                    key={key}
                    imgurl={i.imgurl}
                    text={i.text}
                    title={i.title}
                    link={i.link}
                  />
                ))}
            </div>
            <Button buttonval="See More" link="AllCertificate" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certificate;
