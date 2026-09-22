"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { profile } from "@/lib/profile";
import HeroScene from "./HeroScene";

export default function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(
        ".hero-line",
        { yPercent: 120, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1, stagger: 0.12 }
      )
        .fromTo(
          ".hero-fade",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
          "-=0.4"
        )
        .fromTo(
          ".hero-radar",
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 1 },
          "-=0.6"
        );
    }, wrapRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={wrapRef}
      className="relative flex min-h-svh items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_30%,rgba(34,211,238,0.08),transparent_55%)]" />
      <HeroScene />

      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="hero-fade mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            Signal found / {profile.name} Studio
          </p>

          <h1 className="text-[15vw] leading-[0.92] font-black tracking-tight sm:text-7xl lg:text-8xl">
            <span className="block overflow-hidden">
              <span className="hero-line block">Build the</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line block text-cyan">Next</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line block">
                Reality<span className="text-violet">.</span>
              </span>
            </span>
          </h1>

          <p className="hero-fade mt-8 max-w-md text-sm text-muted sm:text-base">
            {profile.role}, {profile.tagline}
          </p>

          <div className="hero-fade mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded bg-white px-6 py-3 text-xs font-medium uppercase tracking-widest text-[#07090e] transition-transform hover:scale-105"
            >
              Explore the archive ↓
            </a>
            <a
              href="#contact"
              className="rounded border border-hairline px-6 py-3 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:border-cyan hover:text-cyan"
            >
              Start a transmission ↗
            </a>
          </div>
        </div>

        <div className="hero-radar relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
          {[1, 0.7, 0.4].map((scale) => (
            <div
              key={scale}
              className="absolute rounded-full border border-cyan/20"
              style={{ width: `${scale * 100}%`, height: `${scale * 100}%` }}
            />
          ))}
          <div className="absolute h-24 w-24 rounded-full border border-cyan/40 bg-cyan/5 text-center font-mono text-[10px] uppercase tracking-widest text-cyan flex items-center justify-center">
            Open
            <br />
            Studio
          </div>

          <div className="absolute -right-2 top-6 w-44 rounded border border-hairline bg-panel/90 p-3 font-mono text-[10px] text-muted backdrop-blur">
            <p className="text-cyan">Live feed</p>
            <p className="mt-1">design systems</p>
            <p>→ becoming places</p>
          </div>

          <div className="absolute -left-2 bottom-4 w-44 rounded border border-hairline bg-panel/90 p-3 font-mono text-[10px] text-muted backdrop-blur">
            <p className="text-violet">Coordinates</p>
            <p className="mt-1">{profile.coordinates}</p>
          </div>
        </div>
      </div>

      <div className="hero-fade absolute bottom-8 left-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted sm:left-8 lg:left-12">
        <span className="h-px w-10 bg-hairline" />
        Scroll to explore
      </div>
    </section>
  );
}
