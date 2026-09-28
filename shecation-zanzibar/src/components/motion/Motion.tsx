"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EASE = "power3.out";

/**
 * Site-wide motion layer (GSAP + ScrollTrigger), driven by data attributes so
 * sections stay plain markup:
 *
 *  data-hero="eyebrow|line|copy|cta|art|photo"  staggered entrance on load
 *  data-reveal                                   rise + fade once, on scroll
 *  data-reveal-group                             children rise + fade in batches
 *  data-countup                                  number counts up once, on scroll
 *  data-parallax                                 inner <img> drifts on scroll (desktop only)
 *  data-wordmark                                 giant wordmark rises once
 *  data-sticky-cta                               slides in once the hero has scrolled past
 *
 * Content is visible without JavaScript. Under prefers-reduced-motion nothing
 * moves: everything is shown at once. Only transform and opacity are animated.
 */
export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    ScrollTrigger.config({ ignoreMobileResize: true });

    const mm = gsap.matchMedia();
    mm.add(
      {
        motionOK: "(prefers-reduced-motion: no-preference)",
        desktop: "(min-width: 768px)",
      },
      (ctx) => {
        const { motionOK, desktop } = ctx.conditions as { motionOK: boolean; desktop: boolean };
        const $ = (sel: string) => gsap.utils.toArray<HTMLElement>(sel);
        const hero = $("[data-hero]");

        if (!motionOK) {
          // Show everything immediately; the CSS pre-hide only applies before this class exists.
          gsap.set(hero, { clearProps: "all" });
          root.classList.add("motion-ready");
          return;
        }

        /* ---- Hero entrance ------------------------------------------------ */
        if (hero.length) {
          const by = (kind: string) => hero.filter((el) => el.dataset.hero === kind);
          gsap.set(hero, { autoAlpha: 0 });
          root.classList.add("motion-ready");

          const tl = gsap.timeline({ defaults: { ease: EASE }, delay: 0.05 });
          tl.fromTo(by("eyebrow"), { y: 16 }, { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.08 }, 0)
            .fromTo(
              by("line"),
              { yPercent: 110 },
              { yPercent: 0, autoAlpha: 1, duration: 0.9, ease: "power4.out", stagger: 0.12 },
              0.1,
            )
            .fromTo(by("copy"), { y: 20 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.08 }, "-=0.6")
            .fromTo(by("cta"), { y: 12 }, { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.1 }, "-=0.45")
            .fromTo(by("art"), { scale: 0.96 }, { scale: 1, autoAlpha: 1, duration: 1.1, stagger: 0.1 }, 0.35)
            .fromTo(by("photo"), { scale: 1.04 }, { scale: 1, autoAlpha: 1, duration: 1.2 }, 0.5);
        } else {
          root.classList.add("motion-ready");
        }

        /* ---- Scroll reveals ---------------------------------------------- */
        $("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            autoAlpha: 0,
            y: 28,
            duration: 0.8,
            ease: EASE,
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          });
        });

        $("[data-reveal-group]").forEach((group) => {
          const items = Array.from(group.children) as HTMLElement[];
          if (!items.length) return;
          gsap.set(items, { autoAlpha: 0, y: 32 });
          ScrollTrigger.batch(items, {
            start: "top 88%",
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.8, ease: EASE, stagger: 0.08, overwrite: true }),
          });
        });

        /* ---- Key figures count up ---------------------------------------- */
        const countupCleanups: (() => void)[] = [];
        $("[data-countup]").forEach((el) => {
          // Remember the real value so re-runs (React dev double effects, media changes) parse it, not "0".
          const text = (el.dataset.countupText ??= el.textContent ?? "");
          const m = text.match(/^([^\d]*)([\d,]+)(.*)$/);
          if (!m) return;
          const [, prefix, digits, suffix] = m;
          const target = Number(digits.replace(/,/g, ""));
          const commas = digits.includes(",");
          const format = (n: number) => prefix + (commas ? n.toLocaleString("en-GB") : String(n)) + suffix;

          // Screen readers get the real value; the animated copy is decorative.
          const sr = document.createElement("span");
          sr.className = "sr-only";
          sr.textContent = text;
          el.after(sr);
          el.setAttribute("aria-hidden", "true");
          el.textContent = format(0);
          countupCleanups.push(() => {
            sr.remove();
            el.removeAttribute("aria-hidden");
            el.textContent = text;
          });

          const obj = { v: 0 };
          gsap.to(obj, {
            v: target,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
            onUpdate: () => {
              el.textContent = format(Math.round(obj.v));
            },
            onComplete: () => {
              el.textContent = text;
            },
          });
        });

        /* ---- Wordmarks --------------------------------------------------- */
        $("[data-wordmark]").forEach((el) => {
          gsap.from(el, {
            yPercent: 24,
            autoAlpha: 0,
            duration: 1.1,
            ease: EASE,
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
          });
        });

        /* ---- Parallax (desktop only) ------------------------------------- */
        if (desktop) {
          $("[data-parallax]").forEach((frame) => {
            const img = frame.querySelector("img");
            if (!img) return;
            gsap.fromTo(
              img,
              { yPercent: -7, scale: 1.15, willChange: "transform" },
              {
                yPercent: 7,
                scale: 1.15,
                ease: "none",
                scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: true },
              },
            );
          });
        }

        /* ---- Sticky CTA (mobile bar): appears once the hero has gone ------ */
        const bar = document.querySelector<HTMLElement>("[data-sticky-cta]");
        const heroSection = document.querySelector("#top");
        if (bar && heroSection) {
          gsap.set(bar, { yPercent: 100, autoAlpha: 0 });
          const show = (on: boolean) =>
            gsap.to(bar, {
              yPercent: on ? 0 : 100,
              autoAlpha: on ? 1 : 0,
              duration: on ? 0.3 : 0.15,
              ease: "power2.out",
              overwrite: true,
            });
          const st = ScrollTrigger.create({
            trigger: heroSection,
            start: "bottom top",
            end: "max",
            onToggle: (self) => show(self.isActive),
          });
          if (st.isActive) show(true);
        }

        // Runs when this media context reverts (unmount, route change, media change).
        return () => countupCleanups.forEach((fn) => fn());
      },
    );

    // Positions change once fonts and images have loaded.
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      mm.revert();
    };
  }, [pathname]);

  return null;
}
