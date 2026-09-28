import type { ReactNode } from "react";
import { MarqueePause } from "./MarqueePause";

type Props<T> = {
  items: T[];
  itemKey: (item: T) => string;
  /** Render one card. `hidden` is true for the duplicate loop copy. */
  render: (item: T, index: number, hidden: boolean) => ReactNode;
  label: string;
  className?: string;
  trackClassName?: string;
  /** Seconds each card takes to cross; the loop duration scales with the number of items. */
  secondsPerItem?: number;
};

/**
 * Continuous horizontal marquee (NGLM talent row).
 * Renders the items twice for a seamless loop; the copy is aria-hidden.
 * Pauses on hover and has a visible pause control (WCAG 2.2.2: anything that
 * moves for more than five seconds needs one). Under prefers-reduced-motion it
 * stands still and becomes a normal hand-scrollable strip.
 */
export function Marquee<T>({
  items,
  itemKey,
  render,
  label,
  className = "",
  trackClassName = "",
  secondsPerItem = 14,
}: Props<T>) {
  const duration = `${Math.round(items.length * secondsPerItem)}s`;
  return (
    <div data-marquee className={className}>
      <div className="group overflow-hidden motion-reduce:overflow-x-auto motion-reduce:[scrollbar-width:none]">
        <ul
          aria-label={label}
          style={{ animationDuration: duration }}
          className={`marquee-track flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none ${trackClassName}`}
        >
          {items.map((item, i) => (
            <li key={itemKey(item)} className="shrink-0">
              {render(item, i, false)}
            </li>
          ))}
          {items.map((item, i) => (
            <li key={`${itemKey(item)}-copy`} aria-hidden="true" className="shrink-0">
              {render(item, i, true)}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end px-4 pt-2 md:px-6 lg:px-8 motion-reduce:hidden">
        <MarqueePause />
      </div>
    </div>
  );
}
