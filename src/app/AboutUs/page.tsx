import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./style.css"
import {Dangrek, Quicksand} from "next/font/google"
const dangrek = Dangrek({
  subsets: ["latin"],
  weight: "400",
});
const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="flex mt-10 flex-col items-center justify-center p-6 w-full max-w-6xl mx-auto">
        <div className="relative w-full">
          <img
            src="./about us.png" 
            className=" w-auto shape-outside"
            alt="CoQurateBox"
          />
          <p className="ml-6  text-[#3a3b87] text-xl font-medium text-justify">
            <strong className="text-[#3a3b87] text-[40px]">CoQurateBox</strong><br />
            
            CQB is a venture run by women entrepreneurs with the purpose to promote local artisans, their products and businesses thereby keeping the rich Indian culture alive; and passing on the recognition and fair remuneration to these artists.
            <br /><br />
            The fundamental idea of any <strong>GIFT</strong> is to make the receiver feel GREAT about it; and <strong>PERSONALISATION</strong> is the art of letting people know that they are as unique as the gift itself which has been intricately crafted with personal touch, love & passion.
          </p>
        </div>
      </div>
      {/* <div className="w-full max-w-6xl mx-auto">
          <div className="flex gap-2 tracking-wide w-full items-center justify-center h-auto">
            <span className={`${dangrek.className} mt-2 text-[#3a3b87] text-4xl`}>Why</span><img src="./logo (2).png" className="h-[60px] w-auto" alt="logo" />
          </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default AboutUs;
