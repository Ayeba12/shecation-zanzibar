import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Container } from "./Container";

type Tone = "cream" | "sand" | "white" | "navy";

const tones: Record<Tone, string> = {
  cream: "bg-cream text-navy",
  sand: "bg-sand text-navy",
  white: "bg-white text-navy",
  navy: "bg-navy text-white",
};

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  tone?: Tone;
  children: ReactNode;
  /** Remove the default vertical padding and container (full-bleed blocks). */
  bare?: boolean;
  containerClassName?: string;
};

/** Page section with 8pt vertical rhythm: 64 / 96 / 128px. */
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
      className={`${tones[tone]} ${bare ? "" : "py-16 md:py-24 lg:py-32"} scroll-mt-16 ${className}`}
      {...rest}
    >
      {bare ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}
