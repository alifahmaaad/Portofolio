import Jobcard from "./component/Jobcard";
import Navcomp from "./component/Navcomp";

const WorkExp = () => {
  return (
    <div className="h-full">
      <Navcomp />
      <div className="h-[100vh] flex flex-col px-[2rem] xl:px-[20rem] justify-center items-center">
        <span className="text-[#0b0ed4] font-bold text-5xl lg:text-7xl py-[2rem]">
          My Work Experience.
        </span>
        <Jobcard
          imgurl="/next.svg"
          role="Software Developer"
          year="2020"
          companie="PT.Javan Cipta Solusi"
          text="tstjsjdjadja lorem 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ab, necessitatibus totam illo ipsam perspiciatis nihil quod consectetur, suscipit inventore corporis blanditiis repellendus vel quam eligendi voluptate explicabo nisi alias?"
        />
      </div>
    </div>
  );
};

export default WorkExp;
