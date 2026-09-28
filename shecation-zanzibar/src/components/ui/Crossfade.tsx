"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

type Photo = { src: string; alt: string; place?: string };

type Props = {
  photos: readonly Photo[];
  /** Seconds each photo stays fully visible before the next fades in. */
  hold?: number;
  /** Seconds the crossfade takes. */
  fade?: number;
  /** Media query that must match for the animation to run (e.g. desktop only). */
  media?: string;
  sizes?: string;
  className?: string;
};

/**
 * Stack of photographs that crossfade with a slow settle (GSAP).
 * The first photo is visible without JavaScript; the timeline only runs when
 * `media` matches and the visitor has not asked for reduced motion, and it
 * cleans up on unmount and on viewport changes via gsap.matchMedia.
 */
export function Crossfade({
  photos,
  hold = 4.5,
  fade = 1.6,
  media = "(min-width: 768px)",
  sizes = "33vw",
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || photos.length < 2) return;

    const mm = gsap.matchMedia(el);
    mm.add(`${media} and (prefers-reduced-motion: no-preference)`, () => {
      const slides = Array.from(el.querySelectorAll<HTMLElement>("[data-slide]"));
      gsap.set(slides, { autoAlpha: 0, scale: 1.06 });
      gsap.set(slides[0], { autoAlpha: 1, scale: 1 });

      const tl = gsap.timeline({ repeat: -1 });
      slides.forEach((slide, i) => {
        const next = slides[(i + 1) % slides.length];
        tl.to(next, { autoAlpha: 1, scale: 1, duration: fade, ease: "power2.out" }, `+=${hold}`)
          .to(slide, { autoAlpha: 0, duration: fade, ease: "power2.inOut" }, "<")
          .set(slide, { scale: 1.06 });
      });
      return () => tl.kill();
    });

    return () => mm.revert();
  }, [photos, hold, fade, media]);

  return (
    <div ref={ref} className={`relative overflow-hidden bg-sand ${className}`}>
      {photos.map((photo, i) => (
        <div
          key={photo.src}
          data-slide
          className="absolute inset-0"
          style={{ opacity: i === 0 ? 1 : 0 }}
          aria-hidden={i === 0 ? undefined : true}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={sizes}
            loading={i === 0 ? "eager" : "lazy"}
            className="object-cover"
          />
          {photo.place ? (
            <span className="absolute bottom-3 left-3 inline-flex h-8 items-center rounded-full bg-navy/60 px-4 font-body text-xs uppercase tracking-[0.08em] text-white backdrop-blur-sm">
              {photo.place}
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
