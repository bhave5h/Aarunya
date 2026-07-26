"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import MotionDrawer from "@/components/ui/motion-drawer";
import { TimelineAnimation } from "@/components/ui/timeline-animation";
import Logo from "./logo";

export const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const timelineRef = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={timelineRef} className="sticky top-0 z-50 w-full">
      {isMobile ? (
        <div className="flex gap-4 justify-between items-center px-5 w-full py-4 bg-white/80 backdrop-blur-xl border-b border-neutral-100 shadow-xs">
          <MotionDrawer
            direction="left"
            width={300}
            backgroundColor={"#ffffff"}
            clsBtnClassName="bg-neutral-800 border-r border-neutral-900 text-white"
            contentClassName="bg-white border-r border-neutral-200 text-black"
            btnClassName="bg-white text-black relative w-fit p-2 left-0 top-0 rounded-full shadow-xs border border-neutral-200"
          >
            <nav className="space-y-4 ">
              <div className="flex items-center gap-2 text-black">
                <svg
                  className="fill-black w-8 h-8"
                  width="97"
                  height="108"
                  viewBox="0 0 97 108"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M55.5 0C61.0005 0.00109895 64.5005 2.50586 64.5 7.5V17C64.5 24.5059 68.5005 27.5 81 27.5H88C94.0005 27.5059 96.5 29.5059 96.5 37.5V98.5C96.5 106.006 95.0005 107.5 88 107.5H41.5C36.5005 107.5 32 104.506 32 98.5V88C32 84.5 28.5 80 20.5 80H8.5C3 80 0 76.5 0 71.5V6.5C0.00048844 1.50586 2.50049 0.00585937 8.5 0H55.5ZM31 20C28.7909 20 27 21.7909 27 24V74C27 76.2091 28.7909 78 31 78H58C60.2091 78 62 76.2091 62 74V24C62 21.7909 60.2091 20 58 20H31Z" />
                </svg>
                <span>Aarunya</span>
              </div>
              <a
                href="#"
                className="block p-2 hover:bg-neutral-200 hover:text-black rounded-sm"
              >
                Our Experience
              </a>
              <a
                href="#"
                className="block p-2 hover:bg-neutral-200 hover:text-black rounded-sm"
              >
                About Us
              </a>
              <a
                href="#"
                className="block p-2 hover:bg-neutral-200 hover:text-black rounded-sm"
              >
                Contact
              </a>
            </nav>
          </MotionDrawer>
          <button className="bg-neutral-900 text-white px-3 py-3 relative z-2 flex gap-1 items-center rounded-xl font-bold text-sm hover:bg-black transition shadow-[inset_2px_2px_5px_0px_rgba(0,0,0,0.5),inset_-2px_-2px_6px_1px_rgba(80,78,78,0.5)] cursor-pointer">
            Get Started <ChevronRight size={20} />
          </button>
        </div>
      ) : (
        <header className="w-full max-w-5xl mx-auto p-4 pt-4">
          <TimelineAnimation
            animationNum={1}
            timelineRef={timelineRef}
            className="bg-white/30 backdrop-blur-md p-2 rounded-4xl border border-white/60 shadow-md flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <Logo />
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Aarunya
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-10 text-sm font-semibold text-neutral-500">
              <a href="#" className="hover:text-[#3b82f6] transition">
                Home
              </a>
              <a href="#" className="hover:text-[#3b82f6] transition">
                Experiences
              </a>
              <a href="#" className="hover:text-[#3b82f6] transition">
                Explore
              </a>
              <a href="#" className="hover:text-[#3b82f6] transition">
                Reviews
              </a>
              <a href="#" className="hover:text-[#3b82f6] transition">
                Contact
              </a>
            </nav>
            <button className="bg-neutral-900 text-white px-4 py-3 flex gap-1 items-center rounded-4xl font-bold text-sm hover:bg-black transition shadow-[inset_2px_2px_5px_0px_rgba(0,0,0,0.5),inset_-2px_-2px_6px_1px_rgba(80,78,78,0.5)] cursor-pointer">
              Login <ChevronRight size={20} />
            </button>
          </TimelineAnimation>
        </header>
      )}
    </div>
  );
};

export default Navbar;
