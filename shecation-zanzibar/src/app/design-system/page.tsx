import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container, Grid } from "@/components/ui/Container";
import { Checkbox, Field, Input, Select } from "@/components/ui/Field";
import { ImageTag } from "@/components/ui/ImageTag";
import { Label } from "@/components/ui/Label";
import { Stat } from "@/components/ui/Stat";

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
  { token: "text-8xl", px: 124, lh: 124, cls: "text-8xl", note: "119.2 → 124 · display" },
  { token: "text-7xl", px: 100, lh: 100, cls: "text-7xl", note: "95.37 → 100 · display" },
  { token: "text-6xl", px: 80, lh: 88, cls: "text-6xl", note: "76.29 → 80" },
  { token: "text-5xl", px: 64, lh: 72, cls: "text-5xl", note: "61.04 → 64" },
  { token: "text-4xl", px: 48, lh: 56, cls: "text-4xl", note: "48.83 → 48" },
  { token: "text-3xl", px: 40, lh: 48, cls: "text-3xl", note: "39.06 → 40" },
  { token: "text-2xl", px: 32, lh: 40, cls: "text-2xl", note: "31.25 → 32" },
  { token: "text-xl", px: 24, lh: 32, cls: "text-xl", note: "25.00 → 24" },
  { token: "text-lg", px: 20, lh: 28, cls: "text-lg", note: "20.00" },
  { token: "text-base", px: 16, lh: 24, cls: "text-base", note: "16.00 (base)" },
  { token: "text-sm", px: 14, lh: 20, cls: "text-sm", note: "half step" },
  { token: "text-xs", px: 12, lh: 16, cls: "text-xs", note: "12.80 → 12 · labels" },
];

const spacing = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128];

const sections = [
  "principles",
  "colour",
  "typography",
  "chapters",
  "grid",
  "spacing",
  "radius",
  "buttons",
  "labels",
  "badges",
  "stats",
  "lists",
  "cardrow",
  "images",
  "wordmark",
  "cards",
  "forms",
  "accordion",
];

function Block({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-16">
      <Grid>
        <div className="col-span-4 md:col-span-3">
          <Label tone="navy" dot>
            {title}
          </Label>
        </div>
        <div className="col-span-4 mt-6 md:col-span-9 md:col-start-4 md:mt-0">{children}</div>
      </Grid>
    </section>
  );
}

export default function DesignSystem() {
  return (
    <main className="flex-1 bg-cream">
      <Container className="py-16">
        <Grid>
          <div className="col-span-4 md:col-span-3">
            <Label tone="navy" dot>
              SHE-CATION 4.0 Zanzibar
            </Label>
          </div>
          <div className="col-span-4 mt-6 md:col-span-9 md:col-start-4 md:mt-0">
            <h1 className="display text-5xl uppercase lg:text-7xl">Design System</h1>
            <p className="mt-6 max-w-prose text-lg text-muted">
              Living reference for colour, type, grid and components. Editorial direction blends
              vazianixstudios.com (asymmetric grid, hairlines, pill nav) with nglm.com (centred
              chapters, key figures, staggered card row, giant wordmark), in the SHE-CATION palette. Grid: 4pt base, 8pt
              rhythm. Type: Quicksand 600 display, Spline Sans 400 body. Scale: 16px × 1.25.
            </p>
            <nav aria-label="Sections" className="mt-8 flex flex-wrap gap-2">
              {sections.map((s) => (
                <Button key={s} href={`#${s}`} variant="pill" size="xs">
                  {s}
                </Button>
              ))}
            </nav>
          </div>
        </Grid>

        <div className="mt-16">
          <Block id="principles" title="Principles">
            <ol className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
              {[
                ["Type leads", "Big, tight Quicksand display type does the talking. Photography sits under it, full-bleed."],
                ["Asymmetric grid", "12 columns. Micro labels in the left rail, content offset to the right from column 5."],
                ["Hairlines, not boxes", "Sections and lists are separated by 1px navy/14 rules. Cards are rare."],
                ["Colour as signal", "Cream canvas, navy type. Pink only for conversion. Yellow for one small highlight."],
                ["Micro labels", "12px uppercase, 0.12em tracking, for meta, numbers and category rails."],
                ["Two rhythms", "Centred chapters (label + uppercase headline) alternate with left-rail editorial rows."],
                ["Calm motion", "Hover only. Nothing moves unless the user asks it to."],
              ].map(([t, d], i) => (
                <li key={t} className="border-t border-border pt-4">
                  <Label>{String(i + 1).padStart(2, "0")}</Label>
                  <p className="mt-3 font-display text-lg">{t}</p>
                  <p className="mt-1 text-sm text-muted">{d}</p>
                </li>
              ))}
            </ol>
          </Block>

          <Block id="colour" title="Colour">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {colours.map((c) => (
                <li key={c.token} className="border-t border-border pt-4">
                  <div className={`h-24 ${swatchBg[c.token]} border border-border`} />
                  <p className="mt-4 font-display text-base">{c.name}</p>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {c.hex} · --color-{c.token}
                  </p>
                  <p className="mt-2 text-sm text-muted">{c.use}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              Balance: 50% cream + white · 20% turquoise + sky · 15% pink · 10% navy · 5% yellow.
            </p>
          </Block>

          <Block id="typography" title="Typography">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border-t border-border pt-4">
                <Label>Display · Quicksand 600 · leading 0.95</Label>
                <p className="display mt-4 text-4xl uppercase">Five days. Zanzibar.</p>
              </div>
              <div className="border-t border-border pt-4">
                <Label>Body · Spline Sans 400</Label>
                <p className="mt-4 text-base">
                  Trade the routine for turquoise water, white sand, good food and five days with
                  women who came to breathe.
                </p>
              </div>
            </div>
            <div className="mt-10 border-t border-border">
              {typescale.map((t) => (
                <div
                  key={t.token}
                  className="grid items-baseline gap-4 border-b border-border py-4 md:grid-cols-[8rem_1fr_10rem]"
                >
                  <p className="font-mono text-xs text-muted">
                    {t.token}
                    <br />
                    {t.px}/{t.lh}
                  </p>
                  <p className={`${t.cls} font-display truncate`}>Pause. Reconnect.</p>
                  <p className="text-xs text-muted md:text-right">{t.note}</p>
                </div>
              ))}
            </div>
          </Block>

          <Block id="chapters" title="Chapter headings">
            <p className="text-sm text-muted">
              Centred label with dot, then an uppercase display headline. Used for Key facts,
              Experiences and other &ldquo;chapter&rdquo; openers. Left-aligned rows use the same
              label in the left rail instead.
            </p>
            <div className="mt-8 border-t border-border pt-12 text-center">
              <Label tone="navy" dot className="justify-center">
                Your Zanzibar moments
              </Label>
              <p className="display mx-auto mt-4 max-w-2xl text-3xl uppercase sm:text-4xl">
                This is the kind of trip you remember in scenes.
              </p>
            </div>
          </Block>

          <Block id="grid" title="Grid">
            <p className="text-sm text-muted">
              4 columns on mobile, 12 from 768px. Gutters 16 / 24px. Left rail = cols 1–3, content
              starts at col 5 (or col 4 for headlines).
            </p>
            <div className="mt-6 grid grid-cols-4 gap-x-4 md:grid-cols-12 md:gap-x-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-16 bg-sky/40 text-center label pt-6 text-navy ${i >= 4 ? "hidden md:block" : ""}`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </Block>

          <Block id="spacing" title="Spacing (4 / 8pt)">
            <ul className="flex flex-col gap-3">
              {spacing.map((s) => (
                <li key={s} className="flex items-center gap-4">
                  <span className="w-16 font-mono text-xs text-muted">{s}px</span>
                  <span className="h-3 bg-turquoise" style={{ width: s }} />
                  <span className="font-mono text-xs text-muted">{s / 4}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block id="radius" title="Radius">
            <div className="flex flex-wrap gap-6">
              {[
                ["none", "rounded-none", "photos"],
                ["sm", "rounded-sm", "8"],
                ["md", "rounded-md", "16"],
                ["lg", "rounded-lg", "24"],
                ["full", "rounded-full", "pills"],
              ].map(([k, cls, px]) => (
                <div key={k} className="flex flex-col items-center gap-2">
                  <div className={`size-20 border border-navy bg-sand ${cls}`} />
                  <p className="font-mono text-xs text-muted">
                    {cls} · {px}
                  </p>
                </div>
              ))}
            </div>
          </Block>

          <Block id="buttons" title="Buttons">
            <div className="flex flex-col gap-8">
              <div className="flex flex-wrap items-center gap-3">
                <Button>Secure Your Spot</Button>
                <Button variant="secondary">Explore Zanzibar</Button>
                <Button variant="outline">See the itinerary</Button>
                <Button variant="pill">Nav pill</Button>
                <Button variant="ghost">Back</Button>
                <Button disabled>Disabled</Button>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="xs">XS · 32</Button>
                <Button size="sm">SM · 40</Button>
                <Button size="md">MD · 48</Button>
                <Button size="lg">LG · 56</Button>
              </div>
              <div className="flex flex-wrap items-center gap-3 bg-navy p-6">
                <Button variant="pill-dark" size="xs">
                  About
                </Button>
                <Button variant="pill-dark" size="xs">
                  Included
                </Button>
                <Button size="xs">Secure Your Spot</Button>
              </div>
            </div>
          </Block>

          <Block id="labels" title="Micro labels">
            <div className="flex flex-col gap-3">
              <Label tone="navy" dot>
                Navy with dot
              </Label>
              <Label>Muted (default)</Label>
              <Label tone="turquoise">Turquoise</Label>
              <Label tone="pink" dot>
                Pink · Not included
              </Label>
              <div className="bg-navy p-4">
                <Label tone="white" dot>
                  White on navy
                </Label>
              </div>
            </div>
          </Block>

          <Block id="badges" title="Badges">
            <div className="flex flex-wrap gap-3">
              <Badge tone="sunshine">Book by 31 October 2026</Badge>
              <Badge tone="turquoise">Zanzibar</Badge>
              <Badge tone="pink">Limited places</Badge>
              <Badge tone="navy">Included</Badge>
              <Badge tone="sand">Optional</Badge>
            </div>
          </Block>

          <Block id="stats" title="Stats">
            <div className="grid gap-8 sm:grid-cols-3">
              <Stat value="5" unit="days" label="On the island" />
              <Stat value="4" unit="nights" label="At Tembo Resort" />
              <Stat value="£1,100" label="Per person, two sharing" />
            </div>
            <p className="mt-10 text-sm text-muted">Centred key figure (chapter variant):</p>
            <div className="mt-6 text-center">
              <p className="display text-6xl lg:text-8xl">
                6<span className="ml-2 align-top text-lg uppercase tracking-[0.08em]">moments</span>
              </p>
              <p className="mx-auto mt-4 max-w-xs text-sm text-muted">
                Curated Zanzibar experiences, transfers included
              </p>
            </div>
          </Block>

          <Block id="lists" title="Numbered lists">
            <ol className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
              {["4 nights / 5 days at Tembo Resort", "Breakfast, lunch and dinner", "Private airport transfers", "Visa fees included"].map(
                (item, i) => (
                  <li key={item} className="border-t border-border pt-4">
                    <Label>{String(i + 1).padStart(2, "0")}</Label>
                    <p className="mt-4 text-base">{item}</p>
                  </li>
                ),
              )}
            </ol>
          </Block>

          <Block id="cardrow" title="Card row">
            <p className="text-sm text-muted">
              Marquee of portrait cards, staggered on desktop, bleeding to the page edges. Slides
              continuously, pauses on hover, and stays still (manually scrollable) for reduced
              motion. Name left, type label right, copy below.
            </p>
            <ul className="mt-8 flex gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {["Transparent Kayak", "The Rock Restaurant", "Stone Town"].map((name, i) => (
                <li key={name} className={`w-56 shrink-0 ${i % 2 ? "md:mt-10" : ""}`}>
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-display text-base">{name}</p>
                    <Label>Sea</Label>
                  </div>
                  <div className="mt-3 aspect-[4/5] bg-sky/40" />
                  <p className="mt-3 text-sm text-muted">Clear water beneath you.</p>
                </li>
              ))}
            </ul>
          </Block>

          <Block id="wordmark" title="Giant wordmark">
            <p className="text-sm text-muted">
              Display type at 12–16vw, leading 1, tracking -0.04em. Used once in the dark About
              section and once at the very bottom of the footer.
            </p>
            <div className="mt-8 overflow-hidden bg-navy px-6 pt-10 text-white">
              <p className="display -mb-[0.12em] whitespace-nowrap text-[10vw] uppercase leading-none tracking-[-0.04em]">
                SHE-CATION
              </p>
            </div>
          </Block>

          <Block id="images" title="Image tags">
            <div className="relative aspect-[16/9] overflow-hidden bg-sky">
              <ImageTag style={{ left: "10%", top: "30%" }}>Tembo Resort</ImageTag>
              <ImageTag style={{ left: "55%", top: "60%" }}>Nungwi Beach</ImageTag>
              <div className="absolute inset-x-0 bottom-0 flex justify-between p-4">
                <Label tone="navy">Zanzibar, Tanzania</Label>
                <Label tone="navy">5 days / 4 nights</Label>
              </div>
            </div>
          </Block>

          <Block id="cards" title="Cards (rare)">
            <div className="grid gap-6 md:grid-cols-2">
              <Card tone="sand">
                <h3 className="text-lg">Sand card</h3>
                <p className="mt-2 text-base text-muted">
                  Reserved for pricing highlights or testimonials when a surface is needed.
                </p>
              </Card>
              <Card>
                <h3 className="text-lg">White card</h3>
                <p className="mt-2 text-base text-muted">Use sparingly on cream backgrounds.</p>
              </Card>
            </div>
          </Block>

          <Block id="forms" title="Forms">
            <div className="flex max-w-prose flex-col gap-8">
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
        </div>
      </Container>
    </main>
  );
}
