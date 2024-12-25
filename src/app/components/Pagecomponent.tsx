
"use client"
import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeaturedCollection from "./FeaturedCollection";
import CorporateBanner from "./CorporateBanner";
import PersonalizeBanner from "./PersonalizeBanner";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";
import NotableClient from "./NotableClient";
import Footer from "./Footer";
import PopUp from "./PopUp";
import AnnouncementBar from "./AnnouncementBar";
const Pagecomponent = () => {
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
      {/* <AnnouncementBar /> */}
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

      {/* {showPopup && <PopUp onClose={() => setShowPopup(false)}  scrollToSection={scrollToSection}/>} */}
    </main>
    
  )
}

export default Pagecomponent