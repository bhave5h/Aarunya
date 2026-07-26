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

export const TimelineAnimation: React.FC<TimelineAnimationProps> = ({
  as = 'div',
  animationNum = 1,
  timelineRef,
  children,
  className,
  src,
  alt,
  ...props
}) => {
  const Component = motion.create(as);

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
