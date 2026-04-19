import ScrolledButton from "./microComponent/ScrolledButton";

const Slide1 = ({ id }: { id: string }) => {
  return (
    <div
      id={id}
      className="relative min-h-[50svh] w-full overflow-hidden flex items-center transition-all duration-700 bg-[#e2e2e7] dark:bg-[#03030d]"
    >
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[70%] rounded-full pointer-events-none blur-[120px] bg-blue-500/10 dark:bg-violet-900/30 transition-all duration-700" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.1] dark:opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay" />
      <div className="relative z-10 w-full px-6 lg:px-[5rem] 2xl:px-[15rem] pt-20 pb-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <article className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative">
              <div className="hidden lg:block absolute -left-8 top-2 bottom-2 w-[2px] bg-gradient-to-b from-transparent via-blue-600 dark:via-violet-500 to-transparent" />
              <span className="flex flex-col py-4 font-black text-2xl md:text-3xl lg:text-5xl text-slate-900 dark:text-slate-100 transition-colors duration-500 gap-2">
                Hi! I'm
                <span className="text-[#0b0ed4] dark:text-violet-400">
                  Ahmad Alif Sofian
                </span>
              </span>

              <div
                className="font-bold flex items-center justify-center lg:justify-start gap-3 text-xl md:text-2xl mt-2
            text-slate-600 dark:text-slate-400"
              >
                <span className="h-[2px] w-8 bg-blue-600 dark:bg-violet-500" />
                <div className="typewriter">
                  <h2>Fullstack Developer.</h2>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <ScrolledButton buttonval="Let's Talk" />
            </div>
          </article>

          <div className="flex-1 w-full max-w-[500px] relative group">
            <div className="absolute inset-0 bg-blue-600/20 dark:bg-violet-600/20 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-[2000ms]" />

            <div
              className="relative backdrop-blur-3xl rounded-[2.5rem] p-8 lg:p-10
    bg-white/40 dark:bg-white/[0.03] 
    border border-white/40 dark:border-white/10
    shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] dark:shadow-[0_20px_100px_rgba(0,0,0,0.5)]"
            >
              <div className="space-y-8">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000" />
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-xl">
                      <img
                        src="https://alifahmaaad.github.io/Portofolio/profile.png"
                        alt="Ahmad Alif Sofian"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-white dark:bg-slate-900 px-3 py-1 rounded-full shadow-lg border border-slate-100 dark:border-slate-800 flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-tighter text-slate-600 dark:text-slate-300">
                        Open to Work
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-black dark:text-white text-slate-900 tracking-tight">
                      Ahmad Alif Sofian
                    </h3>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/20 dark:border-white/5">
                  <div className="flex items-center justify-between p-4 rounded-3xl bg-white/50 dark:bg-white/5 border border-white/20">
                    <div className="flex flex-col">
                      <p className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 dark:text-slate-500">
                        Professional Exp.
                      </p>
                      <p className="text-2xl font-black dark:text-white text-slate-900 leading-none mt-1">
                        2+{" "}
                        <span className="text-sm font-medium text-slate-500">
                          Years
                        </span>
                      </p>
                    </div>

                    <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800" />

                    <div className="flex flex-col text-right">
                      <p className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 dark:text-slate-500">
                        Current Location
                      </p>
                      <p className="text-sm font-bold dark:text-white text-slate-900 mt-1">
                        Jakarta - Indonesia 🇮🇩
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
