"use client";
export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-slate-950/60">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-xs font-bold tracking-[0.15em] uppercase mb-3">Let&apos;s Connect</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-base">
            I&apos;m always open to new opportunities, interesting projects, or just a friendly chat about tech.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info cards */}
          <div className="space-y-5">
            {[
              {
                icon: "✉️", label: "Email", iconBg: "bg-indigo-500/15",
                value: <a href="mailto:rabeya.hridi04@gmail.com" className="text-white hover:text-indigo-400 transition-colors">rabeya.hridi04@gmail.com</a>,
              },
              {
                icon: "📱", label: "Phone", iconBg: "bg-teal-500/15",
                value: <a href="tel:+8801731819558" className="text-white hover:text-teal-400 transition-colors">+880 1731-819558</a>,
              },
              {
                icon: "💬", label: "WhatsApp", iconBg: "bg-green-500/15",
                value: <a href="https://wa.me/8801731819558" target="_blank" rel="noreferrer" className="text-white hover:text-green-400 transition-colors">+880 1731-819558</a>,
              },
              {
                icon: "🐙", label: "GitHub", iconBg: "bg-purple-500/15",
                value: <a href="https://github.com/rabeya121" target="_blank" rel="noreferrer" className="text-white hover:text-purple-400 transition-colors">github.com/rabeya121</a>,
              },
              {
                icon: "💼", label: "LinkedIn", iconBg: "bg-blue-500/15",
                value: <a href="https://www.linkedin.com/in/rabeya-hridi/" target="_blank" rel="noreferrer" className="text-white hover:text-blue-400 transition-colors">linkedin.com/in/rabeya-hridi</a>,
              },
            ].map(({ icon, label, iconBg, value }) => (
              <div key={label} className="flex items-center gap-5 bg-slate-900/70 border border-white/6 rounded-2xl p-5 glow-border hover:-translate-y-0.5 transition-transform duration-200">
                <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center text-xl flex-shrink-0`}>
                  {icon}
                </div>
                <div>
                  <div className="text-slate-500 text-xs uppercase tracking-widest font-medium mb-0.5">{label}</div>
                  <div className="font-semibold text-sm">{value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-slate-900/70 border border-white/6 rounded-2xl p-8 glow-border">
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-slate-800/60 border border-white/6 rounded-xl px-5 py-3.5 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-slate-800/60 border border-white/6 rounded-xl px-5 py-3.5 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full bg-slate-800/60 border border-white/6 rounded-xl px-5 py-3.5 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all resize-none"
              />
              <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30">
                Send Message ✉️
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
