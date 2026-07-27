"use client";

import React from "react";
import Logo from "./logo";
import { Monitor } from "lucide-react";

export function DesktopGuard({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Mobile & Tablet Block Screen (Visible under 1024px viewport) */}
      <div className="fixed inset-0 z-[9999999] flex flex-col items-center justify-center p-6 bg-white text-black text-center lg:hidden select-none">
        <div className="max-w-md mx-auto space-y-6 flex flex-col items-center">
          {/* Black circle with white monitor icon */}
          <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center shadow-md">
            <Monitor className="w-8 h-8 text-white" />
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight font-serif text-neutral-950">
              Desktop Only Experience
            </h1>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-sans max-w-xs sm:max-w-sm mx-auto font-medium">
              This site is only available on desktop. Please view on a desktop or laptop computer to explore Aarunya.
            </p>
          </div>

          <div className="pt-6 border-t border-neutral-200 w-full flex items-center justify-center gap-2 text-xs font-semibold text-neutral-500 tracking-wider uppercase">
            <Logo width={24} height={24} />
            <span>Aarunya Eco Resort</span>
          </div>
        </div>
      </div>

      {/* Desktop Site Content (Visible on lg screens 1024px and above) */}
      <div className="hidden lg:block w-full min-h-screen">
        {children}
      </div>
    </>
  );
}

export default DesktopGuard;
