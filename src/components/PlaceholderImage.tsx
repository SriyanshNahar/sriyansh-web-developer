"use client";

import { useEffect, useRef, useState } from "react";

type PlaceholderImageProps = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  gradient?: string;
};

const DEFAULT_GRADIENTS = [
  "linear-gradient(135deg, #16202a, #07090e)",
  "linear-gradient(135deg, #1c1530, #07090e)",
  "linear-gradient(135deg, #0e2430, #07090e)",
];

export default function PlaceholderImage({
  src,
  alt,
  label,
  className = "",
  gradient,
}: PlaceholderImageProps) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const bg =
    gradient ??
    DEFAULT_GRADIENTS[Math.abs(hashCode(src)) % DEFAULT_GRADIENTS.length];

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setFailed(true);
    }
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: bg }}>
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setFailed(true)}
          loading="lazy"
        />
      )}
      {failed && (
        <div className="absolute inset-0 flex items-end p-3">
          <span className="text-[10px] uppercase tracking-widest text-white/40">
            {label ?? "Drop image at " + src}
          </span>
        </div>
      )}
    </div>
  );
}

function hashCode(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}
