import type { CSSProperties } from "react";

type Props = {
  children: string;
  style?: CSSProperties;
  className?: string;
};

/** Small translucent pill placed over photography (like map pins). */
export function ImageTag({ children, style, className = "" }: Props) {
  return (
    <span
      style={style}
      className={`absolute inline-flex h-8 items-center rounded-full bg-navy/60 px-4 font-body text-xs uppercase tracking-[0.08em] text-white backdrop-blur-sm ${className}`}
    >
      {children}
    </span>
  );
}
