"use client";

import { useRef, useState } from "react";

type Props = {
  src: string;
  poster: string;
  label: string;
  className?: string;
};

/**
 * Video testimonial with sound. Never autoplays: shows the poster with a
 * play pill, then plays with native controls once the viewer taps it.
 */
export function TestimonialVideo({ src, poster, label, className = "" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    const video = ref.current;
    if (!video) return;
    setStarted(true);
    void video.play();
  };

  return (
    <div className={`relative overflow-hidden bg-navy ${className}`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        preload="metadata"
        playsInline
        controls={started}
        aria-label={label}
        onEnded={() => setStarted(false)}
        className="absolute inset-0 size-full object-cover"
      />
      {!started ? (
        <button
          type="button"
          onClick={start}
          aria-label={`Play: ${label}`}
          className="group absolute inset-0 grid place-items-center bg-navy/20 transition-colors hover:bg-navy/30"
        >
          <span className="inline-flex h-12 items-center gap-3 rounded-full bg-white px-6 font-body text-xs uppercase tracking-[0.08em] text-navy shadow-cta transition-colors group-hover:bg-pink group-hover:text-white">
            <svg aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
              <path d="M2 1.5v7l6-3.5z" />
            </svg>
            Play with sound
          </span>
        </button>
      ) : null}
    </div>
  );
}
