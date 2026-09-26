"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Grid } from "@/components/ui/Container";
import { Checkbox, Field, Input, Select } from "@/components/ui/Field";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { trip } from "@/lib/content";

type Step = 1 | 2 | 3;

const steps = ["Your details", "Trip terms", "Deposit"];

type Details = {
  name: string;
  email: string;
  phone: string;
  country: string;
  roomShare: boolean;
  consent: boolean;
};

const emptyDetails: Details = {
  name: "",
  email: "",
  phone: "",
  country: "",
  roomShare: false,
  consent: false,
};

/**
 * Booking flow: details -> terms -> deposit -> /thank-you.
 * Payment is stubbed until the client confirms a payment processor.
 * Passport / sensitive travel details are intentionally NOT collected here.
 */
export function BookingForm() {
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);
  const [details, setDetails] = useState<Details>(emptyDetails);
  const [terms, setTerms] = useState({ deposit: false, flights: false, sharing: false });

  const update = <K extends keyof Details>(key: K, value: Details[K]) =>
    setDetails((d) => ({ ...d, [key]: value }));

  const onDetails = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep(2);
  };

  const onTerms = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep(3);
  };

  const onDeposit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: hand off to secure checkout (processor TBC), then redirect on success.
    router.push("/thank-you");
  };

  const allTerms = terms.deposit && terms.flights && terms.sharing;

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

          <ol className="mt-10 border-t border-border">
            {steps.map((label, i) => {
              const n = (i + 1) as Step;
              const state = n < step ? "done" : n === step ? "current" : "todo";
              return (
                <li
                  key={label}
                  className="grid grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-border py-4"
                  aria-current={state === "current" ? "step" : undefined}
                >
                  <Label tone={state === "current" ? "pink" : state === "done" ? "turquoise" : "muted"}>
                    {String(n).padStart(2, "0")}
                  </Label>
                  <span
                    className={
                      state === "current" ? "font-display text-lg" : "text-lg text-faint"
                    }
                  >
                    {label}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="col-span-4 mt-12 md:col-span-7 md:col-start-6 md:mt-0">
          {step === 1 ? (
            <form onSubmit={onDetails} className="flex flex-col gap-8">
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
                  onChange={(e) => update("country", e.target.value)}
                >
                  <option value="" disabled>
                    Select a country
                  </option>
                  <option value="GB">United Kingdom</option>
                  <option value="NG">Nigeria</option>
                  <option value="OTHER">Other</option>
                </Select>
              </Field>
              <div className="flex flex-col gap-4 border-t border-border pt-6">
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
              <Label>Please confirm</Label>
              <div className="flex flex-col gap-4 border-t border-border pt-6">
                <Checkbox
                  checked={terms.deposit}
                  onChange={(e) => setTerms((t) => ({ ...t, deposit: e.target.checked }))}
                  label={`The ${trip.deposit} deposit is non-refundable.`}
                />
                <Checkbox
                  checked={terms.flights}
                  onChange={(e) => setTerms((t) => ({ ...t, flights: e.target.checked }))}
                  label="Flights to Zanzibar are not included in the package."
                />
                <Checkbox
                  checked={terms.sharing}
                  onChange={(e) => setTerms((t) => ({ ...t, sharing: e.target.checked }))}
                  label="The package is based on two people sharing a room and is subject to availability."
                />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button type="button" variant="ghost" size="lg" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button type="submit" size="lg" disabled={!allTerms}>
                  Continue to deposit
                </Button>
              </div>
            </form>
          ) : null}

          {step === 3 ? (
            <form onSubmit={onDeposit} className="flex flex-col gap-6">
              <Label>Pay your {trip.deposit} deposit</Label>
              <div className="border-t border-border pt-6">
                {details.country === "NG" ? (
                  <p className="max-w-prose text-base">
                    Paying from Nigeria? Contact {trip.organisers} for the current exchange rate
                    before making payment. We will send you the details after you submit.
                  </p>
                ) : (
                  <p className="max-w-prose text-base">
                    Secure online checkout in GBP. {/* TODO: payment processor TBC */}
                    <span className="text-muted"> (Checkout integration coming soon.)</span>
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button type="button" variant="ghost" size="lg" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button type="submit" size="lg">
                  Pay {trip.deposit} deposit
                </Button>
              </div>
              <p className="text-xs text-faint">
                We will never ask for passport details in this form. Travel documents are collected
                later through a secure process.
              </p>
            </form>
          ) : null}
        </div>
      </Grid>
    </Section>
  );
}
