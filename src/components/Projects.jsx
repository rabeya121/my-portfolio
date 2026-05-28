"use client";
import { useState } from "react";
import { projects } from "../data/projects";

function Modal({ project, onClose }) {
  if (!project) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xl"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-[#0f172a] border border-white/8 rounded-3xl w-full max-w-2xl max-h-[88vh] overflow-y-auto p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-400/40 transition-all"
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="text-4xl">{project.emoji}</div>
          <div>
            <p className="text-indigo-400 text-xs tracking-widest uppercase font-bold mb-1">Project</p>
            <h2 className="text-2xl font-extrabold">{project.title}</h2>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs px-3 py-1 rounded-lg font-medium">
              {t}
            </span>
          ))}
        </div>

        {/* Description */}
        <h3 className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-2">Description</h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-6">{project.description}</p>

        {/* Features */}
        <h3 className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-3">Key Features</h3>
        <ul className="space-y-2 mb-6">
          {project.features.map((f) => (
            <li key={f} className="flex gap-3 text-slate-300 text-sm border-b border-white/5 pb-2">
              <span className="text-indigo-400 mt-0.5">→</span> {f}
            </li>
          ))}
        </ul>

        {/* Challenges */}
        <h3 className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-2">Challenges Faced</h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-6">{project.challenges}</p>

        {/* Improvements */}
        <h3 className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-2">Future Improvements</h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-8">{project.improvements}</p>

        {/* Links */}
        <div className="flex gap-3 flex-wrap">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition"
          >
            🌐 Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-white/10 hover:border-indigo-400/40 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="py-28 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-xs font-bold tracking-[0.15em] uppercase mb-3">My Work</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-base">
            A selection of projects built with the MERN stack, crafted with care and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-slate-900/70 border border-white/6 rounded-2xl overflow-hidden glow-border hover:-translate-y-2 hover:border-indigo-500/30 transition-all duration-300 flex flex-col"
            >
              {/* Thumb */}
              <div className={`h-48 bg-gradient-to-br ${p.gradient} flex flex-col items-center justify-center gap-3 relative`}>
                <div className="text-5xl">{p.emoji}</div>
                <div className="text-xs font-bold tracking-widest uppercase text-white/40">{p.title}</div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.slice(0, 3).map((t) => (
                    <span key={t} className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs px-2.5 py-1 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{p.description}</p>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setActive(p)}
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30"
                  >
                    View Details →
                  </button>
                  <div className="flex gap-2">
                    <a href={p.live} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl border border-white/10 hover:border-indigo-400/40 flex items-center justify-center text-slate-400 hover:text-indigo-400 transition-all text-base">🌐</a>
                    <a href={p.github} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl border border-white/10 hover:border-indigo-400/40 flex items-center justify-center text-slate-400 hover:text-indigo-400 transition-all">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
