import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Props = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
  tone?: "white" | "sand" | "cream";
  padding?: "none" | "md" | "lg";
};

const tones = {
  white: "bg-white",
  sand: "bg-sand",
  cream: "bg-cream",
};

const paddings = {
  none: "",
  md: "p-6", // 24
  lg: "p-8", // 32
};

export function Card({
  children,
  tone = "white",
  padding = "md",
  className = "",
  ...rest
}: Props) {
  return (
    <div
      className={`rounded-lg shadow-card ${tones[tone]} ${paddings[padding]} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
