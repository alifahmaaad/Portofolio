import Skillcard from "./component/Skillcard";
import SkillMotionComp from "./microComponent/SkillMotionComp";

type dataSkillsType = { name: string; list: any[] };

const Skill = ({ id, data }: { id: string; data: dataSkillsType[] }) => {
  return (
    <div className="h-full pb-[10rem] min-h-[50svh] pt-20" id={id}>
      <SkillMotionComp>
        <div className="flex">
          <span className="text-[#0b0ed4] dark:text-white font-bold text-xl md:text-3xl lg:text-5xl lg:pb-10">
            Skills.
          </span>
        </div>
        <div className="flex justify-center flex-col lg:flex-row flex-wrap gap-10">
          {data.map((skill) => (
            <div className="w-full" key={skill.name}>
              <h1 className="text-[#0b0ed4] dark:text-white p-2 lg:text-xl font-bold">
                {skill.name}
              </h1>
              <div className="flex flex-wrap justify-center items-center gap-6">
                {skill.list.map((itemList) => (
                  <Skillcard
                    src={itemList.src}
                    key={itemList.text}
                    text={itemList.text}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </SkillMotionComp>
    </div>
  );
};

export default Skill;
