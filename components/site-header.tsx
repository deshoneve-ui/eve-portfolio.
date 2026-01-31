"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SidebarPanel } from "@/components/ui/sidebar-panel";

type Theme = "light" | "dark";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader({
  theme = "light",
  currentPath,
  className = "",
}: {
  theme?: Theme;
  currentPath?: string;
  className?: string;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isLight = theme === "light";
  const text = isLight ? "text-[#1a1a1a]" : "text-white";
  const muted = isLight ? "text-[#555]" : "text-white/70";
  const border = isLight ? "border-black/10" : "border-white/10";
  const bg = isLight ? "bg-[#f8f6f3]/90" : "bg-[#0b0b0c]/90";
  const hover = isLight ? "hover:text-[#1a1a1a]" : "hover:text-white";

  return (
    <>
      <header
        className={`sticky top-0 z-50 backdrop-blur-md border-b ${border} ${bg} ${className}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link href="/" className={`font-semibold ${text}`}>
            Eve Deshon
          </Link>
          <nav className="hidden sm:flex gap-6 text-sm">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={
                  currentPath === href ? text : `${muted} ${hover} transition-colors`
                }
              >
                {label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className={`sm:ml-2 p-2 -mr-2 rounded-md ${muted} ${hover} transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/20 dark:focus-visible:ring-white/30`}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </nav>
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className={`sm:hidden p-2 -mr-2 rounded-md ${muted} ${hover} transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/20 dark:focus-visible:ring-white/30`}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      <SidebarPanel open={sidebarOpen} onClose={() => setSidebarOpen(false)}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-black/10 dark:border-white/10">
            <span className="font-semibold text-[#1a1a1a] dark:text-white">
              Eve Deshon
            </span>
            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="p-2 -mr-2 rounded-md text-[#555] hover:text-[#1a1a1a] dark:text-white/70 dark:hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/20"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setSidebarOpen(false)}
                className={`py-3 px-3 rounded-lg text-base font-medium transition-colors ${
                  currentPath === href
                    ? "bg-black/5 dark:bg-white/10 text-[#1a1a1a] dark:text-white"
                    : "text-[#555] hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </SidebarPanel>
    </>
  );
}
