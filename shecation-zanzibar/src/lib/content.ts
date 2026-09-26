/**
 * All page copy for SHE-CATION 4.0 Zanzibar.
 * Source: "One-Page Website Copy" and "Answered Website Brief" (Sept 2026).
 * Items marked TODO are placeholders awaiting client confirmation.
 */

export const trip = {
  brand: "SHE-Reconnects",
  name: "SHE-CATION 4.0",
  destination: "Zanzibar, Tanzania",
  dates: "9-13 March 2027",
  duration: "5 days / 4 nights",
  resort: "Tembo Resort",
  price: "£1,100",
  priceNote: "per person",
  deposit: "£200",
  depositNote: "non-refundable",
  bookingDeadline: "31 October 2026", // TODO: client approval
  // TODO: replace with confirmed contact details
  whatsapp: "[Insert confirmed WhatsApp number]",
  email: "[Insert confirmed email]",
  organisers: "Dinma or Bokun",
};

export const cta = {
  primary: "Secure Your Spot",
  primaryLong: "Secure Your Spot - £200 non-refundable deposit",
  secondary: "Pay £200 Deposit",
  micro:
    "Flights are not included. Package is based on two people sharing a room. Subject to availability.",
};

export const hero = {
  eyebrow: `${trip.dates}  ·  Zanzibar`,
  title: "Five Days. Zanzibar. Your Girls. Your Reset.",
  intro:
    "SHE-CATION 4.0 is taking the SHE-Reconnects experience to Zanzibar for five beautiful days of rest, laughter, adventure and sisterhood.",
  facts: `${trip.dates} | ${trip.duration} | ${trip.price} ${trip.priceNote}`,
  body:
    "Stay at Tembo Resort, enjoy all-inclusive meals, private airport transfers and curated Zanzibar experiences - with visa fees and travel insurance included.",
};

export const promise = {
  title: "You have been showing up for everyone. This one is for you.",
  lead:
    "Trade the routine for turquoise water, white sand, good food, new experiences and five days with women who came to breathe, laugh, connect and enjoy themselves.",
  body:
    "SHE-CATION is more than somewhere to go. It is the space to pause, reconnect and make the kind of memories you will still be talking about long after the flight home.",
};

export const quickFacts = [
  { label: "When", value: trip.dates },
  { label: "Where", value: trip.destination },
  { label: "Stay", value: trip.resort },
  { label: "Duration", value: trip.duration },
  { label: "Package", value: `${trip.price} ${trip.priceNote}` },
  { label: "Deposit", value: `${trip.deposit} ${trip.depositNote}` },
];

export const included = {
  title: "You show up. We have taken care of the experience.",
  lead:
    "Your £1,100 SHE-CATION package brings the key parts of the trip together so you can spend less time organising and more time enjoying Zanzibar.",
  items: [
    "4 nights / 5 days at Tembo Resort",
    "Breakfast, lunch and dinner during your all-inclusive resort stay",
    "Private airport transfers to and from the hotel",
    "Curated Zanzibar activities and experiences",
    "Tourist tax included",
    "Visa fees included",
    "Travel insurance included",
    "Dedicated SHE-Reconnects support throughout the experience",
  ],
  notIncluded: "Not included: Flights to Zanzibar.",
};

export const moments = {
  title: "This is the kind of trip you remember in scenes.",
  lead:
    "A transparent kayak over clear water. Lunch at The Rock Restaurant with the ocean all around you. Colour, culture and history in Stone Town. Beach time, island views and the freedom to enjoy the moment.",
  items: [
    {
      name: "Transparent Kayak",
      copy: 'Clear water beneath you, camera-ready views around you, and one of those "we are really here" moments.',
      image: "/images/kayak.jpg",
      alt: "Woman paddling a kayak on clear turquoise water",
    },
    {
      name: "The Rock Restaurant",
      copy: "Lunch in one of Zanzibar's most recognisable settings, surrounded by sea and shared with your SHE-CATION sisters.",
      image: "/images/the-rock.jpg",
      alt: "The Rock Restaurant standing on a small rock island in the ocean",
    },
    {
      name: "Stone Town",
      copy: "Step into Zanzibar's historic heart, with its streets, culture, architecture and stories.",
      image: "/images/stone-town-alley.jpg",
      alt: "Narrow Stone Town alley with historic buildings",
    },
    {
      name: "Salaam Cove",
      copy: "A beautiful stop designed to add another layer of calm, scenery and experience to the trip.",
      image: "/images/clear-water.jpg",
      alt: "Clear turquoise water beside a tropical island",
    },
    {
      name: "Prison Island",
      copy: "An island excursion that adds history, sea views and a different side of Zanzibar to your itinerary.",
      image: "/images/boat-trip.jpg",
      alt: "View of the ocean from a boat heading to an island",
    },
    {
      name: "Nungwi Beach",
      copy: "White sand, turquoise water and time to enjoy the coast at one of Zanzibar's best-known beach areas.",
      image: "/images/nungwi-beach.jpg",
      alt: "Aerial view of Nungwi beach with white sand and turquoise water",
    },
  ],
};

export const feeling = {
  title: "Come for Zanzibar. Leave with more than photos.",
  body1:
    "SHE-CATION has always been about what happens when women step away from the noise and make room for joy, laughter and connection. If you were at SHE-CATION 3.0, you already know the energy. If this is your first one, Zanzibar is a beautiful place to start.",
  body2:
    "No pressure to perform. No packed work schedule. No need to plan every detail yourself. Bring your passport, your holiday energy and your willingness to enjoy the experience.",
};

export const whoFor = {
  title: "This trip is for you if...",
  items: [
    "You have been saying you need a proper break.",
    "You want to travel, but you do not want the stress of planning every detail alone.",
    "You love good food, beautiful places and memorable experiences.",
    "You want to travel with a community of women rather than feel like you are doing the trip by yourself.",
    "You are ready to pause the routine and make space for fun, rest and connection.",
  ],
};

export const pricing = {
  title: `Your SHE-CATION 4.0 package: ${trip.price} ${trip.priceNote}`,
  lead:
    "Secure your place with a £200 non-refundable deposit. The package is subject to availability and is based on two people sharing a room.",
  // TODO: recommended revised schedule, publish only after client approval
  schedule: [
    { stage: "Deposit", due: "On booking, by 31 Oct 2026", amount: "£200" },
    { stage: "Instalment 1", due: "30 Nov 2026", amount: "£300" },
    { stage: "Instalment 2", due: "31 Dec 2026", amount: "£300" },
    { stage: "Final instalment", due: "31 Jan 2027", amount: "£300" },
  ],
  total: "£1,100",
  nigeria:
    "Paying from Nigeria? Contact Dinma or Bokun for the current exchange rate before making payment.",
  cta: "Secure My Spot",
};

export const faq = [
  {
    q: "What is included in the £1,100 package?",
    a: "The package includes 4 nights and 5 days at Tembo Resort, breakfast, lunch and dinner, private airport transfers, selected Zanzibar activities, tourist tax, visa fees and travel insurance.",
  },
  {
    q: "Are flights included?",
    a: "No. Flights to Zanzibar are not included in the £1,100 package.",
  },
  {
    q: "How do I secure my place?",
    a: "Complete the booking process and pay the £200 non-refundable deposit. Your place is confirmed once your booking and deposit are received, subject to availability.",
  },
  {
    q: "Can I pay in instalments?",
    a: "Yes. The plan is £200 on booking, followed by three £300 instalments due by 30 November 2026, 31 December 2026 and 31 January 2027.",
  },
  {
    q: "What if I am paying from Nigeria?",
    a: "Please contact Dinma or Bokun for the current exchange rate before making payment.",
  },
  {
    q: "Is the package based on room sharing?",
    a: "Yes. The current offer is based on two people sharing a room.",
  },
  {
    q: "Is the Zanzibar visa included?",
    a: "Yes. Visa fees are included in the package.",
  },
  {
    q: "Is travel insurance included?",
    a: "Yes. Travel insurance is included in the package.",
  },
  {
    q: "Are airport transfers included?",
    a: "Yes. Private transfers to and from the hotel are included.",
  },
  {
    q: "What activities are planned?",
    a: "The itinerary includes experiences such as transparent kayaking, lunch at The Rock Restaurant, Stone Town, Salaam Cove, Prison Island and Nungwi Beach.",
  },
  {
    q: "When should I book my flight?",
    a: "Wait for the organiser's arrival and departure guidance before booking your flight, so your travel plans align with the group transfers and itinerary.",
  },
  {
    q: "What is the cancellation policy?",
    a: "The £200 deposit is non-refundable. [TODO: full cancellation and refund policy to be added before launch.]",
  },
];

export const finalCta = {
  title: "Zanzibar is waiting. Are you coming?",
  body:
    'Five days to pause the routine. Five days of ocean views, good food, new experiences, laughter and sisterhood. SHE-CATION 4.0 is your invitation to stop saying "I need a break" and put the break in your calendar.',
  facts: `${trip.dates} | ${trip.price} ${trip.priceNote} | ${trip.deposit} deposit to secure your place`,
  support: "More than a trip. It's an experience designed for you.",
};

export const socialProof = {
  title: "Women who have been on a SHE-CATION know the feeling.",
  lead: "Real stories and photos from previous SHE-CATION trips.",
  // TODO: replace with real testimonials supplied by the client. Do not fabricate reviews.
  placeholder:
    "Testimonials and photos from SHE-CATION 3.0 will appear here once supplied.",
};

export const nav = [
  { label: "What's included", href: "#included" },
  { label: "Experiences", href: "#experiences" },
  { label: "Price", href: "#price" },
  { label: "FAQ", href: "#faq" },
];
