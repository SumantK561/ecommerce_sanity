import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from 'swiper';
import "swiper/css";
import "swiper/css/effect-cards";
import { urlFor } from '../../lib/client';
import Image from 'next/image';


const Card = (bannerContent) => {

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-72 h-96"
      >

        {
          bannerContent && bannerContent.bannerContent && bannerContent.bannerContent.map((element,i) => 

            <SwiperSlide className='w-60 96 rounded-xl  shadow-md' key={element._id}  style={{backgroundImage: 'linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)' }}>
              <img src={urlFor(element.image)} alt="headphones"  />
            </SwiperSlide>
          )

        }

      </Swiper>
    </>
  )
}

export default Card