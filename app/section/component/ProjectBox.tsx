const ProjectBox = (props: {
  text: string;
  title?: string;
  imgurl?: string;
  link?: string;
  linktext?: string;
}) => {
  return (
    <div className="group relative w-full flex flex-row items-start transition-all duration-500 gap-2">
      <div
        className="relative overflow-hidden backdrop-blur-xl rounded-[2rem] p-4
        bg-white/40 dark:bg-white/[0.02] 
        border border-white/60 dark:border-white/10
        shadow-[0_8px_32px_rgba(0,0,0,0.02)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.3)]
        transition-all duration-500 group-hover:border-white/80 dark:group-hover:border-white/20
        flex shrink-0 items-center justify-center"
      >
        <div className="relative flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
          <img
            alt={props.title}
            src={"https://alifahmaaad.github.io/Portofolio/" + props.imgurl}
            className="w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0_20px_rgba(139,92,246,0.2)]"
          />
        </div>
      </div>

      <div className="flex flex-col px-4 py-2 flex-1 gap-2">
        <h3 className="font-black tracking-tight dark:text-white text-slate-900 leading-tight text-lg md:text-xl">
          {props.title}
        </h3>
        <div className="relative overflow-hidden transition-all duration-[2000ms] ease-in-out max-h-[3rem] group-hover:max-h-screen">
          <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed text-[13px]">
            {props.text}
          </p>
        </div>

        <div className="mt-2 flex flex-col items-start gap-1">
          <a
            href={props.link}
            target={props.link !== "#" ? "_blank" : "_self"}
            className="group/link flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white"
          >
            <span>{props.linktext || "View Case Study"}</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform stroke-[3]"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <div className="h-[2px] w-4 bg-[#0b0ed4] dark:bg-violet-500 group-hover:w-16 transition-all duration-500 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
