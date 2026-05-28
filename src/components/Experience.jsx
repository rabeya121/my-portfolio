export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-xs font-bold tracking-[0.15em] uppercase mb-3">Journey</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-purple-500/40 to-transparent" />

          <div className="space-y-10">
            {/* Freelance */}
            <div className="pl-20 relative">
              <div className="absolute left-4 top-1.5 w-6 h-6 rounded-full bg-indigo-500 border-4 border-[#0b1326] shadow-lg shadow-indigo-500/40" />
              <div className="bg-slate-900/70 border border-white/6 rounded-2xl p-7 glow-border hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-indigo-300">Frontend Developer</h3>
                    <p className="text-slate-400 text-sm mt-0.5">Freelance</p>
                  </div>
                  <span className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs px-3 py-1 rounded-lg font-medium">
                    2024 – Present
                  </span>
                </div>
                <ul className="space-y-2 text-slate-300 text-sm">
                  {[
                    "Built responsive, modern websites using React.js and Next.js",
                    "Designed and implemented reusable UI components with Tailwind CSS",
                    "Worked on portfolio and full-stack web projects using MERN stack",
                    "Collaborated with clients to deliver user-friendly interfaces",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 border-b border-white/5 pb-2">
                      <span className="text-teal-400 mt-0.5 flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* MERN Course */}
            <div className="pl-20 relative">
              <div className="absolute left-4 top-1.5 w-6 h-6 rounded-full bg-teal-400 border-4 border-[#0b1326] shadow-lg shadow-teal-400/40" />
              <div className="bg-slate-900/70 border border-white/6 rounded-2xl p-7 glow-border hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-teal-400">MERN Stack Student</h3>
                    <p className="text-slate-400 text-sm mt-0.5">Ostad Online Platform · Batch 4</p>
                  </div>
                  <span className="bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs px-3 py-1 rounded-lg font-medium">
                    2023 – 2024
                  </span>
                </div>
                <ul className="space-y-2 text-slate-300 text-sm">
                  {[
                    "Completed intensive full-stack web development training",
                    "Built 3+ real-world projects using React, Node.js, Express and MongoDB",
                    "Achieved 93%+ scores across all evaluations (assignment, quiz, live & coding tests)",
                    "Learned industry-standard practices: REST APIs, authentication, deployment",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 border-b border-white/5 pb-2">
                      <span className="text-indigo-400 mt-0.5 flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
