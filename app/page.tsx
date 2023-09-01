"use client";
import AboutMe from "./section/AboutMe";
import Certificate from "./section/Certificate";
import Project from "./section/Project";
import Sendme from "./section/Sendme";
import Skill from "./section/Skill";
import Slide1 from "./section/Slide1";
import WorkExp from "./section/WorkExp";
import NavbarMobile from "./section/component/NavbarMobile";
import Navcomp from "./section/component/Navcomp";
import PaginationNav from "./section/component/PaginationNav";
export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden">
      <PaginationNav />
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
