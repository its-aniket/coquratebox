"use client"
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { Corporatecategory } from "@/constants";
import { Preahvihear, Pontano_Sans } from "next/font/google";
import Footer from "../components/Footer";
import {
  Akaya_Telivigala,
  Lilita_One,
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
interface HoverImage {
  defaultImg: string;
  hoverImg: string;
  alt: string;
}
const HoverImage: React.FC<HoverImage> = ({ defaultImg, hoverImg, alt }) => {
  const [imgSrc, setImgSrc] = useState(defaultImg);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className="p-0 m-0 w-full h-full block object-cover overflow-hidden transition duration-500  ease-in-out"
      onMouseEnter={() => setImgSrc(hoverImg)}
      onMouseLeave={() => setImgSrc(defaultImg)}
    />
  );
};

const Personalize = () => {
  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      <Navbar />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="bg-[#26B4C7] h-[280px] w-full relative text-center lg:h-[450px]">
          <h3 className="text-xs text-black mt-[19px] ">Home/</h3>
          <h2
            className={`${preahvihear.className} text-xl text-white mt-[30px] lg:text-3xl`}
          >
            Corporate Gifting
          </h2>
          <div
            className={`${pontano_Sans.className} text-black text-xl mt-[15px] lg:text-2xl`}
          >
            Categories
          </div>
        </div>

        <div className="w-full h-auto flex items-center justify-center">
          <div className="absolute h-auto w-full mt-[260px] inset-0 grid grid-cols-2 place-items-center gap-2 p-3 lg:mt-[320px] lg:p-10 lg:gap-10 lg:grid-cols-3">
            {Corporatecategory.map((item, index) => (
              <div
                key={index}
                className="w-full h-full p-0 m-0 flex items-center justify-center"
              >
                <div
                  className={`${akaya_telivigala.className} bg-[#D3F3FF] w-full h-[300px]  flex flex-col justify-center items-center text-left gap-1 lg:w-auto lg:h-[555px] lg:max-h-[535px]`}
                >
                  <div className="h-full w-full m-0 p-0 cursor-pointer mt-0 max-h-[215px] md:max-h-[205px] lg:max-h-[350px] ">
                    <HoverImage defaultImg={item.img} hoverImg={item.img2} alt={item.alt} />
                  </div>

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
                    className={`bg-[#227ED2] py-[2px] px-2 text-white rounded self-end m-2 mr-2 lg:py-[6px] lg:px-3 lg:text-xl`}
                  >
                    More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom-0 block mb-0 mt-[1400px] lg:mt-[1400px]">
        <Footer />
      </div>
    </div>
  );
};

export default Personalize;



