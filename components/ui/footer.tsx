"use client";

import React from "react";
import Logo from "./logo";
import { BlurFade } from "@/components/ui/blur-fade";

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-stone-900 relative z-10 pt-16 pb-0 mb-0 overflow-hidden border-t border-stone-200/60">
      {/* Main Light Cream Footer Body (Desktop Optimized) */}
      <div className="max-w-6xl mx-auto px-8 relative z-10 pt-4 pb-0 mb-0">
        {/* Upper Link Columns & Logo Row */}
        <div className="grid grid-cols-12 gap-12">
          {/* Brand & Mission Column */}
          <div className="col-span-4 space-y-4">
            <BlurFade delay={0.1} inView>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold tracking-tight text-stone-900 font-serif">
                  Aarunya
                </span>
              </div>
              <div className="pt-4 text-xs font-medium text-stone-500 space-y-1">
                <p>© {new Date().getFullYear()} Aarunya Eco Tented Resort.</p>
                <p>All rights reserved.</p>
              </div>
            </BlurFade>
          </div>

          {/* 4 Category Link Columns (Desktop Grid) */}
          <div className="col-span-8 grid grid-cols-4 gap-8">
            {/* Column 1: Resort */}
            <BlurFade delay={0.15} inView>
              <div>
                <h4 className="text-xs font-semibold text-stone-400 mb-4 tracking-wider font-mono uppercase">
                  Resort
                </h4>
                <ul className="space-y-3 text-sm font-medium text-stone-900">
                  <li>
                    <a
                      href="#explore"
                      className="hover:text-stone-600 transition-colors"
                    >
                      Oceanfront Tents
                    </a>
                  </li>
                  <li>
                    <a
                      href="#explore"
                      className="hover:text-stone-600 transition-colors"
                    >
                      Luxury Villa Suites
                    </a>
                  </li>
                  <li>
                    <a
                      href="#amenities"
                      className="hover:text-stone-600 transition-colors"
                    >
                      Resort Amenities
                    </a>
                  </li>
                  <li>
                    <a
                      href="#explore"
                      className="hover:text-stone-600 transition-colors"
                    >
                      Sanctuary Map
                    </a>
                  </li>
                </ul>
              </div>
            </BlurFade>

            {/* Column 2: Experiences */}
            <BlurFade delay={0.2} inView>
              <div>
                <h4 className="text-xs font-semibold text-stone-400 mb-4 tracking-wider font-mono uppercase">
                  Experiences
                </h4>
                <ul className="space-y-3 text-sm font-medium text-stone-900">
                  <li>
                    <a
                      href="#experience"
                      className="hover:text-stone-600 transition-colors"
                    >
                      Coastal Dining
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experience"
                      className="hover:text-stone-600 transition-colors"
                    >
                      Sunset Yoga & Spa
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experience"
                      className="hover:text-stone-600 transition-colors"
                    >
                      Beachfront Bonfire
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experience"
                      className="hover:text-stone-600 transition-colors"
                    >
                      Eco Nature Trails
                    </a>
                  </li>
                </ul>
              </div>
            </BlurFade>

            {/* Column 3: Information */}
            <BlurFade delay={0.25} inView>
              <div>
                <h4 className="text-xs font-semibold text-stone-400 mb-4 tracking-wider font-mono uppercase">
                  Information
                </h4>
                <ul className="space-y-3 text-sm font-medium text-stone-900">
                  <li>
                    <a
                      href="#reviews"
                      className="hover:text-stone-600 transition-colors"
                    >
                      Guest Reviews
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq"
                      className="hover:text-stone-600 transition-colors"
                    >
                      FAQ & Guidelines
                    </a>
                  </li>
                  <li>
                    <a
                      href="#booking"
                      className="hover:text-stone-600 transition-colors"
                    >
                      Terms of Stay
                    </a>
                  </li>
                  <li>
                    <a
                      href="#booking"
                      className="hover:text-stone-600 transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </BlurFade>

            {/* Column 4: Connect */}
            <BlurFade delay={0.3} inView>
              <div>
                <h4 className="text-xs font-semibold text-stone-400 mb-4 tracking-wider font-mono uppercase">
                  Connect
                </h4>
                <ul className="space-y-3 text-sm font-medium text-stone-900">
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-600 transition-colors"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-600 transition-colors"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tripadvisor.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-600 transition-colors"
                    >
                      TripAdvisor
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-stone-600 transition-colors"
                    >
                      Contact Concierge
                    </a>
                  </li>
                </ul>
              </div>
            </BlurFade>
          </div>
        </div>

        <div className="w-full flex justify-end items-end select-none pointer-events-none pb-0 leading-none">
          <p className="m-0 text-transparent text-[13.2rem] font-serif font-bold uppercase tracking-tight leading-none bg-[url('/aa.gif')] bg-contain [length:100%_auto] bg-no-repeat bg-cover bg-clip-text opacity-95 translate-y-10">
            Aarunya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
