"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {motion} from "framer-motion";
import Logo from "./logo";

interface LoadingOverlayProps {
  onComplete?: () => void;
  children?: React.ReactNode;
}

export function LoadingOverlay({ onComplete, children }: LoadingOverlayProps) {
  const [percentage, setPercentage] = useState(0);
  const [isClipping, setIsClipping] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Animate percentage from 0 to 100 over 2 seconds
    const duration = 3000;
    const startTime = Date.now();

    const animatePercentage = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentPercentage = Math.round(progress * 100);

      setPercentage(currentPercentage);

      if (progress < 1) {
        requestAnimationFrame(animatePercentage);
      } else {
        // Start clipping animation after percentage reaches 100%
        setTimeout(() => {
          setIsClipping(true);

          // Show content and call onComplete after clip animation
          setTimeout(() => {
            setShowContent(true);
            onComplete?.();
          }, 400);
        }, 100);
      }
    };

    requestAnimationFrame(animatePercentage);
  }, [onComplete]);

  return (
    <>
      {/* Loading Overlay */}
      <div
        className="bg-[#fafafa] select-none cursor-none"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
          clipPath: isClipping ? "inset(0 0 100% 0)" : "inset(0 0 0% 0)",
          pointerEvents: isClipping ? "none" : "auto",
          transition: "clip-path 0.4s ease-in-out",
        }}
      >
        {/* Brand Tag in top-left */}
        <div
          style={{
            position: "absolute",
            left: "clamp(1.5rem, 3vw, 4rem)",
            top: "clamp(1.5rem, 3vw, 4rem)",
            fontSize: "clamp(5rem, 8vw, 15rem)",
            letterSpacing: "0.05em",
            fontWeight: 900,
          }}
          className="text-neutral-300 flex items-center gap-2"
        >
            <Logo width={70} height={70} />
            <span className="heading">Aarunyaa</span>
        </div>

        {/* Percentage Counter */}
        <div
          style={{
            position: "absolute",
            right: "clamp(1rem, 2vw, 3rem)",
            bottom: "clamp(1rem, 2vw, 3rem)",
            fontSize: "clamp(5rem, 8vw, 15rem)",
            fontWeight: 900,
            lineHeight: 1,
          }}
          className="tracking-tight text-black heading"
        >
          {percentage} %
        </div>
      </div>

      {/* Page Content */}
      <div
        style={{
          opacity: showContent ? 1 : 0,
          transform: showContent ? "none" : "translateY(100px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        }}
      >
        {children}
      </div>
    </>
  );
}

export default LoadingOverlay;
