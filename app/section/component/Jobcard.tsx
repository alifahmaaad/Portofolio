const Jobcard = (props: {
  imgurl?: string;
  text: string;
  role?: string;
  companie?: string;
  year?: string;
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 w-full group/card py-2 border-b border-slate-200/50 dark:border-white/5 last:border-none relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/[0.03] dark:via-violet-500/[0.05] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000 pointer-events-none" />
      <div className="relative shrink-0">
        <div className="absolute inset-0 bg-[#0b0ed4]/20 dark:bg-violet-600/30 blur-2xl rounded-full scale-0 group-hover/card:scale-110 transition-transform duration-700 opacity-0 group-hover/card:opacity-100" />

        <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-2xl overflow-hidden bg-white/80 dark:bg-white/[0.03] border border-white dark:border-white/10 p-4 shadow-sm transition-all duration-500 group-hover/card:shadow-[0_0_30px_rgba(11,14,212,0.2)] dark:group-hover/card:shadow-[0_0_40px_rgba(139,92,246,0.2)] group-hover/card:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000" />
          <img
            alt={props.companie}
            src={"https://alifahmaaad.github.io/Portofolio/" + props.imgurl}
            className="h-full w-full object-contain relative z-10"
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 w-full text-center lg:text-left relative">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 mb-4">
          <div className="space-y-1">
            <h1 className="font-black text-lg md:text-xl text-slate-900 dark:text-white tracking-tight leading-tight transition-all duration-500 group-hover/card:text-[#0b0ed4] dark:group-hover/card:text-violet-400">
              {props.role}
            </h1>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="text-xs md:text-sm font-bold text-[#0b0ed4] dark:text-violet-400 tracking-wide uppercase">
                {props.companie}
              </span>
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 border-l border-slate-300 dark:border-slate-700 pl-3">
                {props.year}
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <article
            className="prose prose-slate dark:prose-invert max-w-none
                text-slate-600 dark:text-slate-400
                text-[13px] md:text-sm leading-relaxed font-medium tracking-normal
                [&_b]:text-slate-900 dark:[&_b]:text-white 
                [&_strong]:font-bold
                [&_p]:m-0 selection:bg-blue-100 dark:selection:bg-violet-900/40"
            dangerouslySetInnerHTML={{ __html: props.text }}
          />
        </div>

        <div className="mt-5 flex items-center justify-center lg:justify-start gap-4 h-4">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-slate-200 dark:via-white/5 to-transparent relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0b0ed4] dark:via-violet-500 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-[1500ms] ease-in-out" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobcard;
