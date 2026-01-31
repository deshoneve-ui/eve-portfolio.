import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#f8f6f3] flex flex-col">
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
            <Link href="/contact" className="hover:text-[#1a1a1a] transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-4xl md:text-5xl font-normal uppercase tracking-wide text-[#1a1a1a] mb-2">
            404
          </h1>
          <p className="text-[#555] text-lg mb-8">
            This page can&apos;t be found.
          </p>
          <Link
            href="/"
            className="inline-block text-[#1a1a1a] border-b-2 border-[#1a1a1a] pb-1 font-medium hover:opacity-80 transition-opacity"
          >
            ← Back to home
          </Link>
        </div>
      </main>

      <footer className="border-t border-black/10 py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between text-sm text-[#555]">
          <p>Eve Deshon</p>
          <Link href="/" className="hover:text-[#1a1a1a] transition-colors">
            ↑ Back to Top
          </Link>
        </div>
      </footer>
    </div>
  );
}
