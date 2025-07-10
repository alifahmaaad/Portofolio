"use client";
import { useEffect, useState } from "react";
import ProjectBox from "../component/ProjectBox";

interface Project {
  imgurl: string;
  text: string;
  title: string;
  link?: string;
}

const ProjectFuncComp = ({ data }: { data: Project[] }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCardmaxindex(window.innerWidth >= 768 ? 6 : 4);
    }
  }, []);
  const [cardmaxindex, setCardmaxindex] = useState<number>();
  return (
    <>
      {Object.entries(data)
        .slice(0, cardmaxindex)
        .map(([key, i]) => (
          <ProjectBox
            key={key}
            imgurl={i.imgurl}
            text={i.text}
            title={i.title}
            link={i?.link}
            linktext={i.link ? "See Live!" : undefined}
          />
        ))}
    </>
  );
};
export default ProjectFuncComp;
