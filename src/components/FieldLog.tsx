import Reveal from "./Reveal";
import PlaceholderImage from "./PlaceholderImage";
import { personalShots, personalSrc } from "@/lib/personal";

export default function FieldLog() {
  return (
    <section
      id="field-log"
      className="relative border-y border-hairline bg-panel px-5 py-24 sm:px-8 lg:px-12"
    >
      <Reveal className="mx-auto mb-12 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-cyan">
          03 / Field log
        </p>
        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
          Signal, off
          <br />
          the clock.
        </h2>
        <p className="mt-4 max-w-lg text-sm uppercase tracking-wide text-muted">
          The operator between transmissions — routes, roads, and whatever&apos;s
          parked outside.
        </p>
      </Reveal>

      <div
        className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"
        style={{ perspective: "1400px" }}
      >
        {personalShots.map((shot, i) => (
          <Reveal
            key={shot.id}
            delay={(i % 4) * 0.08}
            variant="3d"
            className="w-56 shrink-0 snap-start sm:w-64"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded border border-hairline">
              <PlaceholderImage
                src={personalSrc(shot.file)}
                alt={shot.caption}
                label={shot.file}
                className="h-full w-full"
              />
            </div>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-violet">
              {shot.caption}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
