import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-display font-semibold rounded-full transition-colors duration-200 select-none disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  // Brand guide: white text on SHE-CATION Pink, Pink Hover on hover/pressed
  primary: "bg-pink text-white hover:bg-pink-hover active:bg-pink-hover shadow-cta",
  // Brand guide: Navy text on Zanzibar Turquoise
  secondary: "bg-turquoise text-navy hover:bg-sky active:bg-sky",
  // Brand guide: transparent, pink border and text
  outline:
    "border-2 border-pink text-pink bg-transparent hover:bg-pink hover:text-white",
  ghost: "text-navy hover:bg-sand",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm", // 40
  md: "h-12 px-6 text-base", // 48
  lg: "h-14 px-8 text-lg", // 56
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, "className" | "children" | "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (rest.href !== undefined) {
    const { href, ...anchorProps } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = rest as ButtonAsButton;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
