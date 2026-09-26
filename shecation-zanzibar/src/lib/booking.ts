/**
 * Booking submission: shared types and validation for the form and the API route.
 */

export type BookingPayload = {
  name: string;
  email: string;
  phone: string;
  country: "GB" | "NG" | "OTHER";
  roomShare: boolean;
  consent: boolean;
  terms: { deposit: boolean; flights: boolean; sharing: boolean };
  /** Honeypot: real users never fill this. */
  website?: string;
};

export type BookingRecord = BookingPayload & {
  submittedAt: string;
  countryLabel: string;
};

export const countryLabels: Record<BookingPayload["country"], string> = {
  GB: "United Kingdom",
  NG: "Nigeria",
  OTHER: "Other",
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Returns a list of problems; empty means valid. */
export function validateBooking(input: unknown): { errors: string[]; data?: BookingPayload } {
  const errors: string[] = [];
  if (!input || typeof input !== "object") return { errors: ["Invalid submission."] };
  const b = input as Record<string, unknown>;

  const name = String(b.name ?? "").trim();
  const email = String(b.email ?? "").trim();
  const phone = String(b.phone ?? "").trim();
  const country = String(b.country ?? "");
  const terms = (b.terms ?? {}) as Record<string, unknown>;

  if (name.length < 2 || name.length > 120) errors.push("Please enter your full name.");
  if (!emailRe.test(email) || email.length > 200) errors.push("Please enter a valid email address.");
  if (phone.replace(/\D/g, "").length < 7 || phone.length > 40) errors.push("Please enter a valid phone number.");
  if (!["GB", "NG", "OTHER"].includes(country)) errors.push("Please choose a country.");
  if (b.roomShare !== true) errors.push("Please confirm the room-sharing basis.");
  if (b.consent !== true) errors.push("Please accept the privacy policy.");
  if (terms.deposit !== true || terms.flights !== true || terms.sharing !== true)
    errors.push("Please confirm the trip terms.");

  if (errors.length) return { errors };
  return {
    errors,
    data: {
      name,
      email,
      phone,
      country: country as BookingPayload["country"],
      roomShare: true,
      consent: true,
      terms: { deposit: true, flights: true, sharing: true },
      website: typeof b.website === "string" ? b.website : "",
    },
  };
}
