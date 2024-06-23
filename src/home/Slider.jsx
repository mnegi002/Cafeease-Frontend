import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
// import styles from './Slider.module.css'

// import required modules
import {
  EffectCoverflow,
  Pagination,
  
  Autoplay,
} from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="slideContainer" >
        <h1 id="item">Popular Items</h1>
        {/* <img  className="sliderbg" src="/images/sliderbg.jpg" alt="rr" /> */}
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
            // slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          // navigation={{
          //   nextEl: ".swiper-button-next",
          //   prevEl: ".swiper-button-prev",
          // }}
          autoplay={{ delay: 1500, disableOnInteraction: false}}
          initialSlide={2} // Set the third slide as the default
          // className="swiper"
        >
          <SwiperSlide>
            <img src="/images/chai.jpg"  alt="chai"/>
            {/* <h3>hello</h3> */}
          </SwiperSlide>

          <SwiperSlide>
            <img src="/images/cholechawal.jpg"  alt="cholechawal"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/ColdCoffee.avif" alt="coffee" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/FriedMomos.jpg" alt="momo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/Samosa.jpg" alt="samosa" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/Coffee.jpg" alt="hot-coffee" />
          </SwiperSlide>
        </Swiper>
        <div>
          
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </>
  );
}
