const FooterComp = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full py-12 bg-[#e2e2e7] dark:bg-[#03030d] transition-colors duration-700">
      <div className="container mx-auto px-6 lg:px-16 max-w-[90rem]">
        <div className="h-[1px] w-full bg-slate-300 dark:bg-white/10 mb-10 shadow-[0_0_10px_rgba(11,14,212,0.1)]" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#0b0ed4] dark:bg-violet-500 animate-pulse" />
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                Open to Work
              </p>
            </div>
            <p className="text-slate-900 dark:text-white font-bold text-sm tracking-tight">
              © {currentYear}{" "}
              <span className="italic opacity-60 ml-1">Ahmad Alif Sofian</span>
            </p>
          </div>

          <div className="order-1 md:order-2 flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              {
                name: "LinkedIn",
                href: "https://www.linkedin.com/in/alifahmaaad/",
                vb: "0 0 16 16",
                path: (
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                ),
              },
              {
                name: "GitHub",
                href: "https://github.com/alifahmaaad",
                vb: "0 0 24 24",
                path: (
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                ),
              },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                className="group flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-[#0b0ed4] dark:hover:text-violet-400 transition-all duration-300"
              >
                <svg
                  fill="currentColor"
                  viewBox={link.vb}
                  className="w-4 h-4 transition-transform group-hover:scale-110 group-hover:-rotate-12"
                >
                  {link.path}
                </svg>
                <span className="text-[10px] font-black uppercase tracking-widest">
                  {link.name}
                </span>
              </a>
            ))}

            <a
              href="mailto:alif12sofian@gmail.com"
              className="group flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-[#0b0ed4] dark:hover:text-violet-400 transition-all duration-300"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 transition-transform group-hover:scale-110 group-hover:-rotate-12"
              >
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
              </svg>
              <span className="text-[10px] font-black uppercase tracking-widest inline">
                alif12sofian@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;
