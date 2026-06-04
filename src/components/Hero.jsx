"use client";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
    
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background blobs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-40 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-14 items-center py-16">

        {/* Left */}
        <div className="animate-fade-up">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-7">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-indigo-300 text-xs font-semibold tracking-widest uppercase">
              Available for hire
            </span>
          </div>

          {/* Name — একলাইনে, Rabeya Hridi style */}
          <h1 className="text-5xl md:text-[4.2rem] font-extrabold leading-tight tracking-tight mb-4">
            <span className="text-white">Rabeya </span>
            <span className="gradient-text">Khatun</span>
          </h1>

          {/* Designation */}
          <p className="text-teal-400 text-lg font-semibold mb-1">
            Frontend Developer
            <span className="text-slate-400 font-normal"> · MERN Stack Learner</span>
          </p>

          <p className="text-slate-400 text-base leading-relaxed max-w-md mb-8 mt-3">
            Passionate about crafting beautiful, responsive web experiences.
            Turning ideas into pixel-perfect reality with React, Next.js, and modern web technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-[#0b1326] px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:-translate-y-0.5"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-white/10 hover:border-indigo-400/40 hover:bg-indigo-500/8 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              View Projects →
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-3 mb-10">
            {[
              {
                href: "https://github.com/rabeya121",
                label: "GitHub",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                ),
              },
              {
                href: "https://www.linkedin.com/in/rabeya-hridi/",
                label: "LinkedIn",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
              },
              {
                href: "mailto:rabeya.hridi04@gmail.com",
                label: "Email",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
              },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                title={label}
                className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-400/40 transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Stats — Rabeya Hridi style */}
          <div className="flex gap-8 pt-6 border-t border-white/5">
            <div>
              <div className="text-2xl font-extrabold text-indigo-400">3+</div>
              <div className="text-slate-500 text-xs uppercase tracking-widest mt-0.5">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-teal-400">93%</div>
              <div className="text-slate-500 text-xs uppercase tracking-widest mt-0.5">Avg Score</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-purple-400">MERN</div>
              <div className="text-slate-500 text-xs uppercase tracking-widest mt-0.5">Stack</div>
            </div>
          </div>
        </div>

        {/* Right — Photo */}
        <div className="flex justify-center animate-fade-up delay-200">
          <div className="relative">
            {/* Spinning dashed ring */}
            <div className="absolute -inset-4 rounded-full animate-spin-slow opacity-30">
              <div className="w-full h-full rounded-full border border-dashed border-indigo-400" />
            </div>
            {/* Glow */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-indigo-500/15 to-teal-400/15 blur-2xl" />

            {/* Photo circle */}
            <div className="relative w-72 h-72 md:w-[340px] md:h-[340px] rounded-full p-[3px] bg-gradient-to-br from-indigo-500 via-purple-500 to-teal-400 animate-float">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0f1a2e]">
                {!imgError ? (
                  <Image
                    src="/profile.jpg"
                    alt="Rabeya Khatun"
                    width={340}
                    height={340}
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                    priority
                  />
                ) : (
                  /* Clean fallback — initials */
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-900/60 to-slate-900">
                    <span className="text-6xl font-extrabold text-white/20 select-none">RK</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}
