"use client";
import DataCertificate from "../section/DataCertificate";
import Cardbox from "../section/component/Cardbox";
import "../body.css";
import { useLayoutEffect, useState } from "react";
// import NavCompfor from "../section/component/NavcompFornotSwiper";

const AllCertificate = () => {
  const [isScroll, setIsScroll] = useState(false);
  useLayoutEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  const changeBackground = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 66) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }
  };
  return (
    <div className="h-full min-h-screen bg-white dark:bg-gray-800">
      <div>
        <a
          className={
            (isScroll && "bg-white dark:bg-gray-800 ") +
            " text-[#0b0ed4] dark:text-white font-bold cherry text-md lg:text-2xl py-4 px-4 flex items-center fixed w-full z-40"
          }
          href="https://alifahmaaad.github.io/Portofolio/"
        >
          Go to HomePage
        </a>
        <section className="flex items-center h-full px-0 py-10 md:px-[2rem]   2xl:px-[25rem]">
          <div className="w-full">
            <header className="font-bold text-[#0b0ed4] dark:text-white text-2xl sm:text-5xl lg:text-7xl py-3">
              <h1 className="text-ellipsis">My Certificate.</h1>
            </header>
            <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem] sm:gap-[2rem] py-1 sm:py-5 m-0 ">
              {Object.entries(DataCertificate.DataCertificate).map(
                ([key, i]) => (
                  <Cardbox
                    key={key}
                    imgurl={i.imgurl}
                    text={i.text}
                    title={i.title}
                    link={i.link}
                    linktext="See Credential!"
                  />
                )
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllCertificate;
