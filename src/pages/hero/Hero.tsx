"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Users,
  ArrowRight,
  Phone,
  Sparkles,
  ChevronDown,
  MessageSquare,
} from "lucide-react";

const Hero = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Guests");
  const [showGuestPicker, setShowGuestPicker] = useState(false);
  const [showContactMenu, setShowContactMenu] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-3 md:p-6 font-sans overflow-hidden">
      {/* Background Image Container with Soft Overlay */}
      <div className="absolute inset-0 m-2 md:m-5 overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl">
        <Image
          src="/bg.png"
          alt="Aarunya Cola Beach"
          fill
          priority
          className="object-cover object-center scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Deep luxury ambient gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/50 rounded-[2rem] md:rounded-[3rem]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl w-full mx-auto text-center px-4 flex flex-col items-center justify-center space-y-6 md:space-y-8 py-16">
        {/* Subtle Location Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white/90 text-xs md:text-sm tracking-widest uppercase shadow-lg"
        >
          <span>Cola Beach • South Goa</span>
        </motion.div>

        {/* Heading & Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="space-y-4 max-w-3xl"
        >
          {/* Main Heading: Aarunya */}
          <h1 className="heading text-5xl sm:text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white/95 to-white/80 tracking-tight drop-shadow-xl">
            Aarunya
          </h1>

          {/* Subheading */}
          <p className="subheading text-xl text-white/90 font-light leading-relaxed tracking-wide drop-shadow-md">
            A secluded, eco-tented escape on Cola Beach, Valsad, Gujarat —
            reborn for a new sunrise.
          </p>
        </motion.div>

        {/* iOS Glass Type Search & Booking Bar */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-4xl mt-6"
        >
          {/* iOS Ultra Glass Container */}
          <div className="relative backdrop-blur-3xl bg-black/20 border border-white/30 rounded-2xl md:rounded-2xl p-2.5 md:p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] flex flex-col md:flex-row items-center justify-between gap-2 transition-all duration-300 hover:border-white/40 hover:bg-white/20">
            {/* Check In Field */}
            <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 md:py-2 rounded-2xl md:rounded-full hover:bg-white/10 transition-all cursor-pointer group border border-transparent hover:border-white/20">
              <Calendar className="w-5 h-5 text-amber-200 group-hover:scale-110 transition-transform" />
              <div className="text-left flex-1">
                <span className="block text-[10px] uppercase tracking-widest text-white/70 font-semibold">
                  Check In
                </span>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="bg-transparent text-white font-medium text-sm focus:outline-none w-full cursor-pointer opacity-90 hover:opacity-100 scheme-dark"
                />
              </div>
            </div>

            <div className="hidden md:block w-px h-8 bg-white/25" />

            {/* Check Out Field */}
            <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 md:py-2 rounded-2xl md:rounded-full hover:bg-white/10 transition-all cursor-pointer group border border-transparent hover:border-white/20">
              <Calendar className="w-5 h-5 text-amber-200 group-hover:scale-110 transition-transform" />
              <div className="text-left flex-1">
                <span className="block text-[10px] uppercase tracking-widest text-white/70 font-semibold">
                  Check Out
                </span>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="bg-transparent text-white font-medium text-sm focus:outline-none w-full cursor-pointer opacity-90 hover:opacity-100 scheme-dark"
                />
              </div>
            </div>

            <div className="hidden md:block w-px h-8 bg-white/25" />

            {/* No of People (Guests Field) */}
            <div className="relative flex-1 w-full">
              <div
                onClick={() => setShowGuestPicker(!showGuestPicker)}
                className="flex items-center gap-3 px-4 py-3 md:py-2 rounded-2xl md:rounded-full hover:bg-white/10 transition-all cursor-pointer group border border-transparent hover:border-white/20"
              >
                <Users className="w-5 h-5 text-amber-200 group-hover:scale-110 transition-transform" />
                <div className="text-left flex-1">
                  <span className="block text-[10px] uppercase tracking-widest text-white/70 font-semibold">
                    No. of People
                  </span>
                  <span className="text-white text-sm font-medium block truncate">
                    {guests}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-white/70 transition-transform duration-300 ${showGuestPicker ? "rotate-180" : ""}`}
                />
              </div>

              {/* Guest Picker Popover */}
              <AnimatePresence>
                {showGuestPicker && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute left-0 right-0 top-full mt-2 p-2 bg-black/70 backdrop-blur-2xl border border-white/25 rounded-2xl z-50 text-left shadow-2xl space-y-1"
                  >
                    {[
                      "1 Person",
                      "2 People",
                      "3 People",
                      "4+ People / Group",
                    ].map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setGuests(option);
                          setShowGuestPicker(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm transition-colors ${
                          guests === option
                            ? "bg-white/25 text-white font-semibold"
                            : "text-white/80 hover:bg-white/15 hover:text-white"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA "Go" Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(255, 255, 255, 0.35)",
              }}
              whileTap={{ scale: 0.97 }}
              className="w-full md:w-auto px-7 py-3 rounded-full bg-white/25 hover:bg-white/35 active:bg-white/40 text-white font-semibold text-sm shadow-xl backdrop-blur-md border border-white/40 flex items-center justify-center gap-2 group cursor-pointer transition-all duration-300"
            >
              <span>Go</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <div className="hidden md:block w-px h-8 bg-white/25" />

            {/* Contact at End */}
            <div className="relative w-full md:w-auto">
              <button
                onClick={() => setShowContactMenu(!showContactMenu)}
                className="w-full md:w-auto px-5 py-3 md:py-2.5 rounded-2xl md:rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white backdrop-blur-md border border-white/25 flex items-center justify-center gap-2 text-sm font-medium transition-all group cursor-pointer"
              >
                <Phone className="w-4 h-4 text-amber-200 group-hover:scale-110 transition-transform" />
                <span>Contact</span>
              </button>

              {/* Contact Popup */}
              <AnimatePresence>
                {showContactMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 top-full mt-2 w-60 p-3 bg-black/70 backdrop-blur-2xl border border-white/25 rounded-2xl z-50 text-left shadow-2xl space-y-2"
                  >
                    <a
                      href="tel:+919876543210"
                      className="flex items-center gap-3 p-2.5 rounded-xl text-xs text-white/90 hover:bg-white/15 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-amber-300" />
                      <div>
                        <div className="font-semibold text-white">Call Us</div>
                        <div className="text-white/70 text-[11px]">
                          +91 98765 43210
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-2.5 rounded-xl text-xs text-white/90 hover:bg-white/15 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <div>
                        <div className="font-semibold text-white">WhatsApp</div>
                        <div className="text-white/70 text-[11px]">
                          Instant Inquiry
                        </div>
                      </div>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
