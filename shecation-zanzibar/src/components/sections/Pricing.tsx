import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/Section";
import { cta, pricing, trip } from "@/lib/content";

export function Pricing() {
  return (
    <Section tone="white" id="price">
      <SectionHeading eyebrow="Price and payment" title={pricing.title} lead={pricing.lead} />

      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        {/* Price card */}
        <Card tone="sand" padding="lg" className="flex flex-col lg:col-span-2">
          <Badge tone="sunshine">Book by {trip.bookingDeadline}</Badge>
          <p className="mt-6 font-display text-5xl text-pink">{trip.price}</p>
          <p className="font-display text-base">{trip.priceNote}</p>
          <p className="mt-6 text-base text-muted">
            {trip.deposit} {trip.depositNote} deposit to secure your place. Flights not included.
            Based on two people sharing a room.
          </p>
          <div className="mt-auto pt-8">
            <Button href="#book" size="lg" className="w-full">
              {pricing.cta}
            </Button>
          </div>
        </Card>

        {/* Payment schedule */}
        <Card padding="lg" className="lg:col-span-3">
          <h3 className="text-lg">Payment plan</h3>
          <table className="mt-6 w-full text-left text-base">
            <thead>
              <tr className="border-b border-border font-display text-sm uppercase tracking-[0.1em] text-muted">
                <th scope="col" className="py-3 pr-4 font-semibold">
                  Stage
                </th>
                <th scope="col" className="py-3 pr-4 font-semibold">
                  Due
                </th>
                <th scope="col" className="py-3 text-right font-semibold">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {pricing.schedule.map((row) => (
                <tr key={row.stage} className="border-b border-border">
                  <td className="py-4 pr-4 font-display">{row.stage}</td>
                  <td className="py-4 pr-4 text-muted">{row.due}</td>
                  <td className="py-4 text-right font-display">{row.amount}</td>
                </tr>
              ))}
              <tr>
                <td className="py-4 pr-4 font-display">Total</td>
                <td />
                <td className="py-4 text-right font-display text-pink">{pricing.total}</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-6 rounded-sm bg-cream p-4 text-base">{pricing.nigeria}</p>
        </Card>
      </div>
      <p className="mt-6 text-sm text-muted">{cta.micro}</p>
    </Section>
  );
}
