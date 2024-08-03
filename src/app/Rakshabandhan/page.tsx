import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Something = () => {
  const categories = [
    {
      title: "New Arrivals",
      desc: "",
      images: [
        { src: "./assets/rakhshabandhan/rakshabandhan (2).webp", alt: "rakshabandhan new arrival 1" },
        { src: "./assets/rakhshabandhan/rakshabandhan (4).webp", alt: "rakshabandhan new arrival 1" },
        { src: "./assets/rakhshabandhan/rakshabandhan (5).webp", alt: "rakshabandhan new arrival 1" },
        { src: "./assets/rakhshabandhan/rakshabandhan (6).webp", alt: "rakshabandhan new arrival 1" },
        { src: "./assets/rakhshabandhan/rakshabandhan (7).webp", alt: "rakshabandhan new arrival 1" },
        { src: "./assets/rakhshabandhan/rakshabandhan (8).webp", alt: "rakshabandhan new arrival 1" },
        { src: "./assets/rakhshabandhan/rakshabandhan (9).webp", alt: "rakshabandhan new arrival 1" },
        { src: "./assets/rakhshabandhan/rakshabandhan (11).webp", alt: "rakshabandhan new arrival 1" },
        { src: "./assets/rakhshabandhan/rakshabandhan (12).webp", alt: "rakshabandhan new arrival 1" },
        { src: "./assets/rakhshabandhan/rakshabandhan (13).webp", alt: "rakshabandhan new arrival 1" },
        { src: "./assets/rakhshabandhan/rakshabandhan (15).webp", alt: "rakshabandhan new arrival 1" },
        { src: "./assets/rakhshabandhan/rakshabandhan (16).webp", alt: "rakshabandhan new arrival 1" },
      ],
    },
    {
      title:"For Sweet Sister",
      desc: "",
      images: [
        { src: "./assets/rakhshabandhan/forher (1).webp", alt: "rakshabandhan new arrival 1" },
        { src: "./assets/rakhshabandhan/forher (2).webp", alt: "rakshabandhan new arrival 1" },
        { src: "./assets/rakhshabandhan/forher (3).webp", alt: "rakshabandhan new arrival 1" },
        { src: "./assets/rakhshabandhan/forher (4).webp", alt: "rakshabandhan new arrival 1" },
        { src: "./assets/rakhshabandhan/forher (5).webp", alt: "rakshabandhan new arrival 1" },
        { src: "./assets/rakhshabandhan/forher (6).webp", alt: "rakshabandhan new arrival 1" },
        { src: "./assets/rakhshabandhan/forher (7).webp", alt: "rakshabandhan new arrival 1" },
        { src: "./assets/rakhshabandhan/forher (8).webp", alt: "rakshabandhan new arrival 1" },
        { src: "./assets/rakhshabandhan/forher (9).webp", alt: "rakshabandhan new arrival 1" },
        { src: "./assets/rakhshabandhan/forher (10).webp", alt: "rakshabandhan new arrival 1" },
        { src: "./assets/rakhshabandhan/forher (11).webp", alt: "rakshabandhan new arrival 1" },
        { src: "./assets/rakhshabandhan/forher (12).webp", alt: "rakshabandhan new arrival 1" },
        { src: "./assets/rakhshabandhan/forher (13).webp", alt: "rakshabandhan new arrival 1" },
        { src: "./assets/rakhshabandhan/forher (14).webp", alt: "rakshabandhan new arrival 1" },
      ]
    }
  ];
  return (
    <div>
      <Navbar />

      {categories.map((item, index) => (
        <div
          key={index}
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
      <Footer/>
    </div>
  );
};

export default Something;
