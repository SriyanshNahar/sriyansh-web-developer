import Reveal from "./Reveal";
import PlaceholderImage from "./PlaceholderImage";
import { work, workSrc } from "@/lib/work";

export default function VisualGallery() {
  return (
    <section className="relative border-y border-hairline bg-panel-alt px-5 py-24 sm:px-8 lg:px-12">
      <Reveal className="mx-auto mb-14 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-cyan">
          04 / The visual gallery
        </p>
        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
          Every wall
          <br />
          is a canvas.
        </h2>
        <p className="mt-4 max-w-lg text-sm uppercase tracking-wide text-muted">
          Real packaging, identity, and social worlds shipped into the physical universe.
        </p>
      </Reveal>

      <div
        className="mx-auto grid max-w-[1440px] grid-cols-2 gap-4 lg:grid-cols-4"
        style={{ perspective: "1200px" }}
      >
        {work.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.1} variant="3d" className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded border border-hairline">
              <PlaceholderImage
                src={workSrc(item.file)}
                alt={`${item.client} — ${item.title}`}
                label={item.file}
                className="h-full w-full"
              />
            </div>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-violet">
              {item.category}
            </p>
            <p className="mt-1 text-sm text-muted">
              {item.client} / {item.title}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
