import Jobcard from "./component/Jobcard";
import DataWorkExp from "./JSONData/WorkExp.json";

const WorkExp = ({ id }: { id: string }) => {
  return (
    <div className="h-full dark:bg-[#34356d] bg-[#0b0ed4] py-5" id={id}>
      <div className="min-h-[40rem] flex flex-col container mx-auto px-4 justify-center items-center max-w-[60rem] py-10">
        <span className="text-white font-bold text-xl md:text-3xl lg:text-5xl py-[2rem]">
          My Work Experience.
        </span>
        <div>
          {Object.entries(DataWorkExp).map(([key, i]) => (
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
