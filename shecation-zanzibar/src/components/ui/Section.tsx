import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Container } from "./Container";

type Tone = "cream" | "sand" | "white" | "navy" | "turquoise";

const tones: Record<Tone, string> = {
  cream: "bg-cream text-navy",
  sand: "bg-sand text-navy",
  white: "bg-white text-navy",
  navy: "bg-navy text-white",
  turquoise: "bg-turquoise text-navy",
};

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  tone?: Tone;
  children: ReactNode;
  /** Remove the default vertical padding (e.g. full-bleed hero). */
  bare?: boolean;
  containerClassName?: string;
};

/** Page section with 8pt-based vertical rhythm: 64px mobile, 96px desktop. */
export function Section({
  tone = "cream",
  bare = false,
  className = "",
  containerClassName = "",
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      className={`${tones[tone]} ${bare ? "" : "py-16 md:py-24"} scroll-mt-16 ${className}`}
      {...rest}
    >
      {bare ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}

type HeadingProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
  dark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  as: Tag = "h2",
  className = "",
  dark = false,
}: HeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-prose ${alignment} ${className}`}>
      {eyebrow ? (
        <p
          className={`font-display text-sm uppercase tracking-[0.12em] mb-3 ${
            dark ? "text-sky" : "text-pink"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag className="text-2xl md:text-3xl">{title}</Tag>
      {lead ? (
        <p className={`mt-4 text-lg ${dark ? "text-white/80" : "text-muted"}`}>{lead}</p>
      ) : null}
    </div>
  );
}
