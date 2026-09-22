"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { profile } from "@/lib/profile";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const waHref = `${profile.whatsapp}?text=${encodeURIComponent(
    `Hi Sriyansh, I'm ${name || "..."} (${email || "..."}). ${message}`
  )}`;

  return (
    <section id="contact" className="border-t border-hairline bg-panel-alt px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-cyan">
            08 / Open channel
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Let&apos;s design
            <br />
            something together.
          </h2>
          <p className="mt-6 max-w-md text-sm text-muted sm:text-base">
            Have a brand, product, or strange idea that needs a sharper shape? Send a
            signal and let&apos;s make it real.
          </p>

          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded bg-cyan px-6 py-3 font-mono text-xs uppercase tracking-widest text-[#07090e] transition-transform hover:scale-105"
          >
            Open WhatsApp channel
          </a>
        </Reveal>

        <Reveal delay={0.1} variant="3d">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded border border-hairline bg-panel p-6"
          >
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-violet">
              New transmission
            </p>
            <div className="space-y-4">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded border border-hairline bg-transparent px-4 py-3 text-sm outline-none focus:border-cyan"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                type="email"
                className="w-full rounded border border-hairline bg-transparent px-4 py-3 text-sm outline-none focus:border-cyan"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="The brief"
                rows={4}
                className="w-full resize-none rounded border border-hairline bg-transparent px-4 py-3 text-sm outline-none focus:border-cyan"
              />
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded bg-white py-3 text-center font-mono text-xs uppercase tracking-widest text-[#07090e] transition-transform hover:scale-[1.02]"
              >
                Send the signal
              </a>
            </div>
            <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-widest text-muted">
              No bots. No noise. Just a direct line to the studio.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
