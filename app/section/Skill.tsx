import Skillcard from "./component/Skillcard";
import SkillMotionComp from "./microComponent/SkillMotionComp";
import DataSkills from "./JSONData/Skills.json";
const Skill = ({ id }: { id: string }) => {
  return (
    <div className="h-full pb-[10rem] min-h-[50svh] pt-20" id={id}>
      <SkillMotionComp>
        <div className="flex">
          <span className="text-[#0b0ed4] dark:text-white font-bold text-xl md:text-3xl lg:text-5xl lg:pb-10">
            Skills.
          </span>
        </div>
        <div className="flex justify-center flex-col lg:flex-row flex-wrap gap-10">
          {DataSkills.map((skill) => (
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
