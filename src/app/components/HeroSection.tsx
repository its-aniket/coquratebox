import React from "react";

const HeroSection = () => {
  return (
    <main className="m-0 p-0 w-full h-[630px] relative  ">
      <div>
        <div className="w-full absolute text-white subpixel-antialiased flex justify-center text-3xl mt-[27px] flex-col 
        place-items-center text-center lg:text-black lg:justify-start lg:items-start lg:ml-8 lg:text-6xl  lg:text-left lg:w-[1000px]">
          <h1>
            Crafted Memories <br /> Captured Forever!
          </h1>
          <p className="text-[20px] mt-[8px] w-[308px] ">
            Personalize your moment with our customized hampers
          </p>
          <button className="bg-black mt-[8px] pl-[26px] pr-[26px] pt-[5px] pb-[5px] rounded-[36px] text-[15px]  text-white 
          lg:pt-3 lg:pb-3 
          transition ease-in-out delay-150 hover:shadow-2xl hover:-translate-y-1">
            shop now
          </button>
        </div>
        <img
          className="m-0 p-0 w-full h-[600px] block object-cover  lg:hidden"
          src="./BLACKSETWM.jpeg"
          alt=""
        />
        <img
          className="m-0 p-0 w-full h-[600px] object-cover hidden lg:block"
          src="./pune hamper.jpg"
          alt=""
        />
      </div>
      <div className="absolute w-[140px] ml-[70%] mr-3 bottom-[1px] flex justify-between space-x-4  right-4">
        <div className="w-[60px] h-[60px] rounded-[50%] bg-white flex justify-center items-center drop-shadow-xl">
          <img className="h-[32px] w-[38px]" src="./arrow.png" alt="" />
        </div>
        <div className="w-[60px] h-[60px] rounded-[50%] bg-white flex justify-center items-center drop-shadow-xl">
          <img
            className="rotate-180 h-[32px] w-[38px]"
            src="./arrow.png"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
