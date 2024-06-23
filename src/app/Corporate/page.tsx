import React from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { personalizedcategory } from "@/constants";
import { Preahvihear,Pontano_Sans } from "next/font/google";
import Footer from "../components/Footer";
const preahvihear = Preahvihear({
  subsets: ["latin"],
  weight: "400",
});
const pontano_Sans = Pontano_Sans({
  subsets: ["latin"],
  weight: "400",
});
const Personalize = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="bg-[#19A0BE] h-[350px] w-full relative text-center">
          <h3 className="text-xs text-black mt-[19px] ">Home/</h3>
          <h2
            className={`${preahvihear.className} text-xl text-white mt-[30px]`}
          >
            Corporate Gifting
          </h2>
          <div className={`${pontano_Sans.className} text-black text-xl mt-[15px]`}>
            Categories
          </div>
        </div>
        <div className="bg-[#8FE4F0] h-[350px] w-full relative mt-[320px] text-center"></div>
        <div className="w-full h-auto flex items-center justify-center">
          <div className="absolute mt-[280px] inset-0 w-auto h-auto grid grid-cols-2 place-items-center gap-2  sm:grid-cols-3">
            {personalizedcategory.map((item, index) => (
              <div
                key={index}
                className="w-[150px] p-0 m-0 h-auto flex items-center justify-center sm:w-[350px] sm:h-auto"
              >
                <ProductCard
                  key={index}
                  img={item.img}
                  alt={item.alt}
                  name={item.name}
                  description={item.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom-0 block mb-0 mt-[1400px] sm:mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Personalize;
