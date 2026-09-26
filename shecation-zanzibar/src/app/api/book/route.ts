import { NextResponse } from "next/server";
import { countryLabels, validateBooking, type BookingRecord } from "@/lib/booking";

export const runtime = "nodejs";

const NOTIFY_EMAIL = process.env.BOOKING_NOTIFY_EMAIL ?? "shereconnects@gmail.com";
const FROM_EMAIL = process.env.BOOKING_FROM_EMAIL ?? "SHE-CATION Bookings <onboarding@resend.dev>";

/** Email the organisers through Resend's REST API (no SDK needed). */
async function sendEmail(record: BookingRecord) {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");

  const rows: [string, string][] = [
    ["Name", record.name],
    ["Email", record.email],
    ["Phone / WhatsApp", record.phone],
    ["Paying from", record.countryLabel],
    ["Room sharing accepted", "Yes"],
    ["Trip terms accepted", "Yes"],
    ["Submitted", record.submittedAt],
  ];
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<h2 style="font-family:sans-serif">New SHE-CATION 4.0 booking</h2>
<table style="font-family:sans-serif;border-collapse:collapse">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#666">${k}</td><td style="padding:6px 0"><strong>${escapeHtml(v)}</strong></td></tr>`,
    )
    .join("")}</table>
<p style="font-family:sans-serif;color:#666">Deposit: pending. Confirm proof of payment in the WhatsApp group.</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [NOTIFY_EMAIL],
      reply_to: record.email,
      subject: `New booking: ${record.name} (${record.countryLabel})`,
      text,
      html,
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

/** Append a row to the Google Sheet through an Apps Script web app (see docs/BOOKINGS.md). */
async function appendToSheet(record: BookingRecord) {
  const url = process.env.SHEETS_WEBHOOK_URL;
  if (!url) throw new Error("SHEETS_WEBHOOK_URL is not set");
  const secret = process.env.SHEETS_WEBHOOK_SECRET ?? "";

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    redirect: "follow", // Apps Script answers POSTs with a redirect
    body: JSON.stringify({
      secret,
      submittedAt: record.submittedAt,
      name: record.name,
      email: record.email,
      phone: record.phone,
      country: record.countryLabel,
      roomShare: "Yes",
      terms: "Yes",
      deposit: "Pending",
    }),
  });
  if (!res.ok) throw new Error(`Sheet ${res.status}: ${await res.text()}`);
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] ?? c);
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const { errors, data } = validateBooking(body);
  if (!data) return NextResponse.json({ ok: false, errors }, { status: 400 });

  // Honeypot filled in: pretend success, do nothing.
  if (data.website) return NextResponse.json({ ok: true, email: true, sheet: true });

  const record: BookingRecord = {
    ...data,
    submittedAt: new Date().toISOString(),
    countryLabel: countryLabels[data.country],
  };

  // Local development without keys: log instead of sending. Never active in production.
  if (process.env.NODE_ENV !== "production" && process.env.BOOKING_DRY_RUN === "1") {
    console.log("[booking dry run]", record);
    return NextResponse.json({ ok: true, email: false, sheet: false, dryRun: true });
  }

  const [emailResult, sheetResult] = await Promise.allSettled([
    sendEmail(record),
    appendToSheet(record),
  ]);
  const email = emailResult.status === "fulfilled";
  const sheet = sheetResult.status === "fulfilled";
  if (!email) console.error("Booking email failed:", (emailResult as PromiseRejectedResult).reason);
  if (!sheet) console.error("Booking sheet failed:", (sheetResult as PromiseRejectedResult).reason);

  if (!email && !sheet) {
    return NextResponse.json(
      { ok: false, errors: ["We could not save your booking. Please try again or message us on WhatsApp."] },
      { status: 502 },
    );
  }
  // Short, key-free reasons so failures are visible without server log access.
  const reason = (r: PromiseSettledResult<void>) =>
    r.status === "rejected" ? String((r.reason as Error)?.message ?? r.reason).slice(0, 240) : undefined;
  return NextResponse.json({ ok: true, email, sheet, emailError: reason(emailResult), sheetError: reason(sheetResult) });
}
