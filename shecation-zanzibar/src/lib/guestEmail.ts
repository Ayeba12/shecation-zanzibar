import type { BookingRecord } from "@/lib/booking";
import { payment, pricing, trip } from "@/lib/content";

const SITE = "https://shecation.she-reconnects.com";

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] ?? c);
}

/**
 * Confirmation email sent to the guest right after step 2 of the booking form:
 * the bank details, her payment reference, the WhatsApp group link and the
 * instalment plan, so she does not need to screenshot step 3.
 */
export function buildGuestEmail(record: BookingRecord) {
  const first = record.name.trim().split(/\s+/)[0] || "there";
  const reference = record.name.trim();
  const ng = record.country === "NG";

  const bankRows: [string, string][] = ng && payment.ng.accountNumber
    ? [
        ["Account name", payment.ng.accountName],
        ["Bank", payment.ng.bank],
        ["Account number", payment.ng.accountNumber],
        ["Reference", reference],
      ]
    : [
        ["Account name", payment.uk.accountName],
        ["Bank", payment.uk.bank],
        ["Sort code", payment.uk.sortCode],
        ["Account number", payment.uk.accountNumber],
        ["Amount", `${trip.deposit} deposit`],
        ["Reference", reference],
      ];
  const bankNote = ng ? payment.ng.note : payment.uk.note;
  const phones = trip.phones.map((p) => `${p.label} ${p.number}`).join(" · ");

  const subject = `Your ${trip.name} place: how to pay the ${trip.deposit} deposit`;

  const text = [
    `Hi ${first},`,
    ``,
    `Thank you for reserving your place on ${trip.name} Zanzibar (${trip.dates}). Here is everything you need to pay your ${trip.deposit} deposit.`,
    ``,
    `1. Pay the ${trip.deposit} deposit by bank transfer${ng ? "" : ` (${payment.uk.label})`}:`,
    ...bankRows.map(([k, v]) => `   ${k}: ${v}`),
    `   ${bankNote}`,
    ``,
    `2. Join the WhatsApp group and post your proof of payment there:`,
    `   ${payment.whatsappGroup}`,
    ``,
    `3. ${trip.organisers} will confirm your place in the group.`,
    ``,
    `Payment plan (${pricing.total} per person, flights not included):`,
    ...pricing.schedule.map((r) => `   ${r.stage}: ${r.amount}, due ${r.due}`),
    ``,
    `The ${trip.deposit} deposit is non-refundable. Booking terms: ${SITE}/booking-terms. Refund policy: ${SITE}/refund-policy.`,
    ``,
    `Questions? Email ${trip.email} or WhatsApp ${phones}.`,
    ``,
    `See you in Zanzibar,`,
    `Dinma and Bokun`,
    trip.brand,
  ].join("\n");

  const row = (k: string, v: string) =>
    `<tr><td style="padding:8px 16px 8px 0;color:#6b7280;font-size:12px;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap">${esc(k)}</td><td style="padding:8px 0;font-weight:600;color:#18263d">${esc(v)}</td></tr>`;
  const step = (n: string, body: string) =>
    `<tr><td style="padding:0 16px 20px 0;vertical-align:top;color:#9ca3af;font-size:12px;letter-spacing:.12em">${n}</td><td style="padding:0 0 20px;vertical-align:top">${body}</td></tr>`;

  const html = `<!doctype html><html><body style="margin:0;background:#fff8f4;font-family:Helvetica,Arial,sans-serif;color:#18263d">
<div style="max-width:600px;margin:0 auto;padding:32px 20px">
  <p style="margin:0 0 24px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#d52e68">${esc(trip.brand)} · ${esc(trip.name)} · ${esc(trip.dates)}</p>
  <h1 style="margin:0 0 16px;font-size:28px;line-height:1.15;font-weight:600">Hi ${esc(first)}, your place is reserved.</h1>
  <p style="margin:0 0 28px;font-size:16px;line-height:1.5">Thank you for reserving your place on ${esc(trip.name)} Zanzibar. Here is everything you need to pay your ${esc(trip.deposit)} deposit, so you do not need to screenshot anything.</p>

  <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;font-size:16px;line-height:1.5">
    ${step("01", `<strong>Pay the ${esc(trip.deposit)} deposit by bank transfer.</strong>
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:12px;width:100%;background:#ffffff;border:1px solid #f0e4d6;border-radius:12px;padding:8px 16px;font-size:16px">${bankRows.map(([k, v]) => row(k, v)).join("")}</table>
      <p style="margin:10px 0 0;font-size:14px;color:#6b7280">${esc(bankNote)}</p>`)}
    ${step("02", `<strong>Join the WhatsApp group and post your proof of payment there.</strong><br>
      <a href="${payment.whatsappGroup}" style="display:inline-block;margin-top:12px;background:#d52e68;color:#fff;text-decoration:none;font-size:13px;letter-spacing:.08em;text-transform:uppercase;padding:14px 24px;border-radius:999px">Join the WhatsApp group</a>`)}
    ${step("03", `<strong>${esc(trip.organisers)} will confirm your place in the group.</strong>`)}
  </table>

  <h2 style="margin:12px 0 8px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#6b7280">Payment plan · ${esc(pricing.total)} per person</h2>
  <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;font-size:15px;border-top:1px solid #e5ddd3">
    ${pricing.schedule.map((r) => `<tr><td style="padding:10px 0;border-bottom:1px solid #e5ddd3;font-weight:600">${esc(r.stage)}</td><td style="padding:10px 0;border-bottom:1px solid #e5ddd3;color:#6b7280">${esc(r.due)}</td><td style="padding:10px 0;border-bottom:1px solid #e5ddd3;text-align:right;font-weight:600">${esc(r.amount)}</td></tr>`).join("")}
  </table>
  <p style="margin:12px 0 28px;font-size:13px;color:#6b7280">Flights to Zanzibar are not included in the ${esc(pricing.total)}. The ${esc(trip.deposit)} deposit is non-refundable. <a href="${SITE}/booking-terms" style="color:#18263d">Booking terms</a> · <a href="${SITE}/refund-policy" style="color:#18263d">Refund policy</a></p>

  <p style="margin:0 0 6px;font-size:15px">Questions? Email <a href="mailto:${trip.email}" style="color:#18263d">${trip.email}</a> or WhatsApp ${trip.phones.map((p) => `<a href="https://wa.me/${p.wa}" style="color:#18263d">${esc(p.number)}</a> (${esc(p.label)})`).join(" · ")}.</p>
  <p style="margin:24px 0 0;font-size:15px">See you in Zanzibar,<br><strong>Dinma and Bokun</strong><br><span style="color:#6b7280">${esc(trip.brand)}</span></p>
</div></body></html>`;

  return { subject, text, html };
}
