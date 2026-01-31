import Link from "next/link";

const projects = [
  {
    name: "FibreTrace®",
    meta: "Event production / social content / digital experience",
    href: "/case-studies/fibretrace.html",
    image: "/assets/fibretrace/ft-cover.png",
  },
  {
    name: "AMPR Group",
    meta: "PR / communications / brand activations",
    href: "/case-studies/ampr.html",
    image: "/assets/ampr/ampr-cover.png",
  },
  {
    name: "Hansen & Gretel",
    meta: "Retail / social media / Ownley Online BTS (2023–Present)",
    href: "/case-studies/hansen-gretel-social.html",
    image: "/assets/hansen-gretel/hansen-gretel-cover.png",
  },
  {
    name: "Vaura Pilates",
    meta: "Operations / promotions / social support",
    href: "/case-studies/vaura-pilates.html",
    image: "/assets/vaura-pilates/vaura-pilates-cover.png",
  },
  {
    name: "MONK",
    meta: "Brand identity / packaging concept / personal exploration",
    href: "/case-studies/monk.html",
    image: "/assets/monk/monk-cover.png",
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen w-full bg-[#f8f6f3]">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#f8f6f3]/90 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold text-[#1a1a1a]">
            Eve Deshon
          </Link>
          <nav className="flex gap-6 text-sm text-[#555]">
            <Link href="/work" className="text-[#1a1a1a]">
              Work
            </Link>
            <Link href="/experience" className="hover:text-[#1a1a1a] transition-colors">
              Experience
            </Link>
            <Link href="/contact" className="hover:text-[#1a1a1a] transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        <section className="mb-12">
          <h1 className="text-2xl md:text-4xl font-normal uppercase tracking-wide text-[#1a1a1a] mb-4">
            Creative Archive
          </h1>
          <p className="text-[#555] text-sm md:text-base max-w-xl">
            Work across PR, events, content and social. Where creative industries meets 
            sustainability and purpose-led brand experience.
          </p>
        </section>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 list-none p-0 m-0">
          {projects.map((project, index) => (
            <li key={index} className="aspect-square">
              <a
                href={project.href}
                className="group block relative w-full h-full overflow-hidden rounded bg-[#e8e6e3] cursor-pointer"
              >
                <img
                  src={project.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
                <span className="absolute inset-0 flex flex-col justify-end p-4 pb-5 bg-black/0 group-hover:bg-black/80 transition-colors duration-250 ease-out">
                  <span className="text-white text-base font-medium opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-250 ease-out">
                    {project.name}
                  </span>
                  <span className="text-white/90 text-[13px] leading-snug mt-1 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-250 ease-out">
                    {project.meta}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
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
