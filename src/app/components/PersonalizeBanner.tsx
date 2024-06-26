import React from "react";
interface PersonalizeBannerProps {
  scrollToSection: () => void;
}
const PersonalizeBanner: React.FC<PersonalizeBannerProps> = ({ scrollToSection }) => {
  return (
    <main className="m-0 p-0 w-full h-[255px] relative lg:w-full lg:h-[564px] ">
      <div className="w-full absolute bg-white subpixel-antialiased flex justify-between items-center h-[80px] p-2  mt-[27px] text-right
      lg:h-[140px]
      ">
        <div>
        <button className="bg-black whitespace-nowrap flex justify-center items-center text-white text-[10px] pl-[10px] pr-[10px] pt-[5px] pb-[5px] rounded-[36px]
          lg:w-auto lg:text-[20px] lg:pl-[15px] lg:pr-[15px] lg:pt-[10px] lg:pb-[10px]
          transition ease-in-out delay-150 hover:shadow-xl hover:-translate-y-1
          " onClick={scrollToSection}
          >ENQUIRE NOW</button>
       </div>
        <div className="grow">
        <p className="text-[10px] w-full lg:text-[15px]">PERFECT</p>
        <h2 className="w-full text-[15px] lg:text-[20px]">Personalized Gifting</h2>
        <p className="text-[10px] mt-[8px] w-full lg:text-[20px] ">
          Your search of perfect gifting ends here. corporate gifting made
          easier.
        </p>
        </div>
      </div>
      
      <img loading="lazy" className="w-full h-full object-cover hover:transition-all" src="./assets/featured (4).jpg" alt="" />
    </main>
  );
};

export default PersonalizeBanner;
