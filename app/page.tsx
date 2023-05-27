"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Mousewheel } from "swiper";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";

export default function Home() {
  SwiperCore.use([Keyboard, Mousewheel]);
  return (
    <main>
      <Swiper
        slidesPerView={1}
        direction="vertical"
        pagination={{ clickable: true }}
        height={window.innerHeight}
        modules={[Pagination]}
        mousewheel={true}
        keyboard={true}
      >
        <SwiperSlide> Test</SwiperSlide>
        <SwiperSlide> Testw\2</SwiperSlide>
      </Swiper>
    </main>
  );
}
