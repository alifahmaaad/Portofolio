"use client";
import DataProjectExp from "../section/DataProjectExp";
import Cardbox from "../section/component/Cardbox";
import "../body.css";
import NavCompfor from "../section/component/NavcompFornotSwiper";
const AllProject = () => {
  return (
    <div className="h-full bg-white">
      <div>
        <NavCompfor />
        <section className="flex items-center h-full px-0 py-10 md:px-[2rem]   2xl:px-[25rem]">
          <div className="w-full">
            <header className="font-bold text-[#0b0ed4] text-2xl md:text-5xl lg:text-7xl py-3">
              <h1 className="text-ellipsis">What I've been working on.</h1>
              <h3 className="text-xl font-normal pt-1 px-2">My Project </h3>
            </header>
            <div className="grid justify-items-center grid-cols-2 lg:grid-cols-3 gap-[1rem] sm:gap-[2rem] py-1 sm:py-5 m-0 ">
              {Object.entries(DataProjectExp.DataProjectExp).map(([key, i]) => (
                <Cardbox
                  key={key}
                  imgurl={i.imgurl}
                  text={i.text}
                  title={i.title}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllProject;
