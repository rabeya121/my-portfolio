"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = ["About", "Skills", "Education", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0b1326]/90 backdrop-blur-xl border-b border-white/5 shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo → RK. */}
          <span className="text-2xl font-extrabold tracking-tight">
            <span className="text-white">RK</span>
            <span className="text-indigo-400">.</span>
          </span>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 list-none">
            {links.map((l) => (
              <li key={l}>
                <Link
                  href={`#${l.toLowerCase()}`}
                  className="text-slate-400 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative group"
                >
                  {l}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-400 group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Resume button — teal/cyan color */}
          <a
            href="/resume.pdf"
            download
            className="hidden md:inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-[#0b1326] px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/30"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Resume
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0b1326]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-10 transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={() => setOpen(false)}
            className="text-3xl font-bold text-white hover:text-indigo-400 transition-colors"
          >
            {l}
          </a>
        ))}
        <a
          href="/resume.pdf"
          download
          className="mt-4 bg-teal-500 text-[#0b1326] px-8 py-3 rounded-xl font-bold text-lg"
        >
          Download Resume
        </a>
      </div>
    </>
  );
}
