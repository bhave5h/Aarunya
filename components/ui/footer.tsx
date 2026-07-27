import React from "react";
import Logo from "./logo";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 w-full bg-neutral-950 text-white overflow-hidden border-t border-neutral-800">
      {/* Upper Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 sm:py-20 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 relative z-10">
        
        {/* Brand & Mission */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="text-2xl font-bold tracking-tight text-white">
              Aarunya
            </span>
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-sm font-medium">
            Where dawn meets the sea. A secluded eco-tented resort nestled along the private coastal sanctuary of Valsad, Gujarat.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-neutral-300">
              Open 365 Days • Booking Season 2026
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">
            Explore Resort
          </h4>
          <ul className="space-y-2.5 text-sm font-semibold text-neutral-300">
            <li>
              <a href="#hero" className="hover:text-white transition flex items-center gap-1 group">
                <span>Home Sanctuary</span>
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-white transition flex items-center gap-1 group">
                <span>Experiences</span>
              </a>
            </li>
            <li>
              <a href="#explore" className="hover:text-white transition flex items-center gap-1 group">
                <span>Tent Map & Suites</span>
              </a>
            </li>
            <li>
              <a href="#amenities" className="hover:text-white transition flex items-center gap-1 group">
                <span>Amenities</span>
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-white transition flex items-center gap-1 group">
                <span>Guest Reviews</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400">
            Reach Out
          </h4>
          <ul className="space-y-3 text-sm text-neutral-300">
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
              <span>Valsad Coastal Highway, Gujarat 396001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
              <a href="tel:+919876543210" className="hover:text-white transition font-semibold">
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
              <a href="mailto:stay@aarunyaresort.com" className="hover:text-white transition">
                stay@aarunyaresort.com
              </a>
            </li>
          </ul>

          <div className="pt-2 flex items-center gap-3">
            {["Instagram", "Facebook", "TripAdvisor"].map((social) => (
              <a
                key={social}
                href="#"
                className="px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300 hover:text-white hover:border-neutral-600 transition flex items-center gap-1"
              >
                <span>{social}</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-500" />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Large Subtle Background Watermark */}
      <div className="relative overflow-hidden w-full py-4 text-center border-t border-neutral-900 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-neutral-500">
          <div>© {new Date().getFullYear()} Aarunya Eco Resort. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-300 transition">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300 transition">Terms of Stay</a>
            <a href="#" className="hover:text-neutral-300 transition">Eco Standards</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
