"use client";
import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { personalizedcategory } from "@/constants";
import {
  Preahvihear,
  Pontano_Sans,
  Acme,
  Josefin_Slab,
} from "next/font/google";

const akaya_telivigala = Acme({
  subsets: ["latin"],
  weight: "400",
});

const josefin_slab = Josefin_Slab({
  subsets: ["latin"],
  weight: "400",
});
const preahvihear = Preahvihear({
  subsets: ["latin"],
  weight: "400",
});
const pontano_Sans = Pontano_Sans({
  subsets: ["latin"],
  weight: "400",
});

const Personalize = () => {
  const birthdayRef = useRef<HTMLDivElement>(null);
  const anniversaryRef = useRef<HTMLDivElement>(null);
  const newBornRef = useRef<HTMLDivElement>(null);
  const momToBeRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="bg-[#E1447C] h-[280px] w-full relative text-center lg:h-[450px]">
          <h3 className="text-xs text-black mt-[19px]">Home/</h3>
          <h2
            className={`${preahvihear.className} text-xl text-white mt-[30px] lg:text-3xl`}
          >
            Personlized Gifting
          </h2>
          <div
            className={`${pontano_Sans.className} text-black text-xl mt-[15px] lg:text-2xl`}
          >
            Categories
          </div>
        </div>

        <div className="w-full h-auto flex items-center justify-center">
          <div className="absolute h-auto w-full mt-[260px] inset-0 grid grid-cols-2 place-items-center gap-2 p-3 lg:mt-[320px] lg:p-10 lg:gap-10 lg:grid-cols-3">
            {personalizedcategory.map((item, index) => (
              <div
                key={index}
                className="w-full h-full p-0 m-0 flex items-center justify-center"
              >
                <div
                  key={index}
                  className="w-full h-full p-0 m-0 flex items-center justify-center"
                >
                  <div
                    className={`${akaya_telivigala.className} bg-[#FFD1E4] w-full h-full flex flex-col justify-center items-center text-left gap-1 lg:w-auto lg:h-[555px]`}
                  >
                    <img
                      className="p-0 m-0 w-full h-full block object-cover overflow-hidden"
                      src={item.img}
                      alt={item.alt}
                      loading="lazy"
                    />
                    <h3
                      className={`${akaya_telivigala.className} w-full h-auto text-[12px] sm:text-xl p-2 lg:text-2xl`}
                    >
                      {item.name}
                    </h3>
                    <p
                      className={`${josefin_slab.className} hidden w-full h-auto text-[8px] p-2 lg:text-lg lg:block`}
                    >
                      {item.desc}
                    </p>
                    <button
                      onClick={() => {
                        if (item.name === "Birthday")
                          scrollToSection(birthdayRef);
                        else if (item.name === "Anniversary")
                          scrollToSection(anniversaryRef);
                        else if (item.name === "New Born")
                          scrollToSection(newBornRef);
                        else if (item.name === "Mom to Be")
                          scrollToSection(momToBeRef);
                      }}
                      className="bg-[#DA134F] py-[2px] px-2 text-white rounded self-end m-2 mr-2 lg:py-[6px] lg:px-3 lg:text-xl"
                    >
                      More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          id="birthday"
          ref={birthdayRef}
          className="h-[600px] mt-[1000px] w-full text-center shadow-sm "
        >
          <h2 className="text-[20px] text-black text-center lg:text-[40px]">
            Birthday
          </h2>
        </div>
        <div
          id="birthday"
          ref={anniversaryRef}
          className="h-[600px] w-full text-center shadow-sm"
        >
          <h2 className="text-[20px] text-black text-center lg:text-[40px]">
            Anniversary
          </h2>
        </div>
        <div
          id="birthday"
          ref={newBornRef}
          className="h-[600px]  w-full text-center shadow-sm"
        >
          <h2 className="text-[20px] text-black text-center lg:text-[40px]">
            New Born
          </h2>
        </div>
        <div
          id="birthday"
          ref={momToBeRef}
          className="h-[600px]  w-full text-center shadow-sm"
        >
          <h2 className="text-[20px] text-black text-center lg:text-[40px]">
            Mom to be
          </h2>
        </div>
      </div>

      <div className="bottom-0 block mb-0 mt-[1400px] lg:mt-[1400px]">
        <Footer />
      </div>
    </div>
  );
};

export default Personalize;
