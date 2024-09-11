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

const Popup: React.FC<PopupProps> = ({ onClose, scrollToSection }) => {
  const handleButtonClick = () => {
    onClose();
    scrollToSection();
  };
  return (
    <div className="w-full h-full fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 scroll-smooth">
      <div className="w-auto h-auto fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 scroll-smooth">
        <div className="w-[90%] h-auto bg-white flex flex-col gap-1  md:flex-row md:h-auto md:w-[80%] lg:h-[60%] ">
          <div className="w-full h-1/2  bottom-0 md:h-auto md:w-1/2">
            <img
              src="./assets/personlize/festival (12).webp"
              loading="eager"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="w-full h-full flex flex-col p-4 relative items-center gap-2 text-center md:w-1/2 md:h-full lg:h-full">
            <div className="flex w-full justify-end items-center">
              <button
                onClick={onClose}
                className="absolute text-2xl text-black "
              >
                &times;
              </button>
            </div>

            {/* Second child div */}
            <div className="flex h-full w-full flex-col justify-center items-center gap-2">
              <h2
                className={`${dangrek.className} text-2xl text-[#b52a2a] md:mb-2 md:text-4xl`}
              >
                New Arrivals
              </h2>
              <div className={`${delius.className} text-lg md:mb-2 md:text-xl`}>
                DIWALI SPECIAL!!
              </div>
              <div
                className={`${quicksand.className} text-lg text-[#044357] md:text-xl`}
              >
                A Token of Appreciation:
              </div>
              <div
                className={`${quicksand.className} text-sm mb-4 text-[#044357] md:text-lg`}
              >
                Our curated hampers are crafted to reflect your brand, featuring
                sustainable products and supporting local artisans, ensuring
                your gifts leave a lasting, positive impact.
              </div>
              <button
                className="bg-black whitespace-nowrap flex justify-center items-center transition ease-in-out delay-150 hover:shadow-2xl hover:-translate-y-1 text-white text-[10px] pl-[10px] pr-[10px] pt-[5px] pb-[5px] rounded-[36px]
    lg:w-auto lg:text-[20px] lg:pl-[15px] lg:pr-[15px] lg:pt-[10px] lg:pb-[10px]"
                onClick={handleButtonClick}
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
