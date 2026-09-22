const items = ["Design", "Code", "Motion", "Brand Worlds", "UI Systems", "Digital Experiences"];

export default function Ticker() {
  const track = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-hairline bg-panel py-4">
      <div className="marquee-track flex w-max gap-3 whitespace-nowrap font-mono text-sm uppercase tracking-widest text-muted">
        {track.map((item, i) => (
          <span key={i} className="flex items-center gap-3">
            {item}
            <span className="text-cyan">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
