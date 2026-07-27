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
            <nav className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-black pb-2 border-b border-neutral-100">
                <Logo />
                <span className="font-bold text-lg">Aarunya</span>
              </div>
              <a
                href="#hero"
                className="block p-2 text-sm font-semibold hover:bg-neutral-100 hover:text-black rounded-lg transition"
              >
                Home
              </a>
              <a
                href="#experience"
                className="block p-2 text-sm font-semibold hover:bg-neutral-100 hover:text-black rounded-lg transition"
              >
                Experiences
              </a>
              <a
                href="#explore"
                className="block p-2 text-sm font-semibold hover:bg-neutral-100 hover:text-black rounded-lg transition"
              >
                Explore Tents
              </a>
              <a
                href="#amenities"
                className="block p-2 text-sm font-semibold hover:bg-neutral-100 hover:text-black rounded-lg transition"
              >
                Amenities
              </a>
              <a
                href="#reviews"
                className="block p-2 text-sm font-semibold hover:bg-neutral-100 hover:text-black rounded-lg transition"
              >
                Reviews
              </a>
              <a
                href="#faq"
                className="block p-2 text-sm font-semibold hover:bg-neutral-100 hover:text-black rounded-lg transition"
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="block p-2 text-sm font-semibold hover:bg-neutral-100 hover:text-black rounded-lg transition"
              >
                Contact
              </a>
            </nav>
          </MotionDrawer>
          <a
            href="#contact"
            className="bg-neutral-900 text-white px-3 py-2.5 relative z-2 flex gap-1 items-center rounded-xl font-bold text-sm hover:bg-black transition shadow-[inset_2px_2px_5px_0px_rgba(0,0,0,0.5),inset_-2px_-2px_6px_1px_rgba(80,78,78,0.5)] cursor-pointer"
          >
            <span>Reserve</span> <ChevronRight size={18} />
          </a>
        </div>
      ) : (
        <header className="w-full max-w-5xl mx-auto p-4 pt-4">
          <TimelineAnimation
            animationNum={1}
            timelineRef={timelineRef}
            className="bg-white/30 backdrop-blur-md p-2 rounded-4xl border border-white/60 shadow-md flex items-center justify-between"
          >
            <a href="#hero" className="flex items-center gap-2">
              <Logo />
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Aarunya
              </span>
            </a>
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-neutral-600">
              <a href="#hero" className="hover:text-neutral-900 transition">
                Home
              </a>
              <a
                href="#experience"
                className="hover:text-neutral-900 transition"
              >
                Experiences
              </a>
              <a href="#explore" className="hover:text-neutral-900 transition">
                Explore
              </a>
              <a
                href="#amenities"
                className="hover:text-neutral-900 transition"
              >
                Amenities
              </a>
              <a href="#reviews" className="hover:text-neutral-900 transition">
                Reviews
              </a>
              <a href="#faq" className="hover:text-neutral-900 transition">
                FAQ
              </a>
              <a href="#contact" className="hover:text-neutral-900 transition">
                Contact
              </a>
            </nav>
            <a
              href="#contact"
              className="bg-neutral-900 text-white px-4 py-2.5 flex gap-1 items-center rounded-4xl font-bold text-sm hover:bg-black transition shadow-[inset_2px_2px_5px_0px_rgba(0,0,0,0.5),inset_-2px_-2px_6px_1px_rgba(80,78,78,0.5)] cursor-pointer"
            >
              <span>Reserve</span> <ChevronRight size={18} />
            </a>
          </TimelineAnimation>
        </header>
      )}
    </div>
  );
};

export default Navbar;
