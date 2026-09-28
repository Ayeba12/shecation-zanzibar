"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Grid } from "@/components/ui/Container";
import { Checkbox, Field, Input, Select } from "@/components/ui/Field";
import { Label } from "@/components/ui/Label";
import { PaymentDetails } from "@/components/ui/PaymentDetails";
import { Section } from "@/components/ui/Section";
import type { BookingPayload } from "@/lib/booking";
import { trip } from "@/lib/content";

type Step = 1 | 2 | 3;

const steps = ["Your details", "Trip terms", "Deposit"];

type Details = {
  name: string;
  email: string;
  phone: string;
  country: "" | BookingPayload["country"];
  roomShare: boolean;
  consent: boolean;
  website: string; // honeypot
};

const emptyDetails: Details = {
  name: "",
  email: "",
  phone: "",
  country: "",
  roomShare: false,
  consent: false,
  website: "",
};

/**
 * Booking flow: details -> terms (saved to email + sheet) -> deposit instructions + WhatsApp group.
 * Passport / sensitive travel details are intentionally NOT collected here.
 */
export function BookingForm() {
  const [step, setStep] = useState<Step>(1);
  const [details, setDetails] = useState<Details>(emptyDetails);
  const [terms, setTerms] = useState({ deposit: false, flights: false, sharing: false });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = <K extends keyof Details>(key: K, value: Details[K]) =>
    setDetails((d) => ({ ...d, [key]: value }));

  const onDetails = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep(2);
  };

  const allTerms = terms.deposit && terms.flights && terms.sharing;

  const onTerms = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!allTerms || details.country === "") return;
    setSubmitting(true);
    setError(null);
    try {
      const payload: BookingPayload = {
        name: details.name,
        email: details.email,
        phone: details.phone,
        country: details.country,
        roomShare: details.roomShare,
        consent: details.consent,
        terms,
        website: details.website,
      };
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; errors?: string[] };
      if (!res.ok || !data.ok) {
        setError(data.errors?.join(" ") ?? "Something went wrong. Please try again.");
        return;
      }
      setStep(3);
    } catch {
      setError("We could not reach the server. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Section tone="cream" id="book">
      <Grid>
        <div className="col-span-4 md:col-span-4">
          <Label tone="navy" dot>
            Secure your spot
          </Label>
          <h2 className="display mt-6 text-3xl sm:text-4xl">Reserve your place on SHE-CATION 4.0.</h2>
          <p className="mt-6 max-w-sm text-sm text-muted">
            Three quick steps. Your place is confirmed once your {trip.deposit} deposit is received,
            subject to availability.
          </p>

          <ol className="mt-10">
            {steps.map((label, i) => {
              const n = (i + 1) as Step;
              const state = n < step ? "done" : n === step ? "current" : "todo";
              return (
                <li
                  key={label}
                  className="grid grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-border py-4 last:border-b-0"
                  aria-current={state === "current" ? "step" : undefined}
                >
                  <Label tone={state === "current" ? "pink" : state === "done" ? "turquoise" : "muted"}>
                    {String(n).padStart(2, "0")}
                  </Label>
                  <span className={state === "current" ? "font-display text-lg" : "text-lg text-faint"}>
                    {label}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="col-span-4 mt-12 md:col-span-7 md:col-start-6 md:mt-0">
          {step === 1 ? (
            <form onSubmit={onDetails} className="relative flex flex-col gap-8">
              <Field label="Full name" htmlFor="name">
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  value={details.name}
                  onChange={(e) => update("name", e.target.value)}
                />
              </Field>
              <div className="grid gap-8 sm:grid-cols-2">
                <Field label="Email" htmlFor="email">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={details.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </Field>
                <Field label="Phone / WhatsApp" htmlFor="phone" hint="Include your country code.">
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={details.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                </Field>
              </div>
              <Field label="Country you are paying from" htmlFor="country">
                <Select
                  id="country"
                  name="country"
                  required
                  value={details.country}
                  onChange={(e) => update("country", e.target.value as Details["country"])}
                >
                  <option value="" disabled>
                    Select a country
                  </option>
                  <option value="GB">United Kingdom</option>
                  <option value="NG">Nigeria</option>
                  <option value="OTHER">Other</option>
                </Select>
              </Field>
              {/* Honeypot: hidden from people, filled by bots */}
              <div className="absolute -left-[9999px] top-0 h-px w-px overflow-hidden" aria-hidden="true">
                <label>
                  Website
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={details.website}
                    onChange={(e) => update("website", e.target.value)}
                  />
                </label>
              </div>
              <div className="flex flex-col gap-4 pt-2">
                <Checkbox
                  name="roomShare"
                  required
                  checked={details.roomShare}
                  onChange={(e) => update("roomShare", e.target.checked)}
                  label="I understand the package is based on two people sharing a room."
                />
                <Checkbox
                  name="consent"
                  required
                  checked={details.consent}
                  onChange={(e) => update("consent", e.target.checked)}
                  label={
                    <>
                      I agree to be contacted by {trip.brand} about my booking and accept the{" "}
                      <Link href="/privacy" className="underline" target="_blank" rel="noopener">
                        privacy policy
                      </Link>
                      .
                    </>
                  }
                />
              </div>
              <Button type="submit" size="lg" className="sm:self-start">
                Continue to trip terms
              </Button>
            </form>
          ) : null}

          {step === 2 ? (
            <form onSubmit={onTerms} className="flex flex-col gap-6">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <Label>Please confirm</Label>
                <Link href="/booking-terms" target="_blank" rel="noopener" className="text-sm underline">
                  Read the full booking terms
                </Link>
              </div>
              <div className="flex flex-col gap-4 pt-2">
                <Checkbox
                  checked={terms.deposit}
                  onChange={(e) => setTerms((t) => ({ ...t, deposit: e.target.checked }))}
                  label={`The ${trip.deposit} deposit is non-refundable.`}
                />
                <Checkbox
                  checked={terms.flights}
                  onChange={(e) => setTerms((t) => ({ ...t, flights: e.target.checked }))}
                  label="Flights to Zanzibar are not included in the £1,100 package price. I will book my own flights."
                />
                <Checkbox
                  checked={terms.sharing}
                  onChange={(e) => setTerms((t) => ({ ...t, sharing: e.target.checked }))}
                  label="The package is based on two people sharing a room and is subject to availability."
                />
              </div>
              {error ? (
                <p role="alert" className="max-w-prose border-l-2 border-pink pl-4 text-sm text-navy">
                  {error} You can also message us on WhatsApp:{" "}
                  {trip.phones.map((p, i) => (
                    <span key={p.wa}>
                      <a href={`https://wa.me/${p.wa}`} className="underline">
                        {p.number}
                      </a>
                      {i < trip.phones.length - 1 ? " or " : ""}
                    </span>
                  ))}
                  .
                </p>
              ) : null}
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button type="button" variant="ghost" size="lg" onClick={() => setStep(1)} disabled={submitting}>
                  Back
                </Button>
                <Button type="submit" size="lg" disabled={!allTerms || submitting}>
                  {submitting ? "Saving your booking..." : "Save and continue to deposit"}
                </Button>
              </div>
              <p className="text-xs text-faint">
                Your details are sent to the SHE-Reconnects team when you continue.
              </p>
            </form>
          ) : null}

          {step === 3 ? (
            <div className="flex flex-col gap-6">
              <div>
                <Label tone="turquoise" dot>
                  Details received
                </Label>
                <h3 className="mt-3 text-xl md:text-2xl">
                  Thank you, {details.name.split(" ")[0]}. Now pay your {trip.deposit} deposit.
                </h3>
              </div>
              <PaymentDetails country={details.country || "GB"} name={details.name} />
              <p className="text-xs text-faint">
                We will never ask for passport details in this form. Travel documents are collected
                later through a secure process.
              </p>
            </div>
          ) : null}
        </div>
      </Grid>
    </Section>
  );
}
