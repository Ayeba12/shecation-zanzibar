"use client";

import { useState, type MouseEvent } from "react";

function Icon({ paused }: { paused: boolean }) {
  return paused ? (
    <svg aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
      <path d="M2 1.5v7l6-3.5z" />
    </svg>
  ) : (
    <svg aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
      <path d="M2 1.5h2.2v7H2zM5.8 1.5H8v7H5.8z" />
    </svg>
  );
}

/**
 * Pause / play control for a Marquee. Toggles `data-paused` on the nearest
 * `[data-marquee]` wrapper; the CSS in globals.css stops the track.
 * Kept separate so Marquee itself can stay a server component.
 */
export function MarqueePause() {
  const [paused, setPaused] = useState(false);
  const toggle = (e: MouseEvent<HTMLButtonElement>) => {
    const next = !paused;
    e.currentTarget.closest("[data-marquee]")?.setAttribute("data-paused", String(next));
    setPaused(next);
  };
  return (
    <button
      type="button"
      aria-pressed={paused}
      onClick={toggle}
      className="inline-flex h-8 items-center gap-2 rounded-full border border-border px-4 font-body text-xs uppercase tracking-[0.08em] text-muted transition-colors hover:border-navy hover:text-navy"
    >
      <Icon paused={paused} />
      {paused ? "Play" : "Pause"}
    </button>
  );
}
