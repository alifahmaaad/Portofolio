"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Mousewheel } from "swiper";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import Slide1 from "./section/Slide1";

export default function Home() {
  SwiperCore.use([Keyboard, Mousewheel]);
  return (
    <main>
      <Swiper
        slidesPerView={1}
        direction="vertical"
        pagination={{ clickable: true }}
        // height={100}
        autoHeight={true}
        modules={[Pagination]}
        mousewheel={true}
        keyboard={true}
      >
        <SwiperSlide>
          <Slide1 />
        </SwiperSlide>
        <SwiperSlide> Testw\2</SwiperSlide>
      </Swiper>
    </main>
  );
}
