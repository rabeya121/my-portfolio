export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <p className="text-indigo-400 text-xs font-bold tracking-[0.15em] uppercase mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
            Passionate about <span className="gradient-text">building the web</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-teal-400 rounded-full mb-8" />

          <div className="space-y-4 text-slate-300 text-base leading-relaxed">
            <p>
              Hi, I&apos;m <strong className="text-white">Rabeya Khatun</strong> — a Junior Frontend Developer
              from Dhaka, Bangladesh. My coding journey began with curiosity about how websites
              work, and it quickly turned into a deep passion for the intersection of design and logic.
            </p>
            <p>
              I&apos;ve been sharpening my skills in <strong className="text-indigo-300">React.js, Node.js,
              MongoDB</strong>, and the broader MERN stack. I completed the Full Stack Web Development
              course on Ostad with exceptional scores — 93%+ across all evaluations.
            </p>
            <p>
              I enjoy building applications that solve real problems — from learning platforms to
              task management tools. Outside of code, I love{" "}
              <strong className="text-white">exploring new technologies</strong>, spending time with
              family, and unwinding with a good book.
            </p>
          </div>

          {/* Interests */}
          <div className="flex flex-wrap gap-2 mt-7">
            {["💻 Web Dev", "📚 Learning", "🎨 UI Design", "☕ Coffee & Code", "📖 Reading"].map((t) => (
              <span
                key={t}
                className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-1.5 text-slate-300 text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Stats */}
        <div className="grid grid-cols-2 gap-5">
          {[
            { num: "3+",   label: "Projects Built",     color: "from-indigo-500 to-purple-500" },
            { num: "93%",  label: "Avg Course Score",   color: "from-teal-400 to-indigo-400" },
            { num: "5+",   label: "Technologies",       color: "from-purple-500 to-pink-400" },
            { num: "2023", label: "Diploma Graduate",   color: "from-indigo-400 to-teal-400" },
          ].map(({ num, label, color }) => (
            <div
              key={label}
              className="bg-slate-900/60 border border-white/6 rounded-2xl p-8 text-center glow-border hover:-translate-y-1 transition-transform duration-300"
            >
              <div className={`text-5xl font-extrabold bg-gradient-to-r ${color} gradient-text mb-2`}>
                {num}
              </div>
              <p className="text-slate-400 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
