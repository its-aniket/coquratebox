import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturedCollection from "./components/FeaturedCollection";
import CorporateBanner from "./components/CorporateBanner";
import PersonalizeBanner from "./components/PersonalizeBanner"
import Testimonials from "./components/Testimonials";
export default function Home() {
  return (
    <main className="p-0 m-0 ">
      <Navbar />
      <HeroSection />
      <FeaturedCollection />
      <CorporateBanner />
      <PersonalizeBanner />
      <Testimonials/>
    </main>
  );
}
