import React from "react";
import Link from "next/link";
import { featuredcollection } from "@/constants";
import Image from "next/image";
const FeaturedCollection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-4">
      <div className="w-full flex justify-center items-center flex-col mb-5">
        <h2 className="text-[20px] text-black text-center lg:text-[40px]">
          Featured Collection
        </h2>
        <button className="bg-black mt-[8px] px-[26px] py-[5px] rounded-[36px] text-[15px] text-white lg:py-3">
          View All
        </button>
      </div>
      <div className="bg-slate-100 w-full p-2 grid grid-cols-2 gap-3  lg:grid-cols-3">
        {featuredcollection.map((item,index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover transition ease-in-out delay-150 hover:shadow-2xl hover:-translate-y-1"
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCollection;
