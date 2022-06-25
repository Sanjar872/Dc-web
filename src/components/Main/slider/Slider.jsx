import React, { useRef, useEffect } from "react";
import axios from 'axios'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { MiniDiv, SlideDiv, SlideImg, SlideText, SlideTextDiv, Title } from './style';

// import slide images

import Slide1 from './../assets/slider/slide1.png'
import Slide2 from './../assets/slider/slide2.png'
import Slide3 from './../assets/slider/slide3.png'
import Slide4 from './../assets/slider/slide4.png'

// Import Swiper styles

import Style from './Slider.module.css'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";


export default function App(props) {

  const ApiData = props.malumot
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={Style.mySwiper}
      >

        {ApiData?.map((item,index)=>{
          return(
            <SwiperSlide key={index} className={Style.swiperSlide}>
          <SlideDiv >
            <SlideImg src={`http://167.99.214.82${item.image}`} />
            <SlideTextDiv>   
              <SlideText>{item.text_uz}</SlideText>
            </SlideTextDiv>
          </SlideDiv>
        </SwiperSlide>
          )
        })}
        
      </Swiper>
    </>
  );
}


