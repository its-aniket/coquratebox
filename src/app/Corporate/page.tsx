import React from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { Corporatecategory } from "@/constants";
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
        <div className="bg-[#26B4C7] h-[280px] w-full relative text-center lg:h-[450px]">
          <h3 className="text-xs text-black mt-[19px] ">Home/</h3>
          <h2
            className={`${preahvihear.className} text-xl text-white mt-[30px] lg:text-3xl`}
          >
            Corporate Gifting
          </h2>
          <div className={`${pontano_Sans.className} text-black text-xl mt-[15px] lg:text-2xl`}>
            Categories
          </div>
        </div>

        <div className="w-full h-auto flex items-center justify-center">
          <div className="absolute h-auto w-full mt-[260px] inset-0 grid grid-cols-2 place-items-center  gap-2 p-3 lg:mt-[320px] lg:p-10 lg:gap-10 lg:grid-cols-3">
            {Corporatecategory.map((item, index) => (
              <div
                key={index}
                className=" w-full h-full p-0 m-0 flex items-center justify-center"
              >
                <ProductCard
                  key={index}
                  img={item.img}
                  color={"#DDEEF4"}
                  btcolor="#227ED2"
                  alt={item.alt}
                  name={item.name}
                  description={item.desc}
                />
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
