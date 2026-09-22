import Reveal from "./Reveal";
import { experience } from "@/lib/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-[1440px] px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
    >
      <Reveal className="mx-auto mb-16 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-cyan">
          02 / Transmission history
        </p>
        <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Where the signal
          <br />
          has been.
        </h2>
      </Reveal>

      <div className="flex flex-col divide-y divide-hairline border-t border-hairline">
        {experience.map((role, i) => (
          <Reveal
            key={role.id}
            delay={i * 0.08}
            className="grid grid-cols-1 gap-6 py-10 lg:grid-cols-[1fr_2fr]"
          >
            <div>
              <span className="inline-block rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan">
                {role.period}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{role.title}</h3>
              <p className="mt-1 text-sm text-violet">{role.org}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted">
                {role.location}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted">{role.summary}</p>
              <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                {role.bullets.map((b, bi) => (
                  <li key={bi} className="flex gap-2 text-sm text-foreground/80">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
