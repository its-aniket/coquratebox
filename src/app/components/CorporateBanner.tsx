import React from "react";

const CorporateBanner = () => {
  return (
    <main className="m-0 p-0 w-full h-[285px] relative  ">
      <div className="w-full absolute bg-white subpixel-antialiased flex justify-center items-center h-[80px] p-2  mt-[27px] text-left lg:text-black lg:justify-start lg:items-start lg:ml-8 lg:text-6xl  lg:text-left lg:w-[1000px]">
        <div>
        <p className="text-[10px] w-full">PERFECT</p>
        <h2 className="w-full text-[15px]">Corporate Gifting</h2>
        <p className="text-[10px] mt-[8px] w-[308px] ">
          Your search of perfect gifting ends here. corporate gifting made
          easier.
        </p>
        </div>
        <div>
          <button className="bg-black flex justify-center items-center text-white text-[10px] pl-[10px] pr-[10px] pt-[5px] pb-[5px] rounded-[36px]">ENQUIRE NOW</button>
        </div>
      </div>
      <img src="./assets/featured3.jpg" alt="" />
    </main>
  );
};

export default CorporateBanner;
