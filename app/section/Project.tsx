import Button from "./component/Button";
import ProjectFuncComp from "./microComponent/ProjectFuncComp";

interface Project {
  imgurl: string;
  text: string;
  title: string;
  link?: string;
}

const Project = ({
  title,
  data,
  link,
  id,
}: {
  title: string;
  data: Project[];
  link: string;
  id: string;
}) => {
  return (
    <div className="h-full dark:bg-[#34356d] bg-[#0b0ed4] py-5" id={id}>
      <div className="min-h-[100svh] py-10 ">
        <section className="flex items-center justify-center h-full min-h-[100svh] container mx-auto px-4 max-w-[60rem]">
          <div className="w-full">
            <header className="font-bold text-white text-xl md:text-3xl lg:text-5xl py-3">
              <h1 className="text-ellipsis">What I've been working on.</h1>
              <h3 className="text-xl font-normal pt-1 px-2">{title}</h3>
            </header>
            <div className="grid justify-items-center gap-[1rem] sm:gap-[2rem] py-5  m-0 ">
              <ProjectFuncComp data={data} />
            </div>
            <Button buttonval="See More" link={link} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;
