import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  size?: "content" | "prose";
};

/** Centred content column with 16px mobile gutters (4pt grid). */
export function Container({ children, className = "", size = "content" }: Props) {
  const width = size === "prose" ? "max-w-prose" : "max-w-content";
  return (
    <div className={`mx-auto w-full ${width} px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
