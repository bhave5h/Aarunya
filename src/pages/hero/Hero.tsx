"use client";
import React from "react";
import { TimelineAnimation } from "@/components/ui/timeline-animation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Users,
  ArrowRight,
  Phone,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import { Sparkles } from "lucide-react";

export const Hero = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Guests");
  const [showGuestPicker, setShowGuestPicker] = useState(false);
  const [showContactMenu, setShowContactMenu] = useState(false);
  const timelineRef = React.useRef<HTMLDivElement>(null);

  return (
    <section
      ref={timelineRef}
      className="min-h-screen text-black overflow-hidden flex flex-col items-center w-full"
    >
      <div className="absolute inset-0 z-0 bg-white/30" />

      {/* Hero Content */}
      <div className=" z-10 text-center pt-25 pb-10 px-4 flex flex-col gap-2">
        <TimelineAnimation
          animationNum={1}
          timelineRef={timelineRef}
          className="bg-white/30 backdrop-blur-md w-fit mx-auto px-3 py-1.5 rounded-full inline-flex items-center gap-2.5 shadow-md border border-white/60"
        >
          <span className="text-xs md:text-sm font-semibold tracking-tight text-slate-800">
            Valsad, Gujrat
          </span>
        </TimelineAnimation>

        <TimelineAnimation
          as="h1"
          animationNum={2}
          timelineRef={timelineRef}
          className="heading text-6xl font-bold tracking-tight text-neutral-900 max-w-6xl"
        >
          Aarunya
        </TimelineAnimation>

        <TimelineAnimation
          as="p"
          animationNum={3}
          timelineRef={timelineRef}
          className="subheading text-2xl text-neutral-500 max-w-3xl mx-auto px-1 font-medium"
        >
          Where Dawn Meets the Sea
        </TimelineAnimation>

        <TimelineAnimation
          as="p"
          animationNum={4}
          timelineRef={timelineRef}
          className="para "
        >
          A secluded, eco-tented escape on Private Beach, Gujarat.
        </TimelineAnimation>

        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-4xl mt-6"
        >
          {/* Recreated Search & Booking Bar to match Navbar Aesthetics */}
          <div className="relative backdrop-blur-md bg-white/30 border border-white/60 rounded-4xl p-2.5 md:p-1.5 shadow-md flex flex-col md:flex-row items-center justify-between gap-2 transition-all duration-300 hover:bg-white/40">
            {/* Check In Field */}
            <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 md:py-2 rounded-3xl md:rounded-full hover:bg-white/40 transition-all cursor-pointer group border border-transparent hover:border-white/50 hover:shadow-xs">
              <Calendar className="w-5 h-5 text-neutral-600 group-hover:scale-110 transition-transform" />
              <div className="text-left flex-1">
                <span className="block text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                  Check In
                </span>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="bg-transparent text-slate-800 font-semibold text-sm focus:outline-none w-full cursor-pointer opacity-90 hover:opacity-100"
                />
              </div>
            </div>

            <div className="hidden md:block w-px h-8 bg-neutral-300/40" />

            {/* Check Out Field */}
            <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 md:py-2 rounded-3xl md:rounded-full hover:bg-white/40 transition-all cursor-pointer group border border-transparent hover:border-white/50 hover:shadow-xs">
              <Calendar className="w-5 h-5 text-neutral-600 group-hover:scale-110 transition-transform" />
              <div className="text-left flex-1">
                <span className="block text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                  Check Out
                </span>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="bg-transparent text-slate-800 font-semibold text-sm focus:outline-none w-full cursor-pointer opacity-90 hover:opacity-100"
                />
              </div>
            </div>

            <div className="hidden md:block w-px h-8 bg-neutral-300/40" />

            {/* No of People (Guests Field) */}
            <div className="relative flex-1 w-full">
              <div
                onClick={() => setShowGuestPicker(!showGuestPicker)}
                className="flex items-center gap-3 px-4 py-3 md:py-2 rounded-3xl md:rounded-full hover:bg-white/40 transition-all cursor-pointer group border border-transparent hover:border-white/50 hover:shadow-xs"
              >
                <Users className="w-5 h-5 text-neutral-600 group-hover:scale-110 transition-transform" />
                <div className="text-left flex-1">
                  <span className="block text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
                    No. of People
                  </span>
                  <span className="text-slate-800 text-sm font-semibold block truncate">
                    {guests}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-neutral-500 transition-transform duration-300 ${showGuestPicker ? "rotate-180" : ""}`}
                />
              </div>

              {/* Guest Picker Popover */}
              <AnimatePresence>
                {showGuestPicker && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute left-0 right-0 top-full mt-2 p-2 bg-white/90 backdrop-blur-2xl border border-neutral-200/80 rounded-2xl z-50 text-left shadow-xl space-y-1"
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
                            ? "bg-neutral-100 text-neutral-900 font-bold"
                            : "text-slate-700 hover:bg-neutral-100/80 hover:text-slate-900"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA "Go" Button (matching Navbar primary button styles) */}
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{ scale: 0.97 }}
              className="w-full md:w-auto px-7 py-3 flex gap-1 items-center justify-center rounded-4xl bg-neutral-900 text-white font-bold text-sm hover:bg-black transition shadow-[inset_2px_2px_5px_0px_rgba(0,0,0,0.5),inset_-2px_-2px_6px_1px_rgba(80,78,78,0.5)] cursor-pointer group"
            >
              <span>Go</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
            </motion.button>

            <div className="hidden md:block w-px h-8 bg-neutral-300/40" />

            {/* Contact at End */}
            <div className="relative w-full md:w-auto">
              <button
                onClick={() => setShowContactMenu(!showContactMenu)}
                className="w-full md:w-auto px-5 py-3 md:py-2.5 rounded-3xl md:rounded-full bg-white/20 hover:bg-white/40 text-slate-800 hover:text-slate-900 backdrop-blur-md border border-white/50 flex items-center justify-center gap-2 text-sm font-semibold transition-all group cursor-pointer"
              >
                <Phone className="w-4 h-4 text-neutral-600 group-hover:scale-110 transition-transform" />
                <span>Contact</span>
              </button>

              {/* Contact Popup */}
              <AnimatePresence>
                {showContactMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 top-full mt-2 w-60 p-3 bg-white/90 backdrop-blur-2xl border border-neutral-200/80 rounded-2xl z-50 text-left shadow-xl space-y-2"
                  >
                    <a
                      href="tel:+919876543210"
                      className="flex items-center gap-3 p-2.5 rounded-xl text-xs text-slate-800 hover:bg-neutral-100/80 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-amber-600" />
                      <div>
                        <div className="font-bold text-slate-900">Call Us</div>
                        <div className="text-slate-500 text-[11px]">
                          +91 98765 43210
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-2.5 rounded-xl text-xs text-slate-800 hover:bg-neutral-100/80 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      <div>
                        <div className="font-bold text-slate-900">WhatsApp</div>
                        <div className="text-slate-500 text-[11px]">
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
    </section>
  );
};

export default Hero;
