"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { testimonials } from "@/constants";
import React from "react";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
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
          }}
          pagination={true}
          autoplay={true}
          modules={[FreeMode, Pagination, Autoplay]}
          speed={1500} 
          cssMode={true}  
          className="max-w-[95%] lg:max-w-[90%]"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center gap-4"
            >
              <div className="flex flex-col  mb-10 text-center shadow-lg p-4 bg-white text-black rounded-xl  px-6 py-8 h-250px w-100px lg:h-auto lg:w-auto  cursor-pointer">
                {/* <div className="absolute inset-0  bg-black opacity-10 group-hover:opacity-50" /> */}
                <div className="text-center flex justify-center flex-col gap-7 p-1 m-1">
                  <div className="flex justify-center items-center">
                    {Array.from({ length: item.rating }, (_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>
                  <p className="review-text text-sm lg:text-[18px] transition-all duration-500 ease-in-out">
                    {item.review}{" "}
                  </p>
                  <p className="text-sm  lg:text-[18px]">{item.companyname} </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
