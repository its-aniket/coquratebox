import { Announcement } from "@/constants";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const AnnouncementBar = () => {
  return (
    <div className="w-full h-[30px] text-sm flex justify-center items-center bg-[#E9DEF4] lg:text-md">
      <Swiper
        breakpoints={{
          300: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
       
        }}
    
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay]}
        speed={1500}
        cssMode={true}
        className="w-full mySwiper lg:max-w-[95%]"
      >
        {Announcement.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full flex justify-center items-center">
                <h2>{item.text}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AnnouncementBar;
