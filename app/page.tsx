"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Mousewheel } from "swiper";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import Slide1 from "./section/Slide1";
import { EffectFade } from "swiper";
import AboutMe from "./section/AboutMe";
import { useContext } from "react";
import { contextindex } from "./layout";

export default function Home() {
  const { setSlideIndex } = useContext(contextindex);
  SwiperCore.use([Keyboard, Mousewheel]);
  return (
    <main>
      <Swiper
        slidesPerView={1}
        direction="vertical"
        pagination={{ clickable: true }}
        autoHeight={true}
        modules={[Pagination, EffectFade]}
        mousewheel={true}
        keyboard={true}
        speed={100}
        onRealIndexChange={(swiper) => setSlideIndex(swiper.realIndex)}
      >
        <SwiperSlide>
          <Slide1 />
        </SwiperSlide>
        <SwiperSlide>
          <AboutMe />
        </SwiperSlide>
        <SwiperSlide>what I've been working on</SwiperSlide>
      </Swiper>
    </main>
  );
}
