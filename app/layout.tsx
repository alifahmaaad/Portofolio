"use client";
import { createContext, useState } from "react";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contextindex = createContext({
    slideIndex: 0,
    setSlideIndex: (i: number) => {
      console.log(i);
    },
  });
  const [slideIndex, setSlideIndex] = useState(0);
  const changeHeadTitleByIndexSlide = (index: number) => {
    switch (index) {
      case 0:
        return "Portofolio-Ahmad Alif Sofian";
      case 1:
        return "Portofolio-About Me";
      default:
        break;
    }
  };
  return (
    <contextindex.Provider value={{ slideIndex, setSlideIndex }}>
      <html lang="en">
        <head>
          <title>{changeHeadTitleByIndexSlide(slideIndex)}</title>
        </head>

        <body className="overflow-y-hidden">{children}</body>
      </html>
    </contextindex.Provider>
  );
}
