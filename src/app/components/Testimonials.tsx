'use client'
import { testimonials } from "@/constants";
import React from "react";
import { useState,useEffect } from "react";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent === testimonials.length - 1 ? 0 : prevCurrent + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);
  const prev = () => setCurrent((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  const next = () => setCurrent((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  return (
    <div className="w-full h-auto flex bg-[#BDEBF1] justify-center items-center overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-1000"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {testimonials.map((item, index) => (
          <div
          key={index}
          className={`w-70% overflow-hidden  h-auto m-4 p-4 bg-white rounded-[20px] flex flex-col text-center min-w-full transition-transform duration-500 ease-out ${current === index ? 'scale-110' : 'scale-90'}`}
        >
          <div>{item.rating}</div>
          <div>{item.review}</div>
          <div>{item.companyname}</div>
        </div>
        ))}

      </div>
      <div className="absolute w-[140px] ml-[70%] mr-3 bottom-[1px] pb-[20px] flex justify-between space-x-4 right-4">
        <button onClick={prev} className="w-[60px] h-[60px] rounded-[50%] bg-white flex justify-center items-center drop-shadow-md">
          <img className="h-[32px] w-[38px]" src="./arrow.png" alt="" />
        </button>
        <button onClick={next} className="w-[60px] h-[60px] rounded-[50%] bg-white flex justify-center items-center drop-shadow-md">
          <img className="rotate-180 h-[32px] w-[38px]" src="./arrow.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
