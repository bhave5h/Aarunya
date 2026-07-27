'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TimelineAnimationProps {
  as?: any;
  animationNum?: number;
  timelineRef?: React.RefObject<HTMLDivElement | null>;
  children?: React.ReactNode;
  className?: string;
  src?: string;
  alt?: string;
  [key: string]: any;
}

const componentCache = new Map<any, any>();

function getMotionComponent(as: any) {
  if (typeof as === "string" && (motion as any)[as]) {
    return (motion as any)[as];
  }
  if (!componentCache.has(as)) {
    componentCache.set(as, motion.create(as));
  }
  return componentCache.get(as);
}

export const TimelineAnimation: React.FC<TimelineAnimationProps> = ({
  as = "div",
  animationNum = 1,
  timelineRef,
  children,
  className,
  src,
  alt,
  ...props
}) => {
  const Component = React.useMemo(() => getMotionComponent(as), [as]);

  return (
    <Component
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: animationNum * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn(className)}
      src={src}
      alt={alt}
      {...props}
    >
      {children}
    </Component>
  );
};

export default TimelineAnimation;
