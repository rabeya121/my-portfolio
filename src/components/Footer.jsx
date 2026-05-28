export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-xl font-bold gradient-text font-mono tracking-widest mb-1">Rabeya.dev</h2>
          <p className="text-slate-500 text-sm">© 2025 Rabeya Khatun. All Rights Reserved.</p>
        </div>
        <div className="flex gap-6">
          {[
            { href: "https://github.com/rabeya121", label: "GitHub" },
            { href: "https://www.linkedin.com/in/rabeya-hridi/", label: "LinkedIn" },
            { href: "mailto:rabeya.hridi04@gmail.com", label: "Email" },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="text-slate-500 hover:text-indigo-400 text-sm transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
