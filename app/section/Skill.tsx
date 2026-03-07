import Skillcard from "./component/Skillcard";
import SkillMotionComp from "./microComponent/SkillMotionComp";

type dataSkillsType = { name: string; list: any[] };

const Skill = ({ id, data }: { id: string; data: dataSkillsType[] }) => {
  return (
    <section
      id={id}
      className="relative w-full py-24 bg-[#e2e2e7] dark:bg-[#03030d] overflow-hidden transition-colors duration-700"
    >
      <div className="relative w-full max-w-[80rem] mx-auto px-6 lg:px-16">
        <SkillMotionComp>
          <div className="mb-16">
            <div className="h-[2px] w-10 bg-[#0b0ed4] dark:bg-violet-500 shadow-[0_0_10px_#0b0ed4]" />
            <h2 className="text-slate-900 dark:text-white font-black text-2xl md:text-4xl lg:text-5xl tracking-tighter leading-tight">
              Core <br />
              <span className="text-[#0b0ed4] dark:text-violet-400 opacity-80 italic transition-all duration-500">
                Expertise.
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            {data.map((skill) => (
              <div key={skill.name} className="w-full group/cat">
                <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-xs font-black text-[#0b0ed4] dark:text-violet-500 tracking-[0.3em] uppercase whitespace-nowrap">
                    {skill.name}
                  </h3>
                  <div className="h-[1px] w-full bg-slate-300 dark:bg-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#0b0ed4] dark:bg-violet-500 -translate-x-full group-hover/cat:translate-x-0 transition-transform duration-1000" />
                  </div>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-3">
                  {skill.list.map((itemList) => (
                    <Skillcard
                      key={itemList.text}
                      src={itemList.src}
                      text={itemList.text}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SkillMotionComp>
      </div>
    </section>
  );
};

export default Skill;
