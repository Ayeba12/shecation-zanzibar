import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Button } from "@/components/ui/Button";
import { Container, Grid } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import type { PolicySection } from "@/lib/privacy";

type Props = {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: PolicySection[];
  /** Optional note shown above the sections (e.g. "draft pending approval"). */
  notice?: string;
};

/** Shared editorial layout for legal pages: title block, sticky contents rail, numbered sections. */
export function LegalPage({ eyebrow, title, lastUpdated, intro, sections, notice }: Props) {
  return (
    <>
      <Header />
      <main className="flex-1 bg-cream text-navy">
        <Container className="pt-8 md:pt-16 lg:pt-20">
          <Grid>
            <div className="col-span-4 flex flex-col gap-3 md:col-span-3">
              <Label tone="navy" dot>
                {eyebrow}
              </Label>
              <Label>Last updated {lastUpdated}</Label>
            </div>
            <div className="col-span-4 mt-8 md:col-span-9 md:col-start-4 md:mt-0">
              <h1 className="display text-5xl uppercase sm:text-6xl lg:text-7xl">{title}</h1>
              <p className="mt-8 max-w-prose text-base md:text-lg">{intro}</p>
              {notice ? (
                <p className="mt-6 max-w-prose border-l-2 border-sunshine pl-4 text-sm text-muted">
                  {notice}
                </p>
              ) : null}
            </div>
          </Grid>
        </Container>

        <Container className="py-16 md:py-24">
          <Grid>
            <nav
              aria-label="Contents"
              className="col-span-4 md:sticky md:top-8 md:col-span-3 md:self-start"
            >
              <Label>Contents</Label>
              <ol className="mt-4 flex flex-col border-t border-border">
                {sections.map((s, i) => (
                  <li key={s.id} className="border-b border-border">
                    <a
                      href={`#${s.id}`}
                      className="grid grid-cols-[2rem_1fr] items-baseline gap-2 py-3 text-sm hover:text-pink"
                    >
                      <span className="label text-faint">{String(i + 1).padStart(2, "0")}</span>
                      <span>{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="col-span-4 mt-16 md:col-span-8 md:col-start-5 md:mt-0">
              {sections.map((s, i) => (
                <section
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-24 border-t border-border py-10 md:py-12"
                >
                  <Grid className="md:grid-cols-8">
                    <Label className="col-span-4 md:col-span-1">
                      {String(i + 1).padStart(2, "0")}
                    </Label>
                    <div className="col-span-4 mt-2 md:col-span-7 md:mt-0">
                      <h2 className="text-xl md:text-2xl">{s.title}</h2>
                      {s.paragraphs?.map((p) => (
                        <p key={p} className="mt-4 max-w-prose text-base text-muted">
                          {p}
                        </p>
                      ))}
                      {s.bullets ? (
                        <ul className="mt-6 flex max-w-prose flex-col gap-3">
                          {s.bullets.map((b) => (
                            <li key={b} className="flex gap-3 text-base text-muted">
                              <span
                                aria-hidden="true"
                                className="mt-2.5 size-1.5 shrink-0 rounded-full bg-turquoise"
                              />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {s.after?.map((p) => (
                        <p key={p} className="mt-4 max-w-prose text-base text-muted">
                          {p}
                        </p>
                      ))}
                    </div>
                  </Grid>
                </section>
              ))}

              <div className="flex flex-wrap items-center gap-3 border-t border-border pt-8">
                <Button href="/#book" size="md">
                  Secure your spot
                </Button>
                <Button href="/" variant="pill" size="md">
                  Back to the trip
                </Button>
              </div>
            </div>
          </Grid>
        </Container>
      </main>
      <Footer />
    </>
  );
}
