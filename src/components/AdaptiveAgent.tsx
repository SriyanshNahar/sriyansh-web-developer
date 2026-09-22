"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { gsap } from "@/lib/gsap";

const modes = [
  { step: "01", title: "Scan", desc: "A quick pass across the archive to see what's there." },
  { step: "02", title: "Deep Dive", desc: "Full context on one project — process, stack, outcome." },
  { step: "03", title: "Compare", desc: "Two builds, side by side, differences called out." },
];

const lines = [
  "> portal --route sriyansh",
  "Reading the studio archive and live builds...",
  "9 signals found across web, fashion, crypto.",
  "> _",
];

export default function AdaptiveAgent() {
  const termRef = useRef<HTMLDivElement>(null);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const el = termRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      ScrollTriggerReveal(el, () => {
        let i = 0;
        const id = setInterval(() => {
          i += 1;
          setVisibleLines(i);
          if (i >= lines.length) clearInterval(id);
        }, 500);
      });
    }, termRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative mx-auto max-w-[1440px] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-cyan">
            07 / Adaptive agent
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Scan deeper.
            <br />
            Find the fit.
          </h2>
          <p className="mt-6 max-w-md text-sm text-muted sm:text-base">
            Tell the studio what you&apos;re looking for — the archive sorts the signal:
            design, code, or a little of both.
          </p>

          <div className="mt-10 flex flex-col divide-y divide-hairline border-t border-hairline">
            {modes.map((m) => (
              <div key={m.step} className="flex items-start gap-4 py-5">
                <span className="font-mono text-xs text-violet">{m.step}</span>
                <div>
                  <h3 className="font-semibold">{m.title}</h3>
                  <p className="mt-1 text-sm text-muted">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal variant="3d" delay={0.15}>
          <div
            ref={termRef}
            className="rounded border border-hairline bg-[#0a0d13] p-6 font-mono text-xs text-muted shadow-[0_0_40px_-10px_rgba(34,211,238,0.15)]"
          >
            <div className="mb-4 flex items-center justify-between border-b border-hairline pb-3">
              <span className="text-cyan">STUDIO_AGENT.EXE</span>
              <span className="flex items-center gap-1 text-[10px] uppercase text-violet">
                <span className="h-1.5 w-1.5 rounded-full bg-violet" /> Connected
              </span>
            </div>
            <div className="space-y-2 leading-relaxed">
              {lines.slice(0, visibleLines).map((line, i) => (
                <p key={i} className={line.startsWith(">") ? "text-cyan" : ""}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ScrollTriggerReveal(el: HTMLElement, onEnter: () => void) {
  gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top 75%",
      once: true,
      onEnter,
    },
  });
}
