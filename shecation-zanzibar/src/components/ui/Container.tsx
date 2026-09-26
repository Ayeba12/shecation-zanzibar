import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  size?: "content" | "prose";
};

/** Edge-to-edge editorial canvas with 16 / 24 / 32px gutters (4pt grid). */
export function Container({ children, className = "", size = "content" }: Props) {
  const width = size === "prose" ? "max-w-prose" : "max-w-content";
  return (
    <div className={`mx-auto w-full ${width} px-4 md:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

/** 12-column editorial grid. Place children with col-span / col-start utilities. */
export function Grid({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`grid grid-cols-4 gap-x-4 md:grid-cols-12 md:gap-x-6 ${className}`}>
      {children}
    </div>
  );
}
