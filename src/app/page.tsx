"use client"
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturedCollection from "./components/FeaturedCollection";
import CorporateBanner from "./components/CorporateBanner";
import PersonalizeBanner from "./components/PersonalizeBanner";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import NotableClient from "./components/NotableClient";
import Footer from "./components/Footer";
import PopUp from "./components/PopUp";

const Home: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const contactUsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    if (contactUsRef.current) {
      contactUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // Show pop-up after 10 seconds

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

  return (
    <main className="p-0 m-0 scroll-smooth">
      <Navbar />
      <HeroSection />
      <FeaturedCollection />
      <CorporateBanner scrollToSection={scrollToSection}/>
      <PersonalizeBanner scrollToSection={scrollToSection} />
      <Testimonials />
      <NotableClient />
      <div ref={contactUsRef}>
        <ContactUs />
      </div>
      <Footer />

      {showPopup && <PopUp onClose={() => setShowPopup(false)}  scrollToSection={scrollToSection}/>}
    </main>
  );
};

export default Home;
