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
import AnnouncementBar from "./components/AnnouncementBar";
import  Head  from "next/head";

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
    <>
    <Head>
        <meta name="description" content="Coqurate Box is a corporate and personalized gifting solution company that believes in the power of thoughtful gifts to build connections and inspire loyalty." />
        <meta property="og:title" content="Coqurate Box" />
        <meta property="og:description" content="Coqurate Box is a corporate and personalized gifting solution company that believes in the power of thoughtful gifts to build connections and inspire loyalty." />
        <meta property="og:image" content="https://www.coquratebox.com/path-to-logo.png" />
        <meta property="og:url" content="https://www.coquratebox.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Organization",
          "url": "https://www.coquratebox.com",
          "logo": "https://www.coquratebox.com/path-to-logo.png",
          "name": "Coqurate Box",
          "description": "Coqurate Box is a corporate and personalized gifting solution company.",
          "sameAs": [
            "https://www.instagram.com/coquratebox",
            "https://www.linkedin.com/company/coquratebox",
            "https://www.facebook.com/coquratebox"
          ]
        })}} />
      </Head>
    <main className="p-0 m-0 scroll-smooth">
      <AnnouncementBar />
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
    </>
  );
};

export default Home;
