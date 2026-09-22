import Reveal from "./Reveal";
import { profile } from "@/lib/profile";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-[1440px] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-cyan">
          01 / About the operator
        </p>
        <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Meet the mind
          <br />
          behind the studio.
        </h2>
        <p className="mt-8 max-w-xl text-sm text-muted sm:text-base">{profile.bio}</p>
      </Reveal>

      <Reveal
        delay={0.15}
        variant="3d"
        className="mt-16 grid grid-cols-1 gap-8 border-t border-hairline pt-10 sm:grid-cols-3"
      >
        {profile.studioProfile.map((item) => (
          <div key={item.label}>
            <p className="font-mono text-xs uppercase tracking-widest text-violet">
              {item.label}
            </p>
            <p className="mt-2 text-sm text-muted">{item.value}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
