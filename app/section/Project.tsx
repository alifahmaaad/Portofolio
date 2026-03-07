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
    <div
      className="relative min-h-screen w-full py-24 overflow-hidden bg-[#e2e2e7] dark:bg-[#03030d] transition-colors duration-700"
      id={id}
    >
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[60%] rounded-full pointer-events-none blur-[120px] bg-blue-600/10 dark:bg-violet-900/20 transition-all duration-700" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] dark:opacity-[0.04] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:6rem_6rem]" />
      <div className="absolute bottom-[15%] right-[10%] w-2.5 h-2.5 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.8)] dark:shadow-[0_0_20px_rgba(59,130,246,0.6)] z-10 animate-pulse" />

      <div className="relative z-10 container mx-auto px-6 lg:px-16 max-w-[90rem]">
        <header className="flex flex-col gap-2 mb-16 md:mb-24">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-10 bg-[#0b0ed4] dark:bg-violet-500 shadow-[0_0_10px_#0b0ed4]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">
              Selected Works
            </span>
          </div>

          <h1 className="font-black text-slate-900 dark:text-white text-2xl md:text-4xl lg:text-5xl tracking-tighter leading-[1.1] mt-4">
            What I've been <br />
            <span className="text-[#0b0ed4] dark:text-violet-400 italic opacity-90">
              working on.
            </span>
          </h1>

          <p className="text-sm md:text-lg font-medium text-slate-500 dark:text-slate-400 mt-6 max-w-2xl leading-relaxed">
            {title}
          </p>
        </header>

        <div className="relative w-full">
          <div className="flex flex-col md:flex-row">
            <ProjectFuncComp data={data} />
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <Button buttonval="See More Projects" link={link} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
