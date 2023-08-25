"use client";
import Slide1 from "./section/Slide1";
import AboutMe from "./section/AboutMe";
import Project from "./section/Project";
import WorkExp from "./section/WorkExp";
import Certificate from "./section/Certificate";
import Sendme from "./section/Sendme";
import Skill from "./section/Skill";
import Navcomp from "./section/component/Navcomp";
export default function Home() {
  return (
    <main className="bg-white">
      <Navcomp />
      <Slide1 />
      <AboutMe />
      <Skill />
      <Project />
      <WorkExp />
      <Certificate />
      <Sendme />
    </main>
  );
}
