import Cardbox from "../section/component/Cardbox";
import GoToHomePage from "../section/microComponent/GoToHomePage";
import "../body.css";
import { getPortofolio } from "../gdriveHelper";

const AllPortofolio = async () => {
  const dataPortofolio = await getPortofolio();

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#03030d] transition-colors duration-500">
      <div className="relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

        <GoToHomePage />

        <section className="relative max-w-[1400px] mx-auto px-6 py-24">
          <div className="w-full">
            <header className="mb-12 lg:mb-20">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 mb-4">
                <span className="text-xs font-bold tracking-[0.2em] text-[#0b0ed4] dark:text-violet-400 uppercase">
                  Showcase
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">
                My{" "}
                <span className="text-[#0b0ed4] dark:text-violet-500">
                  Portfolio.
                </span>
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl font-medium leading-relaxed">
                A curated list of my best works, focusing on high-performance
                web applications and clean user interfaces.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {Object.entries(dataPortofolio || {}).map(([key, i]) => (
                <div
                  key={key}
                  className="transform hover:-translate-y-2 transition-all duration-300"
                >
                  <Cardbox
                    imgurl={i.imgurl}
                    text={i.text}
                    title={i.title}
                    link={i.link}
                    linktext={i.link ? "See Live!" : undefined}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllPortofolio;
