"use client";
import { useState } from "react";
import "./globals.css";
import Contextindex from "./context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [slideIndex, setSlideIndex] = useState(0);
  const changeHeadTitleByIndexSlide = (index: number) => {
    switch (index) {
      case 0:
        return "Portofolio-Ahmad Alif Sofian";
      case 1:
        return "Portofolio-About Me";
      case 2:
        return "Portofolio-My Project";
      default:
        break;
    }
  };
  return (
    <Contextindex.Provider value={{ slideIndex, setSlideIndex }}>
      <html lang="en">
        <head>
          <title>{changeHeadTitleByIndexSlide(slideIndex)}</title>
        </head>

        <body className="overflow-y-hidden">{children}</body>
      </html>
    </Contextindex.Provider>
  );
}
