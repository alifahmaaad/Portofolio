"use client";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Mousewheel } from "swiper";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import Slide1 from "./section/Slide1";
import { EffectFade } from "swiper";
import AboutMe from "./section/AboutMe";
import { useContext, useRef } from "react";
import Contextindex from "./context";
import { motion } from "framer-motion";
import Project from "./section/Project";
import WorkExp from "./section/WorkExp";
import Certificate from "./section/Certificate";
import Sendme from "./section/Sendme";
import Skill from "./section/Skill";
export default function Home() {
  const { slideIndex, setSlideIndex } = useContext(Contextindex);
  SwiperCore.use([Keyboard, Mousewheel]);
  const refswiper = useRef<SwiperRef>(null);
  const slidetotalk = () => {
    console.log("halo bang");
    if (refswiper.current != null) {
      refswiper.current.swiper.slideTo(5);
    }
  };
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
        className="!h[100vh]"
        ref={refswiper}
      >
        <SwiperSlide>
          <Slide1 slideto={slidetotalk} />
        </SwiperSlide>
        <SwiperSlide>
          <AboutMe />
        </SwiperSlide>
        <SwiperSlide>
          <Skill />
        </SwiperSlide>
        <SwiperSlide>
          <Project />
        </SwiperSlide>
        <SwiperSlide>
          <WorkExp />
        </SwiperSlide>
        <SwiperSlide>
          <Certificate />
        </SwiperSlide>
        <SwiperSlide>
          <Sendme />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
