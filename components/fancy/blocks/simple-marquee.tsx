"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  wrap,
  useScroll,
  useSpring,
  useVelocity
} from "framer-motion";
import { cn } from "@/lib/utils";

interface SimpleMarqueeProps {
  children: React.ReactNode;
  className?: string;
  baseVelocity?: number;
  repeat?: number;
  draggable?: boolean;
  scrollSpringConfig?: { damping?: number; stiffness?: number };
  slowDownFactor?: number;
  slowdownOnHover?: boolean;
  slowDownSpringConfig?: { damping?: number; stiffness?: number };
  scrollAwareDirection?: boolean;
  scrollContainer?: React.RefObject<any>;
  useScrollVelocity?: boolean;
  direction?: "left" | "right";
}

export default function SimpleMarquee({
  children,
  className,
  baseVelocity = 5,
  repeat = 4,
  slowdownOnHover = false,
  direction = "left",
  scrollContainer,
  useScrollVelocity = false,
  scrollAwareDirection = false,
  slowDownFactor = 0.1,
}: SimpleMarqueeProps) {
  const baseX = useMotionValue(0);

  const { scrollY } = useScroll(
    scrollContainer?.current ? { container: scrollContainer } : {}
  );
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const [isHovered, setIsHovered] = useState(false);

  const x = useTransform(baseX, (v) => `${wrap(-100 / repeat, 0, v)}%`);

  const directionFactor = useRef<number>(direction === "left" ? -1 : 1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000) * 2;

    if (useScrollVelocity) {
      let scFactor = velocityFactor.get();
      if (scrollAwareDirection && scFactor !== 0) {
        directionFactor.current = scFactor < 0 ? 1 : -1;
      }
      moveBy += directionFactor.current * Math.abs(scFactor) * (delta / 1000);
    }

    if (isHovered && slowdownOnHover) {
      moveBy *= slowDownFactor;
    }

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className={cn("overflow-hidden whitespace-nowrap flex flex-nowrap w-full", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div className="flex flex-nowrap" style={{ x }}>
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={i} className="flex flex-nowrap shrink-0 items-center">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
