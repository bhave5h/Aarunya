import Image from "next/image";
import Hero from "@/src/pages/hero/Hero";
import Experience from "@/src/pages/experiences/experience";
import Explore from "@/src/pages/explore/Explore";
import Reviews from "@/src/pages/reviews/Reviews";
import Contact from "@/src/pages/contact/Contact";

export default function Home() {
  return (
    <main className="bg-[#ffffff]">
      <Hero />
      <Experience />
      <Explore />
      <Reviews />
      <Contact />
    </main>
  );
}


