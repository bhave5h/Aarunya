import Image from "next/image";
import Hero from "@/src/pages/hero/Hero";
import Experience from "@/src/pages/experiences/experience";
import Explore from "@/src/pages/explore/Explore";
import Reviews from "@/src/pages/reviews/Reviews";
import FAQ from "@/src/pages/faq/FAQ";
import Contact from "@/src/pages/contact/Contact";
import { ProjectShowcase } from "@/components/ui/project-showcase";
import { SmoothCursor } from "@/components/ui/cursor";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <main className="bg-[#ffffff] cursor-none min-h-screen relative flex flex-col justify-between">
      <SmoothCursor />
      
      {/* Main content sitting on top of the footer with higher z-index and background */}
      <div className="relative z-10 bg-white min-h-screen w-full">
        <Navbar />
        <Hero />
        <Experience />
        <Explore />
        <ProjectShowcase />
        <Reviews />
        <Contact />
        <FAQ />
      </div>

      {/* Sticky footer behind the main content */}
      <Footer />
    </main>
  );
}
