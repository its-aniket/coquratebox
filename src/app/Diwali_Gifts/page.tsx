import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Playfair_Display } from "next/font/google";
import {Raleway} from "next/font/google"
const raleway = Raleway({
  subsets: ["latin"],
  weight: "400",
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
});

const Something = () => {
  const categories = [
    {
      title: "Explore Our New Arrivals",
      desc: "Stay ahead of the trends with our latest collection! Discover fresh, unique products that are perfect for every occasion. Don't miss out on these exciting new finds!",
      images: [
        {
          src: "./assets/Diwali/Diwali_new_arrivals (3).webp",
          alt: "Diwali new arrival 1",
        },
        {
          src: "./assets/Diwali/Diwali_new_arrivals (4).webp",
          alt: "Diwali new arrival 1",
        },
        {
          src: "./assets/Diwali/Diwali_new_arrivals (6).webp",
          alt: "Diwali new arrival 1",
        },
        {
          src: "./assets/Diwali/Diwali_new_arrivals (7).webp",
          alt: "Diwali new arrival 1",
        },
        {
          src: "./assets/Diwali/Diwali_new_arrivals (8).webp",
          alt: "Diwali new arrival 1",
        },
        {
          src: "./assets/Diwali/Diwali_new_arrivals (1).webp",
          alt: "Diwali new arrival 1",
        },
        {
          src: "./assets/Diwali/Diwali_new_arrivals (2).webp",
          alt: "Diwali new arrival 1",
        },
      ],
    },
    {
      title: "Celebrate Diwali with Handpicked Gifts",
      desc: "Add sparkle to your celebrations with unique, handpicked gifts. Perfect for sharing joy and love with family, friends, and colleagues this Diwali!",
      images: [
        {
          src: "./assets/Diwali/diwali (1).webp",
          alt: "rakshabandhan new arrival 1",
        },
        {
          src: "./assets/Diwali/diwali (2).webp",
          alt: "rakshabandhan new arrival 1",
        },
        {
          src: "./assets/Diwali/diwali (3).webp",
          alt: "rakshabandhan new arrival 1",
        },
        {
          src: "./assets/Diwali/diwali (4).webp",
          alt: "rakshabandhan new arrival 1",
        },
        {
          src: "./assets/Diwali/diwali (5).webp",
          alt: "rakshabandhan new arrival 1",
        },
        {
          src: "./assets/Diwali/diwali (6).webp",
          alt: "rakshabandhan new arrival 1",
        },
        {
          src: "./assets/Diwali/diwali (7).webp",
          alt: "rakshabandhan new arrival 1",
        },
        {
          src: "./assets/Diwali/diwali (8).webp",
          alt: "rakshabandhan new arrival 1",
        },
        {
          src: "./assets/Diwali/diwali (9).webp",
          alt: "rakshabandhan new arrival 1",
        },
        {
          src: "./assets/Diwali/diwali (10).webp",
          alt: "rakshabandhan new arrival 1",
        },
        {
          src: "./assets/Diwali/diwali (11).webp",
          alt: "rakshabandhan new arrival 1",
        },
        {
          src: "./assets/Diwali/diwali (12).webp",
          alt: "rakshabandhan new arrival 1",
        },
        {
          src: "./assets/Diwali/diwali (13).webp",
          alt: "rakshabandhan new arrival 1",
        },
        {
          src: "./assets/Diwali/diwali (14).webp",
          alt: "rakshabandhan new arrival 1",
        },
        {
          src: "./assets/Diwali/diwali (15).webp",
          alt: "rakshabandhan new arrival 1",
        },
        {
          src: "./assets/Diwali/diwali (16).webp",
          alt: "rakshabandhan new arrival 1",
        },
        {
          src: "./assets/Diwali/diwali (17).webp",
          alt: "rakshabandhan new arrival 1",
        },
        {
          src: "./assets/Diwali/diwali (18).webp",
          alt: "rakshabandhan new arrival 1",
        },
        {
          src: "./assets/Diwali/diwali (19).webp",
          alt: "rakshabandhan new arrival 1",
        },
        {
          src: "./assets/Diwali/diwali (20).webp",
          alt: "rakshabandhan new arrival 1",
        },
        {
          src: "./assets/Diwali/diwali (21).webp",
          alt: "rakshabandhan new arrival 1",
        },
        {
          src: "./assets/Diwali/diwali (22).webp",
          alt: "rakshabandhan new arrival 1",
        },
        {
          src: "./assets/Diwali/diwali (23).webp",
          alt: "rakshabandhan new arrival 1",
        },
        {
          src: "./assets/Diwali/diwali (24).webp",
          alt: "rakshabandhan new arrival 1",
        }
      ],
    },
  ];
  return (
    <div>
      <Navbar />

      {categories.map((item, index) => (
        <div
          key={index}
          className="flex justify-center flex-col items-center h-auto w-full text-center shadow-sm p-2"
        >
          <h2 className={`${playfair_display.className} text-[24px] text-black text-center lg:text-[34px]`}>
            {item.title}
          </h2>
          <div className="text-center w-[80%]">
            <span className={`${raleway.className} text-[12px]  md:text-lg`}>{item.desc}</span>
          </div>
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
      <Footer />
    </div>
  );
};

export default Something;
