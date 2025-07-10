import AboutMe from "./section/AboutMe";
import Certificate from "./section/Certificate";
import Project from "./section/Project";
import Sendme from "./section/Sendme";
import Skill from "./section/Skill";
import Slide1 from "./section/Slide1";
import WorkExp from "./section/WorkExp";
import Navcomp from "./section/component/Navcomp";
import PaginationNav from "./section/component/PaginationNav";

import Portofolio from "./section/JSONData/Portofolio.json";
import ProjectExp from "./section/JSONData/ProjectExp.json";
import SectionOrder from "./section/JSONData/SectionOrder.json";

const allComponent = {
  PaginationNav,
  Navcomp,
  Slide1,
  AboutMe,
  WorkExp,
  Skill,
  Project,
  Certificate,
  Sendme,
};

const allJsonData = {
  Portofolio,
  ProjectExp,
};

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-800 overflow-x-hidden">
      {SectionOrder?.slice()
        .sort((a, b) => a.order - b.order)
        ?.map((section) => {
          const SectionComp =
            allComponent[section.CompName as keyof typeof allComponent];
          return (
            <SectionComp
              title={section?.props?.title || ""}
              data={
                allJsonData[
                  section?.props?.jsonName as keyof typeof allJsonData
                ] || []
              }
              link={section?.props?.link || ""}
              key={section.name}
              id={section?.id || ""}
            />
          );
        })}
    </main>
  );
}
