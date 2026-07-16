

export default function Education() {
  return (
    <section id="education" className="py-28">
      <div className="max-w-4xl mx-auto px-6">

        {/* ── Academic Education ── */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-xs font-bold tracking-[0.15em] uppercase mb-3">Academic</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Education
          </h2>
        </div>

        <div className="mb-24">
          <div className="bg-slate-900/70 border border-white/6 rounded-2xl p-8 md:p-10 flex gap-6 items-start glow-border hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-2xl flex-shrink-0">
              🎓
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Diploma in Engineering</h3>
              <p className="text-indigo-400 text-sm font-medium mb-3">
                Khanjahan Ali Science & Technology Institute, Bangladesh
              </p>
              <span className="inline-block bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs px-3 py-1 rounded-md">
                Graduated 2023
              </span>
            </div>
          </div>
        </div>

        {/* ── Courses & Certifications ── */}
        <div className="text-center mb-16">
          <p className="text-teal-400 text-xs font-bold tracking-[0.15em] uppercase mb-3">Additional</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Courses & <span className="gradient-text">Certifications</span>
          </h2>
        </div>

        <div className="space-y-6">

          {/* Programming Hero — Running */}
          <div className="bg-slate-900/70 border border-yellow-500/20 rounded-2xl p-8 md:p-10 flex gap-6 items-start hover:-translate-y-1 transition-transform duration-300"
            style={{ boxShadow: "0 0 0 1px rgba(234,179,8,0.1), 0 4px 32px rgba(234,179,8,0.06)" }}
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-2xl flex-shrink-0">
              🚀
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h3 className="text-xl font-bold">Complete Web Development Course</h3>
                <span className="inline-flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs px-3 py-1 rounded-full font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                  Currently Running
                </span>
              </div>
              <p className="text-yellow-400 text-sm font-medium mb-4">
                Programming Hero &nbsp;·&nbsp; Instructor: Jhankar Mahbub
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                {["HTML & CSS", "JavaScript", "React.js", "Node.js", "MongoDB", "Next.js"].map((t) => (
                  <span key={t} className="bg-yellow-500/8 border border-yellow-500/20 text-yellow-300 text-xs px-3 py-1 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-slate-400 text-sm flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-yellow-500 flex-shrink-0">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Started: December 31, 2024 &nbsp;·&nbsp; In Progress
              </p>
            </div>
          </div>

          {/* Ostad MERN */}
          <div className="bg-slate-900/70 border border-white/6 rounded-2xl p-8 md:p-10 flex gap-6 items-start glow-border hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-400 to-indigo-500 flex items-center justify-center text-2xl flex-shrink-0">
              🏆
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1">Full Stack Web Development with MERN – Batch 4</h3>
              <p className="text-teal-400 text-sm font-medium mb-4">
                Ostad Online Platform &nbsp;·&nbsp; Instructor: Rabbil Hasan &nbsp;·&nbsp; ID: A12959
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  ["Assignment", "93.2%"],
                  ["Quiz", "91.9%"],
                  ["Live Test", "93.1%"],
                  ["Coding Test", "93.8%"],
                ].map(([label, score]) => (
                  <div key={label} className="bg-teal-500/8 border border-teal-500/20 rounded-xl px-4 py-2 text-center">
                    <div className="text-teal-400 font-bold text-base">{score}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
