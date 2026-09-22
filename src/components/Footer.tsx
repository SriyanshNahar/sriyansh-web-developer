import { profile } from "@/lib/profile";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1440px] flex-col justify-between gap-5 px-5 py-10 font-mono text-[11px] uppercase tracking-widest text-muted sm:flex-row sm:items-center sm:px-8 lg:px-12">
      <span>© 2026 / {profile.name} Studio</span>
      <div className="flex flex-wrap gap-4">
        {profile.socials.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan transition-colors"
          >
            {s.label}
          </a>
        ))}
      </div>
      <span className="text-violet">Signal stable / {profile.coordinates}</span>
      <a href="#home" className="hover:text-cyan transition-colors">
        Back to top ↑
      </a>
    </footer>
  );
}
