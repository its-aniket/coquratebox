"use client";
import React, { useState } from "react";
import { herobanner } from "@/constants";

const HeroSection = () => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? herobanner.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === herobanner.length - 1 ? 0 : curr + 1));

  return (
    <main className="m-0 p-0 w-full overflow-hidden h-[650px] relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {herobanner.map((link, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <div className="absolute inset-0 flex justify-start items-center text-3xl mt-[27px] flex-col text-center lg:w-full lg:text-black lg:justify-start lg:items-start lg:ml-8 lg:text-6xl lg:text-left ">
              <div className="w-full h-auto flex flex-col justify-center items-center gap-5 lg:text-left lg:justify-start lg:items-start">
                <h1 className="w-[400px] lg:w-[800px]">{link.title}</h1>
                <p className="text-[20px] w-[308px] ">{link.para}</p>
              </div>
              <div className="lg:w-full lg:h-full lg:flex lg:justify-center lg:items-end">
                <button className=" bg-black mt-[8px] pl-[26px] pr-[26px] pt-[5px] pb-[5px]  rounded-[36px] text-[15px] text-white  lg:mb-7 lg:pt-3 lg:pb-3 transition ease-in-out delay-150 hover:shadow-2xl hover:-translate-y-1">
                  shop now
                </button>
              </div>
            </div>
            <img
              className="m-0 p-0 w-full h-[600px] block object-cover lg:hidden"
              src={link.src1}
              alt={link.alt1}
              loading="lazy"
            />
            <img
              className="m-0 p-0 w-full h-[600px] object-cover hidden lg:block"
              src={link.src2}
              alt={link.alt2}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="absolute w-[140px] ml-[70%] mr-3 bottom-[1px] pb-[20px] flex justify-between space-x-4 right-4">
        <button
          onClick={prev}
          className="w-[60px] h-[60px] rounded-[50%] bg-white flex justify-center items-center drop-shadow-md"
        >
          <img className="h-[32px] w-[38px]" src="./arrow.png" alt="" loading="lazy" />
        </button>
        <button
          onClick={next}
          className="w-[60px] h-[60px] rounded-[50%] bg-white flex justify-center items-center drop-shadow-md"
        >
          <img
            className="rotate-180 h-[32px] w-[38px]"
            src="./arrow.png"
            alt=""
            loading="lazy"
          />
        </button>
      </div>
    </main>
  );
};

export default HeroSection;
