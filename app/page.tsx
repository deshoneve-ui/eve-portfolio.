import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#f8f6f3]">
      <SiteHeader theme="light" currentPath="/" />

      {/* Hero */}
      <main className="min-h-[calc(100vh-140px)] flex items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          <h1 className="text-lg font-normal leading-relaxed tracking-wide text-[#1a1a1a] uppercase space-y-6">
            <span className="block">NICE TO MEET YOU, I&apos;M EVE.</span>
            <span className="block">BUSINESS MANAGEMENT GRADUATE, CREATIVE INDUSTRIES MAJOR, SUSTAINABILITY MINOR.</span>
            <span className="block">EXPLORING EVENTS, BRAND EXPERIENCE, AND CREATIVE WORK.</span>
          </h1>
          <div className="mt-8 flex gap-6 justify-center text-sm">
            <Link 
              href="/work" 
              className="text-[#555] hover:text-[#1a1a1a] border-b border-black/20 pb-1 transition-colors"
            >
              Work
            </Link>
            <Link 
              href="/experience" 
              className="text-[#555] hover:text-[#1a1a1a] border-b border-black/20 pb-1 transition-colors"
            >
              Experience
            </Link>
            <Link 
              href="/contact" 
              className="text-[#555] hover:text-[#1a1a1a] border-b border-black/20 pb-1 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/10 py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between text-sm text-[#555]">
          <p>Eve Deshon</p>
          <a href="#" className="hover:text-[#1a1a1a] transition-colors">
            ↑ Back to Top
          </a>
        </div>
      </footer>
    </div>
  );
}
