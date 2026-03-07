import AboutMeMotionComp from "./microComponent/AboutMeMotionComp";

const AboutMe = ({ id, data }: { id: string; data: { text: string } }) => {
  return (
    <section
      className="relative min-h-[50svh] w-full flex items-center justify-center overflow-hidden bg-[#e2e2e7] dark:bg-[#03030d] transition-colors duration-700"
      id={id}
    >
      <AboutMeMotionComp>
        <div className="flex-1 w-full px-8 md:px-20 py-8 md:py-20 relative group">
          <div
            className="relative backdrop-blur-3xl rounded-[2.5rem] p-8 lg:p-12
          bg-white/40 dark:bg-white/[0.03] 
          border border-white/40 dark:border-white/10
          shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] dark:shadow-[0_20px_100px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-blue-600/10 dark:bg-violet-600/10 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />
            <div className="flex flex-col gap-12 items-start relative z-10">
              <div className="shrink-0 lg:sticky lg:top-10">
                <div className="h-[2px] w-10 bg-[#0b0ed4] dark:bg-violet-500 shadow-[0_0_10px_#0b0ed4]" />
                <h2 className="text-slate-900 dark:text-slate-100 font-black text-2xl md:text-4xl lg:text-5xl tracking-tighter leading-[0.9]">
                  Summary <br />
                  <span className="text-[#0b0ed4] dark:text-violet-400 opacity-80">
                    About Me.
                  </span>
                </h2>
              </div>

              <div className="relative flex-1 lg:pt-2">
                <div className="absolute -left-16 top-0 bottom-0 w-[1px] bg-slate-200 dark:bg-white/10 hidden lg:block" />

                <article
                  className="prose prose-slate dark:prose-invert max-w-none
                    text-slate-700 dark:text-slate-300
                    text-sm md:text-base leading-[1.6] font-medium tracking-tight
                    [&_b]:text-[#0b0ed4] dark:[&_b]:text-violet-400 
                    [&_strong]:text-slate-950 dark:[&_strong]:text-white 
                    [&_p]:mb-8 last:[&_p]:mb-0 selection:bg-[#0b0ed4]/20"
                  dangerouslySetInnerHTML={{ __html: data.text }}
                />
              </div>
            </div>
          </div>
        </div>
      </AboutMeMotionComp>
    </section>
  );
};

export default AboutMe;
