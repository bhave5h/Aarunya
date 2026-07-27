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
        <header className="w-full max-w-5xl mx-auto p-4 pt-4">
          <div className="bg-white/30 backdrop-blur-md p-2 rounded-4xl border border-white/60 shadow-md flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
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
              <a href="#reviews" className="hover:text-neutral-900 transition">
                Reviews
              </a>
              <a href="#contact" className="hover:text-white/80 transition">
                Contact
              </a>
            </nav>
            <a
              href="#contact"
              className="bg-neutral-900 text-white px-4 py-3.5 flex gap-1 items-center rounded-3xl font-bold text-sm hover:bg-black transition shadow-sm cursor-pointer"
            >
              <span>Reserve</span> <ChevronRight size={18} />
            </a>
          </div>
        </header>
    </div>
  );
};

export default Navbar;
