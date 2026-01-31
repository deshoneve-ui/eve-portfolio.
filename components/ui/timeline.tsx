"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  useSpring,
  motion,
} from "framer-motion";
import React, { useLayoutEffect, useRef, useState } from "react";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  title?: string;
  subtitle?: string;
}

export const Timeline = ({ data, title = "Changelog from my journey", subtitle = "I've been working on Aceternity for the past 2 years. Here's a timeline of my journey." }: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [fillHeight, setFillHeight] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    setFillHeight(latest * height);
  });
  
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-24 px-4 md:px-8 lg:px-10 border-b border-black/5">
        <h2 className="text-2xl md:text-5xl font-semibold tracking-tight text-black max-w-4xl mb-5">
          {title}
        </h2>
        <p className="text-black/80 text-sm md:text-base max-w-xl leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-24">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-12 md:pt-44 md:gap-12"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center ring-2 ring-emerald-700/20">
                <div className="h-3 w-3 rounded-full bg-emerald-700 border-2 border-emerald-600" />
              </div>
              <h3 className="hidden md:block text-2xl md:pl-20 md:text-5xl font-bold text-black tracking-tight tabular-nums">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="border-l-2 border-emerald-800/30 pl-6 md:pl-8 py-6 md:py-8 rounded-r-lg bg-black/[0.02]">
                <h3 className="md:hidden block text-2xl mb-6 text-left font-bold text-black tracking-tight tabular-nums">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-emerald-200/60 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: fillHeight,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-emerald-800 via-green-700 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
