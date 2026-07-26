"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wind,
  Bath,
  BedDouble,
  Wifi,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  MapPin,
  Coffee,
  Sun,
  Maximize2
} from "lucide-react";

interface TentInfo {
  id: number;
  name: string;
  category: string;
  tagline: string;
  description: string;
  capacity: string;
  size: string;
  xPercent: number; // Position on landscape map (%)
  yPercent: number;
  features: { icon: any; label: string }[];
  images: { url: string; caption: string }[];
}

const TENTS_DATA: TentInfo[] = [
  {
    id: 1,
    name: "Oceanfront Luxury Tent",
    category: "Beachfront Zone",
    tagline: "Wake up to breaking waves and golden ocean light.",
    description:
      "Perched right on the beach shoreline with direct sand access, panoramic sea views, and a private wooden verandah.",
    capacity: "2 - 3 Guests",
    size: "450 sq ft",
    xPercent: 32,
    yPercent: 27,
    features: [
      { icon: Wind, label: "Silent Inverter AC" },
      { icon: Bath, label: "Ensuite Teak Bathroom" },
      { icon: BedDouble, label: "Plush King Bed" },
      { icon: Wifi, label: "High-Speed Wi-Fi" },
      { icon: Sun, label: "Private Sun Deck" },
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=800&q=80",
        caption: "Luxury Canopy Bedroom"
      },
      {
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
        caption: "Ensuite Bamboo Bathroom"
      },
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        caption: "Private Deck & Ocean View"
      }
    ]
  },
  {
    id: 2,
    name: "Hillside Palm Canopy Tent",
    category: "Hillside Sanctuary",
    tagline: "Tucked beneath ancient palms with mountain breeze.",
    description:
      "Framed by lush tropical foliage and coconut groves, offering maximum privacy, natural shade, and serene ambient silence.",
    capacity: "2 Guests",
    size: "420 sq ft",
    xPercent: 20,
    yPercent: 42,
    features: [
      { icon: Wind, label: "Dual Split AC" },
      { icon: Bath, label: "Rain Shower Bathroom" },
      { icon: BedDouble, label: "Teak Canopy Bed" },
      { icon: Coffee, label: "Artisanal Coffee Bar" },
      { icon: ShieldCheck, label: "24/7 Power Backup" },
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80",
        caption: "Cozy Jungle Interior"
      },
      {
        url: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
        caption: "Modern Open-Air Bath"
      },
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        caption: "Verandah Lounge Area"
      }
    ]
  },
  {
    id: 3,
    name: "Garden & Hammock Tent",
    category: "Tropical Garden",
    tagline: "Steps away from lazy beanbags and woven hammocks.",
    description:
      "Centrally positioned in our eco garden zone with custom hand-woven hammocks right outside your private canvas doorway.",
    capacity: "2 - 4 Guests",
    size: "480 sq ft",
    xPercent: 32,
    yPercent: 48,
    features: [
      { icon: Wind, label: "Climate Control AC" },
      { icon: Bath, label: "Double Vanity Bath" },
      { icon: BedDouble, label: "King + Daybed" },
      { icon: Sun, label: "Private Hammock" },
      { icon: Wifi, label: "High-Speed Fiber" },
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        caption: "Garden View Suite"
      },
      {
        url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
        caption: "Luxury Bedding & Decor"
      },
      {
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
        caption: "Outdoor Relaxation Spot"
      }
    ]
  },
  {
    id: 4,
    name: "Sunset View Suite Tent",
    category: "Sunset Deck",
    tagline: "Front-row seats to Arabian Sea golden hour sunsets.",
    description:
      "Oriented perfectly toward the horizon, designed for romantic sunsets, stargazing, and listening to the evening tide.",
    capacity: "2 Guests",
    size: "500 sq ft",
    xPercent: 15,
    yPercent: 57,
    features: [
      { icon: Wind, label: "Silent Air Conditioning" },
      { icon: Bath, label: "Soaking Tub & Shower" },
      { icon: BedDouble, label: "Emperor Plush Mattress" },
      { icon: Sun, label: "Sunset Viewing Balcony" },
      { icon: Sparkles, label: "Stargazing Skylight" },
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        caption: "Sunset View Interior"
      },
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
        caption: "Spacious En-Suite Bathroom"
      },
      {
        url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80",
        caption: "Private Sunset Balcony"
      }
    ]
  },
  {
    id: 5,
    name: "Surf & Beach Shack Suite",
    category: "Beach Access Zone",
    tagline: "Closest to the Surf & Chill cafe and coastal steps.",
    description:
      "Ideal for surf enthusiasts and beach lovers. Easy access to beach sports, morning kayaking, and fresh coconut water.",
    capacity: "2 - 3 Guests",
    size: "460 sq ft",
    xPercent: 65,
    yPercent: 30,
    features: [
      { icon: Wind, label: "Full Air Conditioning" },
      { icon: Bath, label: "Stone Wall Bathroom" },

      { icon: BedDouble, label: "King Bed & Lounge" },
      { icon: Coffee, label: "Complimentary Cafe Pass" },
      { icon: Wifi, label: "Resort-wide Wi-Fi" },
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        caption: "Beachfront Suite Lounge"
      },
      {
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
        caption: "Private Bathroom"
      },
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        caption: "Direct Beach Steps"
      }
    ]
  }
];

export const Explore = () => {
  const [selectedTentId, setSelectedTentId] = useState<number>(1);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const activeTent = TENTS_DATA.find((t) => t.id === selectedTentId) || TENTS_DATA[0];

  return (
    <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] overflow-hidden">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center space-y-4 mb-12 md:mb-16">
        <h2 className="heading text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
          One Beach, All Yours
        </h2>
        <p className="subheading text-lg sm:text-xl md:text-2xl text-gray-800 tracking-wide font-normal italic max-w-2xl mx-auto leading-relaxed">
          Fifteen eco-friendly tents tucked between the hills and the sea — Valsad, Gujarat&apos;s best-kept secret.
        </p>
      </div>

      {/* Main Interactive Showcase Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Tent Details & Gallery Card */}
        <div className="lg:col-span-5 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTent.id}
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 25 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="bg-white/90 backdrop-blur-xl border border-amber-900/10 rounded-3xl p-6 sm:p-7 shadow-xl space-y-6"
            >
              {/* Category Pill & ID */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/80 text-amber-900 text-xs font-semibold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-amber-700" />
                  {activeTent.category}
                </span>
                <span className="text-xs font-mono font-bold text-gray-400">
                  TENT #{String(activeTent.id).padStart(2, "0")}
                </span>
              </div>

              {/* Tent Title & Tagline */}
              <div>
                <h3 className="heading text-2xl sm:text-3xl font-bold text-gray-900">
                  {activeTent.name}
                </h3>
                <p className="subheading text-sm sm:text-base text-amber-800 italic mt-1">
                  {activeTent.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="para text-gray-600 text-sm leading-relaxed">
                {activeTent.description}
              </p>

              {/* Tent Specifications (Capacity & Size) */}
              <div className="grid grid-cols-2 gap-3 py-3 border-y border-amber-900/10 text-xs sm:text-sm">
                <div>
                  <span className="block text-gray-400 text-[11px] uppercase tracking-wider font-semibold">Capacity</span>
                  <span className="font-semibold text-gray-800">{activeTent.capacity}</span>
                </div>
                <div>
                  <span className="block text-gray-400 text-[11px] uppercase tracking-wider font-semibold">Tent Size</span>
                  <span className="font-semibold text-gray-800">{activeTent.size}</span>
                </div>
              </div>

              {/* Key Amenities & Features (AC, Bathroom, Bed, Wifi, etc.) */}
              <div>
                <h4 className="text-xs uppercase tracking-widest font-semibold text-gray-500 mb-3">
                  Key Amenities & Amenities
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeTent.features.map((feat, idx) => {
                    const IconComponent = feat.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-3 py-1.5 bg-amber-50/70 border border-amber-200/60 rounded-xl text-xs font-medium text-gray-700"
                      >
                        <IconComponent className="w-3.5 h-3.5 text-amber-700" />
                        <span>{feat.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Interior / Bathroom / AC Photo Gallery */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-gray-500 uppercase tracking-widest">
                  <span>Gallery Preview</span>
                  <span className="normal-case text-amber-700">
                    {activeTent.images[activeImageIndex]?.caption}
                  </span>
                </div>

                {/* Main Selected Image */}
                <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden shadow-inner bg-gray-100 group">
                  <Image
                    src={activeTent.images[activeImageIndex]?.url || activeTent.images[0].url}
                    alt={activeTent.name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-2.5 left-3 text-white text-xs font-medium bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg">
                    {activeTent.images[activeImageIndex]?.caption}
                  </span>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  {activeTent.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIndex(i)}
                      className={`relative h-14 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        activeImageIndex === i
                          ? "border-amber-700 ring-2 ring-amber-500/20 scale-[1.02]"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img.url}
                        alt={img.caption}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>


              {/* CTA Button */}
              <button className="w-full py-3.5 px-6 rounded-2xl bg-amber-900 hover:bg-amber-950 active:scale-[0.99] text-white font-semibold text-sm shadow-lg flex items-center justify-center gap-2 group transition-all cursor-pointer">
                <span>Select & Reserve Tent #{activeTent.id}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Central Aerial Landscape Image with Hotspots */}
        <div className="lg:col-span-7 w-full flex flex-col items-center">
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-amber-900/10 bg-white group">
            {/* Aerial Landscape Image */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5]">
              <Image
                src="/explore-map.jpg"
                alt="Aarunya Eco Tented Resort Aerial Landscape"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 740px"
                className="object-cover object-center"
              />
              
              {/* Subtle ambient vignetting for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
            </div>

            {/* Interactive Hotspot Points 1 to 5 */}
            {TENTS_DATA.map((tent) => {
              const isSelected = tent.id === selectedTentId;
              return (
                <div
                  key={tent.id}
                  style={{
                    left: `${tent.xPercent}%`,
                    top: `${tent.yPercent}%`
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <button
                    onClick={() => {
                      setSelectedTentId(tent.id);
                      setActiveImageIndex(0);
                    }}
                    className="relative group/btn cursor-pointer focus:outline-none"
                    aria-label={`Select Tent ${tent.id}: ${tent.name}`}
                  >
                    {/* Animated Pulse Ring */}
                    <span
                      className={`absolute -inset-2 rounded-full transition-all duration-500 ${
                        isSelected
                          ? "bg-amber-500/40 animate-ping opacity-100"
                          : "bg-white/30 opacity-0 group-hover/btn:opacity-100"
                      }`}
                    />

                    {/* Badge Button */}
                    <motion.div
                      whileHover={{ scale: 1.25 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full font-bold text-xs sm:text-sm shadow-xl transition-all duration-300 ${
                        isSelected
                          ? "bg-amber-600 text-white ring-4 ring-white shadow-amber-900/40 scale-110"
                          : "bg-white/95 text-amber-950 hover:bg-amber-700 hover:text-white border border-amber-900/20"
                      }`}
                    >
                      {tent.id}
                    </motion.div>

                    {/* Tooltip on Hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none opacity-0 group-hover/btn:opacity-100 transition-all duration-200 z-30 whitespace-nowrap">
                      <div className="bg-gray-900/90 backdrop-blur-md text-white text-[11px] font-medium py-1 px-3 rounded-lg shadow-lg border border-white/20">
                        {tent.name}
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}

            {/* Quick Map Legend Overlay */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 bg-black/60 backdrop-blur-md text-white text-[11px] px-3 py-1.5 rounded-xl border border-white/20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Click numbers 1 - 5 to preview tents</span>
            </div>
          </div>

          <p className="text-center text-xs text-gray-500 mt-3 font-medium">
            Interactive Landscape Map — Select any point (1–5) to inspect tent layout & amenities.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Explore;
