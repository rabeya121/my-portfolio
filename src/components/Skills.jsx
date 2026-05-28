"use client";
import { useEffect, useRef, useState } from "react";

const frontend = [
  { name: "HTML5 / CSS3",      pct: 92 },
  { name: "JavaScript (ES6+)", pct: 82 },
  { name: "React.js",          pct: 85 },
  { name: "Tailwind CSS",      pct: 88 },
  { name: "Next.js",           pct: 45 },
];
const backend = [
  { name: "Node.js",    pct: 75 },
  { name: "Express.js", pct: 72 },
  { name: "MongoDB",    pct: 70 },
  { name: "Firebase",   pct: 68 },
];
const tools = ["Git", "GitHub", "VS Code", "Firebase", "REST APIs", "Responsive Design", "Figma"];

function SkillBar({ name, pct, color, delay }) {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTimeout(() => setWidth(pct), delay); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [pct, delay]);

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-slate-200 font-medium">{name}</span>
        <span className="text-slate-500">{pct}%</span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${color}`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-xs font-bold tracking-[0.15em] uppercase mb-3">What I Know</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {/* Frontend */}
          <div className="bg-slate-900/70 border border-white/6 rounded-2xl p-8 glow-border">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-lg bg-indigo-500/15 flex items-center justify-center text-lg">🎨</div>
              <h3 className="text-xl font-bold text-indigo-300">Frontend</h3>
            </div>
            {frontend.map((s, i) => (
              <SkillBar key={s.name} {...s} color="bg-gradient-to-r from-indigo-500 to-purple-400" delay={i * 80} />
            ))}
          </div>

          {/* Backend */}
          <div className="bg-slate-900/70 border border-white/6 rounded-2xl p-8 glow-border">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-lg bg-teal-500/15 flex items-center justify-center text-lg">⚙️</div>
              <h3 className="text-xl font-bold text-teal-400">Backend & DB</h3>
            </div>
            {backend.map((s, i) => (
              <SkillBar key={s.name} {...s} color="bg-gradient-to-r from-teal-400 to-indigo-400" delay={i * 80} />
            ))}
          </div>

          {/* Tools */}
          <div className="bg-slate-900/70 border border-white/6 rounded-2xl p-8 glow-border">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-lg bg-pink-500/15 flex items-center justify-center text-lg">🛠️</div>
              <h3 className="text-xl font-bold text-pink-400">Tools</h3>
            </div>
            <div className="flex flex-wrap gap-3 mt-2">
              {tools.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 bg-slate-800 border border-slate-700 hover:border-indigo-500/40 hover:bg-indigo-500/8 rounded-full text-slate-300 text-sm transition-all duration-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
