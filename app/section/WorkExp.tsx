import Jobcard from "./component/Jobcard";

type dataWorkExpType = {
  imgurl: string;
  id: number;
  role: string;
  year: string;
  companie: string;
  text: string;
};

const WorkExp = ({ id, data }: { id: string; data: dataWorkExpType[] }) => {
  return (
    <section
      id={id}
      className="relative min-h-screen w-full flex items-center justify-center py-20 overflow-hidden bg-[#e2e2e7] dark:bg-[#03030d] transition-colors duration-700"
    >
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[60%] rounded-full pointer-events-none blur-[120px] bg-blue-600/10 dark:bg-violet-900/20 transition-all duration-700" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] dark:opacity-[0.04] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:6rem_6rem]" />

      <div className="relative w-full max-w-[90rem] px-6 lg:px-[5rem] 2xl:px-[10rem] z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-start">
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-10 bg-[#0b0ed4] dark:bg-violet-500 shadow-[0_0_10px_#0b0ed4]" />
              <span className="text-[10px] uppercase tracking-[0.6em] text-blue-600 dark:text-violet-400 font-black">
                Journey
              </span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 font-black text-2xl md:text-4xl lg:text-5xl tracking-tighter leading-[0.9] md:mb-10">
              Work <br />
              <span className="text-[#0b0ed4] dark:text-violet-400 opacity-80 italic">
                Experience.
              </span>
            </h2>
            <div className="flex flex-col gap-4 sm:hidden">
              <p className="text-slate-500 dark:text-slate-400 max-w-xs font-medium leading-relaxed border-l-2 border-slate-300 dark:border-white/10 pl-4">
                Professional path and the evolution of my technical expertise.
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 w-full space-y-10 relative">
            <div className="absolute left-0 lg:left-[-5rem] top-4 bottom-4 w-[1px] bg-gradient-to-b from-blue-600 dark:from-violet-500 via-slate-300 dark:via-white/10 to-transparent hidden lg:block" />

            <div className="grid gap-10 w-full">
              {data.map((item) => (
                <div key={item.id} className="relative group">
                  <div className="absolute left-[-5.35rem] top-12 w-3 h-3 rounded-full bg-blue-600 dark:bg-violet-500 hidden lg:block shadow-[0_0_20px_rgba(11,14,212,0.6)] group-hover:scale-125 transition-transform duration-500" />

                  <div
                    className="backdrop-blur-3xl rounded-[3rem] p-10 md:p-14
                    bg-white/45 dark:bg-white/[0.02] 
                    border border-white/50 dark:border-white/10
                    shadow-[0_8px_32px_0_rgba(31,38,135,0.03)] dark:shadow-[0_40px_120px_rgba(0,0,0,0.4)]
                    hover:translate-x-3 transition-all duration-700 ease-out"
                  >
                    <Jobcard
                      imgurl={item.imgurl}
                      role={item.role}
                      year={item.year}
                      companie={item.companie}
                      text={item.text}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-12">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-violet-500" />
              <div className="h-[1px] w-32 bg-slate-300 dark:bg-white/10" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-bold">
                End of Timeline
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExp;
