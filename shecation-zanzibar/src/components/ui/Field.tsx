import type { ComponentPropsWithoutRef, ReactNode } from "react";

/* Editorial underline inputs: no box, hairline bottom border, navy on focus. */
const control =
  "h-12 w-full rounded-none border-0 border-b border-navy/25 bg-transparent px-0 text-base text-navy placeholder:text-faint focus:border-navy focus:outline-none";

type FieldProps = {
  label: string;
  hint?: string;
  children: ReactNode;
  htmlFor: string;
};

export function Field({ label, hint, children, htmlFor }: FieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={htmlFor} className="label text-faint">
        {label}
      </label>
      {children}
      {hint ? <p className="mt-1 text-xs text-muted">{hint}</p> : null}
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
    <div className="relative">
      <select className={`${control} appearance-none pr-8 ${className}`} {...rest}>
        {children}
      </select>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-navy"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
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
        className="mt-1 size-5 shrink-0 rounded-[4px] border-navy/30 accent-pink"
        {...rest}
      />
      <span>{label}</span>
    </label>
  );
}
