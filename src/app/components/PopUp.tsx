import React from "react";
import { Dangrek, Delius, Quicksand } from "next/font/google";
interface PopupProps {
  onClose: () => void;
  scrollToSection: () => void;
}


const dangrek = Dangrek({
  subsets: ["latin"],
  weight: "400",
});
const delius = Delius({
  subsets: ["latin"],
  weight: "400",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: "400",
});

const Popup: React.FC<PopupProps> = ({ onClose,scrollToSection }) => {
    const handleButtonClick = () => {
        onClose();
        scrollToSection();
      };
  return (
    <div className="w-full h-full fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 scroll-smooth">
      <div className="w-[90%] h-[75%] bg-white flex flex-col gap-1 justify-center items-center md:flex-row md:h-[50%] md:w-[50%] ">
        <div className="w-full h-1/2 bottom-0 md:h-full md:w-1/2">
          <img src="./assets/featured (3).jpg" loading="eager" alt="" className="h-full w-full object-cover"/>
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-black"
          >
            &times;
          </button>
        </div>
        <div className="w-full h-1/2 flex flex-col p-4 relative justify-center items-center text-center gap-2 md:w-1/2 md:h-full">
          <h2 className={`${dangrek.className} text-2xl text-[#002263]`}>New Arrivals</h2>
          <div className={`${delius.className} text-lg`}>FATHER’S DAY SPECIAL!</div>
          <div className={`${quicksand.className} text-lg text-[#044357]`}>A Token of Appreciation:</div>
          <div className={`${quicksand.className} text-sm text-[#044357]`}>
            Honor your father&apos;s unwavering support with a thoughtful gift.
            Celebrate his special day with a gesture from the heart.
          </div>
          <button className="bg-black whitespace-nowrap flex justify-center items-center transition ease-in-out delay-150 hover:shadow-2xl hover:-translate-y-1 text-white text-[10px] pl-[10px] pr-[10px] pt-[5px] pb-[5px] rounded-[36px]
          lg:w-auto lg:text-[20px] lg:pl-[15px] lg:pr-[15px] lg:pt-[10px] lg:pb-[10px]" onClick={handleButtonClick} >Enquire Now</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
