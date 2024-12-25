"use client";
import React, { useState } from "react";
import { herobanner } from "@/constants";
import { Dangrek, Quicksand } from "next/font/google";
const dangrek = Dangrek({
  subsets: ["latin"],
  weight: "400",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: "400",
});
// const playwrite_México =Playwrite_México({
//   subsets: ["latin"],
//   weight: "400",
// });
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
        <div className="w-full flex-shrink-0 relative">
          <div className="absolute inset-0 flex justify-start items-center text-3xl mt-[27px] flex-col text-center lg:w-full lg:text-black lg:justify-start lg:items-start lg:ml-8 lg:text-6xl lg:text-left ">
            <div className="w-full h-auto flex flex-col justify-center mt-5 text-white items-center gap-5 lg:text-left lg:justify-start lg:items-start">
              <h1
                className={`${dangrek.className} text-[#dcd5d5] w-[400px] lg:w-[40%]`}
              >
                Unwrap joy, one gift at a time.
              </h1>
              <p
                className={`${quicksand.className} text-[#dcd5d5] max-w-[600px] text-[24px] lg:w-[600px] `}
              >
                Create Lasting Memories with Personalized Gifts that Speak from
                the Heart
              </p>
            </div>
            {/* <div className="lg:w-full z-40 lg:h-full lg:flex lg:justify-center lg:items-end">
              <button
                onClick={() => window.location.assign("/Diwali_Gifts")}
                className="bg-[#FF7F11] mt-[8px] pl-[26px] pr-[26px] pt-[5px] pb-[5px] rounded-[36px] text-[15px] text-black lg:mb-7 lg:pt-3 lg:pb-3 transition ease-in-out delay-150 hover:shadow-2xl hover:-translate-y-1"
              >
                View All
              </button>
            </div> */}
          </div>
          <img
            className="m-0 p-0 w-full h-[600px] block object-cover lg:hidden"
            src="./assets/personlize/festival (2).webp"
            alt="banner image mobile"
            loading="lazy"
          />
          <img
            className="m-0 p-0 w-full h-[600px] object-cover hidden lg:block"
            src="./assets/personlize/festival (17).webp"
            alt="banner image desktop"
            loading="lazy"
          />
        </div>


        <div className="w-full flex-shrink-0 relative">
          <div className="absolute inset-0 flex justify-start items-center text-3xl mt-[27px] flex-col text-center lg:w-full lg:text-black lg:justify-start lg:items-start lg:ml-8 lg:text-6xl lg:text-left ">
            <div className="w-full h-auto flex flex-col justify-center mt-12 text-white items-center gap-5 lg:text-left lg:justify-start lg:items-start">
              <h1 className={`${dangrek.className} w-[400px] lg:w-[800px]`}>
                Uniquely yours...
              </h1>
              <p
                className={`${quicksand.className} max-w-[500px] text-[24px] lg:w-[400px] `}
              >
                Create Unforgettable Memories with Our Personalized Gifts
              </p>
            </div>
            <div className="lg:w-full lg:h-full lg:flex lg:justify-center lg:items-end">
              <button
                onClick={() => (window.location.href = "/Personalized")}
                className=" bg-black mt-[8px] pl-[26px] pr-[26px] pt-[5px] pb-[5px]  rounded-[36px] text-[15px] text-white  lg:mb-7 lg:pt-3 lg:pb-3 transition ease-in-out delay-150 hover:shadow-2xl hover:-translate-y-1"
              >
                View All
              </button>
            </div>
          </div>
          <img
            className="m-0 p-0 w-full h-[600px] block object-cover lg:hidden"
            src="./assets/banner1.webp"
            alt="banner image mobile"
            loading="lazy"
          />
          <img
            className="m-0 p-0 w-full h-[600px] object-cover hidden lg:block"
            src="./assets/banner1.webp"
            alt="banner image desktop"
            loading="lazy"
          />
        </div>
        {/* banner 2 */}
        <div className="w-full flex-shrink-0 relative">
          <div className="absolute inset-0 flex justify-start items-center text-3xl mt-[27px] flex-col text-center lg:w-full lg:text-black lg:justify-start lg:items-start lg:ml-8 lg:text-6xl lg:text-left ">
            <div className="w-full h-auto flex flex-col justify-center  items-center gap-5 lg:text-left lg:justify-start lg:items-start lg:mt-12 text-white">
              <h1 className={`${dangrek.className} w-[400px] lg:w-[800px]`}>
                Crafted for You!
              </h1>
              <p
                className={`${quicksand.className}  text-[24px] lg:w-[400px] `}
              >
                Craft the Perfect Present with Our Custom Gift Sets
              </p>
            </div>
            <div className="lg:w-full lg:h-full lg:flex lg:justify-center lg:items-end">
              <button
                onClick={() => (window.location.href = "/Personalized")}
                className=" bg-black mt-[8px] pl-[26px] pr-[26px] pt-[5px] pb-[5px]  rounded-[36px] text-[15px] text-white  lg:mb-7 lg:pt-3 lg:pb-3 transition ease-in-out delay-150 hover:shadow-2xl hover:-translate-y-1"
              >
                View All
              </button>
            </div>
          </div>
          <img
            className="m-0 p-0 w-full h-[600px] block object-cover lg:hidden"
            src="./assets/bannerM2.webp"
            alt="banner image mobile"
            loading="lazy"
          />
          <img
            className="m-0 p-0 w-full h-[600px] object-cover hidden lg:block"
            src="./assets/banner2.webp"
            alt="banner image desktop"
            loading="lazy"
          />
        </div>
        {/* banner 3 */}
        <div className="w-full flex-shrink-0 relative">
          <div className="absolute inset-0 flex justify-start items-center text-3xl mt-[27px] flex-col text-center text-white lg:w-full lg:text-black lg:justify-start lg:items-start lg:ml-8 lg:text-6xl lg:text-left ">
            <div className="w-full h-auto flex flex-col justify-center  text-black items-center gap-5 lg:text-left lg:justify-start lg:mt-12 lg:items-start">
              <h1 className={`${dangrek.className} w-[400px] lg:w-[800px]`}>
                Coporate Elegance!
              </h1>
              <p
                className={`${quicksand.className}  text-[24px] lg:w-[450px] `}
              >
                Elevate Your Professional Relationships with Premium Corporate
                Gifts
              </p>
            </div>
            <div className="lg:w-full lg:h-full lg:flex lg:justify-center lg:items-end">
              <button
                onClick={() => (window.location.href = "/Corporate")}
                className=" bg-black mt-[8px] pl-[26px] pr-[26px] pt-[5px] pb-[5px]  rounded-[36px] text-[15px] text-white  lg:mb-7 lg:pt-3 lg:pb-3 transition ease-in-out delay-150 hover:shadow-2xl hover:-translate-y-1"
              >
                View All
              </button>
            </div>
          </div>
          <img
            className="m-0 p-0 w-full h-[600px] block object-cover lg:hidden"
            src="./assets/bannerM3.webp"
            alt="banner image mobile"
            loading="lazy"
          />
          <img
            className="m-0 p-0 w-full h-[600px] object-cover hidden lg:block"
            src="./assets/banner3.webp"
            alt="banner image desktop"
            loading="lazy"
          />
        </div>
      </div>
      <div className="absolute w-[140px] ml-[70%] mr-3 bottom-[1px] pb-[20px] flex justify-between space-x-4 right-4 z-50">
        <button
          onClick={prev}
          className="w-[60px] h-[60px] rounded-[50%] bg-white flex justify-center items-center drop-shadow-md"
        >
          <img
            className="h-[32px] w-[38px]"
            src="./arrow.png"
            alt=""
            loading="lazy"
          />
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
