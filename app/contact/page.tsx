import Link from "next/link";

const contactInfo = [
  { label: "Email", value: "deshoneve@gmail.com", href: "mailto:deshoneve@gmail.com" },
  { label: "Phone", value: "0455 855 298", href: "tel:+61455855298" },
  { label: "Instagram", value: "@evedeshon", href: "https://instagram.com/evedeshon" },
  { label: "LinkedIn", value: "Eve Deshon", href: "https://linkedin.com/in/evedeshon" },
  { label: "Location", value: "Sydney, Australia (Woollahra, NSW)", href: null },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-[#f8f6f3]">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#f8f6f3]/90 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold text-[#1a1a1a]">
            Eve Deshon
          </Link>
          <nav className="flex gap-6 text-sm text-[#555]">
            <Link href="/work" className="hover:text-[#1a1a1a] transition-colors">
              Work
            </Link>
            <Link href="/experience" className="hover:text-[#1a1a1a] transition-colors">
              Experience
            </Link>
            <Link href="/contact" className="text-[#1a1a1a]">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-20">
        <section className="mb-12">
          <h1 className="text-2xl md:text-4xl font-normal uppercase tracking-wide text-[#1a1a1a] mb-4">
            Get in Touch
          </h1>
          <p className="text-[#555] text-sm md:text-base max-w-xl">
            For roles in marketing, creative direction, events, styling and brand partnerships.
          </p>
        </section>

        <ul className="divide-y divide-black/10">
          {contactInfo.map((item, index) => (
            <li key={index} className="py-5 flex items-baseline gap-6">
              <span className="text-xs uppercase tracking-wider text-[#555] w-24 shrink-0">
                {item.label}
              </span>
              {item.href ? (
                <a 
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="text-[#1a1a1a] hover:text-[#555] border-b border-black/20 pb-0.5 transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-[#1a1a1a]">{item.value}</span>
              )}
            </li>
          ))}
        </ul>

        <p className="mt-12 text-sm text-[#555]">
          References available on request.
        </p>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/10 py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between text-sm text-[#555]">
          <p>© {new Date().getFullYear()} Eve Deshon</p>
          <a href="#" className="hover:text-[#1a1a1a] transition-colors">
            ↑ Back to Top
          </a>
        </div>
      </footer>
    </div>
  );
}
