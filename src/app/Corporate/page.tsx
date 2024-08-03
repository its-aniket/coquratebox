"use client"
import React, { useRef, useState } from "react";
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
import ScrollToTop from "../components/ScrollToTop";
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
      className="p-0 m-0 w-full h-full block object-cover overflow-hidden transition duration-500  ease-in-out  lg:max-h-[280px]"
      onMouseEnter={() => setImgSrc(hoverImg)}
      onMouseLeave={() => setImgSrc(defaultImg)}
    />
  );
};


const Personalize = () => {
  const welcomekitref = useRef<HTMLDivElement>(null);
  const eventref = useRef<HTMLDivElement>(null);
  const promotionalgifting = useRef<HTMLDivElement>(null);
  const farewellref = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const categories =[
    {
      id: "welcomekit",
      ref: welcomekitref,
      title: "Welcome Kit",
      desc: "Start Their Journey with a Warm Welcome!",
      images: [
        {src: "./assets/corporate/newjoinee (1).webp",  alt: "welcome kit img 1"},
        {src: "./assets/corporate/newjoinee (2).webp",  alt: "welcome kit img 1"},
        {src: "./assets/corporate/newjoinee (3).webp",  alt: "welcome kit img 1"},
        {src: "./assets/corporate/newjoinee (4).webp",  alt: "welcome kit img 1"},
      ]
    },
    {
      id: "occassional_gifting",
      ref: eventref,
      title: "Event Gifts",
      desc: "Mark the Milestones while Sharing Moments of Joy!",
      images: [
        {
          src: "./assets/personlize/festival (1).webp",
          alt: "festival image 1",
        },
        {
          src: "./assets/personlize/festival (2).webp",
          alt: "festival image 2",
        },
        {
          src: "./assets/personlize/festival (3).webp",
          alt: "festival image 3",
        },
        {
          src: "./assets/personlize/festival (4).webp",
          alt: "festival image 4",
        },
        {
          src: "./assets/personlize/festival (5).webp",
          alt: "festival image 5",
        },
        {
          src: "./assets/personlize/festival (6).webp",
          alt: "festival image 6",
        },
        {
          src: "./assets/personlize/festival (7).webp",
          alt: "festival image 7",
        },
        {
          src: "./assets/personlize/festival (8).webp",
          alt: "festival image 8",
        },
        {
          src: "./assets/personlize/festival (9).webp",
          alt: "festival image 9",
        },
        {
          src: "./assets/personlize/festival (10).webp",
          alt: "festival image 10",
        },
        {
          src: "./assets/personlize/festival (11).webp",
          alt: "festival image 11",
        },
        {
          src: "./assets/personlize/festival (12).webp",
          alt: "festival image 12",
        },
        {
          src: "./assets/personlize/festival (13).webp",
          alt: "festival image 13",
        },
        {
          src: "./assets/personlize/festival (14).webp",
          alt: "festival image 14",
        },
        {
          src: "./assets/personlize/festival (15).webp",
          alt: "festival image 15",
        },
        {
          src: "./assets/personlize/festival (16).webp",
          alt: "festival image 16",
        },
        {
          src: "./assets/personlize/festival (17).webp",
          alt: "festival image 17",
        },
        {
          src: "./assets/personlize/festival (18).webp",
          alt: "festival image 18",
        },
      
        {
          src: "./assets/personlize/festival (20).webp",
          alt: "festival image 20",
        },
        {
          src: "./assets/personlize/festival (21).webp",
          alt: "festival image 21",
        },
        {
          src: "./assets/personlize/festival (22).webp",
          alt: "festival image 22",
        },
        {
          src: "./assets/personlize/festival (23).webp",
          alt: "festival image 23",
        },
      ]
    },
    {
      
      id: "farewellref",
      ref: farewellref,
      title: "Farewell Gifts",
      desc: "Celebrate their Journey by Honouring the Memories!",
      images: [
        {src: "./assets/corporate/retirenment (1).webp",  alt: "retirnemnt kit img 1"},
        
        {src: "./assets/corporate/retirenment (2).webp",  alt: "retirnment kit img 2"},
      ]
      
    },
    {
      
      id: "promotional-gifting",
      ref: promotionalgifting,
      title: "Promo Items",
      desc: "Elevate Visibility and Leave a Lasting Impression!",
      images: [
        {src: "./assets/corporate/promotionalgifting (1).webp",  alt: "retirnemnt kit img 1"},
        {src: "./assets/corporate/promotionalgifting (2).webp",  alt: "retirnemnt kit img 1"},
        {src: "./assets/corporate/promotionalgifting (3).webp",  alt: "retirnemnt kit img 1"},
        {src: "./assets/corporate/promotionalgifting (4).webp",  alt: "retirnemnt kit img 1"},
        {src: "./assets/corporate/promotionalgifting (5).webp",  alt: "retirnemnt kit img 1"},
        {src: "./assets/corporate/promotionalgifting (6).webp",  alt: "retirnemnt kit img 1"},
      ]
      
    },

]
  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      <Navbar />
      <ScrollToTop color="#D3F3FF"/>
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
                  className={`${akaya_telivigala.className} bg-[#D3F3FF] w-full h-[300px]  flex flex-col justify-center items-center text-left gap-1 lg:w-full lg:h-[450px] lg:max-h-[535px]`}
                >
                  <div className="h-full w-full m-0 p-0 cursor-pointer mt-0 max-h-[215px] md:max-h-[205px] lg:h-[300px] lg:max-h-[350px] ">
                    <HoverImage defaultImg={item.img} hoverImg={item.img2} alt={item.alt} />
                  </div>

                  <h3
                    className={`${akaya_telivigala.className} w-full h-auto text-[12px] sm:text-xl p-2 lg:text-2xl`}
                  >
                    {item.name}
                  </h3>
                  <p
                    className={`${josefin_slab.className} hidden w-full h-full text-[8px] p-2 lg:text-lg lg:block`}
                  >
                    {item.desc}
                  </p>
                  <button
                  onClick={() => {
                    if (item.name === "Welcome Kit")
                      scrollToSection(welcomekitref);
                    else if (item.name === "Farewell Gifts")
                      scrollToSection(farewellref);
                    else if (item.name === "Event Gifts")
                      scrollToSection(eventref);
                    else if (item.name === "Promo Items")
                      scrollToSection(promotionalgifting);
                  }}
                    className={`bg-[#227ED2] py-[2px] px-2 text-white rounded self-end m-2 mr-2  lg:text-xl`}
                  >
                    More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
       
        <div className="w-full h-full mt-[550px] lg:mt-[750px]">
          {categories.map((item, index) => (
            <div
              key={index}
              id={item.id}
              ref={item.ref}
              className="h-auto  w-full text-center shadow-sm p-2"
            >
              <h2 className="text-[20px] text-black text-center lg:text-[40px]">
                {item.title}
              </h2>
              <span className="text-[12px] md:text-xl">{item.desc}</span>
              <div className="flex flex-wrap justify-center mt-4">
                {item.images.map((img, imgIndex) => (
                  <div key={imgIndex} className="w-1/2 p-2 sm:w-1/4">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-[200px] object-cover md:h-[300px]"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bottom-0 block mb-0 mt-[100px] lg:mt-[100px]">
        <Footer />
      </div>
    </div>
  );
};

export default Personalize;