"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { BlurFade } from "@/components/ui/blur-fade";

const frames = [
  {
    id: "f1",
    src: "/frame/(1).png",
    alt: "Bonfire Experience",
    width: 700,
    height: 868,
    rotate: 4,
    zIndex: 25,
  },
  {
    id: "f2",
    src: "/frame/(2).png",
    alt: "A Beautiful Escapee",
    width: 700,
    height: 868,
    rotate: -4,
    zIndex: 24,
  },
  {
    id: "f3",
    src: "/frame/(3).png",
    alt: "Sunset Experience",
    width: 700,
    height: 868,
    rotate: 4,
    zIndex: 23,
  },
  {
    id: "f4",
    src: "/frame/(4).png",
    alt: "Kayaking Experience",
    width: 700,
    height: 868,
    rotate: -2,
    zIndex: 22,
  },
  {
    id: "f5",
    src: "/frame/(5).png",
    alt: "Kayaking Experience",
    width: 700,
    height: 868,
    rotate: -4,
    zIndex: 21,
  },

  {
    id: "f6",
    src: "/frame/(6).png",
    alt: "Kayaking Experience",
    width: 700,
    height: 868,
    rotate: 4,
    zIndex: 20,
  },
  {
    id: "f7",
    src: "/frame/(7).png",
    alt: "Kayaking Experience",
    width: 700,
    height: 868,
    rotate: -4,
    zIndex: 10,
  },
];

export const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  // State to track individual card z-indices so clicking or dragging brings a card to top
  const [zIndices, setZIndices] = useState<Record<string, number>>(() =>
    frames.reduce((acc, f) => ({ ...acc, [f.id]: f.zIndex }), {})
  );
  const [topZIndex, setTopZIndex] = useState(30);

  const bringToFront = (id: string) => {
    setTopZIndex((prev) => {
      const nextZ = prev + 1;
      setZIndices((current) => ({
        ...current,
        [id]: nextZ,
      }));
      return nextZ;
    });
  };

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
    if (id === "f2") return -300;
    if (id === "f3") return -150;
    if (id === "f4") return 0;
    if (id === "f5") return 150;
    if (id === "f6") return 300;
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
    if (id === "f1") return 1;
    if (id === "f2") return 1;
    if (id === "f3") return 1;
    if (id === "f4") return 1;
    if (id === "f5") return 1;
    if (id === "f6") return 1;
    if (id === "f7") return 1;
    return 0;
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full h-screen py-16 md:py-24 px-4 overflow-hidden select-none"
    >
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center space-y-1 mt-20 pointer-events-none">
        <div className="bg-white/40 backdrop-blur-md w-fit mx-auto px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 shadow-sm border border-neutral-200">
          <span className="text-xs md:text-sm font-semibold tracking-tight text-slate-800 ">
            About
          </span>
        </div>

        <BlurFade delay={0.15} inView>
          <h2 className="heading">Experience</h2>
        </BlurFade>
        <BlurFade delay={0.3} inView>
          <p className="subheading">Live Slower, Feel Everything</p>
        </BlurFade>
        <BlurFade delay={0.45} inView>
        <p className="para ">
          Bonfire nights, folk dances, sunrise kayaking and dolphin
          <br className="hidden sm:inline" /> spotting days shaped by the tide,
          not the clock.
        </p>
        </BlurFade>
      </div>

      {/* Draggable Frames Container */}
      <div className="max-w-5xl mx-auto relative min-h-[210px] mt-10 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          {frames.map((frame, index) => (
            <motion.div
              key={frame.id}
              drag
              dragConstraints={sectionRef}
              dragElastic={0.1}
              onPointerDown={() => bringToFront(frame.id)}
              onDragStart={() => bringToFront(frame.id)}
              whileHover={{
                scale: 1.2,
                // zIndex intentionally omitted so hover does NOT bring image on top
              }}
              whileDrag={{
                scale: 1,
                scaleX: 1.05,
                scaleY: 1.05,
                rotate: frame.rotate + (frame.rotate > 0 ? 5 : -5),
                borderRadius: "28px 14px 32px 16px",
                cursor: "grabbing",
              }}
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
                stiffness: 220,
                damping: 15,
                mass: 0.8,
                delay: index * 0.12,
              }}
              style={{ zIndex: zIndices[frame.id] }}
              className="absolute cursor-grab active:cursor-grabbing select-none touch-none shrink-0 transition-shadow duration-100"
            >
              <Image
                src={frame.src}
                alt={frame.alt}
                width={frame.width}
                height={frame.height}
                priority
                draggable={false}
                className="w-[200px] h-auto object-contain pointer-events-none drop-shadow-2xl transition-all duration-100 ease-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
