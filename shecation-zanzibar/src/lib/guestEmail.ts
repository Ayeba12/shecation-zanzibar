import type { BookingRecord } from "@/lib/booking";
import { payment, pricing, trip } from "@/lib/content";
import { privacyMeta } from "@/lib/privacy";

const SITE = "https://shecation.she-reconnects.com";

/** Brand tokens from globals.css, flattened to hex for email clients. */
const C = {
  pink: "#d52e68",
  turquoise: "#21b8c7",
  sky: "#58d4de",
  sunshine: "#f4dd17",
  navy: "#18263d",
  cream: "#fff8f4",
  sand: "#f5e8d7",
  white: "#ffffff",
  muted: "#6b727f", // navy at 64% on cream
  faint: "#999ca4", // navy at 44% on cream
  line: "#dfdbda", // navy at 14% on cream
  lineOnSand: "#d6cfc5",
};

/** Quicksand + Spline Sans load where the client allows web fonts (Apple Mail, iOS); others fall back. */
const DISPLAY = "'Quicksand','Trebuchet MS',Arial,sans-serif";
const BODY = "'Spline Sans',Helvetica,Arial,sans-serif";

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] ?? c);
}

/** Micro uppercase label (the site's `label` utility). */
const label = (color: string = C.faint) =>
  `font-family:${BODY};font-size:11px;line-height:16px;letter-spacing:.12em;text-transform:uppercase;color:${color}`;

/**
 * Confirmation email sent to the guest right after step 2 of the booking form:
 * the SHE-CATION 4.0 flyer, the bank details, her payment reference, the
 * WhatsApp group link and the instalment plan, so she does not need to
 * screenshot step 3. Table layout and inline styles for email clients.
 */
export function buildGuestEmail(record: BookingRecord) {
  const first = record.name.trim().split(/\s+/)[0] || "there";
  const reference = record.name.trim();
  const ng = record.country === "NG";

  // Guests paying from Nigeria arrange the payment with the organisers, so they get no account rows.
  const bankRows: [string, string][] = ng
    ? [
        ["Amount", `${trip.deposit} deposit`],
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
  const steps = ng ? payment.ngInstructions : payment.instructions;
  const phones = trip.phones.map((p) => `${p.label} ${p.number}`).join(" · ");

  const subject = `Your ${trip.name} place: how to pay the ${trip.deposit} deposit`;
  const preheader = `Your place on ${trip.name} Zanzibar is reserved. Here is how to pay your ${trip.deposit} deposit and join the group.`;

  /* ---------------- Plain text ---------------- */
  const text = [
    `Hi ${first},`,
    ``,
    `Thank you for reserving your place on ${trip.name} Zanzibar (${trip.dates}). Here is everything you need to pay your ${trip.deposit} deposit.`,
    ``,
    ...(ng
      ? [
          `1. ${steps[0]}`,
          `   ${payment.whatsappGroup}`,
          ``,
          `2. ${steps[1]}`,
          ...bankRows.map(([k, v]) => `   ${k}: ${v}`),
          ``,
          `3. ${steps[2]}`,
        ]
      : [
          `1. ${steps[0]}`,
          ...bankRows.map(([k, v]) => `   ${k}: ${v}`),
          `   ${bankNote}`,
          ``,
          `2. ${steps[1]}`,
          `   ${payment.whatsappGroup}`,
          ``,
          `3. ${steps[2]}`,
        ]),
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

  /* ---------------- HTML pieces ---------------- */
  const detailsCard = `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:16px;background:${C.sand};border-radius:16px">
    <tr><td style="padding:8px 24px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${bankRows
          .map(
            ([k, v], i) => `<tr>
          <td style="padding:14px 16px 14px 0;${i ? `border-top:1px solid ${C.lineOnSand};` : ""}${label(C.muted)};white-space:nowrap">${esc(k)}</td>
          <td align="right" style="padding:14px 0;${i ? `border-top:1px solid ${C.lineOnSand};` : ""}font-family:${DISPLAY};font-weight:600;font-size:17px;line-height:24px;color:${C.navy}">${esc(v)}</td>
        </tr>`,
          )
          .join("")}
      </table>
    </td></tr>
  </table>
  <p style="margin:12px 0 0;font-family:${BODY};font-size:14px;line-height:20px;color:${C.muted}">${esc(bankNote)}</p>`;

  const groupButton = `
  <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:16px"><tr>
    <td bgcolor="${C.pink}" style="border-radius:999px;background:${C.pink}">
      <a href="${payment.whatsappGroup}" style="display:inline-block;padding:16px 28px;font-family:${BODY};font-size:13px;line-height:16px;letter-spacing:.08em;text-transform:uppercase;color:${C.white};text-decoration:none">Join the WhatsApp group</a>
    </td>
  </tr></table>`;

  const stepRow = (n: string, title: string, body: string, isFirst = false) => `
  <tr>
    <td class="px" style="padding:${isFirst ? 0 : 28}px 40px 0">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="${isFirst ? "" : `border-top:1px solid ${C.line};`}">
        <tr>
          <td width="44" valign="top" style="padding-top:${isFirst ? 5 : 33}px;${label()}">${n}</td>
          <td valign="top" style="padding-top:${isFirst ? 0 : 28}px">
            <p style="margin:0;font-family:${DISPLAY};font-weight:600;font-size:18px;line-height:26px;color:${C.navy}">${esc(title)}</p>
            ${body}
          </td>
        </tr>
      </table>
    </td>
  </tr>`;

  const stepsHtml = ng
    ? stepRow("01", steps[0], groupButton, true) + stepRow("02", steps[1], detailsCard) + stepRow("03", steps[2], "")
    : stepRow("01", steps[0], detailsCard, true) + stepRow("02", steps[1], groupButton) + stepRow("03", steps[2], "");

  const fact = (k: string, v: string, note: string) => `
      <td class="fact" width="33%" valign="top" style="padding:0 12px 18px 0">
        <p style="margin:0;${label("#9aa6b8")}">${esc(k)}</p>
        <p style="margin:6px 0 0;font-family:${DISPLAY};font-weight:600;font-size:22px;line-height:28px;color:${C.white}">${esc(v)}</p>
        <p style="margin:2px 0 0;font-family:${BODY};font-size:13px;line-height:18px;color:#c3cad6">${esc(note)}</p>
      </td>`;

  const planRows = pricing.schedule
    .map(
      (r) => `<tr>
        <td style="padding:14px 12px 14px 0;border-top:1px solid ${C.line};font-family:${DISPLAY};font-weight:600;font-size:16px;line-height:22px;color:${C.navy}">${esc(r.stage)}</td>
        <td style="padding:14px 12px 14px 0;border-top:1px solid ${C.line};font-family:${BODY};font-size:14px;line-height:20px;color:${C.muted}">${esc(r.due)}</td>
        <td align="right" style="padding:14px 0;border-top:1px solid ${C.line};font-family:${DISPLAY};font-weight:600;font-size:16px;line-height:22px;color:${C.navy}">${esc(r.amount)}</td>
      </tr>`,
    )
    .join("");

  const link = (href: string, textValue: string, color: string = C.navy) =>
    `<a href="${href}" style="color:${color};text-decoration:underline">${esc(textValue)}</a>`;

  /* ---------------- HTML ---------------- */
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>${esc(subject)}</title>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@600&family=Spline+Sans:wght@400;500&display=swap" rel="stylesheet">
<style>
  @media (max-width:620px){
    .px{padding-left:20px!important;padding-right:20px!important}
    .h1{font-size:30px!important;line-height:34px!important}
    .fact{display:block!important;width:100%!important}
    .hide-sm{display:none!important}
  }
</style>
</head>
<body style="margin:0;padding:0;background:${C.cream};-webkit-text-size-adjust:100%">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent">${esc(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.cream}">
<tr><td align="center" style="padding:24px 12px 40px">

<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:${C.cream}">

  <!-- Header: logo + meta label -->
  <tr>
    <td class="px" style="padding:8px 40px 20px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
        <td valign="middle">
          <a href="${SITE}" style="text-decoration:none;color:${C.navy}">
            <img src="${SITE}/email/logo.png" width="32" height="32" alt="" style="display:inline-block;vertical-align:middle;border:0">
            <span style="display:inline-block;vertical-align:middle;padding-left:8px;font-family:${DISPLAY};font-weight:600;font-size:18px;line-height:24px;color:${C.navy}">${esc(trip.brand)}</span>
          </a>
        </td>
        <td class="hide-sm" align="right" valign="middle" style="${label(C.muted)}">${esc(trip.name)} · ${esc(trip.dates)}</td>
      </tr></table>
    </td>
  </tr>

  <!-- Flyer -->
  <tr>
    <td class="px" style="padding:0 40px">
      <a href="${SITE}" style="text-decoration:none">
        <img src="${SITE}/email/shecation-4-flyer.jpg" width="520" alt="SHE-CATION 4.0 Zanzibar, 9th to 13th March 2027. Package price £1,100 per person. More than a trip. It's an experience designed for you." style="display:block;width:100%;max-width:520px;height:auto;border:0;border-radius:16px">
      </a>
    </td>
  </tr>

  <!-- Greeting -->
  <tr>
    <td class="px" style="padding:36px 40px 0">
      <p style="margin:0;${label(C.pink)}">&#9679;&nbsp; Details received</p>
      <h1 class="h1" style="margin:14px 0 0;font-family:${DISPLAY};font-weight:600;font-size:36px;line-height:40px;letter-spacing:-0.02em;color:${C.navy}">Hi ${esc(first)}, your place is reserved.</h1>
      <p style="margin:16px 0 0;font-family:${BODY};font-size:16px;line-height:24px;color:${C.navy}">Thank you for reserving your place on ${esc(trip.name)} Zanzibar. Here is everything you need to pay your ${esc(trip.deposit)} deposit, so you do not need to screenshot anything.</p>
    </td>
  </tr>

  <!-- Three steps -->
  <tr><td class="px" style="padding:36px 40px 12px"><p style="margin:0;${label()}">Three steps to secure your spot</p></td></tr>
  ${stepsHtml}

  <!-- Key facts (navy panel) -->
  <tr>
    <td class="px" style="padding:40px 40px 0">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.navy};border-radius:16px">
        <tr><td style="padding:28px 28px 10px">
          <p style="margin:0 0 18px;${label(C.sunshine)}">Your trip at a glance</p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
            ${fact("Dates", trip.dates, `${trip.duration}, ${trip.resort}`)}
            ${fact("Package", pricing.total, "Per person, flights not included")}
            ${fact("Deposit", trip.deposit, "Non-refundable, secures your place")}
          </tr></table>
        </td></tr>
      </table>
    </td>
  </tr>

  <!-- Payment plan -->
  <tr>
    <td class="px" style="padding:40px 40px 0">
      <p style="margin:0 0 12px;${label()}">Payment plan</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${planRows}
        <tr>
          <td style="padding:16px 12px 16px 0;border-top:1px solid ${C.line};border-bottom:1px solid ${C.line};font-family:${DISPLAY};font-weight:600;font-size:16px;line-height:22px;color:${C.navy}">Total</td>
          <td style="padding:16px 12px 16px 0;border-top:1px solid ${C.line};border-bottom:1px solid ${C.line}">&nbsp;</td>
          <td align="right" style="padding:16px 0;border-top:1px solid ${C.line};border-bottom:1px solid ${C.line};font-family:${DISPLAY};font-weight:600;font-size:22px;line-height:28px;color:${C.pink}">${esc(pricing.total)}</td>
        </tr>
      </table>
      <p style="margin:16px 0 0;font-family:${BODY};font-size:13px;line-height:20px;color:${C.muted}">Flights to Zanzibar are not included in the ${esc(pricing.total)}. The package is based on two people sharing a room. The ${esc(trip.deposit)} deposit is non-refundable. ${link(`${SITE}/booking-terms`, "Booking terms")} · ${link(`${SITE}/refund-policy`, "Refund policy")}</p>
    </td>
  </tr>

  <!-- Sign-off -->
  <tr>
    <td class="px" style="padding:36px 40px 0">
      <p style="margin:0;font-family:${BODY};font-size:16px;line-height:24px;color:${C.navy}">See you in Zanzibar,</p>
      <p style="margin:4px 0 0;font-family:${DISPLAY};font-weight:600;font-size:20px;line-height:28px;color:${C.navy}">Dinma and Bokun</p>
      <p style="margin:2px 0 0;${label(C.muted)}">${esc(trip.brand)}</p>
    </td>
  </tr>

  <!-- Footer (navy) -->
  <tr>
    <td class="px" style="padding:40px 40px 0">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.navy};border-radius:16px">
        <tr><td style="padding:28px">
          <p style="margin:0;${label("#9aa6b8")}">Questions? We are one message away</p>
          <p style="margin:12px 0 0;font-family:${DISPLAY};font-weight:600;font-size:18px;line-height:28px;color:${C.white}">
            <a href="mailto:${trip.email}" style="color:${C.white};text-decoration:none">${esc(trip.email)}</a><br>
            ${trip.phones
              .map(
                (p) =>
                  `<a href="https://wa.me/${p.wa}" style="color:${C.white};text-decoration:none">${esc(p.number)}</a> <span style="${label("#9aa6b8")}">&nbsp;${esc(p.label)} · WhatsApp</span>`,
              )
              .join("<br>")}
          </p>
          <p style="margin:22px 0 0;font-family:${DISPLAY};font-weight:600;font-size:34px;line-height:36px;letter-spacing:-0.03em;text-transform:uppercase;color:${C.white}">${esc(trip.name.split(" ")[0])}</p>
          <p style="margin:6px 0 0;font-family:${BODY};font-size:13px;line-height:20px;color:#c3cad6">More than a trip. It's an experience designed for you.</p>
          <p style="margin:18px 0 0;font-family:${BODY};font-size:12px;line-height:18px;color:#9aa6b8">
            ${esc(privacyMeta.controller)}, ${esc(privacyMeta.address)}<br>
            ${link(`${SITE}`, "Website", C.sky)} &nbsp;·&nbsp; ${link(`${SITE}/privacy`, "Privacy", C.sky)} &nbsp;·&nbsp; ${link(`${SITE}/booking-terms`, "Booking terms", C.sky)} &nbsp;·&nbsp; ${link(`${SITE}/refund-policy`, "Refund policy", C.sky)}
          </p>
          <p style="margin:12px 0 0;font-family:${BODY};font-size:12px;line-height:18px;color:#9aa6b8">You are receiving this because you reserved a place on ${esc(trip.name)} at shecation.she-reconnects.com.</p>
        </td></tr>
      </table>
    </td>
  </tr>

</table>

</td></tr>
</table>
</body>
</html>`;

  return { subject, text, html };
}
