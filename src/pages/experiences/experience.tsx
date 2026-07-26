"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

const frames = [
  {
    id: "f1",
    src: "/frame/(1).png",
    alt: "Bonfire Experience",
    width: 700,
    height: 868,
    rotate: -6,
    zIndex: 10,
  },
  {
    id: "f2",
    src: "/frame/(2).png",
    alt: "A Beautiful Escapee",
    width: 700,
    height: 868,
    rotate: -6,
    zIndex: 20,
  },
  {
    id: "f3",
    src: "/frame/(3).png",
    alt: "Sunset Experience",
    width: 700,
    height: 868,
    rotate: 0,
    zIndex: 25,
  },
  {
    id: "f4",
    src: "/frame/(4).png",
    alt: "Kayaking Experience",
    width: 700,
    height: 868,
    rotate: 3,
    zIndex: 30,
  },
  {
    id: "f5",
    src: "/frame/(5).png",
    alt: "Kayaking Experience",
    width: 700,
    height: 868,
    rotate: 6,
    zIndex: 20,
  },

  {
    id: "f6",
    src: "/frame/(6).png",
    alt: "Kayaking Experience",
    width: 700,
    height: 868,
    rotate: 8,
    zIndex: 10,
  },
  {
    id: "f7",
    src: "/frame/(7).png",
    alt: "Kayaking Experience",
    width: 700,
    height: 868,
    rotate: 8,
    zIndex: 10,
  },
];

export const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  // Responsive target X coordinates when fanned out
  const getTargetX = (id: string) => {
    if (isMobile) {
      if (id === "f1") return -75;
      if (id === "f2") return -25;
      if (id === "f3") return 25;
      if (id === "f4") return 75;
    }
    if (isTablet) {
      if (id === "f1") return -180;
      if (id === "f2") return -60;
      if (id === "f3") return 60;
      if (id === "f4") return 180;
    }
    // Desktop layout
    if (id === "f1") return -450;
    if (id === "f2") return -250;
    if (id === "f3") return -100;
    if (id === "f4") return 10;
    if (id === "f5") return 100;
    if (id === "f6") return 260;
    if (id === "f7") return 450;
    return 0;
  };

  // Responsive target Y coordinates when fanned out
  const getTargetY = (id: string) => {
    if (isMobile) {
      if (id === "f1") return -10;
      if (id === "f2") return 15;
      if (id === "f3") return -15;
      if (id === "f4") return 10;
    }
    if (id === "f1") return -0;
    if (id === "f2") return 5;
    if (id === "f3") return -5;
    if (id === "f4") return 0;
    if (id === "f5") return 5;
    if (id === "f6") return 0;
    return 0;
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 md:py-24 px-4 overflow-hidden bg-[#ffffff] select-none"
    >
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 md:mb-16 pointer-events-none">
        <div className="bg-white/40 backdrop-blur-md w-fit mx-auto px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 shadow-sm border border-neutral-200">
          <span className="text-xs md:text-sm font-semibold tracking-tight text-slate-800">
            About
          </span>
        </div>

        <h2 className="heading">Experience</h2>
        <p className="subheading">Live Slower, Feel Everything</p>
        <p className="para">
          Bonfire nights, folk dances, sunrise kayaking and dolphin
          <br className="hidden sm:inline" /> spotting days shaped by the tide,
          not the clock.
        </p>
      </div>

      {/* Draggable Frames Container */}
      <div className="max-w-5xl mx-auto relative min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          {frames.map((frame, index) => (
            <motion.div
              key={frame.id}
              drag
              dragConstraints={sectionRef}
              dragElastic={0.15}
              whileDrag={{ scale: 1.20, zIndex: 100, cursor: "grabbing" }}
              whileHover={{ scale: 1.15, zIndex: 50 }}
              initial={{
                opacity: 0,
                x: 0,
                y: 0,
                rotate: 0,
              }}
              whileInView={{
                opacity: 1,
                x: getTargetX(frame.id),
                y: getTargetY(frame.id),
                rotate: frame.rotate,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 15,
                mass: 1,
                delay: index * 0.12,
              }}
              style={{ zIndex: frame.zIndex }}
              className="absolute cursor-grab active:cursor-grabbing select-none touch-none shrink-0"
            >
              <Image
                src={frame.src}
                alt={frame.alt}
                width={frame.width}
                height={frame.height}
                priority
                draggable={false}
                className="w-[200px] h-auto object-contain pointer-events-none drop-shadow-xl hover:drop-shadow-3xl transition-all duration-100 ease-in"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
