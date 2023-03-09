import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from 'swiper';
import "swiper/css";
import "swiper/css/effect-cards";


const Card = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-72 h-96"
      >
        <SwiperSlide className='w-60 96 bg-red-600'></SwiperSlide>
        <SwiperSlide className='w-60 96 bg-blue-600'></SwiperSlide>
        <SwiperSlide className='w-60 96 bg-green-600'></SwiperSlide>
        <SwiperSlide className='w-60 96 bg-yellow-600'></SwiperSlide>
        <SwiperSlide className='w-60 96 bg-pink-600'></SwiperSlide>
        <SwiperSlide className='w-60 96 bg-gray-600'></SwiperSlide>
        <SwiperSlide className='w-60 96 bg-stone-700'></SwiperSlide>
        <SwiperSlide className='w-60 96 bg-amber-600'>Slide 8</SwiperSlide>
        <SwiperSlide className='w-60 96 bg-red-600'>Slide 9</SwiperSlide>
      </Swiper>
    </>
  )
}

export default Card