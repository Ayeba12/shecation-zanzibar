import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Checkbox, Field, Input, Select } from "@/components/ui/Field";

export const metadata: Metadata = {
  title: "Design System | SHE-CATION 4.0",
  robots: { index: false },
};

const colours = [
  { name: "SHE-CATION Pink", token: "pink", hex: "#D52E68", use: "Primary CTA, highlights, price emphasis" },
  { name: "Pink Hover", token: "pink-hover", hex: "#B91F56", use: "CTA hover / pressed" },
  { name: "Zanzibar Turquoise", token: "turquoise", hex: "#21B8C7", use: "Destination, experiences, icons" },
  { name: "Ocean Sky", token: "sky", hex: "#58D4DE", use: "Soft backgrounds, gradients, overlays" },
  { name: "Sunshine Yellow", token: "sunshine", hex: "#F4DD17", use: "Small badges, dates, highlights" },
  { name: "Midnight Navy", token: "navy", hex: "#18263D", use: "Text, headings, footer" },
  { name: "Shell Cream", token: "cream", hex: "#FFF8F4", use: "Page background, FAQ" },
  { name: "Zanzibar Sand", token: "sand", hex: "#F5E8D7", use: "Cards, pricing, testimonials" },
  { name: "Pure White", token: "white", hex: "#FFFFFF", use: "Whitespace, cards" },
];

const swatchBg: Record<string, string> = {
  pink: "bg-pink",
  "pink-hover": "bg-pink-hover",
  turquoise: "bg-turquoise",
  sky: "bg-sky",
  sunshine: "bg-sunshine",
  navy: "bg-navy",
  cream: "bg-cream",
  sand: "bg-sand",
  white: "bg-white",
};

const typescale = [
  { token: "text-6xl", px: 80, lh: 88, cls: "text-6xl", note: "76.29 → 80" },
  { token: "text-5xl", px: 64, lh: 72, cls: "text-5xl", note: "61.04 → 64" },
  { token: "text-4xl", px: 48, lh: 56, cls: "text-4xl", note: "48.83 → 48" },
  { token: "text-3xl", px: 40, lh: 48, cls: "text-3xl", note: "39.06 → 40" },
  { token: "text-2xl", px: 32, lh: 40, cls: "text-2xl", note: "31.25 → 32" },
  { token: "text-xl", px: 24, lh: 32, cls: "text-xl", note: "25.00 → 24" },
  { token: "text-lg", px: 20, lh: 28, cls: "text-lg", note: "20.00" },
  { token: "text-base", px: 16, lh: 24, cls: "text-base", note: "16.00 (base)" },
  { token: "text-sm", px: 14, lh: 20, cls: "text-sm", note: "half step" },
  { token: "text-xs", px: 12, lh: 16, cls: "text-xs", note: "12.80 → 12" },
];

const spacing = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128];

function Block({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-16">
      <h2 className="text-2xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export default function DesignSystem() {
  return (
    <main className="flex-1 bg-cream">
      <Container className="py-16">
        <p className="font-display text-sm uppercase tracking-[0.12em] text-pink">
          SHE-CATION 4.0 Zanzibar
        </p>
        <h1 className="mt-3 text-4xl">Design System</h1>
        <p className="mt-4 max-w-prose text-lg text-muted">
          Living reference for colour, type, spacing and components. Grid: 4pt base, 8pt rhythm.
          Type: Quicksand 600 for display, Spline Sans 400 for body. Scale: 16px × 1.25.
        </p>
        <nav aria-label="Sections" className="mt-8 flex flex-wrap gap-2">
          {["colour", "typography", "spacing", "radius", "buttons", "badges", "cards", "forms", "accordion"].map(
            (s) => (
              <a
                key={s}
                href={`#${s}`}
                className="rounded-full bg-white px-4 py-2 font-display text-sm capitalize text-navy shadow-card hover:bg-sand"
              >
                {s}
              </a>
            ),
          )}
        </nav>

        <Block id="colour" title="Colour">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {colours.map((c) => (
              <li key={c.token} className="overflow-hidden rounded-lg bg-white shadow-card">
                <div className={`h-24 ${swatchBg[c.token]} border-b border-border`} />
                <div className="p-4">
                  <p className="font-display text-base">{c.name}</p>
                  <p className="mt-1 font-mono text-sm text-muted">
                    {c.hex} · <span className="text-navy">--color-{c.token}</span>
                  </p>
                  <p className="mt-2 text-sm text-muted">{c.use}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Balance: 50% cream + white · 20% turquoise + sky · 15% pink · 10% navy · 5% yellow.
          </p>
        </Block>

        <Block id="typography" title="Typography">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <p className="text-sm text-muted">Display · Quicksand 600</p>
              <p className="mt-2 font-display text-3xl">Five Days. Zanzibar.</p>
            </Card>
            <Card>
              <p className="text-sm text-muted">Body · Spline Sans 400</p>
              <p className="mt-2 text-lg">
                Trade the routine for turquoise water, white sand, good food and five days with
                women who came to breathe.
              </p>
            </Card>
          </div>
          <div className="mt-8 overflow-hidden rounded-lg bg-white shadow-card">
            {typescale.map((t) => (
              <div
                key={t.token}
                className="grid items-baseline gap-4 border-b border-border px-6 py-4 last:border-0 md:grid-cols-[10rem_1fr_10rem]"
              >
                <p className="font-mono text-sm text-muted">
                  {t.token}
                  <br />
                  {t.px}/{t.lh}
                </p>
                <p className={`${t.cls} font-display truncate`}>Pause. Reconnect. Zanzibar.</p>
                <p className="text-sm text-muted md:text-right">{t.note}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block id="spacing" title="Spacing (4pt / 8pt grid)">
          <ul className="flex flex-col gap-3">
            {spacing.map((s) => (
              <li key={s} className="flex items-center gap-4">
                <span className="w-16 font-mono text-sm text-muted">{s}px</span>
                <span className="h-4 rounded-[2px] bg-turquoise" style={{ width: s }} />
                <span className="font-mono text-sm text-muted">{s / 4}</span>
              </li>
            ))}
          </ul>
        </Block>

        <Block id="radius" title="Radius">
          <div className="flex flex-wrap gap-6">
            {[
              ["sm", "rounded-sm", "8"],
              ["md", "rounded-md", "16"],
              ["lg", "rounded-lg", "24"],
              ["xl", "rounded-xl", "32"],
              ["full", "rounded-full", "pill"],
            ].map(([k, cls, px]) => (
              <div key={k} className="flex flex-col items-center gap-2">
                <div className={`size-24 bg-sand border-2 border-pink ${cls}`} />
                <p className="font-mono text-sm text-muted">
                  {cls} · {px}
                </p>
              </div>
            ))}
          </div>
        </Block>

        <Block id="buttons" title="Buttons">
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap items-center gap-4">
              <Button>Secure Your Spot</Button>
              <Button variant="secondary">Explore Zanzibar</Button>
              <Button variant="outline">See the itinerary</Button>
              <Button variant="ghost">Back</Button>
              <Button disabled>Disabled</Button>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small · 40</Button>
              <Button size="md">Medium · 48</Button>
              <Button size="lg">Large · 56</Button>
            </div>
          </div>
        </Block>

        <Block id="badges" title="Badges">
          <div className="flex flex-wrap gap-3">
            <Badge tone="sunshine">9-13 March 2027</Badge>
            <Badge tone="turquoise">Zanzibar</Badge>
            <Badge tone="pink">Limited places</Badge>
            <Badge tone="navy">Included</Badge>
            <Badge tone="sand">Optional</Badge>
          </div>
        </Block>

        <Block id="cards" title="Cards">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <h3 className="text-lg">White card</h3>
              <p className="mt-2 text-base text-muted">Default surface on cream backgrounds.</p>
            </Card>
            <Card tone="sand">
              <h3 className="text-lg">Sand card</h3>
              <p className="mt-2 text-base text-muted">Pricing, testimonials, alternating blocks.</p>
            </Card>
            <Card tone="cream">
              <h3 className="text-lg">Cream card</h3>
              <p className="mt-2 text-base text-muted">Use on white sections.</p>
            </Card>
          </div>
        </Block>

        <Block id="forms" title="Forms">
          <Card className="max-w-prose">
            <div className="flex flex-col gap-6">
              <Field label="Full name" htmlFor="ds-name">
                <Input id="ds-name" placeholder="Your name" />
              </Field>
              <Field label="Country" htmlFor="ds-country" hint="Used to show the right payment guidance.">
                <Select id="ds-country" defaultValue="">
                  <option value="" disabled>
                    Select a country
                  </option>
                  <option>United Kingdom</option>
                  <option>Nigeria</option>
                </Select>
              </Field>
              <Checkbox label="I understand the package is based on two people sharing a room." />
            </div>
          </Card>
        </Block>

        <Block id="accordion" title="Accordion">
          <div className="max-w-prose">
            <Accordion
              items={[
                { q: "Are flights included?", a: "No. Flights to Zanzibar are not included." },
                { q: "Is the visa included?", a: "Yes. Visa fees are included in the package." },
              ]}
            />
          </div>
        </Block>
      </Container>
    </main>
  );
}
