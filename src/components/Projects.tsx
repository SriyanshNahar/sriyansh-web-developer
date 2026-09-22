"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { webProjects, filters } from "@/lib/webProjects";

export default function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]["id"]>("all");

  const visible =
    active === "all" ? webProjects : webProjects.filter((p) => p.filter === active);

  return (
    <section id="projects" className="mx-auto max-w-[1440px] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <Reveal className="mb-10 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-cyan">
          05 / The dev work
        </p>
        <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Things I&apos;ve built
          <br />
          in the wild.
        </h2>
        <p className="mt-4 text-sm text-muted sm:text-base">
          Beyond design, I build the systems and digital experiences that bring a visual
          point of view to life.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mb-12 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={`rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition-colors ${
              active === f.id
                ? "border-cyan bg-cyan/10 text-cyan"
                : "border-hairline text-muted hover:border-cyan/50 hover:text-cyan"
            }`}
          >
            {f.label}
          </button>
        ))}
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 0.08} className="h-full">
            <div className="flex h-full flex-col rounded border border-hairline bg-panel/60 p-6 transition-colors hover:border-cyan/40">
              <p className="font-mono text-[10px] uppercase tracking-widest text-violet">
                {p.index} / {p.category}
              </p>
              <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-hairline px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-cyan hover:underline"
                >
                  View project ↗
                </a>
              ) : (
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-muted hover:text-cyan"
                >
                  Ask for the case study →
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
