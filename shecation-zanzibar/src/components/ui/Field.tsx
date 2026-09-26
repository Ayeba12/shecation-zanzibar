import type { ComponentPropsWithoutRef, ReactNode } from "react";

const control =
  "h-12 w-full rounded-sm border border-border bg-white px-4 text-base text-navy placeholder:text-navy/40 focus:border-turquoise focus:outline-none focus:ring-4 focus:ring-turquoise/25";

type FieldProps = {
  label: string;
  hint?: string;
  children: ReactNode;
  htmlFor: string;
};

export function Field({ label, hint, children, htmlFor }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="font-display text-sm text-navy">
        {label}
      </label>
      {children}
      {hint ? <p className="text-xs text-muted">{hint}</p> : null}
    </div>
  );
}

export function Input({ className = "", ...rest }: ComponentPropsWithoutRef<"input">) {
  return <input className={`${control} ${className}`} {...rest} />;
}

export function Select({
  className = "",
  children,
  ...rest
}: ComponentPropsWithoutRef<"select">) {
  return (
    <select className={`${control} appearance-none ${className}`} {...rest}>
      {children}
    </select>
  );
}

export function Checkbox({
  label,
  className = "",
  ...rest
}: ComponentPropsWithoutRef<"input"> & { label: ReactNode }) {
  return (
    <label className={`flex items-start gap-3 text-base text-navy ${className}`}>
      <input
        type="checkbox"
        className="mt-1 size-5 shrink-0 rounded-[4px] border-border accent-pink"
        {...rest}
      />
      <span>{label}</span>
    </label>
  );
}
