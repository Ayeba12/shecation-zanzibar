import type { ReactNode } from "react";

type Tone = "sunshine" | "turquoise" | "pink" | "navy" | "sand";

const tones: Record<Tone, string> = {
  // Brand guide: Navy text on Sunshine Yellow — dates, limited highlights
  sunshine: "bg-sunshine text-navy",
  turquoise: "bg-turquoise text-navy",
  pink: "bg-pink text-white",
  navy: "bg-navy text-white",
  sand: "bg-sand text-navy",
};

export function Badge({
  tone = "sunshine",
  children,
  className = "",
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center h-8 px-3 rounded-full font-display text-sm ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
