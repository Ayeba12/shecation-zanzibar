import { pricing, trip } from "./content";
import { privacyMeta, type PolicySection } from "./privacy";

/**
 * Website terms of use and SHE-CATION booking terms.
 * Facts come from the website brief. Items marked TODO need client confirmation
 * or approval (cancellation policy, single occupancy, late payment, governing law).
 * Have a legal adviser review before launch.
 */

const org = privacyMeta.controller;
const email = privacyMeta.email;

/* ------------------------------------------------------------------ */
/* Website terms                                                        */
/* ------------------------------------------------------------------ */

export const termsMeta = {
  title: "Terms of Use",
  lastUpdated: "26 September 2026",
  intro:
    "These terms cover your use of this website. Booking a place on SHE-CATION is covered separately by our Booking Terms.",
};

export const termsSections: PolicySection[] = [
  {
    id: "about",
    title: "About these terms",
    paragraphs: [
      `This website is run by ${org} to present SHE-CATION 4.0 Zanzibar and take bookings. By using the site you agree to these terms. If you do not agree, please do not use the site.`,
      "If you go on to book a place, the Booking Terms also apply. Where the two conflict about a booking, the Booking Terms take priority.",
    ],
  },
  {
    id: "information",
    title: "Trip information",
    paragraphs: [
      "We work hard to keep the trip details on this site accurate: dates, price, what is included, the resort and the activities. Details can change for reasons outside our control, such as availability, weather or local conditions. The information that applies to your booking is the information confirmed to you in writing when you book.",
      "Prices are shown in pounds sterling per person, based on two people sharing a room, and exclude flights. Nothing on this site is an offer that can be accepted simply by paying; a booking is only confirmed as described in the Booking Terms.",
    ],
  },
  {
    id: "using-the-site",
    title: "Using the site",
    bullets: [
      "Use the site only for lawful purposes and for finding out about, or booking, SHE-CATION.",
      "Give accurate information in the booking form and keep it up to date.",
      "Do not attempt to interfere with the site, its security, or the payment process.",
      "Do not copy, scrape or reuse the content of the site for commercial purposes without our permission.",
    ],
  },
  {
    id: "content",
    title: "Content and photography",
    paragraphs: [
      `The text, design and branding on this site belong to ${org} or are used with permission. Photography is used under licence, including images from Unsplash and photographs supplied by our community. You may share links to the site freely, but please do not reuse the images or copy without asking.`,
      "Photos and testimonials from previous SHE-CATION trips are shared with the consent of the women in them. If you appear in an image and would like it removed, contact us.",
    ],
  },
  {
    id: "third-parties",
    title: "Third-party services and links",
    paragraphs: [
      "Payments are handled by a third-party payment provider, and we use messaging, email and analytics tools described in our Privacy Policy. The site may link to other websites, such as the resort or a visa service. We are not responsible for the content or practices of those sites.",
    ],
  },
  {
    id: "liability",
    title: "Liability",
    paragraphs: [
      "We provide this site as it is. We do not promise that it will always be available or free of errors. To the extent the law allows, we are not liable for losses caused by using the site or relying on information on it. Nothing in these terms limits liability that cannot be limited by law, including for death or personal injury caused by negligence.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy",
    paragraphs: [
      "How we handle your personal information is explained in our Privacy Policy, which forms part of these terms.",
    ],
  },
  {
    id: "changes",
    title: "Changes",
    paragraphs: [
      "We may update these terms from time to time. The date at the top shows when they were last changed. Continuing to use the site after a change means you accept the updated terms.",
    ],
  },
  {
    id: "law",
    title: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of England and Wales, and the courts of England and Wales have jurisdiction over any dispute about them. If you live elsewhere, you may also have rights under the laws of your own country.", // TODO: confirm governing law
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [`Questions about these terms? Email ${email} or message the organisers, ${trip.organisers}, on WhatsApp.`],
  },
];

/* ------------------------------------------------------------------ */
/* Booking terms                                                        */
/* ------------------------------------------------------------------ */

export const bookingTermsMeta = {
  title: "Booking Terms",
  lastUpdated: "26 September 2026",
  intro:
    "The terms of your place on SHE-CATION 4.0 Zanzibar: what you are booking, how you pay, and what happens if plans change.",
  notice:
    "The payment schedule, booking deadline and cancellation policy below are the recommended terms and are subject to final approval by SHE-Reconnects before launch.",
};

const schedule = pricing.schedule.map((row) => `${row.stage}: ${row.amount}, due ${row.due}.`);

export const bookingTermsSections: PolicySection[] = [
  {
    id: "the-trip",
    title: "What you are booking",
    paragraphs: [
      `SHE-CATION 4.0 is a group getaway to Zanzibar, Tanzania, organised by ${org}, from ${trip.dates} (${trip.duration}). The package price is ${trip.price} ${trip.priceNote}, based on two people sharing a room at ${trip.resort}.`,
      "Your package includes:",
    ],
    bullets: [
      "4 nights / 5 days at Tembo Resort",
      "Breakfast, lunch and dinner during the resort stay",
      "Private airport transfers to and from the hotel",
      "Curated Zanzibar activities and experiences",
      "Tourist tax",
      "Visa fees",
      "Travel insurance",
      "SHE-Reconnects support throughout the trip",
    ],
    after: [
      "Flights to and from Zanzibar are not included. You book and pay for your own flights, following the arrival and departure guidance we send you.",
    ],
  },
  {
    id: "securing",
    title: "Securing your place",
    paragraphs: [
      `To book, complete the booking form, accept these terms and pay the ${trip.deposit} deposit. Your place is confirmed when we have received both your form and your deposit, and we confirm it to you by email or WhatsApp. Places are limited and are allocated in the order deposits are received.`,
      `Bookings close on ${trip.bookingDeadline}, or earlier if all places are taken.`,
      `The ${trip.deposit} deposit is ${trip.depositNote}.`,
    ],
  },
  {
    id: "payment",
    title: "Paying the balance",
    paragraphs: ["The balance is paid in instalments:"],
    bullets: schedule,
    after: [
      `Total: ${pricing.total} per person.`,
      "We will send a reminder before each instalment is due. If a payment is more than 14 days late and we have not agreed a new date with you, we may treat the booking as cancelled and release your place. Any amounts already paid are handled under the cancellation section below.", // TODO: confirm late-payment rule
      `Paying from Nigeria? Contact ${trip.organisers} for the current exchange rate and payment route before making any payment. Amounts are set in pounds sterling; the naira equivalent is confirmed at the time of each payment.`,
      "Payments made online are processed by our payment provider. We do not store your card details.",
    ],
  },
  {
    id: "room-sharing",
    title: "Room sharing",
    paragraphs: [
      "The price is based on two people sharing a room. You can tell us who you would like to share with; otherwise we will pair you with another SHE-CATION guest. Single occupancy is not part of the standard package. If it becomes available, we will confirm the supplement in writing before you commit.", // TODO: single occupancy policy
    ],
  },
  {
    id: "cancellation",
    title: "Cancellation and refunds",
    paragraphs: ["If you need to cancel, tell us in writing by email or WhatsApp as soon as possible."],
    bullets: [
      `The ${trip.deposit} deposit is non-refundable in all cases.`,
      "Cancellation on or before 31 January 2027: instalments already paid are refunded, less the deposit and any costs our partners have already charged us for your place.", // TODO: confirm
      "Cancellation after 31 January 2027: no refund, as by then the resort, transfers, visa and insurance have been committed.", // TODO: confirm
      "You may transfer your place to another woman who meets the trip requirements, subject to our written agreement and any name-change costs from our partners.",
    ],
    after: [
      "Travel insurance is included in your package. Depending on the policy terms, some cancellation reasons, such as illness, may be claimable. We will help you with the details.",
    ],
  },
  {
    id: "our-changes",
    title: "If we change or cancel the trip",
    paragraphs: [
      "We may need to change parts of the itinerary, such as the order of activities or a specific venue, because of weather, availability or safety. We will offer an equivalent alternative where we can. Minor changes do not entitle you to a refund.",
      "If we have to cancel the whole trip for reasons within our control, we will refund everything you have paid, including the deposit. If cancellation is caused by events outside our control, such as government travel restrictions, natural disaster or the closure of the resort, we will refund what we are able to recover from our partners and help you claim the rest through the included travel insurance.",
    ],
  },
  {
    id: "travel-documents",
    title: "Passports, visas and insurance",
    bullets: [
      "You must hold a passport valid for at least six months beyond your return date, with blank pages for the visa.",
      "Your visa fee is included, and we will arrange the application with you. You are responsible for supplying accurate documents on time. If a visa is refused for reasons relating to you, our cancellation terms apply.",
      "Travel insurance is included. We will share the policy summary before departure. Please read it and tell us if you need more cover, for example for a pre-existing medical condition.",
      "We collect passport and travel details later through a secure process, never through the public booking form.",
    ],
  },
  {
    id: "flights",
    title: "Flights",
    paragraphs: [
      "Flights are not included. Please wait for our arrival and departure guidance before booking, so that your flights match the group transfers. If you arrive or leave outside the group transfer times, any extra transfer cost is yours. We are not responsible for flight delays or cancellations, though we will do our best to help.",
    ],
  },
  {
    id: "health",
    title: "Health, safety and conduct",
    bullets: [
      "Tell us about any medical condition, dietary need or mobility requirement that could affect your trip, so we can plan for it.",
      "Some activities, such as kayaking and boat trips, involve water and physical activity. Take part only if you are comfortable doing so and follow the operator's safety instructions.",
      "SHE-CATION is built on respect and sisterhood. We expect every guest to treat other guests, the organisers, our partners and local communities with kindness. Behaviour that is dangerous, abusive or seriously disruptive may lead to you being asked to leave the trip without a refund.",
      "Follow local laws and customs in Zanzibar, including guidance on dress in towns and villages.",
    ],
  },
  {
    id: "photography",
    title: "Photography and social media",
    paragraphs: [
      `We take photos and video during SHE-CATION to share with the group and to promote future editions. If you would prefer not to appear in promotional content, tell us before the trip and we will respect that. Photos shared privately within the group are for personal use only.`,
    ],
  },
  {
    id: "liability",
    title: "Our responsibility",
    paragraphs: [
      `${org} arranges the trip using independent suppliers: the resort, transfer companies, activity operators, the visa service and the insurer. We choose them with care, but they are responsible for their own services. We are not liable for loss, injury or damage caused by a supplier, by events outside our control, or by your own actions, except where the law says otherwise. Nothing in these terms limits liability for death or personal injury caused by our negligence.`,
    ],
  },
  {
    id: "complaints",
    title: "Problems and complaints",
    paragraphs: [
      "If something is not right during the trip, tell an organiser straight away so we can fix it there and then. If you are still unhappy afterwards, email us within 28 days of returning and we will look into it.",
    ],
  },
  {
    id: "law",
    title: "Governing law",
    paragraphs: [
      "These booking terms are governed by the laws of England and Wales. If you live in another country, you may also have rights under your local consumer law.", // TODO: confirm governing law
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [`${org}, ${privacyMeta.address}. Email ${email} or WhatsApp ${trip.phones.map((p) => `${p.number} (${p.label})`).join(" or ")}. Ask for ${trip.organisers}.`],
  },
];
