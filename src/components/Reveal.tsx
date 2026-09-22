"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  start?: string;
  as?: "div" | "span";
  variant?: "fade" | "3d";
};

export default function Reveal({
  children,
  className,
  y = 40,
  delay = 0,
  start = "top 85%",
  as = "div",
  variant = "fade",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (variant === "3d") {
        gsap.fromTo(
          el,
          { y, opacity: 0, rotateX: -35, scale: 0.92, transformOrigin: "50% 100%" },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,
            duration: 1.2,
            delay,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start },
          }
        );
      } else {
        gsap.fromTo(
          el,
          { y, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            delay,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start },
          }
        );
      }
    }, ref);

    return () => ctx.revert();
  }, [y, delay, start, variant]);

  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      className={className}
      style={variant === "3d" ? { transformStyle: "preserve-3d" } : undefined}
    >
      {children}
    </Tag>
  );
}
