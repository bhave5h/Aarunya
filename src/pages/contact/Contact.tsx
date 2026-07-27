"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Sparkles, Phone, Mail, MapPin, MessageSquare, User, Calendar } from "lucide-react";
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
    <section id="contact" className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden select-none">
      {/* Header Section matching Hero/Experience styling */}
      <div className="max-w-4xl mx-auto text-center space-y-3 mb-12 md:mb-16">
        <div className="bg-white/40 backdrop-blur-md w-fit mx-auto px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 shadow-sm border border-neutral-200">
          <span className="text-xs md:text-sm font-semibold tracking-tight text-slate-800">
            Contact & Reservations
          </span>
        </div>

        <h2 className="heading mx-auto">Get In Touch</h2>
        <p className="subheading mx-auto">We&apos;re Here to Help You Escape</p>
        <p className="para mx-auto max-w-2xl">
          Reserve your eco-tent along the shore, ask about customized itineraries, or connect directly with our coastal hosts.
        </p>
      </div>

      {/* Main Container styled with Hero/Experience Glassmorphic Card Aesthetics */}
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative bg-white/40 backdrop-blur-2xl border border-neutral-200/80 rounded-4xl shadow-xl p-6 sm:p-10 md:p-12 overflow-hidden"
        >
          {/* Subtle Ambient Background Gradient Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-amber-50/20 pointer-events-none" />

          {/* Contact Direct Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 relative z-10">
            <a
              href="tel:+919876543210"
              className="p-4 rounded-3xl bg-white/70 backdrop-blur-md border border-neutral-200/80 shadow-2xs hover:shadow-md hover:bg-white transition-all flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-2xl bg-neutral-900 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Direct Call</div>
                <div className="text-sm font-semibold text-neutral-900 truncate">+91 98765 43210</div>
              </div>
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-3xl bg-white/70 backdrop-blur-md border border-neutral-200/80 shadow-2xs hover:shadow-md hover:bg-white transition-all flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">WhatsApp Chat</div>
                <div className="text-sm font-semibold text-neutral-900 truncate">Instant Inquiry</div>
              </div>
            </a>

            <div className="p-4 rounded-3xl bg-white/70 backdrop-blur-md border border-neutral-200/80 shadow-2xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Resort Location</div>
                <div className="text-sm font-semibold text-neutral-900 truncate">Valsad, Gujarat</div>
              </div>
            </div>
          </div>

          {/* Grid Layout: Interactive Window Illustration vs Glassmorphic Form */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Left Side: Window SVG Illustration */}
            <div className="md:col-span-5 flex flex-col items-center justify-center space-y-4">
              <div className="relative w-full max-w-[320px] flex items-center justify-center p-2 rounded-3xl bg-white/60 border border-neutral-200/60 shadow-inner">
                {/* Progressive Window SVG Component */}
                <Window progress={progress} className="w-full" />
              </div>

              {/* Live Interactive Progress Pill matching Hero badge */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-neutral-200 shadow-2xs text-xs text-neutral-700 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                <span>
                  {progress === 0 && "Fill fields to reveal the window view"}
                  {progress === 30 && "Name added — 30% View Unlocked"}
                  {progress === 60 && "Contact added — 60% View Unlocked"}
                  {progress === 100 && "Ready! 100% Window View Unlocked"}
                </span>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="md:col-span-7 space-y-5">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4 bg-white/60 rounded-3xl p-8 border border-neutral-200"
                  >
                    <CheckCircle className="w-14 h-14 text-emerald-600 mx-auto" />
                    <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
                      Inquiry Submitted!
                    </h3>
                    <p className="text-neutral-600 text-sm max-w-sm mx-auto leading-relaxed">
                      Thank you, <span className="font-bold text-neutral-900">{name || "Traveler"}</span>! Our team at Aarunya will reach out to you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setName("");
                        setContactInfo("");
                        setMessage("");
                      }}
                      className="mt-2 text-xs font-bold text-neutral-900 underline underline-offset-4 cursor-pointer hover:text-black"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* Field 1: Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider">
                        Full Name
                      </label>
                      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/70 border border-neutral-200/80 shadow-2xs focus-within:border-neutral-900 focus-within:ring-2 focus-within:ring-neutral-900/10 transition-all">
                        <User className="w-4 h-4 text-neutral-400" />
                        <input
                          type="text"
                          placeholder="Your name (e.g. Samarth Shah)"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-transparent text-neutral-900 font-medium text-sm focus:outline-none placeholder:text-neutral-400"
                        />
                      </div>
                    </div>

                    {/* Field 2: Contact Info */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider">
                        Email Address or Phone
                      </label>
                      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/70 border border-neutral-200/80 shadow-2xs focus-within:border-neutral-900 focus-within:ring-2 focus-within:ring-neutral-900/10 transition-all">
                        <Mail className="w-4 h-4 text-neutral-400" />
                        <input
                          type="text"
                          placeholder="samarth@example.com or +91 98765..."
                          value={contactInfo}
                          onChange={(e) => setContactInfo(e.target.value)}
                          className="w-full bg-transparent text-neutral-900 font-medium text-sm focus:outline-none placeholder:text-neutral-400"
                        />
                      </div>
                    </div>

                    {/* Field 3: Message */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider">
                        Your Stay Notes / Questions
                      </label>
                      <div className="px-4 py-3 rounded-2xl bg-white/70 border border-neutral-200/80 shadow-2xs focus-within:border-neutral-900 focus-within:ring-2 focus-within:ring-neutral-900/10 transition-all">
                        <textarea
                          rows={3}
                          placeholder="Tell us your preferred dates, group size, or special requests..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full bg-transparent text-neutral-900 font-medium text-sm focus:outline-none placeholder:text-neutral-400 resize-none"
                        />
                      </div>
                    </div>

                    {/* Hero-style Primary Submit Button */}
                    <button
                      type="submit"
                      disabled={filledCount === 0}
                      className={`w-full py-3.5 px-6 rounded-4xl font-bold text-sm shadow-[inset_2px_2px_5px_0px_rgba(0,0,0,0.5),inset_-2px_-2px_6px_1px_rgba(80,78,78,0.5)] flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        filledCount > 0
                          ? "bg-neutral-900 hover:bg-black text-white active:scale-[0.98]"
                          : "bg-neutral-300 text-neutral-500 cursor-not-allowed shadow-none"
                      }`}
                    >
                      <span>Send Inquiry</span>
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
