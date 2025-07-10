"use client";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";

const GoToHomePage = () => {
  const [isScroll, setIsScroll] = useState(false);

  useLayoutEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  useEffect(() => {
    if (localStorage.getItem("isDark") === "true")
      document.documentElement.classList.add("dark");
  }, []);

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
    <Link
      className={
        (isScroll && "bg-white dark:bg-gray-800 ") +
        " text-[#0b0ed4] dark:text-white font-bold cherry text-md lg:text-2xl py-4 px-4 flex items-center fixed w-full z-40"
      }
      href="/"
    >
      Go to HomePage
    </Link>
  );
};

export default GoToHomePage;
