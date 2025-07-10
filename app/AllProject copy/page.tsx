import DataProjectExp from "./../section/JSONData/ProjectExp.json";
import Cardbox from "../section/component/Cardbox";
import GoToHomePage from "../section/microComponent/GoToHomePage";
import "../body.css";

const AllProject = () => {
  return (
    <div className="h-full min-h-screen bg-white dark:bg-gray-800">
      <div>
        <GoToHomePage />
        <section className="flex items-center h-full px-0 py-10 md:px-[2rem]   2xl:px-[25rem]">
          <div className="w-full">
            <header className="font-bold text-[#0b0ed4] dark:text-white text-2xl sm:text-3xl lg:text-5xl p-5">
              <h1 className="text-ellipsis">What I've been working on.</h1>
              <h3 className="text-xl font-normal pt-1 px-2">My Project </h3>
            </header>
            <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem] sm:gap-[2rem] py-1 sm:py-5 m-0 ">
              {Object.entries(DataProjectExp).map(([key, i]) => (
                <Cardbox
                  key={key}
                  imgurl={i.imgurl}
                  text={i.text}
                  title={i.title}
                  link={i.link}
                  linktext={i.link != undefined ? "See Live!" : undefined}
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
