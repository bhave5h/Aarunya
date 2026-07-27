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
    xPercent: 24,
    yPercent: 65,
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
    yPercent: 40,
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
    xPercent: 13,
    yPercent: 50,
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
    xPercent: 45,
    yPercent: 31,
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
    <section className="relative w-full max-w-6xl mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Header Section matching Hero.tsx styling */}
      <div className="max-w-4xl mx-auto text-center space-y-3 mb-10 md:mb-14">
        {/* Pill Tag */}
        <div className="bg-white/40 backdrop-blur-md w-fit mx-auto px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 shadow-sm border border-neutral-200">
          <span className="text-xs md:text-sm font-semibold tracking-tight text-slate-800">
            Explore Aarunya
          </span>
        </div>

        {/* Heading & Subheading */}

        <h1 className="heading mx-auto">
          Explore
        </h1>

        <h1 className="subheading mx-auto">
          One Beach, All Yours
        </h1>

        <p className="para mx-auto">
          Fifteen eco-friendly tents tucked between the hills and the sea
        </p>
      </div>

      {/* Main Large Centered Interactive Showcase Container */}
      <div className="max-w-5xl mx-auto relative">

        <div className="relative w-full rounded-4xl overflow-hidden shadow-2xl border border-white/60 bg-neutral-900 group">
          {/* Central Large Aerial Landscape Map Image */}
          <div className="relative w-full aspect-[16/9] min-h-[600px]">
            <Image
              src="/a.png"
              alt="Aarunya Eco Tented Resort Aerial Landscape"
              fill
              priority
              sizes="100vw"
              className="object-center scale-100 transition-transform duration-1000 ease-out"
            />

          </div>

          {/* Floating Room Details Card (Appearing ON and INSIDE IT on the Left Side) */}
          <div className="scroll-hidden absolute top-4 left-4 right-4 sm:left-auto bottom-auto lg:top-3 lg:right-4 lg:bottom-6 z-30ss w-full sm:w-[380px] md:w-[420px] max-w-[calc(100%-2rem)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTent.id}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-white/20 backdrop-blur-2xl border border-white/90 rounded-3xl p-5 md:p-6 shadow-2xl space-y-4 max-h-[85vh] lg:max-h-[calc(100vh-12rem)] overflow-y-auto"
              >
                {/* Category Pill & ID Header */}
                <div className="flex items-center justify-between">
                  <span className="bg-neutral-900 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                    <MapPin className="w-4 h-4 text-neutral-300" />
                    {activeTent.category}
                  </span>
                  <span className="text-xs font-semibold text-neutral-500 bg-white/90 px-2.5 py-1 rounded-full border border-neutral-200/60">
                    TENT {String(activeTent.id).padStart(2, "0")}
                  </span>
                </div>

                {/* Tent Title & Tagline */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight leading-tight">
                    {activeTent.name}
                  </h3>
                  <p className="text-lg md:text-xl text-white mt-1 italic">
                    {activeTent.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-black/80 text-xl leading-relaxed">
                  {activeTent.description}
                </p>

                {/* Tent Specifications (Capacity & Size) */}
                <div className="grid grid-cols-2 gap-3 p-3 bg-white/60 border border-white/80 rounded-2xl text-xs">
                  <div>
                    <span className="block text-neutral-400 text-[10px] uppercase tracking-wider font-bold">
                      Capacity
                    </span>
                    <span className="font-bold text-neutral-800">
                      {activeTent.capacity}
                    </span>
                  </div>
                  <div>
                    <span className="block text-neutral-400 text-[10px] uppercase tracking-wider font-bold">
                      Tent Size
                    </span>
                    <span className="font-bold text-neutral-800">
                      {activeTent.size}
                    </span>
                  </div>
                </div>

                {/* Key Amenities */}
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-neutral-500 mb-2">
                    Key Amenities
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeTent.features.map((feat, idx) => {
                      const IconComponent = feat.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 px-2.5 py-1 bg-white/70 border border-white/90 rounded-xl text-xs font-semibold text-slate-800 shadow-2xs"
                        >
                          <IconComponent className="w-3 h-3 text-neutral-700" />
                          <span>{feat.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Gallery Preview inside card */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between text-[11px] font-bold text-neutral-500 uppercase tracking-wider">
                    <span>Gallery</span>
                    <span className="normal-case text-neutral-700 font-semibold truncate max-w-[180px]">
                      {activeTent.images[activeImageIndex]?.caption}
                    </span>
                  </div>

                  {/* Selected Gallery Image */}
                  <div className="relative h-40 md:h-44 w-full rounded-2xl overflow-hidden shadow-inner bg-neutral-100 group/img">
                    <Image
                      src={activeTent.images[activeImageIndex]?.url || activeTent.images[0].url}
                      alt={activeTent.name}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
                    <span className="absolute bottom-2 left-2 text-white text-[11px] font-medium bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-lg">
                      {activeTent.images[activeImageIndex]?.caption}
                    </span>
                  </div>

                  {/* Thumbnails */}
                  <div className="grid grid-cols-3 gap-2 pt-0.5">
                    {activeTent.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImageIndex(i)}
                        className={`relative h-12 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                          activeImageIndex === i
                            ? "border-neutral-900 ring-2 ring-neutral-900/20 scale-[1.02]"
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

                {/* Hero-style Primary Button */}
                <button className="w-full py-3 px-5 rounded-4xl bg-neutral-900 hover:bg-black active:scale-[0.98] text-white font-bold text-sm shadow-[inset_2px_2px_5px_0px_rgba(0,0,0,0.5),inset_-2px_-2px_6px_1px_rgba(80,78,78,0.5)] flex items-center justify-center gap-2 group transition-all cursor-pointer mt-2">
                  <span>Reserve Tent #{activeTent.id}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Hotspot Points 1 to 5 on Map */}
          {TENTS_DATA.map((tent) => {
            const isSelected = tent.id === selectedTentId;
            return (
              <div
                key={tent.id}
                style={{
                  left: `${tent.xPercent}%`,
                  top: `${tent.yPercent}%`,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
              >
                <button
                  onClick={() => {
                    setSelectedTentId(tent.id);
                    setActiveImageIndex(0);
                  }}
                  className="relative group/btn cursor-pointer focus:outline-none"
                  aria-label={`Select Tent ${tent.id}: ${tent.name}`}
                >
                  {/* Animated Pulse Ring on Selected Hotspot */}
                  <span
                    className={`absolute -inset-2 rounded-full transition-all duration-500 ${
                      isSelected
                        ? "bg-white/40 animate-ping opacity-100"
                        : "bg-white/20 opacity-0 group-hover/btn:opacity-100"
                    }`}
                  />

                  {/* Hotspot Badge Button */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full font-bold text-xs md:text-sm shadow-xl transition-all duration-100 ${
                      isSelected
                        ? "backdrop-blur-sm text-white ring-3 ring-white shadow-2xl scale-110"
                        : "bg-white/95 text-neutral-900 hover:bg-white/50 hover:text-white ring-2 ring-white border border-white/80 backdrop-blur-md"
                    }`}
                  >
                    {tent.id}
                  </motion.div>

                  {/* Tooltip on Hover */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none opacity-0 group-hover/btn:opacity-100 transition-all duration-200 z-40 whitespace-nowrap">
                    <div className="bg-neutral-900/90 backdrop-blur-md text-white text-[11px] font-bold py-1 px-3 rounded-xl shadow-lg border border-white/20">
                      {tent.name}
                    </div>
                  </div>
                </button>
              </div>
            );
          })}

          {/* Map Controls Legend Badge (Bottom Right) */}
          <div className="absolute bottom-4 left-4 z-30 bg-white/80 backdrop-blur-md text-slate-800 text-xs px-4 py-2 rounded-full border border-white/80 shadow-lg font-semibold flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Click On Tent's Number for Details</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
