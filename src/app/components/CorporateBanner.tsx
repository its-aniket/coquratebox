import React from "react";
import LazyLoad from "react-lazyload";
interface PersonalizeBannerProps {
  scrollToSection: () => void;
}
const CorporateBanner: React.FC<PersonalizeBannerProps> = ({ scrollToSection }) => {
  return (
    <main className="m-0 p-0 w-full h-[255px] relative lg:w-full lg:h-[564px] ">
      <div
        className="w-full absolute bg-white subpixel-antialiased flex flex-1 justify-between items-center h-[80px] p-2  mt-[27px] text-left 
       lg:h-[140px] "
      >
        <div className="m-1">
          <p className="text-[10px] w-full lg:text-[15px]">PERFECT</p>
          <h2 className="w-full text-[15px] lg:text-[25px]">
            Corporate Gifting
          </h2>
          <p className="text-[10px] mt-[8px] w-full lg:text-[20px]">
            Your search of perfect gifting ends here. corporate gifting made
            easier.
          </p>
        </div>
        <div className="m-1">
          <button
            className="bg-black whitespace-nowrap flex justify-center items-center transition ease-in-out delay-150 hover:shadow-2xl hover:-translate-y-1 text-white text-[10px] pl-[10px] pr-[10px] pt-[5px] pb-[5px] rounded-[36px]
          lg:w-auto lg:text-[20px] lg:pl-[15px] lg:pr-[15px] lg:pt-[10px] lg:pb-[10px]"
          onClick={scrollToSection} >
            ENQUIRE NOW
          </button>
        </div>
      </div>

      <div className="preload-image">
        
          <img
            className="w-full h-full object-cover"
            src="./assets/featured (3).jpg"
            alt=""
            loading="lazy"
          />
        
      </div>
    </main>
  );
};

export default CorporateBanner;
