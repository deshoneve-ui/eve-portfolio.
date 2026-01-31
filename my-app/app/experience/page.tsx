import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";

export default function ExperiencePage() {
  const data = [
    {
      year: "2025",
      company: "FibreTrace Pty Ltd",
      role: "Event Planning & Production Intern",
      location: "Portugal",
      description:
        "Supported delivery of a large-scale international sustainability conference, contributing to end-to-end event production, live content capture, and real-time social publishing for a global textile traceability platform.",
      bullets: [
        "Captured and published live content across social channels during multi-day conference",
        "Assisted with scheduling, run-of-show coordination, and on-the-ground production",
        "Created captions, hashtag strategies, and tracked engagement in real time",
        "Collaborated with international stakeholders across sustainability and fashion sectors",
      ],
    },
    {
      year: "2025",
      company: "Australian Fashion Council (AFC)",
      role: "Fashion Week Operations Assistant",
      location: "Sydney, Australia · May 2025",
      description:
        "Supported Australian Fashion Week operations across backstage, front-of-house, and show production. Assisted with model dressing, show set-up, and guest coordination.",
      bullets: [
        "Assisted with model dressing and backstage coordination during runway shows",
        "Supported show set-up and venue operations",
        "Managed front-of-house guest coordination and check-in",
        "Worked across multiple shows in a fast-paced, high-pressure environment",
      ],
    },
    {
      year: "2025",
      company: "AMPR Group",
      role: "PR & Communications Intern",
      location: "Sydney, Australia",
      description:
        "Developed skills in media monitoring, content creation, and showroom management while contributing to campaigns for brands like Bondi Sands and Forever New at one of Australia's leading fashion and lifestyle PR agencies.",
      bullets: [
        "Supported media monitoring, press clippings, and daily paper reads",
        "Assisted in influencer and media outreach, talent scouting, and list management",
        "Created campaign documents and social assets using InDesign",
        "Attended brand events and provided hands-on support with media and clients",
      ],
    },
    {
      year: "2023–Present",
      company: "Hansen & Gretel",
      role: "Retail · Social Media Coordinator · Content Production",
      location: "Rosebery, Sydney",
      description:
        "Long-term role across retail, social media, and content production for an Australian luxury fashion label. Started in retail (2023), expanded to Social Media Coordinator (2024), and continue producing content and supporting Ownley Online shoots.",
      bullets: [
        "<strong>Retail (2023–Present):</strong> In-store sales, styling, and customer experience",
        "<strong>Social Media Coordinator (2024):</strong> Strategy, content scheduling, and engagement analytics",
        "<strong>Ownley Online BTS (2024–Present):</strong> Shoot styling assistance and behind-the-scenes content capture",
        "Developed brand tone awareness and visual storytelling across all touchpoints",
      ],
    },
    {
      year: "2024",
      company: "Vaura Pilates",
      role: "Administrative Assistant",
      location: "Sydney, Australia",
      description:
        "Supported front-of-house operations and client experience at a boutique pilates studio, handling bookings, enquiries, and communications while contributing to promotional content and social media.",
      bullets: [
        "Managed client bookings, enquiries, and front-desk support",
        "Handled email correspondence, invoicing, and studio records",
        "Assisted with social media content and studio promotions",
        "Maintained professional client communication and follow-through",
      ],
    },
    {
      year: "2022–2026",
      company: "University of Technology Sydney",
      role: "Bachelor of Business (Management)",
      location: "Sydney, Australia",
      description:
        "Pursuing a business degree with a focus on creative industries and sustainability, combining strategic thinking with practical experience across marketing, PR, events, and content production.",
      bullets: [
        "Major in Creative Industries: marketing, media, and brand strategy",
        "Minor in Sustainability: ethical business practices and purpose-led communications",
        "Completed internships at AMPR Group and FibreTrace during studies",
        "Developed portfolio across PR, social media, events, and styling",
      ],
    },
    {
      year: "2022",
      company: "University of the Arts London",
      role: "Fashion Marketing",
      location: "London, UK",
      description:
        "Completed intensive fashion marketing training at one of the world's leading creative institutions, building foundational skills in brand positioning, visual storytelling, and industry trends.",
      bullets: [
        "Studied brand strategy and positioning within the fashion industry",
        "Developed understanding of visual storytelling and campaign development",
        "Gained exposure to international fashion marketing practices",
        "Built foundation for career in fashion PR and communications",
      ],
    },
    {
      year: "Origins",
      company: "Path to Creative Industries",
      description:
        "Grew up in Bath, UK. Always drawn to creative pursuits and visual culture. Moved to Sydney to study, combining an interest in fashion and styling with a growing focus on sustainability. Built practical experience across retail, hospitality, PR, events, and social media. Now focused on fashion and lifestyle communications with a purpose-led, sustainable approach.",
      bullets: [
        "Raised in Bath, UK. Creative upbringing with early interest in fashion and visual culture",
        "Moved to Sydney to pursue Business Management with Creative Industries and Sustainability focus",
        "Built portfolio across PR, events, content, and brand experience",
        "Focus: authentic brand storytelling that blends fashion, lifestyle, and sustainability",
      ],
      isOrigin: true,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0b0b0c]">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0b0b0c]/90 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold text-white">
            Eve Deshon
          </Link>
          <nav className="flex gap-6 text-sm text-white/70">
            <Link href="/work" className="hover:text-white transition-colors">
              Work
            </Link>
            <Link href="/experience" className="text-white">
              Experience
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <Timeline data={data} />

      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between text-sm text-white/60">
          <p>© {new Date().getFullYear()} Eve Deshon</p>
          <a href="#" className="hover:text-white transition-colors">
            ↑ Back to Top
          </a>
        </div>
      </footer>
    </div>
  );
}
