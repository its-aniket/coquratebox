"use client";
import React from "react";
import Link from "next/link";
import { featuredcollection } from "@/constants";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const FeaturedCollection = () => {
  return (
    <div className="mb-6">
      <div className="m-0 w-full h-auto flex justify-center items-center flex-col">
        <div className="w-full flex justify-center items-center flex-col mb-5">
          <h2 className="text-[20px] text-black text-center lg:text-[40px]">
            Featured Collection
          </h2>
          <button onClick={() => window.location.href = '/Personlized'} className="bg-black mt-[8px] px-[26px] py-[5px] rounded-[36px] text-[15px] text-white lg:py-3">
            View All
          </button>
        </div>
        <div className="w-full h-full px-2 py-2 bg-[#D9D9D9] md:py-4">
          <Swiper
            breakpoints={{
              425: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              724: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            pagination={{
              type: "bullets",
              clickable: true,
              el: ".swiper-pagination-custom",
            }}
            navigation={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Pagination, Navigation, Autoplay]}
            speed={1500}
            cssMode={true}
            className="w-full mySwiper lg:max-w-[95%]"
          >
            {featuredcollection.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition ease-in-out delay-150 hover:shadow-2xl hover:-translate-y-1"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination-custom mt-4 flex justify-center"></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollection;