import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Timeline, TimelineEntry } from "@/components/ui/timeline";

const IMG_CLASS =
  "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

const ENTRY_TITLE_CLASS =
  "text-base md:text-lg font-semibold tracking-tight text-black mb-3 text-emerald-800";

export default function ExperiencePage() {
  const data: TimelineEntry[] = [
    {
      title: "2025",
      content: (
        <div>
          <p className={ENTRY_TITLE_CLASS}>
            FibreTrace Pty Ltd — Event Planning & Production Intern, Portugal.
          </p>
          <p className="text-black text-xs md:text-sm font-normal mb-6">
            Supported delivery of a large-scale international sustainability conference, contributing to end-to-end event production, live content capture, and real-time social publishing for a global textile traceability platform.
          </p>
          <ul className="space-y-2 mb-8 text-black text-xs md:text-sm">
            <li className="flex gap-2">▸ Captured and published live content across social channels</li>
            <li className="flex gap-2">▸ Assisted with scheduling, run-of-show coordination, and production</li>
            <li className="flex gap-2">▸ Created captions, hashtag strategies, and tracked engagement</li>
            <li className="flex gap-2">▸ Collaborated with international stakeholders across sustainability and fashion</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image src="https://images.unsplash.com/photo-1540575467063-178bf50e2f0a?w=500&h=500&fit=crop" alt="Sustainability conference" width={500} height={500} className={IMG_CLASS} />
            <Image src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&h=500&fit=crop" alt="Event production" width={500} height={500} className={IMG_CLASS} />
            <Image src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=500&fit=crop" alt="Team collaboration" width={500} height={500} className={IMG_CLASS} />
            <Image src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=500&fit=crop" alt="Fashion sustainability" width={500} height={500} className={IMG_CLASS} />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className={ENTRY_TITLE_CLASS}>
            Australian Fashion Council (AFC) — Fashion Week Operations Assistant, Sydney.
          </p>
          <p className="text-black text-xs md:text-sm font-normal mb-6">
            Supported Australian Fashion Week operations across backstage, front-of-house, and show production.
          </p>
          <ul className="space-y-2 mb-8 text-black text-xs md:text-sm">
            <li className="flex gap-2">▸ Model dressing and backstage coordination during runway shows</li>
            <li className="flex gap-2">▸ Show set-up and venue operations</li>
            <li className="flex gap-2">▸ Front-of-house guest coordination and check-in</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image src="https://images.unsplash.com/photo-1558769132-cb1aea913002?w=500&h=500&fit=crop" alt="Fashion show" width={500} height={500} className={IMG_CLASS} />
            <Image src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&h=500&fit=crop" alt="Runway" width={500} height={500} className={IMG_CLASS} />
            <Image src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=500&fit=crop" alt="Fashion" width={500} height={500} className={IMG_CLASS} />
            <Image src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&h=500&fit=crop" alt="Backstage" width={500} height={500} className={IMG_CLASS} />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className={ENTRY_TITLE_CLASS}>
            AMPR Group — PR & Communications Intern, Sydney.
          </p>
          <p className="text-black text-xs md:text-sm font-normal mb-6">
            Developed skills in media monitoring, content creation, and showroom management for brands like Bondi Sands and Forever New.
          </p>
          <ul className="space-y-2 mb-8 text-black text-xs md:text-sm">
            <li className="flex gap-2">▸ Media monitoring, press clippings, and daily paper reads</li>
            <li className="flex gap-2">▸ Influencer and media outreach, talent scouting, list management</li>
            <li className="flex gap-2">▸ Campaign documents and social assets using InDesign</li>
            <li className="flex gap-2">▸ Brand events and hands-on support with media and clients</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=500&fit=crop" alt="PR and media" width={500} height={500} className={IMG_CLASS} />
            <Image src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=500&fit=crop" alt="Content creation" width={500} height={500} className={IMG_CLASS} />
            <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop" alt="Strategy" width={500} height={500} className={IMG_CLASS} />
            <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop" alt="Team" width={500} height={500} className={IMG_CLASS} />
          </div>
        </div>
      ),
    },
    {
      title: "2023–Present",
      content: (
        <div>
          <p className={ENTRY_TITLE_CLASS}>
            Hansen & Gretel — Retail · Social Media Coordinator · Content Production, Rosebery, Sydney.
          </p>
          <p className="text-black text-xs md:text-sm font-normal mb-6">
            Long-term role across retail, social media, and content production for an Australian luxury fashion label.
          </p>
          <ul className="space-y-2 mb-8 text-black text-xs md:text-sm">
            <li className="flex gap-2">▸ Retail: in-store sales, styling, and customer experience</li>
            <li className="flex gap-2">▸ Social Media Coordinator: strategy, scheduling, engagement analytics</li>
            <li className="flex gap-2">▸ Ownley Online BTS: shoot styling and behind-the-scenes content</li>
            <li className="flex gap-2">▸ Brand tone and visual storytelling across touchpoints</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&h=500&fit=crop" alt="Retail" width={500} height={500} className={IMG_CLASS} />
            <Image src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=500&fit=crop" alt="Social media" width={500} height={500} className={IMG_CLASS} />
            <Image src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&h=500&fit=crop" alt="Fashion content" width={500} height={500} className={IMG_CLASS} />
            <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop" alt="Luxury fashion" width={500} height={500} className={IMG_CLASS} />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className={ENTRY_TITLE_CLASS}>
            Vaura Pilates — Administrative Assistant, Sydney.
          </p>
          <p className="text-black text-xs md:text-sm font-normal mb-6">
            Supported front-of-house operations and client experience at a boutique pilates studio.
          </p>
          <ul className="space-y-2 mb-8 text-black text-xs md:text-sm">
            <li className="flex gap-2">▸ Client bookings, enquiries, and front-desk support</li>
            <li className="flex gap-2">▸ Email correspondence, invoicing, and studio records</li>
            <li className="flex gap-2">▸ Social media content and studio promotions</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&h=500&fit=crop" alt="Pilates" width={500} height={500} className={IMG_CLASS} />
            <Image src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=500&fit=crop" alt="Studio" width={500} height={500} className={IMG_CLASS} />
            <Image src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop" alt="Wellness" width={500} height={500} className={IMG_CLASS} />
            <Image src="https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=500&h=500&fit=crop" alt="Fitness" width={500} height={500} className={IMG_CLASS} />
          </div>
        </div>
      ),
    },
    {
      title: "2022–2026",
      content: (
        <div>
          <p className={ENTRY_TITLE_CLASS}>
            University of Technology Sydney — Bachelor of Business (Management). Major: Creative Industries · Minor: Sustainability.
          </p>
          <p className="text-black text-xs md:text-sm font-normal mb-6">
            Combining strategic thinking with practical experience across marketing, PR, events, and content production.
          </p>
          <ul className="space-y-2 mb-8 text-black text-xs md:text-sm">
            <li className="flex gap-2">▸ Creative Industries: marketing, media, and brand strategy</li>
            <li className="flex gap-2">▸ Sustainability: ethical business and purpose-led communications</li>
            <li className="flex gap-2">▸ Internships at AMPR Group and FibreTrace during studies</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=500&fit=crop" alt="University" width={500} height={500} className={IMG_CLASS} />
            <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=500&fit=crop" alt="Learning" width={500} height={500} className={IMG_CLASS} />
            <Image src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=500&fit=crop" alt="Creative" width={500} height={500} className={IMG_CLASS} />
            <Image src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&h=500&fit=crop" alt="Sustainability" width={500} height={500} className={IMG_CLASS} />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className={ENTRY_TITLE_CLASS}>
            University of the Arts London — Fashion Marketing.
          </p>
          <p className="text-black text-xs md:text-sm font-normal mb-6">
            Intensive fashion marketing training: brand positioning, visual storytelling, and industry trends.
          </p>
          <ul className="space-y-2 mb-8 text-black text-xs md:text-sm">
            <li className="flex gap-2">▸ Brand strategy and positioning within fashion</li>
            <li className="flex gap-2">▸ Visual storytelling and campaign development</li>
            <li className="flex gap-2">▸ International fashion marketing practices</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop" alt="Fashion" width={500} height={500} className={IMG_CLASS} />
            <Image src="https://images.unsplash.com/photo-1558769132-cb1aea913002?w=500&h=500&fit=crop" alt="London" width={500} height={500} className={IMG_CLASS} />
            <Image src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&h=500&fit=crop" alt="Style" width={500} height={500} className={IMG_CLASS} />
            <Image src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=500&fit=crop" alt="Brand" width={500} height={500} className={IMG_CLASS} />
          </div>
        </div>
      ),
    },
    {
      title: "Origins",
      content: (
        <div>
          <p className={ENTRY_TITLE_CLASS}>
            Path to Creative Industries
          </p>
          <p className="text-black text-xs md:text-sm font-normal mb-6">
            Grew up in Bath, UK. Always drawn to creative pursuits and visual culture. Moved to Sydney to study, combining an interest in fashion and styling with a growing focus on sustainability. Built practical experience across retail, hospitality, PR, events, and social media. Now focused on fashion and lifestyle communications with a purpose-led, sustainable approach.
          </p>
          <ul className="space-y-2 mb-8 text-black text-xs md:text-sm">
            <li className="flex gap-2">▸ Raised in Bath, UK. Early interest in fashion and visual culture</li>
            <li className="flex gap-2">▸ Moved to Sydney for Business Management, Creative Industries & Sustainability</li>
            <li className="flex gap-2">▸ Portfolio across PR, events, content, and brand experience</li>
            <li className="flex gap-2">▸ Focus: authentic brand storytelling — fashion, lifestyle, sustainability</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&h=500&fit=crop" alt="Creative journey" width={500} height={500} className={IMG_CLASS} />
            <Image src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&h=500&fit=crop" alt="Sustainability" width={500} height={500} className={IMG_CLASS} />
            <Image src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=500&fit=crop" alt="Collaboration" width={500} height={500} className={IMG_CLASS} />
            <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop" alt="Fashion" width={500} height={500} className={IMG_CLASS} />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="top" className="min-h-screen w-full bg-white">
      {/* Header — matches Work & Contact */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold text-black">
            Eve Deshon
          </Link>
          <nav className="flex gap-6 text-sm text-black">
            <Link href="/work" className="hover:opacity-80 transition-opacity">
              Work
            </Link>
            <Link href="/experience" className="font-medium">
              Experience
            </Link>
            <Link href="/contact" className="hover:opacity-80 transition-opacity">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <Timeline
        data={data}
        title="My Professional Journey"
        subtitle="Business Management graduate. Creative Industries major, Sustainability minor. Building brand experiences through PR, events, content and purpose-led communications."
      />

      {/* Footer — matches Work & Contact */}
      <footer className="border-t border-black/10 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between text-sm text-black">
          <p>© {new Date().getFullYear()} Eve Deshon</p>
          <a href="#top" className="hover:opacity-80 transition-opacity text-black">
            ↑ Back to Top
          </a>
        </div>
      </footer>
    </div>
  );
}
