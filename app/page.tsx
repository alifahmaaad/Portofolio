import AboutMe from "./section/AboutMe";
import Certificate from "./section/Certificate";
import Project from "./section/Project";
import Sendme from "./section/Sendme";
import Skill from "./section/Skill";
import Slide1 from "./section/Slide1";
import WorkExp from "./section/WorkExp";
import Navcomp from "./section/component/Navcomp";
import PaginationNav from "./section/component/PaginationNav";

import {
  getCertificate,
  getPortofolio,
  getProject,
  getSkills,
  getWorkExp,
} from "./gdriveHelper";

const Home = async () => {
  const dataCertificate = await getCertificate();
  const dataPortofolio = await getPortofolio();
  const dataProjectExp = await getProject();
  const dataWorkExp = await getWorkExp();
  const dataSkills = await getSkills();
  return (
    <main className="bg-white dark:bg-gray-800 overflow-x-hidden">
      <PaginationNav />
      <Navcomp />
      <Slide1 id="slide1" />
      <AboutMe id="aboutme" />
      <WorkExp id="work" data={dataWorkExp} />
      <Skill id="skill" data={dataSkills} />
      <Project
        id="project"
        title="Projects"
        link="AllProject"
        data={dataProjectExp}
      />
      <Project
        id="portofolio"
        title="Portofolio"
        link="AllPortofolio"
        data={dataPortofolio}
      />
      <Certificate id="certificate" data={dataCertificate} />
      <Sendme id="sendme" />
    </main>
  );
};

export default Home;
