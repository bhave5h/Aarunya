"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Sparkles, Sun } from "lucide-react";
import Window from "@/components/ui/Window";

export default function Contact() {
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calculate filled fields count
  const filledCount =
    (name.trim().length > 0 ? 1 : 0) +
    (contactInfo.trim().length > 0 ? 1 : 0) +
    (message.trim().length > 0 ? 1 : 0);

  // Determine SVG reveal progress: 0 -> 30 -> 60 -> 100
  let progress = 0;
  if (filledCount === 1) progress = 30;
  else if (filledCount === 2) progress = 60;
  else if (filledCount >= 3) progress = 100;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filledCount > 0) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] overflow-hidden">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 md:mb-14">
        <h2 className="heading text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 tracking-tight lowercase">
          contact us
        </h2>
        <p className="subheading text-xl sm:text-2xl text-gray-800 tracking-wide font-normal italic">
          Live Slower, Feel Everything
        </p>
        <p className="para text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed pt-1">
          Bonfire nights, Goan folk dances, sunrise kayaking and dolphin
          spotting days shaped by the tide, not the clock.
        </p>
      </div>

      {/* Main Postcard Container */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative bg-[#F9F4EB] border border-[#E4D9C8] rounded-[2rem] md:rounded-[2.5rem] shadow-2xl p-6 sm:p-10 md:p-12 overflow-hidden"
        >
          {/* Postcard Texture Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/40 via-transparent to-amber-100/20 pointer-events-none" />

          {/* Grid Layout: Left (Window SVG) vs Right (Postcard Form) */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
            
            {/* Left Side: Window SVG Illustration */}
            <div className="md:col-span-6 flex flex-col items-center justify-center space-y-4">
              <div className="relative w-full max-w-[340px] flex items-center justify-center">
                {/* Sun Accent at top left of window */}
                <div className="absolute top-2 left-2 text-amber-500/80 pointer-events-none">
                  <Sun className="w-7 h-7 stroke-[1.5] animate-spin-slow" />
                </div>

                {/* Progressive Window SVG Component */}
                <Window progress={progress} className="w-full" />
              </div>

              {/* Live Interactive Progress Pill */}
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/5 border border-amber-900/10 text-xs text-amber-900 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>
                  {progress === 0 && "Fill fields to reveal the window view"}
                  {progress === 30 && "Field 1 filled — 30% Revealed"}
                  {progress === 60 && "Field 2 filled — 60% Revealed"}
                  {progress === 100 && "All fields filled — 100% Revealed!"}
                </span>
              </div>
            </div>

            {/* Vertical Postcard Center Divider (Hidden on mobile) */}
            <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-indigo-900/25 -translate-x-1/2" />

            {/* Right Side: Postcard Form & Stamp */}
            <div className="md:col-span-6 flex flex-col justify-between h-full space-y-6 md:pl-4">
              
              {/* Top Right Stamp & Cancel Mark */}
              <div className="flex justify-between items-start">
                {/* Cursive Note */}
                <div className="font-serif italic text-sky-700 text-lg sm:text-xl font-medium tracking-wide max-w-[200px] leading-tight">
                  Perry, Can&apos;t wait to see you soon!
                </div>

                {/* Vintage Lemon Stamp */}
                <div className="relative shrink-0 w-16 h-20 bg-amber-100 border-2 border-dashed border-amber-700/60 rounded-sm p-1 shadow-sm flex flex-col items-center justify-between rotate-3">
                  <div className="text-[9px] uppercase font-mono font-bold tracking-widest text-amber-900/80">
                    POSTAL
                  </div>
                  <div className="text-xl">🍋</div>
                  <div className="text-[8px] font-mono text-amber-900/70">1972</div>
                  
                  {/* Circular Cancel Mark */}
                  <div className="absolute -left-4 top-3 w-10 h-10 border border-sky-800/40 rounded-full flex items-center justify-center text-[7px] text-sky-800/50 font-mono -rotate-12 pointer-events-none">
                    VALSAD • TIDE
                  </div>
                </div>
              </div>

              {/* Form Section */}
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center space-y-3"
                  >
                    <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h3 className="font-serif text-2xl font-bold text-gray-900">
                      Postcard Sent!
                    </h3>
                    <p className="text-gray-600 text-sm max-w-xs mx-auto">
                      Thank you, <span className="font-semibold text-gray-900">{name || "traveler"}</span>! We&apos;ve received your postcard and will write back shortly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setName("");
                        setContactInfo("");
                        setMessage("");
                      }}
                      className="mt-4 text-xs font-semibold text-amber-900 underline underline-offset-4 cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5 pt-2"
                  >
                    {/* Field 1: Name (FROM:) */}
                    <div className="relative border-b-2 border-indigo-900/25 pb-1 focus-within:border-indigo-900 transition-colors">
                      <label className="block text-xs font-mono font-bold text-indigo-950 uppercase tracking-widest mb-1">
                        FROM:
                      </label>
                      <input
                        type="text"
                        placeholder="Your name (e.g. Sam)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-transparent font-serif italic text-gray-900 text-base sm:text-lg focus:outline-none placeholder:text-gray-400"
                      />
                    </div>

                    {/* Field 2: Email / Phone */}
                    <div className="relative border-b-2 border-indigo-900/25 pb-1 focus-within:border-indigo-900 transition-colors">
                      <label className="block text-xs font-mono font-bold text-indigo-950 uppercase tracking-widest mb-1">
                        CONTACT:
                      </label>
                      <input
                        type="text"
                        placeholder="Email address or phone number"
                        value={contactInfo}
                        onChange={(e) => setContactInfo(e.target.value)}
                        className="w-full bg-transparent font-serif italic text-gray-900 text-base sm:text-lg focus:outline-none placeholder:text-gray-400"
                      />
                    </div>

                    {/* Field 3: Message */}
                    <div className="relative border-b-2 border-indigo-900/25 pb-1 focus-within:border-indigo-900 transition-colors">
                      <label className="block text-xs font-mono font-bold text-indigo-950 uppercase tracking-widest mb-1">
                        MESSAGE:
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Share your stay dates, questions, or wishes..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-transparent font-serif italic text-gray-900 text-base sm:text-lg focus:outline-none placeholder:text-gray-400 resize-none"
                      />
                    </div>

                    {/* Postcard Send Button */}
                    <button
                      type="submit"
                      disabled={filledCount === 0}
                      className={`w-full py-3.5 px-6 rounded-2xl font-semibold text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        filledCount > 0
                          ? "bg-amber-900 hover:bg-amber-950 text-white active:scale-[0.99]"
                          : "bg-amber-900/40 text-white/70 cursor-not-allowed"
                      }`}
                    >
                      <span>Send Postcard</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
