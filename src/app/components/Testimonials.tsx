'use client'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { testimonials } from "@/constants";
import React from "react";
import { useState,useEffect } from "react";

const Testimonials = () => {
  return(
    <>
    <h2 className="p-6 text-[20px] text-black text-center lg:text-[40px]">
          Testimonials
    </h2>
    <div className="h-auto flex items-center justify-center flex-col gap-4 p-10 bg-[#E9DEF4]">
    <Swiper

      breakpoints={{
        425: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }
      
    }
      autoplay={true}
      modules={[FreeMode, Pagination,Autoplay]}
      className="max-w-[95%] lg:max-w-[90%]"
    >
      {testimonials.map((item,index) => (
        <SwiperSlide key={index} className="flex justify-center items-center gap-4">
          <div className="flex flex-col  mb-10 text-center shadow-lg p-4 bg-white text-black rounded-xl  px-6 py-8 h-250px w-100px lg:h-auto lg:w-auto  cursor-pointer">
            {/* <div className="absolute inset-0  bg-black opacity-10 group-hover:opacity-50" /> */}
            <div className="text-center flex flex-col gap-7 p-1 m-1">
              <h3 className="text-sm lg:text-2xl">{item.rating} </h3>
              <p className="text-sm  lg:text-[18px] line-clamp-3 hover:line-clamp-none">{item.review} </p>
              <p className="text-sm  lg:text-[18px]">{item.companyname} </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
    </>
  )
};

export default Testimonials;
