"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Quicksand } from "next/font/google";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Delius } from "next/font/google";
import { Autoplay, FreeMode, Pagination, Scrollbar } from "swiper/modules";


import { testimonials } from "@/constants";
import React from "react";
import { FaStar } from "react-icons/fa";
import LazyLoad from "react-lazyload";
const delius = Delius({
  subsets: ["latin"],
  weight: "400",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: "400",
});

const Testimonials = () => {
  return (
    <div>
      <h2 className="p-6 text-[20px] text-black text-center lg:text-[40px]">
        Testimonials
      </h2>
      <div className="h-auto flex items-center justify-center flex-col gap-4 p-10 bg-gradient-to-b from-[#D7EED1] to-[#F6ECFF] ">
        <Swiper
          breakpoints={{
            425: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            724: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
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
              <div className="flex flex-col mb-10 text-center shadow-lg p-4 bg-white text-black rounded-xl px-6 py-8 min-h-[320px] max-h-[300px] cursor-pointer">
                <div className="text-center flex justify-center flex-col gap-7 p-1 m-1">
                  <div className="flex flex-col justify-center items-center gap-1">
                    <div className="overflow-hidden self-center rounded-full">
                      <LazyLoad>
                        <img
                          src={item.productimg}
                          alt={item.alt}
                          className="w-[50px] h-[50px]"
                          loading="lazy"
                        />
                      </LazyLoad>
                    </div>
                    <div className="flex justify-center items-center">
                      {Array.from({ length: item.rating }, (_, i) => (
                        <FaStar key={i} className="text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <p
                    className={`${quicksand.className} review-text text-sm lg:text-[18px] transition-all duration-500 ease-in-out`}
                  >
                    {item.review}
                  </p>
                  <p className={`${delius.className} text-sm lg:text-lg`}>
                    {item.companyname}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
