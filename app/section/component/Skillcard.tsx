const Skillcard = (props: { src: string; text: string }) => {
  return (
    <div className="group relative w-full flex flex-col items-center justify-center transition-all duration-500">
      <div
        className="absolute inset-0 bg-white/50 dark:bg-white/[0.02] 
        backdrop-blur-xl rounded-2xl md:rounded-[2rem]
        border border-white/80 dark:border-white/10
        shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]
        group-hover:bg-white/90 dark:group-hover:bg-white/[0.08]
        group-hover:shadow-[0_0_20px_rgba(11,14,212,0.15)] dark:group-hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]
        transition-all duration-500 ease-out group-hover:-translate-y-2"
      />

      <div className="absolute inset-0 rounded-[2rem] bg-[#0b0ed4]/20 dark:bg-violet-600/20 blur-[30px] opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 scale-75 group-hover:scale-110" />

      <div className="relative z-10 flex flex-col items-center gap-5 p-4 md:p-5 w-full">
        <div className="relative w-10 h-10 md:w-20 md:h-20 aspect-square transition-all duration-500 group-hover:scale-110">
          <div className="absolute inset-0 bg-[#0b0ed4]/40 dark:bg-violet-500/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img
            className="w-full h-full object-contain relative z-10
              brightness-100 opacity-100 drop-shadow-[0_0_2px_rgba(0,0,0,0.1)]
              group-hover:drop-shadow-[0_0_15px_rgba(11,14,212,0.8)] dark:group-hover:drop-shadow-[0_0_20px_rgba(139,92,246,0.9)]
              transition-all duration-500 ease-in-out"
            src={"https://alifahmaaad.github.io/Portofolio/" + props.src}
            alt={props.text}
          />
        </div>

        <div className="flex flex-col items-center gap-1.5">
          <p className="text-[0.5rem] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 group-hover:text-[#0b0ed4] dark:group-hover:text-violet-400 group-hover:drop-shadow-[0_0_8px_rgba(11,14,212,0.4)] transition-all duration-500">
            {props.text}
          </p>
          <div className="h-[2px] w-0 bg-[#0b0ed4] dark:bg-violet-500 shadow-[0_0_12px_#0b0ed4] dark:shadow-[0_0_12px_#8b5cf6] group-hover:w-6 transition-all duration-500 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Skillcard;
