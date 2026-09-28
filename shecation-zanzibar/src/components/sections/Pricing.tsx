import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Grid } from "@/components/ui/Container";
import { Countdown } from "@/components/ui/Countdown";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { cta, pricing, trip } from "@/lib/content";

export function Pricing() {
  return (
    <Section tone="cream" id="price">
      {/* Payment plan */}
      <Grid>
        <div className="col-span-4 md:col-span-4">
          <Label tone="navy" dot>
            Price and payment
          </Label>
          <h2 className="display mt-6 text-3xl sm:text-4xl">{pricing.title}</h2>
          <p className="mt-6 max-w-sm text-sm text-muted">{pricing.lead}</p>
          <div className="mt-8">
            <Badge tone="sunshine">Book by {trip.bookingDeadline}</Badge>
          </div>

          {/* Live countdown to the end of the deposit window */}
          <div className="mt-10">
            <Label>Deposit deadline</Label>
            <Countdown
              deadline={trip.depositDeadline}
              closedMessage={`The deposit window closed on ${trip.bookingDeadline}. Message ${trip.organisers} to check availability.`}
              className="mt-4"
            />
            <p className="mt-3 text-xs text-faint">Until midnight on {trip.bookingDeadline}, UK time.</p>
          </div>
        </div>

        <div className="col-span-4 mt-12 md:col-span-7 md:col-start-6 md:mt-0">
          <table className="w-full border-t border-border text-left">
            <caption className="sr-only">Payment schedule</caption>
            <thead>
              <tr>
                <th scope="col" className="label py-4 pr-4 font-normal text-faint">
                  Stage
                </th>
                <th scope="col" className="label py-4 pr-4 font-normal text-faint">
                  Due
                </th>
                <th scope="col" className="label py-4 text-right font-normal text-faint">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {pricing.schedule.map((row) => (
                <tr key={row.stage} className="border-t border-border">
                  <td className="py-5 pr-4 font-display text-lg">{row.stage}</td>
                  <td className="py-5 pr-4 text-base text-muted">{row.due}</td>
                  <td className="py-5 text-right font-display text-lg">{row.amount}</td>
                </tr>
              ))}
              <tr className="border-t border-border">
                <td className="py-5 pr-4 font-display text-lg">Total</td>
                <td />
                <td className="py-5 text-right font-display text-2xl text-pink">
                  {pricing.total}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-md text-sm text-muted">{pricing.nigeria}</p>
            <Button href="#book" size="md">
              {pricing.cta}
            </Button>
          </div>
          <p className="mt-6 text-xs text-faint">{cta.micro}</p>
        </div>
      </Grid>
    </Section>
  );
}
