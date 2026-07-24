"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const frames = [
  {
    id: "f1",
    src: "/frame/f1.png",
    alt: "Bonfire Experience",
    width: 401,
    height: 476,
    rotate: -6,
    initialX: -15,
    initialY: 10,
    zIndex: 10,
  },
  {
    id: "f2",
    src: "/frame/f2.png",
    alt: "A Beautiful Escapee",
    width: 601,
    height: 487,
    rotate: -2,
    initialX: 0,
    initialY: 0,
    zIndex: 20,
  },
  {
    id: "f3",
    src: "/frame/f3.png",
    alt: "Sunset Experience",
    width: 393,
    height: 465,
    rotate: 3,
    initialX: 10,
    initialY: 5,
    zIndex: 30,
  },
  {
    id: "f4",
    src: "/frame/f4.png",
    alt: "Kayaking Experience",
    width: 366,
    height: 392,
    rotate: 7,
    initialX: 20,
    initialY: 15,
    zIndex: 25,
  },
];

export const Experience = () => {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 overflow-hidden bg-[#ffffff]">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 md:mb-16">
        <h2 className="heading text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
          Experience
        </h2>
        <p className="subheading text-xl sm:text-2xl text-gray-800 tracking-wide font-normal italic">
          Live Slower, Feel Everything
        </p>
        <p className="para text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed pt-1">
          Bonfire nights, Goan folk dances, sunrise kayaking and dolphin<br className="hidden sm:inline" />
          {" "}spotting days shaped by the tide, not the clock.
        </p>
      </div>

      {/* Draggable Frames Grid / Container */}
      <div className="max-w-6xl mx-auto relative min-h-[420px] sm:min-h-[480px] md:min-h-[520px] flex items-center justify-center">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-2 sm:gap-4 md:gap-0 w-full relative">
          {frames.map((frame) => (
            <motion.div
              key={frame.id}
              drag
              dragConstraints={{ left: -150, right: 150, top: -100, bottom: 100 }}
              dragElastic={0.2}
              whileDrag={{ scale: 1.08, zIndex: 60, cursor: "grabbing" }}
              whileHover={{ scale: 1.04, zIndex: 50 }}
              initial={{ opacity: 0, y: 30, rotate: frame.rotate }}
              animate={{ opacity: 1, y: frame.initialY, x: frame.initialX, rotate: frame.rotate }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ zIndex: frame.zIndex }}
              className="relative cursor-grab active:cursor-grabbing select-none touch-none shrink-0"
            >
              <Image
                src={frame.src}
                alt={frame.alt}
                width={frame.width}
                height={frame.height}
                priority
                draggable={false}
                className="w-[220px] sm:w-[270px] md:w-[310px] h-auto object-contain pointer-events-none drop-shadow-xl hover:drop-shadow-2xl transition-shadow"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

