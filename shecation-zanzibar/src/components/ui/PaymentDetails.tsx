import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { payment, trip } from "@/lib/content";

function Row({ k, v }: { k: string; v: string }) {
  if (!v) return null;
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-border py-3">
      <dt className="label text-faint">{k}</dt>
      <dd className="text-right font-display text-base">{v}</dd>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M2 2.5h8v5.5H5l-2.5 2v-2H2z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Deposit instructions: bank details, reference, and the WhatsApp group link.
 * Used on the booking form's last step and on the thank-you page.
 */
export function PaymentDetails({
  country,
  name,
}: {
  country?: "GB" | "NG" | "OTHER";
  name?: string;
}) {
  const reference = name?.trim() || payment.reference;
  const showNg = country === "NG";

  return (
    <div className="flex flex-col gap-8">
      <ol className="flex flex-col gap-3">
        {payment.instructions.map((step, i) => (
          <li key={step} className="grid grid-cols-[2rem_1fr] items-baseline gap-2 text-base">
            <span className="label text-faint">{String(i + 1).padStart(2, "0")}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

      {showNg ? (
        <div>
          <Label>{payment.ng.label}</Label>
          <p className="mt-3 max-w-prose text-base">{payment.ng.note}</p>
          {payment.ng.accountNumber ? (
            <dl className="mt-4 border-t border-border">
              <Row k="Account name" v={payment.ng.accountName} />
              <Row k="Bank" v={payment.ng.bank} />
              <Row k="Account number" v={payment.ng.accountNumber} />
              <Row k="Reference" v={reference} />
            </dl>
          ) : null}
        </div>
      ) : (
        <div>
          <Label>{payment.uk.label}</Label>
          <dl className="mt-4 border-t border-border">
            <Row k="Account name" v={payment.uk.accountName} />
            <Row k="Bank" v={payment.uk.bank} />
            <Row k="Sort code" v={payment.uk.sortCode} />
            <Row k="Account number" v={payment.uk.accountNumber} />
            <Row k="Amount" v={`${trip.deposit} deposit`} />
            <Row k="Reference" v={reference} />
          </dl>
          {payment.uk.note ? <p className="mt-4 max-w-prose text-sm text-muted">{payment.uk.note}</p> : null}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <Button href={payment.whatsappGroup} size="lg" target="_blank" rel="noopener">
          <WhatsAppIcon />
          Join the WhatsApp group
        </Button>
        <span className="text-sm text-muted">Post your proof of payment there.</span>
      </div>
    </div>
  );
}
