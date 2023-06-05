import Button from "./component/Button";
import Cardbox from "./component/Cardbox";
import Navcomp from "./component/Navcomp";

const Project = () => {
  return (
    <div className="h-full bg-[#0b0ed4]">
      <div className="h-[100svh] w-[100svw]">
        <Navcomp />
        <section className="flex items-center h-full px-0  md:px-[2rem]   2xl:px-[25rem]">
          <div>
            <header className="font-bold text-white text-5xl lg:text-7xl py-3">
              <h1 className="text-ellipsis">What I've been working on.</h1>
              <h3 className="text-xl font-normal pt-1 px-2">My Project </h3>
            </header>
            <div className="container flex flex-wrap justify-center gap-[1rem] sm:gap-[2rem] py-5 m-0 ">
              <Cardbox
                text="A Desktop App using Tauri App, Material UI, ReactJS, React Redux, React Router, bcryptjs, tauri-plugin-sql, sqlite database, for manage financial data on Yayasan Nurul ilmi Aini."
                imgurl="/nurulIlmi.png"
                title="Sistem Pembayaran Yayasan Nurul Ilmi Aini"
              />

              <Cardbox
                text="A Website with NextJS , Tailwind CSS, FramerMotion, and SwiperJS. its Single Page Application that show my personal portofolio and information about me."
                imgurl="/porto.jpg"
                title="Personal Portofolio Website"
              />

              <Cardbox
                text="A mobile application with React Native as a Frontend and Laravel 8 as a Backend, used as place for merchants and consumer to show information of product, buy and sell cakes.  Role as a Team Leader, Backend and Frontend in developement."
                imgurl="/Naka.png"
                title="Naka Marketplace"
              />

              <Cardbox
                text="A Website with Laravel8 and MySQL to display healthy food content and information on the food menu that urdailyhealth sell. Role as Frontend Using Blade from laravel 8 and Bootstrap."
                imgurl="/urdailyhealth.png"
                title="Urdailyhealth Website"
              />
            </div>
            {/* <Button buttonval="See More" /> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;
