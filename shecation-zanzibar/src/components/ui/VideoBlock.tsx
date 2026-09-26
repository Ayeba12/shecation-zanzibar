"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  src: string;
  poster: string;
  /** Short description for assistive tech. */
  label: string;
  className?: string;
  children?: ReactNode;
};

/**
 * Ambient video block: muted, looping, inline, autoplays.
 * Pauses itself for prefers-reduced-motion and always offers a play / pause control.
 */
export function VideoBlock({ src, poster, label, className = "", children }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
    }
  }, []);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) void video.play();
    else video.pause();
  };

  return (
    <div className={`relative overflow-hidden bg-navy ${className}`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="absolute inset-0 size-full object-cover"
      />
      {children}
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        className="absolute bottom-4 right-4 inline-flex h-8 items-center gap-2 rounded-full bg-navy/60 px-4 font-body text-xs uppercase tracking-[0.08em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-navy"
      >
        <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
}
