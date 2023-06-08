import Button from "./component/Button";
import Cardbox from "./component/Cardbox";
import Navcomp from "./component/Navcomp";

const Certificate = () => {
  return (
    <div className="h-full bg-[#0b0ed4]">
      <div className="h-[100svh] w-[100svw]">
        <Navcomp />
        <section className="flex items-center h-full px-0  md:px-[2rem]   2xl:px-[25rem]">
          <div>
            <header className="font-bold text-white text-2xl sm:text-5xl lg:text-7xl py-3">
              <h1 className="text-ellipsis">My Certificate.</h1>
            </header>
            <div className="container flex flex-wrap justify-center gap-[1rem] sm:gap-[2rem] py-1 sm:py-5 m-0 ">
              <Cardbox
                title="Modern JavaScript: ES6 Basics"
                text="Learn most fundamental of javascript ES6 features and practice with mini project, learn about reason usingg modern ES6 such a Arrow Function, variable etc."
                imgurl="/coursera.png"
              />

              <Cardbox
                title="Azure: create a REST API using NodeJS Serverless Functions"
                text="Create a Function App and Serverless Functions, Create an API out of the Serverless Functions, and Understand route templates"
                imgurl="/coursera.png"
              />

              <Cardbox
                title="Front End Development Libraries"
                text="Learn basic Bootstrap, add logic into css, learn basic Sass, and build m  ini project using ReactJs with ReduxJs."
                imgurl="/freecodecamp.png"
              />

              <Cardbox
                title="Back End Development and APIs"
                text="learn how to write back end apps with Node.js and npm. Build web applications with the Express framework, and learn using MongoDB."
                imgurl="/freecodecamp.png"
              />
            </div>
            <Button buttonval="See More" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certificate;
