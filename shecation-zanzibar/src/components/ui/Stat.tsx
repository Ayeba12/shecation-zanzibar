import { Label } from "./Label";

type Props = {
  value: string;
  unit?: string;
  label: string;
  dark?: boolean;
};

/** Big editorial number with a micro label above it. */
export function Stat({ value, unit, label, dark = false }: Props) {
  return (
    <div className={`border-t pt-4 ${dark ? "border-white/15" : "border-border"}`}>
      <Label tone={dark ? "white" : "muted"}>{label}</Label>
      <p className="display mt-4 text-4xl md:text-5xl lg:text-6xl">
        {value}
        {unit ? (
          <span className="ml-2 align-top text-lg uppercase tracking-[0.08em] md:text-xl">
            {unit}
          </span>
        ) : null}
      </p>
    </div>
  );
}
