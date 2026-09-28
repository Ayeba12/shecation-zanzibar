import type { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"p"> & {
  tone?: "muted" | "navy" | "white" | "turquoise" | "pink" | "inherit";
  /** Prefix with a small dot marker. */
  dot?: boolean;
};

const tones = {
  muted: "text-faint",
  navy: "text-navy",
  white: "text-white/70",
  turquoise: "text-turquoise",
  pink: "text-pink",
  /** No colour class: set it with a utility such as `contrast-text` in className. */
  inherit: "",
};

/** Micro uppercase meta label (12px, 0.12em tracking). */
export function Label({ tone = "muted", dot = false, className = "", children, ...rest }: Props) {
  return (
    <p className={`label flex items-center gap-2 ${tones[tone]} ${className}`} {...rest}>
      {dot ? <span aria-hidden="true" className="size-1.5 rounded-full bg-current" /> : null}
      {children}
    </p>
  );
}
