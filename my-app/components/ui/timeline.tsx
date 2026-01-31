"use client";
import React from "react";

const ACCENT = "#c45c3e";

export interface TimelineEntryData {
  year: string;
  company: string;
  role?: string;
  location?: string;
  description: string;
  bullets: string[];
  isOrigin?: boolean;
}

export const Timeline = ({ data }: { data: TimelineEntryData[] }) => {
  return (
    <div className="w-full bg-[#0b0b0c] font-sans md:px-10">
      <div className="max-w-4xl mx-auto py-16 px-4 md:px-8">
        <h2 className="text-lg md:text-3xl mb-2 text-white font-semibold tracking-tight">
          My Professional Journey
        </h2>
        <p className="text-white/70 text-sm md:text-base max-w-xl">
          Business Management graduate. Creative Industries major, Sustainability minor.
          Building brand experiences through PR, events, content and purpose-led communications.
        </p>
      </div>

      <div className="max-w-4xl mx-auto pb-24 px-4 md:px-8">
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[11px] top-2 bottom-2 w-[2px] rounded-full"
            style={{ background: ACCENT }}
            aria-hidden
          />
          <ul className="space-y-0 list-none p-0 m-0">
            {data.map((entry, index) => (
              <li key={index} className="relative flex gap-6 md:gap-8 pb-12 last:pb-0">
                {/* Dot */}
                <div
                  className="relative z-10 shrink-0 w-6 h-6 rounded-full mt-0.5"
                  style={{ background: ACCENT }}
                  aria-hidden
                />
                {/* Content */}
                <div className="flex-1 min-w-0 pt-0">
                  <h3
                    className="text-xl md:text-2xl font-bold tabular-nums mb-1"
                    style={{ color: ACCENT }}
                  >
                    {entry.year}
                  </h3>
                  <p className="text-white font-semibold text-base md:text-lg mb-0.5">
                    {entry.company}
                  </p>
                  {entry.role && (
                    <p
                      className="text-sm md:text-base mb-1"
                      style={{ color: ACCENT }}
                    >
                      {entry.role}
                    </p>
                  )}
                  {entry.location && (
                    <p className="text-white/65 text-sm mb-3">
                      {entry.location}
                    </p>
                  )}
                  <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4">
                    {entry.description}
                  </p>
                  {entry.bullets.length > 0 && (
                    <ul className="space-y-2 list-none p-0 m-0">
                      {entry.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-white/85 text-sm md:text-base leading-relaxed"
                        >
                          <span
                            className="shrink-0"
                            style={{ color: ACCENT }}
                            aria-hidden
                          >
                            ▸
                          </span>
                          <span dangerouslySetInnerHTML={{ __html: bullet }} />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
