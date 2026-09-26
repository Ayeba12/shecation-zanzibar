import { Button } from "@/components/ui/Button";
import { cta, trip } from "@/lib/content";

/** Mobile-only sticky CTA bar (brief: sticky "Secure Your Spot" on mobile). */
export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-cream/95 p-4 backdrop-blur md:hidden pb-[calc(1rem+env(safe-area-inset-bottom))]">
      <div className="flex items-center justify-between gap-4">
        <div className="leading-tight">
          <p className="font-display text-base text-navy">
            {trip.price} <span className="text-sm text-muted">{trip.priceNote}</span>
          </p>
          <p className="label mt-1 text-faint">
            {trip.deposit} {trip.depositNote} deposit
          </p>
        </div>
        <Button href="#book" size="sm">
          {cta.primary}
        </Button>
      </div>
    </div>
  );
}
