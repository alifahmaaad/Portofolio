import Cardbox from "../section/component/Cardbox";
import GoToHomePage from "../section/microComponent/GoToHomePage";
import "../body.css";
import { getCertificate } from "../gdriveHelper";

const AllCertificate = async () => {
  const dataCertificate = await getCertificate();

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#03030d] transition-colors duration-500">
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-96 bg-amber-500/5 dark:bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />

        <GoToHomePage />

        <section className="relative max-w-[1400px] mx-auto px-6 py-24">
          <div className="w-full">
            <header className="mb-12 lg:mb-20 text-center md:text-left">
              <div className="inline-block px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-100 dark:border-amber-500/20 mb-4">
                <span className="text-xs font-bold tracking-[0.2em] text-amber-600 dark:text-amber-400 uppercase">
                  Achievements
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">
                Professional <br className="hidden md:block" />
                <span className="text-[#0b0ed4] dark:text-violet-500">
                  Certificates.
                </span>
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl font-medium leading-relaxed mx-auto md:mx-0">
                A validation of my skills and continuous learning journey in
                software development and technology.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {Object.entries(dataCertificate || {}).map(([key, i]) => (
                <div
                  key={key}
                  className="transform hover:-translate-y-2 transition-all duration-300"
                >
                  <Cardbox
                    imgurl={i.imgurl}
                    text={i.text}
                    title={i.title}
                    link={i.link}
                    linktext="See Credential!"
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

export default AllCertificate;
