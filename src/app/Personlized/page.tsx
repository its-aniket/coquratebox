"use client";
import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { personalizedcategory } from "@/constants";
import {
  Preahvihear,
  Pontano_Sans,
  Acme,
  Josefin_Slab,
} from "next/font/google";
import PersonalizeBanner from "../components/PersonalizeBanner";
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
  const birthdayRef = useRef<HTMLDivElement>(null);
  const anniversaryRef = useRef<HTMLDivElement>(null);
  const babybliss = useRef<HTMLDivElement>(null);
  const TokenofThanks = useRef<HTMLDivElement>(null);
  const EngagmentTreats = useRef<HTMLDivElement>(null);
  const ThemeHampers = useRef<HTMLDivElement>(null);
  const Valentineslove = useRef<HTMLDivElement>(null);
  const kpop = useRef<HTMLDivElement>(null);
  const Festivecheer = useRef<HTMLDivElement>(null);
  const Weddingdelight = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const categories = [
    {
      id: "birthday",
      ref: birthdayRef,
      title: "Birthday",
      desc: "Celebrate Their Special Day with Personalized Birthday Surprises!",
      images: [
        {
          src: "./assets/personlize/birthday (1).webp",
          alt: "birthday image 1",
        },
        { src: "./assets/personlize/birthday2.webp", alt: "birthday image 1" },
        {
          src: "./assets/personlize/birthday (2).webp",
          alt: "birthday image 1",
        },
        {
          src: "./assets/personlize/birthday (3).webp",
          alt: "birthday image 1",
        },
        {
          src: "./assets/personlize/birthday (4).webp",
          alt: "birthday image 1",
        },
        {
          src: "./assets/personlize/birthday (5).webp",
          alt: "birthday image 1",
        },
        {
          src: "./assets/personlize/birthday (6).webp",
          alt: "birthday image 1",
        },
        {
          src: "./assets/personlize/birthday (7).webp",
          alt: "birthday image 1",
        },
        {
          src: "./assets/personlize/birthday (8).webp",
          alt: "birthday image 1",
        },
        {
          src: "./assets/personlize/birthday (9).webp",
          alt: "birthday image 1",
        },
        {
          src: "./assets/personlize/birthday (10).webp",
          alt: "birthday image 1",
        },
        {
          src: "./assets/personlize/birthday (11).webp",
          alt: "birthday image 1",
        },
        {
          src: "./assets/personlize/birthday (13).webp",
          alt: "birthday image 1",
        },
        {
          src: "./assets/personlize/birthday (14).webp",
          alt: "birthday image 1",
        },
      ],
    },
    {
      id: "anniversary",
      ref: anniversaryRef,
      title: "Anniversary",
      desc: "Celebrate Love with Heartfelt Anniversary Gifts!",
      images: [
        {
          src: "./assets/personlize/anniversary(1).webp",
          alt: "Annivarsary image 1",
        },
        {
          src: "./assets/personlize/anniversary (1).webp",
          alt: "Annivarsary image 1",
        },
        {
          src: "./assets/personlize/anniversary (2).webp",
          alt: "Annivarsary image 1",
        },
        {
          src: "./assets/personlize/anniversary (3).webp",
          alt: "Annivarsary image 1",
        },
        {
          src: "./assets/personlize/anniversary (4).webp",
          alt: "Annivarsary image 1",
        },
        {
          src: "./assets/personlize/anniversary (5).webp",
          alt: "Annivarsary image 1",
        },
        {
          src: "./assets/personlize/anniversary (6).webp",
          alt: "Annivarsary image 1",
        },
        {
          src: "./assets/personlize/anniversary (7).webp",
          alt: "Annivarsary image 1",
        },
        {
          src: "./assets/personlize/anniversary (8).webp",
          alt: "Annivarsary image 1",
        },
      ],
    },

    {
      id: "babybliss",
      ref: babybliss,
      title: "Baby Bliss",
      desc: "Welcome the New Arrival with Delightful Baby Gifts!",
      images: [
        {
          src: "./assets/personlize/new born (1).webp",
          alt: "Annivarsary image 1",
        },
        {
          src: "./assets/personlize/new born (2).webp",
          alt: "Annivarsary image 1",
        },
        {
          src: "./assets/personlize/new born (3).webp",
          alt: "Annivarsary image 1",
        },
        {
          src: "./assets/personlize/new born (4).webp",
          alt: "Annivarsary image 1",
        },
        {
          src: "./assets/personlize/new born (5).webp",
          alt: "Annivarsary image 1",
        },
      ],
    },
    {
      id: "thankyou",
      ref: TokenofThanks,
      title: "Token Of Thanks",
      desc: "Express Your Gratitude with Custom-Made Thank You Kit!",
      images: [
        {
          src: "./assets/personlize/thank you (1).webp",
          alt: "Annivarsary image 1",
        },
        {
          src: "./assets/personlize/thank you (2).webp",
          alt: "Annivarsary image 1",
        },
        {
          src: "./assets/personlize/thank you (3).webp",
          alt: "Annivarsary image 1",
        },
        {
          src: "./assets/personlize/thank you (4).webp",
          alt: "Annivarsary image 1",
        },
        {
          src: "./assets/personlize/thank you (5).webp",
          alt: "Annivarsary image 1",
        },
        {
          src: "./assets/personlize/thank you (6).webp",
          alt: "Annivarsary image 1",
        },
      ],
    },
    {
      id: "EngagmentTreats",
      ref: EngagmentTreats,
      title: "Engagment Treats",
      desc: "Experience the Joy of Commitment with Our Elegant Engagement Platters!!",
      images: [
        {
          src: "./assets/personlize/engagment (1).webp",
          alt: "Annivarsary image 1",
        },
        {
          src: "./assets/personlize/engagment (2).webp",
          alt: "Annivarsary image 1",
        },
        {
          src: "./assets/personlize/engagment (3).webp",
          alt: "Annivarsary image 1",
        },
        {
          src: "./assets/personlize/engagment (4).webp",
          alt: "Annivarsary image 1",
        },
        {
          src: "./assets/personlize/engagment (5).webp",
          alt: "Annivarsary image 1",
        },
      ],
    },
    {
      id: "Valentine'sLove",
      ref: Valentineslove,
      title: "Valentine's Love",
      desc: "Express Your Love with Thoughtful Valentine's Gifts!",
      images: [
        {
          src: "./assets/personlize/valentine (1).webp",
          alt: "Annivarsary image 1",
        },
        {
          src: "./assets/personlize/valentine (2).webp",
          alt: "Annivarsary image 2",
        },
        {
          src: "./assets/personlize/valentine (3).webp",
          alt: "Annivarsary image 3",
        },
        {
          src: "./assets/personlize/valentine (4).webp",
          alt: "Annivarsary image 4",
        },
      ],
    },
    {
      id: "themehampers",
      ref: ThemeHampers,
      title: "Theme Hampers",
      desc: "Perfectly Curated Hampers for Every Theme and Occasion!",
      images: [
        {
          src: "./assets/personlize/themebase (1).webp",
          alt: "Annivarsary image 1",
        },
        {
          src: "./assets/personlize/themehamper (1).webp",
          alt: "Annivarsary image 4",
        },
        {
          src: "./assets/personlize/themehamper (2).webp",
          alt: "Annivarsary image 4",
        },
        {
          src: "./assets/personlize/themehamper (3).webp",
          alt: "Annivarsary image 4",
        },
        {
          src: "./assets/personlize/themehamper (4).webp",
          alt: "Annivarsary image 4",
        },
        {
          src: "./assets/personlize/themehamper (5).webp",
          alt: "Annivarsary image 4",
        },
        {
          src: "./assets/personlize/themehamper (6).webp",
          alt: "Annivarsary image 4",
        },
        {
          src: "./assets/personlize/themehamper (7).webp",
          alt: "Annivarsary image 4",
        },
        {
          src: "./assets/personlize/themehamper (8).webp",
          alt: "Annivarsary image 4",
        },
        {
          src: "./assets/personlize/themehamper (9).webp",
          alt: "Annivarsary image 4",
        },
        {
          src: "./assets/personlize/themehamper (10).webp",
          alt: "Annivarsary image 10",
        },
        {
          src: "./assets/personlize/themehamper (11).webp",
          alt: "Annivarsary image 10",
        },
        {
          src: "./assets/personlize/themehamper (12).webp",
          alt: "Annivarsary image 4",
        },
        {
          src: "./assets/personlize/themehamper (13).webp",
          alt: "Annivarsary image 4",
        },
        {
          src: "./assets/personlize/themehamper (14).webp",
          alt: "Annivarsary image 4",
        },
        {
          src: "./assets/personlize/themehamper (15).webp",
          alt: "Annivarsary image 4",
        },
        {
          src: "./assets/personlize/themehamper (16).webp",
          alt: "Annivarsary image 4",
        },
        {
          src: "./assets/personlize/themehamper (17).webp",
          alt: "Annivarsary image 4",
        },
        {
          src: "./assets/personlize/themehamper (18).webp",
          alt: "Annivarsary image 4",
        },
        {
          src: "./assets/personlize/themehamper (19).webp",
          alt: "Annivarsary image 4",
        },
        {
          src: "./assets/personlize/themehamper (20).webp",
          alt: "Annivarsary image 4",
        },
      ],
    },
    {
      id: "kpop",
      ref: kpop,
      title: "K-Pop culture",
      desc: "Surprise K-Pop Fans with Unique and Trendy Gifts!",
      images: [
        {
          src: "./assets/personlize/kpop (1).webp",
          alt: "Annivarsary image 10",
        },

        {
          src: "./assets/personlize/kpop (2).webp",
          alt: "Annivarsary image 10",
        },

        {
          src: "./assets/personlize/kpop (3).webp",
          alt: "Annivarsary image 10",
        },

        {
          src: "./assets/personlize/kpop (4).webp",
          alt: "Annivarsary image 10",
        },
      ],
    },
    {
      id: "Festivecheer",
      ref: Festivecheer,
      title: "Festive Cheer",
      desc: "Bring Joy to every Celebration this Season with Personalized Kits!",
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
      ],
    },
    // {
    //   id: "weddingDelights",
    //   ref: Weddingdelight,
    //   title: "Wedding Delight",
    //   desc: "Cherish the Day with Our Personalized Wedding Delights!",
    //   images: [],
    // },
  ];
  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      <Navbar />
      <ScrollToTop color="#FFE0CE"/>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="bg-[#EA7B2A] h-[280px] w-full relative text-center lg:h-[450px]">
          <h3 className="text-xs text-black mt-[19px]">Home/</h3>
          <h2
            className={`${preahvihear.className} text-xl text-white mt-[30px] lg:text-3xl`}
          >
            Personlized Gifting
          </h2>
          <div
            className={`${pontano_Sans.className} text-black text-xl mt-[15px] lg:text-2xl`}
          >
            Categories
          </div>
        </div>

        <div className="w-full h-auto flex items-center justify-center">
          <div className="absolute h-auto w-full mt-[260px] inset-0 grid grid-cols-2 place-items-center gap-2 p-3 lg:mt-[320px] lg:p-10 lg:gap-10 lg:grid-cols-3">
            {personalizedcategory.map((item, index) => (
              <div
                key={index}
                className="w-full h-full p-0 m-0 flex items-center justify-center"
              >
                <div
                  className={`${akaya_telivigala.className} bg-[#FFE0CE] w-full h-[300px]  flex flex-col justify-center items-center text-left gap-1 lg:w-full lg:h-[480px] lg:max-h-[535px]`}
                >
                  <div className="h-full w-full m-0 p-0 cursor-pointer mt-0 max-h-[215px] md:max-h-[205px] lg:h-[300px] lg:max-h-[350px] ">
                    <HoverImage
                      defaultImg={item.img}
                      hoverImg={item.img2}
                      alt={item.alt}
                    />
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
                      if (item.name === "Birthday Bash")
                        scrollToSection(birthdayRef);
                      else if (item.name === "Anniversary joy")
                        scrollToSection(anniversaryRef);
                      else if (item.name === "Baby bliss")
                        scrollToSection(babybliss);
                      else if (item.name === "Token Of Thanks")
                        scrollToSection(TokenofThanks);
                      else if (item.name === "Engagement Treats")
                        scrollToSection(EngagmentTreats);
                      else if (item.name === "Valentine's Love")
                        scrollToSection(Valentineslove);
                      else if (item.name === "Theme Hampers")
                        scrollToSection(ThemeHampers);
                      else if (item.name === "K-pop Gifts")
                        scrollToSection(kpop);
                      else if (item.name === "Festive Cheer")
                        scrollToSection(Festivecheer);
                      else if (item.name === "Wedding Delights")
                        scrollToSection(Weddingdelight);
                    }}
                    className="bg-[#D53815] relative py-[2px] px-2 text-white rounded self-end m-2 mr-2 lg:py-[6px] lg:px-3 lg:text-xl"
                  >
                    More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-full mt-[1500px] lg:mt-[1950px]">
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
