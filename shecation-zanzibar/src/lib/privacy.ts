/**
 * Privacy policy content for SHE-CATION 4.0 Zanzibar.
 * Written for the booking journey in the website brief (booking form, deposit,
 * instalments, later travel details, WhatsApp/email follow-up, analytics).
 *
 * Organiser name, registered address and contact email were confirmed by the
 * client (29 Sept 2026). Still worth a read by a legal adviser before launch.
 */

export const privacyMeta = {
  title: "Privacy Policy",
  lastUpdated: "29 September 2026",
  controller: "SHE-Reconnects", // confirmed by the client as the organiser name
  address: "226 Sandy Lane, Droylsden, Manchester, England, M43 7JX",
  email: "shereconnects@gmail.com",
};

export type PolicySection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  after?: string[];
};

export const privacySections: PolicySection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    paragraphs: [
      `${privacyMeta.controller} organises SHE-CATION, a recurring ladies' getaway. This policy explains what personal information we collect when you visit this website or book a place on SHE-CATION 4.0 Zanzibar, how we use it, who we share it with and the choices you have.`,
      `${privacyMeta.controller} is the data controller for the information described here. You can contact us at ${privacyMeta.email}.`,
    ],
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    paragraphs: ["We collect only what we need to run the trip and keep you informed."],
    bullets: [
      "Booking details you give us in the booking form: your name, email address, phone or WhatsApp number, the country you are paying from, and your confirmation of the room-sharing and booking terms.",
      "Payment information: the amount, date and status of your deposit and instalments. Card details are entered directly with our payment provider and are never stored on this website.",
      "Travel details you share later through a separate secure process, such as passport information, arrival and departure flights, dietary needs and emergency contacts. We do not ask for these in the public booking form.",
      "Messages you send us by email, WhatsApp or social media, and our replies.",
      "Website usage data such as pages viewed, the device and browser you use, and how you reached the site. This may be collected through cookies and analytics tools described below.",
    ],
  },
  {
    id: "how-we-use",
    title: "How we use your information",
    bullets: [
      "To take and confirm your booking, collect your deposit and instalments, and send reminders when a payment is due.",
      "To organise the trip: accommodation at Tembo Resort, private airport transfers, activities, visa arrangements and travel insurance.",
      "To contact you about your booking, the itinerary, flight guidance and any changes to the trip.",
      "To answer your questions and provide support before, during and after the trip.",
      "To understand how the website is used so we can improve it, and to measure the results of our campaigns.",
      "To meet our legal and accounting obligations and to handle any disputes.",
    ],
  },
  {
    id: "legal-basis",
    title: "Our legal basis",
    paragraphs: [
      "Where UK or European data protection law applies, we rely on the following grounds:",
    ],
    bullets: [
      "Contract: processing your booking, payments and travel arrangements is necessary to provide the trip you have booked.",
      "Legitimate interests: running our community, improving the website and keeping records, in ways you would reasonably expect and that do not override your rights.",
      "Legal obligation: keeping financial records and complying with travel, immigration and insurance requirements.",
      "Consent: for optional marketing messages and for non-essential cookies. You can withdraw consent at any time.",
    ],
  },
  {
    id: "sharing",
    title: "Who we share it with",
    paragraphs: [
      "We never sell your personal information. We share it only with the people and services needed to deliver SHE-CATION:",
    ],
    bullets: [
      "Travel partners: the resort, airport transfer providers, activity operators, the visa service and the travel insurer, so they can provide the services included in your package.",
      "Payment providers: to process your deposit and instalments securely. For payments from Nigeria, the organisers will confirm the exchange rate and payment route with you directly.",
      "Communication and record-keeping tools: the email service that sends us your booking (Resend), the Google Sheet where bookings are recorded, and the WhatsApp groups and messaging services we use to contact you.",
      "Analytics and advertising tools: such as Google Analytics and Meta (Facebook and Instagram) tools, which help us understand website traffic and campaign performance.",
      "Professional advisers and authorities: accountants, insurers, or public authorities where the law requires it.",
    ],
    after: [
      "Each of these partners is only allowed to use your information for the purpose we share it for.",
    ],
  },
  {
    id: "international",
    title: "International transfers",
    paragraphs: [
      "SHE-CATION takes place in Zanzibar, Tanzania, and our community includes women in the United Kingdom, Nigeria and elsewhere. Your information may therefore be shared with partners outside the country you live in, including in Tanzania. Where required, we use appropriate safeguards such as contractual protections and share only the details each partner needs.",
    ],
  },
  {
    id: "retention",
    title: "How long we keep it",
    bullets: [
      "Booking, payment and travel records: for the duration of the trip and for up to six years afterwards, to meet accounting and legal requirements.",
      "Passport and other sensitive travel details: deleted or securely destroyed once they are no longer needed for the trip, unless the law requires us to keep them longer.",
      "Enquiries and messages: for up to two years after our last contact.",
      "Website analytics: according to the retention settings of the analytics tool, typically up to 26 months.",
    ],
  },
  {
    id: "your-rights",
    title: "Your rights",
    paragraphs: ["Depending on where you live, you have the right to:"],
    bullets: [
      "Ask for a copy of the personal information we hold about you.",
      "Ask us to correct information that is wrong or incomplete.",
      "Ask us to delete your information where we no longer need it.",
      "Object to, or ask us to restrict, certain uses of your information.",
      "Receive your information in a portable format.",
      "Withdraw consent at any time where we rely on consent.",
      "Complain to a supervisory authority. In the UK this is the Information Commissioner's Office (ico.org.uk).",
    ],
    after: [
      `To exercise any of these rights, contact us at ${privacyMeta.email}. We will respond within one month.`,
    ],
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    paragraphs: [
      "This website uses a small number of cookies and similar technologies. Essential cookies make the site work. Analytics and advertising cookies, such as those set by Google Analytics and the Meta Pixel, are only used with your consent and help us measure visits and campaign results. You can change your choice at any time through your browser settings or the cookie controls on this site, where available.",
    ],
  },
  {
    id: "security",
    title: "Keeping your information safe",
    paragraphs: [
      "We use secure, encrypted connections for this website and our payment provider, limit access to your details to the organisers who need them, and collect sensitive travel documents only through a secure process rather than the public booking form. No system is completely secure, so please also keep your own login details and devices protected.",
    ],
  },
  {
    id: "age",
    title: "Age",
    paragraphs: [
      "SHE-CATION is for adults. This website and the booking form are not intended for anyone under 18, and we do not knowingly collect information from children.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    paragraphs: [
      "We may update this policy from time to time, for example if we change a partner or add a new tool. The date at the top shows when it was last updated. Significant changes will be announced on this page or by email.",
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    paragraphs: [
      `Questions about privacy or your information? Email ${privacyMeta.email} or write to ${privacyMeta.controller}, ${privacyMeta.address}. You can also reach the organisers, Dinma or Bokun, on WhatsApp.`,
    ],
  },
];
