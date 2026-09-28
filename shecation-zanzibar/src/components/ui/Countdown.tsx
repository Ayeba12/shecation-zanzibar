"use client";

import { useSyncExternalStore } from "react";
import { Label } from "@/components/ui/Label";

type Props = {
  /** ISO date-time the countdown ends at. */
  deadline: string;
  /** Shown once the deadline has passed. */
  closedMessage: string;
  className?: string;
};

/**
 * A tiny shared clock store. The snapshot only changes once a second, when the
 * interval fires, so useSyncExternalStore sees a stable value between ticks.
 */
let now = Date.now();
const listeners = new Set<() => void>();
let timer: number | undefined;

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (timer === undefined) {
    timer = window.setInterval(() => {
      now = Date.now();
      listeners.forEach((l) => l());
    }, 1000);
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0 && timer !== undefined) {
      window.clearInterval(timer);
      timer = undefined;
    }
  };
}

const getSnapshot = () => now;
const getServerSnapshot = () => null;

const UNITS = ["days", "hrs", "min", "sec"] as const;

/**
 * Live countdown. Renders a same-height placeholder on the server and during
 * hydration (the server snapshot is null), then ticks every second.
 */
export function Countdown({ deadline, closedMessage, className = "" }: Props) {
  const current = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const target = new Date(deadline).getTime();
  const diff = current === null ? null : target - current;

  if (diff !== null && diff <= 0) {
    return <p className={`max-w-sm text-sm text-muted ${className}`}>{closedMessage}</p>;
  }

  const parts =
    diff === null
      ? [null, null, null, null]
      : [
          Math.floor(diff / 86_400_000),
          Math.floor((diff % 86_400_000) / 3_600_000),
          Math.floor((diff % 3_600_000) / 60_000),
          Math.floor((diff % 60_000) / 1_000),
        ];

  return (
    <div role="timer" aria-live="off" className={`flex gap-6 sm:gap-8 ${className}`}>
      {UNITS.map((unit, i) => (
        <div key={unit} className="flex flex-col">
          <span className="display text-3xl tabular-nums md:text-4xl">
            {parts[i] === null ? "––" : String(parts[i]).padStart(2, "0")}
          </span>
          <Label className="mt-1">{unit}</Label>
        </div>
      ))}
    </div>
  );
}
