export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-[#070910]/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a href="#home" className="flex items-center gap-2 font-mono text-sm">
          <span className="flex h-7 w-7 items-center justify-center rounded border border-cyan text-[11px] text-cyan">
            SN
          </span>
          <span className="hidden text-muted sm:inline">Sriyansh / Studio</span>
        </a>

        <nav className="hidden gap-6 font-mono text-xs uppercase tracking-widest text-muted lg:flex">
          <a href="#about" className="hover:text-cyan transition-colors">About</a>
          <a href="#experience" className="hover:text-cyan transition-colors">Experience</a>
          <a href="#projects" className="hover:text-cyan transition-colors">Builds</a>
          <a href="#skills" className="hover:text-cyan transition-colors">Skills</a>
          <a href="#contact" className="hover:text-cyan transition-colors">Contact</a>
        </nav>

        <a
          href="#contact"
          className="rounded border border-cyan/40 bg-cyan/10 px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-cyan transition-colors hover:bg-cyan/20"
        >
          Issue a pass
        </a>
      </div>
    </header>
  );
}
