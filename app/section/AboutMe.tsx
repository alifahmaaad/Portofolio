import AboutMeMotionComp from "./microComponent/AboutMeMotionComp";

const AboutMe = ({ id, data }: { id: string; data: { text: string } }) => {
  return (
    <div className="h-full min-h-[50svh-24px] flex pt-10" id={id}>
      <AboutMeMotionComp>
        <div className="px-4 py-4 md:py-[8rem]">
          <span className="text-[#0b0ed4] dark:text-white font-bold text-xl md:text-2xl lg:text-4xl">
            Summary About Me.
          </span>
          <span
            className="block py-5 font-serif text-sm md:text-lg max-w-[60rem] dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: data.text }}
          />
        </div>
      </AboutMeMotionComp>
    </div>
  );
};

export default AboutMe;
