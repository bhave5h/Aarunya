import Image from "next/image";
import Hero from "@/src/pages/hero/Hero";
import Experience from "@/src/pages/experiences/experience";
import Explore from "@/src/pages/explore/Explore";

export default function Home() {
  return (
    <main className="bg-[#ffffff]">
      <Hero />
      <Experience />
      <Explore />
    </main>
  );
}


