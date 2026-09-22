import Reveal from "./Reveal";
import { skillGroups, coreProfile } from "@/lib/skillsFull";

export default function Skills() {
  return (
    <section id="skills" className="relative border-y border-hairline bg-panel px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <Reveal className="mx-auto mb-14 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-cyan">
          06 / The skills set
        </p>
        <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Make it
          <br />
          make sense.
        </h2>
        <p className="mt-6 max-w-xl text-sm text-muted">{coreProfile.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {coreProfile.titles.map((t) => (
            <span
              key={t}
              className="rounded-full border border-violet/40 bg-violet/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-violet"
            >
              {t}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.id} delay={(i % 2) * 0.08} className="border-t border-hairline pt-6">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs text-violet">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold">{group.title}</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-hairline px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted transition-colors hover:border-cyan/50 hover:text-cyan"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
