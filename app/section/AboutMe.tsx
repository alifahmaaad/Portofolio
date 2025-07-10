import AboutMeMotionComp from "./microComponent/AboutMeMotionComp";

const AboutMe = ({ id }: { id: string }) => {
  return (
    <div className="h-full min-h-[50svh-24px] flex pt-10" id={id}>
      <AboutMeMotionComp>
        <div className="px-4 py-4 md:py-[8rem]">
          <span className="text-[#0b0ed4] dark:text-white font-bold text-xl md:text-2xl lg:text-4xl">
            Summary About Me.
          </span>
          <span className="block py-5 font-serif text-sm md:text-lg max-w-[60rem] dark:text-gray-300">
            Hello! I’m Ahmad Alif Sofian, a Software Developer with hands-on
            experience in building and maintaining web API middleware services,
            primarily using{" "}
            <b className="font-semibold text-[#0b0ed4] dark:text-white">
              Node.js
            </b>{" "}
            and{" "}
            <b className="font-semibold text-[#0b0ed4] dark:text-white">
              Express.js.
            </b>{" "}
            Currently, I work at PT Phincon, where I develop and maintain
            middleware APIs for the{" "}
            <b className="font-semibold text-[#0b0ed4] dark:text-white">
              MyTelkomsel App.
            </b>{" "}
            My responsibilities include implementing request validation,
            consistent response formatting, error handling, writing unit tests
            with Jest, and supporting SIT/UAT configurations. Previously, I
            participated in an intensive Fullstack Developer Trainee Program at
            PT Phincon, covering technologies like ReactJS, React Redux, Redux
            Saga, Express.js, Redis, and MySQL. During this program, I completed
            a final project — EasyWash, a local laundry management web app
            featuring OpenStreetMap integration and real-time chat with
            Stream.io. I also gained early experience as a Software Developer
            Intern at PT Javan Cipta Solusi, contributing to a Laravel and
            VueJS-based web project.
            <br />
            <br />
            Tech Stack I Work With: Node.js, Express.js, PostgreSQL, Redis,
            Jest, ReactJS.
          </span>
        </div>
      </AboutMeMotionComp>
    </div>
  );
};

export default AboutMe;
