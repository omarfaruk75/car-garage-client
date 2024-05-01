import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import './Banner.css'
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


const Banner = () => {
    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                pagination={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper rounded-2xl">
                <SwiperSlide><div className='slide slide1'></div></SwiperSlide>
                <SwiperSlide><div className='slide slide2'></div></SwiperSlide>
                <SwiperSlide> <div className='slide slide3'></div></SwiperSlide>
                <SwiperSlide><div className='slide slide4'></div></SwiperSlide>
                <SwiperSlide><div className='slide slide5'></div></SwiperSlide>
                <SwiperSlide><div className='slide slide6'></div></SwiperSlide>


            </Swiper>
        </>
    );
};

export default Banner;