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
          imgurl="/javan.png"
          role="Software Developer (PHP) - Intern"
          year="2021"
          companie="PT.Javan Cipta Solusi"
          text="Assigned to a company project to build and develop the website.
Developed an website using laravel PHP in backend with PostgreSQL and VueJS in frontend.
Coordinate with other team members, do the tasks assigned by the project manager and make sure the product meets the requirements and quality standards."
        />
      </div>
    </div>
  );
};

export default WorkExp;
