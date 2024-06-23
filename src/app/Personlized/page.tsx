import React from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { personalizedcategory } from "@/constants";
import { Preahvihear } from "next/font/google";
import Footer from "../components/Footer";
const preahvihear = Preahvihear({
  subsets: ["latin"],
  weight: "400",
});
const Personalize = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
     this is personalizedcategory
    </div>
  );
};

export default Personalize;
