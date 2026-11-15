"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  dir?: "up" | "left" | "right" | "zoom";
  as?: ElementType;
  className?: string;
}

/** Lightweight scroll-reveal (IntersectionObserver + CSS) — smooth on phones, no animation library. */
export default function Reveal({ children, delay = 0, dir = "up", as: Tag = "div", className = "" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};
  return (
    <Tag ref={ref} data-dir={dir} style={style} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
