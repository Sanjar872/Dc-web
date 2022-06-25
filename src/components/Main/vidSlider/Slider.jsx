import React, { useRef, useState } from "react";
import {Video} from './style'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Style from "./Slider.module.css";

// import required modules
import { Pagination } from "swiper";

// Videos

import Video1 from '../assets/videos/sliderVid1.mp4'
import Video2 from '../assets/videos/sliderVid2.mp4'
import Video3 from '../assets/videos/sliderVid3.mp4'

// Api 

const Api_entery = "http://167.99.214.82/get-slider/"

export default function App() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Video  controls loop src={Video1}></Video>
        </SwiperSlide>
        <SwiperSlide>
          <Video  controls loop src={Video2}></Video>
        </SwiperSlide>
        <SwiperSlide>
          <Video  controls loop src={Video3}></Video>
        </SwiperSlide>

      </Swiper>
    </>
  );
}