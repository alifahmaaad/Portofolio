import ProjectBox from "../component/ProjectBox";

interface Project {
  imgurl: string;
  text: string;
  title: string;
  link?: string;
}

const ProjectFuncComp = ({ data }: { data: Project[] }) => {
  return (
    <>
      {Object.entries(data)
        .slice(0, 4)
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
