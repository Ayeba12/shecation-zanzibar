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
  /** End of the deposit window, UK time (GMT by then). Drives the countdown in the pricing section. */
  depositDeadline: "2026-10-31T23:59:59Z",
  whatsapp: "+44 7587 542609",
  email: "shereconnects@gmail.com",
  /** WhatsApp numbers with wa.me digits. */
  phones: [
    { label: "UK", number: "+44 7587 542609", wa: "447587542609" },
    { label: "Nigeria", number: "+234 803 555 3839", wa: "2348035553839" },
  ],
  organisers: "Dinma or Bokun",
};

export const cta = {
  primary: "Secure Your Spot",
  primaryLong: "Secure Your Spot - £200 non-refundable deposit",
  secondary: "Pay £200 Deposit",
  micro:
    "The £1,100 package price does not include flights to Zanzibar. Package is based on two people sharing a room. Subject to availability.",
};

export const hero = {
  eyebrow: `${trip.dates}  ·  Zanzibar`,
  title: "Five Days. Zanzibar. Your Girls. Your Reset.",
  /** Split for the headline with the photo set into it. */
  titleA: "Five days. Zanzibar.",
  titleB: "Your girls. Your reset.",
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
  notIncluded: "Flights to Zanzibar are not included. Your £1,100 covers everything listed above.",
};

export const moments = {
  title: "This is the kind of trip you remember in scenes.",
  lead:
    "A transparent kayak over clear water. Lunch at The Rock Restaurant with the ocean all around you. Colour, culture and history in Stone Town. Beach time, island views and the freedom to enjoy the moment.",
  items: [
    {
      name: "Transparent Kayak",
      type: "Sea",
      copy: 'Clear water beneath you, camera-ready views around you, and one of those "we are really here" moments.',
      image: "/images/kayak-hugh-whyte.jpg",
      alt: "Woman paddling a kayak on clear turquoise water",
    },
    {
      name: "The Rock Restaurant",
      type: "Food",
      copy: "Lunch in one of Zanzibar's most recognisable settings, surrounded by sea and shared with your SHE-CATION sisters.",
      image: "/images/the-rock.jpg",
      alt: "The Rock Restaurant standing on a small rock island in the ocean",
    },
    {
      name: "Stone Town",
      type: "Culture",
      copy: "Step into Zanzibar's historic heart, with its streets, culture, architecture and stories.",
      image: "/images/stone-town-alley.jpg",
      alt: "Narrow Stone Town alley with historic buildings",
    },
    {
      name: "Salaam Cove",
      type: "Coast",
      copy: "A beautiful stop designed to add another layer of calm, scenery and experience to the trip.",
      image: "/images/clear-water.jpg",
      alt: "Clear turquoise water beside a tropical island",
    },
    {
      name: "Prison Island",
      type: "Island",
      copy: "An island excursion that adds history, sea views and a different side of Zanzibar to your itinerary.",
      image: "/images/boat-trip.jpg",
      alt: "View of the ocean from a boat heading to an island",
    },
    {
      name: "Nungwi Beach",
      type: "Beach",
      copy: "White sand, turquoise water and time to enjoy the coast at one of Zanzibar's best-known beach areas.",
      image: "/images/nungwi-beach.jpg",
      alt: "Aerial view of Nungwi beach with white sand and turquoise water",
    },
  ],
};

export const feeling = {
  title: "Come for Zanzibar. Leave with more than photos.",
  aside:
    "Your first look at SHE-CATION 4.0 in Zanzibar: the water, the streets of Stone Town and the days ahead. This is what you are booking.",
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
    "Secure your place with a £200 non-refundable deposit. The £1,100 price does not include flights to Zanzibar. The package is subject to availability and is based on two people sharing a room.",
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
    a: "No. The £1,100 package price covers your stay, meals, transfers, experiences, visa fees and insurance, but not your flights to Zanzibar. You book your own flights, and we send arrival and departure guidance so you land with the group.",
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
    a: "The £200 deposit is non-refundable. Instalments you have paid may be refunded depending on when you cancel, and any refund beyond the deposit is subject to the hotel's and other suppliers' refund policies. The full details are in our Refund Policy.",
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
  lead: "Moments from SHE-CATION 3.0 in Crete, shared by the women who were there.",
};

export const nav = [
  { label: "About", href: "/#about" },
  { label: "Included", href: "/#included" },
  { label: "Experiences", href: "/#experiences" },
  { label: "Price", href: "/#price" },
  { label: "FAQ", href: "/#faq" },
  { label: "Stories", href: "/stories" },
];

/** Big two-line statement band under the hero (editorial). */
export const statement = {
  left: "Zanzibar, Tanzania. 9–13 March 2027.",
  right: "Only £200 to secure your place.",
};

/** Big numbers for the price section. */
export const stats = [
  { value: "5", unit: "days", label: "On the island" },
  { value: "4", unit: "nights", label: "At Tembo Resort" },
  { value: "£1,100", label: "Per person, two sharing" },
];

/** Tags pinned over the hero photograph. */
export const heroTags = ["Tembo Resort", "Nungwi Beach", "Stone Town", "The Rock"];

/** Desktop-only Zanzibar photo frames in the hero; each frame crossfades through its photos (GSAP). */
export const heroPhotos = {
  rail: [
    { src: "/images/stone-town-alley.jpg", alt: "A narrow alley in Stone Town with carved wooden doors", place: "Stone Town" },
    { src: "/images/the-rock.jpg", alt: "The Rock restaurant standing on a coral outcrop in the sea", place: "The Rock" },
    { src: "/images/women-water.jpg", alt: "Women wading in clear turquoise water", place: "Indian Ocean" },
    { src: "/images/pool-palm.jpg", alt: "A resort pool beneath palm trees", place: "Tembo Resort" },
  ],
  corner: [
    { src: "/images/nungwi-beach.jpg", alt: "White sand and turquoise water at Nungwi Beach", place: "Nungwi Beach" },
    { src: "/images/dhow-sunset.jpg", alt: "A dhow sailing at sunset off Zanzibar", place: "Dhow at sunset" },
    { src: "/images/clear-water.jpg", alt: "A boat floating on clear shallow water", place: "Clear water" },
    { src: "/images/beach-pier.jpg", alt: "A wooden pier stretching over turquoise sea", place: "Nungwi" },
  ],
};

/** FAQ grouped for the hairline accordion with left-hand category labels. */
export const faqGroups = [
  {
    label: "Booking",
    items: faq.filter((f) =>
      ["How do I secure my place?", "Is the package based on room sharing?", "When should I book my flight?", "What is the cancellation policy?"].includes(f.q),
    ),
  },
  {
    label: "The trip",
    items: faq.filter((f) =>
      ["What is included in the £1,100 package?", "Are flights included?", "What activities are planned?", "Is the Zanzibar visa included?", "Is travel insurance included?", "Are airport transfers included?"].includes(f.q),
    ),
  },
  {
    label: "Money",
    items: faq.filter((f) => ["Can I pay in instalments?", "What if I am paying from Nigeria?"].includes(f.q)),
  },
];

/** Quote row under the hero headline (editorial attribution left, quote centre, CTA right). */
export const quote = {
  text: "Pause. Reconnect. Experience Zanzibar together.",
  by: trip.brand,
  role: "The community behind SHE-CATION",
};

/** Centred key facts block. */
export const keyFigures = [
  { value: "5", unit: "days", caption: "4 nights at Tembo Resort, all meals included" },
  { value: "6", unit: "moments", caption: "Curated Zanzibar experiences, transfers included" },
  { value: "£1,100", caption: "Total package price per person. Flights to Zanzibar are not included in this price." },
  { value: "£200", caption: "Deposit to secure your place, balance in instalments" },
];

/** Community cards: real photographs from SHE-CATION 3.0, supplied by SHE-Reconnects. */
export const communityCards = [
  {
    title: "Blue day on the boat",
    meta: "SHE-CATION 3.0 · Sailing day",
    image: "/images/shecation-3/boat-blue-day.jpg",
    alt: "Eight women in shades of blue posing together on a sailing boat",
    orientation: "portrait",
  },
  {
    title: "The toast",
    meta: "SHE-CATION 3.0 · Welcome drinks",
    image: "/images/shecation-3/the-toast.jpg",
    alt: "Women in matching printed trousers raising glasses on a sunny terrace",
    orientation: "landscape",
  },
  {
    title: "SHE-CATION 4.0 goes to Zanzibar",
    meta: `Announcement · ${trip.dates}`,
    block: "4.0",
    orientation: "landscape",
  },
  {
    title: "Meet Dinma and Bokun",
    meta: "Your hosts · SHE-Reconnects",
    image: "/images/shecation-3/hosts-pool.jpg",
    alt: "Dinma and Bokun, the SHE-Reconnects organisers, by the pool",
    orientation: "portrait",
  },
  {
    title: "Pyjama night",
    meta: "SHE-CATION 3.0 · Evening in",
    image: "/images/shecation-3/pyjama-night-lobby.jpg",
    alt: "Seven women in matching pink pyjamas laughing in a hotel lobby",
    orientation: "portrait",
  },
  {
    title: "Sunset yoga",
    meta: "SHE-CATION 3.0 · Slow mornings",
    image: "/images/shecation-3/sunset-yoga.jpg",
    alt: "Women sitting on mats under a wooden pergola at sunset",
    orientation: "landscape",
  },
  {
    title: "Laughter on the water",
    meta: "SHE-CATION 3.0 · Sailing day",
    image: "/images/shecation-3/laughter-on-the-water.jpg",
    alt: "Three women in blue and white stripes laughing on a boat",
    orientation: "portrait",
  },
  {
    title: "White night",
    meta: "SHE-CATION 3.0 · Dinner",
    image: "/images/shecation-3/white-night.jpg",
    alt: "Seven women in white dresses holding paper parasols",
    orientation: "landscape",
  },
  {
    title: "Beach day",
    meta: "SHE-CATION 3.0 · Sisters",
    image: "/images/shecation-3/beach-day.jpg",
    alt: "Four women in sun hats and sunglasses taking a selfie on the beach",
    orientation: "portrait",
  },
  {
    title: "Sisters on deck",
    meta: "SHE-CATION 3.0 · Sailing day",
    image: "/images/shecation-3/sisters-on-deck.jpg",
    alt: "Three women smiling on the deck of a boat",
    orientation: "landscape",
  },
  {
    title: "Morning session",
    meta: "SHE-CATION 3.0 · Connection",
    image: "/images/shecation-3/terrace-session.jpg",
    alt: "A woman speaking to a seated group of women on a sunlit terrace",
    orientation: "landscape",
  },
  {
    title: "Breakfast selfies",
    meta: "SHE-CATION 3.0 · Good mornings",
    image: "/images/shecation-3/breakfast-selfie.jpg",
    alt: "Four women taking a selfie at breakfast",
    orientation: "portrait",
  },
  {
    title: "Poolside evenings",
    meta: "SHE-CATION 3.0 · Nights out",
    image: "/images/shecation-3/poolside-evening.jpg",
    alt: "Two women in blue dresses beside a lit pool at night",
    orientation: "portrait",
  },
  {
    title: "Matching on the shore",
    meta: "SHE-CATION 3.0 · Beach day",
    image: "/images/shecation-3/beach-eight.jpg",
    alt: "Eight women in white tops and matching printed trousers on a sunny beach",
    orientation: "portrait",
  },
  {
    title: "All in white",
    meta: "SHE-CATION 3.0 · White night",
    image: "/images/shecation-3/white-night-lobby.jpg",
    alt: "Six women in white dresses posing in a hotel lobby",
    orientation: "portrait",
  },
  {
    title: "Grand entrance",
    meta: "SHE-CATION 3.0 · White night",
    image: "/images/shecation-3/staircase.jpg",
    alt: "Women in white and gold outfits on a marble staircase",
    orientation: "portrait",
  },
  {
    title: "Glow up",
    meta: "SHE-CATION 3.0 · Party night",
    image: "/images/shecation-3/white-night-party.jpg",
    alt: "Women in white holding glow sticks and a microphone at a party",
    orientation: "portrait",
  },
  {
    title: "The shore crew",
    meta: "SHE-CATION 3.0 · Beach day",
    image: "/images/shecation-3/beach-five.jpg",
    alt: "Five women in matching printed trousers on the beach",
    orientation: "portrait",
  },
] as const;

/** Your hosts block. Photos: public/images/shecation-3/hosts-dinner.jpg (landscape) and hosts-pool.jpg (portrait). */
export const hosts = {
  statementLeft: "Meet Dinma and Bokun.",
  statementRight: "The women behind SHE-Reconnects.",
  lead:
    "They plan every detail, answer every question and travel with you, so all you have to do is show up.",
  body:
    "From the first WhatsApp message to the last night in Zanzibar, Dinma and Bokun are your point of contact. Ask them anything about the trip, the payment plan or paying from Nigeria.",
  photos: [
    {
      src: "/images/shecation-3/hosts-dinner.jpg",
      alt: "Dinma and Bokun in pink fascinators at a dinner table",
      caption: "At the table",
      meta: "SHE-CATION 3.0",
    },
    {
      src: "/images/shecation-3/hosts-pool.jpg",
      alt: "Dinma and Bokun by the pool in floral dresses",
      caption: "Poolside",
      meta: "SHE-CATION 3.0",
    },
  ],
};

/** Real testimonials from SHE-CATION 3.0 (Crete, 2026), supplied by SHE-Reconnects. Quoted verbatim. */
export const testimonials = [
  {
    quote:
      "I’m so grateful for Bokun and Dinma for creating such a space for us to relax, reflect, and truly “chop life”!",
    name: "Kemi",
    featured: true,
  },
  {
    quote:
      "Still glowing from Greece She-cation 2026! Loved meeting you all - what a vibe. Kisses to my amazing soft life gang roomies 💋 The award was so deserving. Going back home rejuvenated, fabulous & flourishing. This crew is special 💛🇬🇷",
    name: "Christy",
  },
  {
    quote:
      "Crete was even more special because of the connections, laughter, and meaningful moments we shared together.",
    name: "Eni",
  },
  {
    quote:
      "I was so elated. Joyful. Happy. Over the moon by this show of love. It will always be in my memory. Shecationers we are powerful in unity. God bless us all.",
    name: "Yinka",
  },
  {
    quote:
      "To My roonies thank you for being such beautiful roomies. The laughter we had in that room is enough to heal all the guests that will check in to that room for the rest of this year 😁",
    name: "Uwa",
  },
];

/** Little touches: the details guests notice. */
export const touches = {
  label: "Little touches",
  lead: "It is the small things that make it a SHE-CATION.",
  items: [
    "A handwritten thank-you card on every bed.",
    "Matching outfits for the group days, from pyjamas to prints.",
    "Sunset yoga and slow mornings built into the days.",
    "Two hosts on WhatsApp before, during and after the trip.",
  ],
  images: [
    { src: "/images/shecation-3/thank-you-envelopes.jpg", alt: "Kraft envelopes with thank-you stickers laid on a bed" },
    { src: "/images/shecation-3/thank-you-card.jpg", alt: "A card reading a little card to say a big thank you" },
  ],
};

/** Video testimonial from a SHE-CATION 3.0 guest. TODO: add the guest's name if she is happy to be credited. */
export const videoTestimonial = {
  src: "/video/testimonial.mp4",
  poster: "/images/shecation-3/testimonial-poster.jpg",
  label: "Video testimonial from a SHE-CATION 3.0 guest",
  caption: "Video testimonial · SHE-CATION 3.0",
};

/**
 * Deposit payment step. TODO: replace placeholders with the real WhatsApp group
 * invite link and bank details before launch. Leave a field empty to hide its row.
 */
export const payment = {
  whatsappGroup: "https://chat.whatsapp.com/JWJWJO0KQcq0pEps2EmQV1",
  reference: "Your full name",
  uk: {
    label: "UK bank transfer (GBP)",
    accountName: "Mumsaloud Initiative CIC",
    bank: "Starling Bank",
    sortCode: "60-83-71",
    accountNumber: "28693333",
    note: "The account name will show as Mumsaloud Initiative CIC. Use your full name as the reference so we can match your payment.",
  },
  ng: {
    label: "Nigeria (NGN)",
    accountName: "",
    bank: "",
    accountNumber: "",
    note: `Contact ${trip.organisers} in the group for the current exchange rate before you pay.`,
  },
  instructions: [
    "Pay the £200 deposit by bank transfer using your full name as the reference.",
    "Join the WhatsApp group and post your proof of payment there.",
    "Dinma or Bokun will confirm your place in the group.",
  ],
};

/**
 * /stories page: every SHE-CATION 3.0 photograph, the 4.0 intro film, the video testimonial and all the testimonials.
 * SHE-CATION 3.0 was in Greece (never caption these as Zanzibar).
 */
export const stories = {
  eyebrow: "SHE-CATION 3.0 · Greece · 2026",
  title: "The stories",
  label: "Stories from SHE-CATION 3.0",
  intro:
    "Every SHE-CATION leaves a trail of photographs, voice notes and inside jokes. This is SHE-CATION 3.0, told by the women who were there.",
  hero: {
    src: "/images/shecation-3/white-night.jpg",
    alt: "Seven women in white dresses holding paper parasols",
    tags: ["White night", "SHE-CATION 3.0"],
  },
  photos: [
    { src: "/images/shecation-3/boat-blue-day.jpg", alt: "Eight women in shades of blue posing together on a sailing boat", title: "Blue day on the boat", tag: "Sailing day" },
    { src: "/images/shecation-3/the-toast.jpg", alt: "Women in matching printed trousers raising glasses on a sunny terrace", title: "The toast", tag: "Welcome drinks" },
    { src: "/images/shecation-3/sailing-day.jpg", alt: "Women in blue on a sailing boat", title: "Sailing day", tag: "On the water" },
    { src: "/images/shecation-3/laughter-on-the-water.jpg", alt: "Three women in blue and white stripes laughing on a boat", title: "Laughter on the water", tag: "Sailing day" },
    { src: "/images/shecation-3/sisters-on-deck.jpg", alt: "Three women smiling on the deck of a boat", title: "Sisters on deck", tag: "Sailing day" },
    { src: "/images/shecation-3/on-board.jpg", alt: "The group together on board the boat", title: "All aboard", tag: "Sailing day" },
    { src: "/images/shecation-3/beach-eight.jpg", alt: "Eight women in white tops and matching printed trousers on a sunny beach", title: "Matching on the shore", tag: "Beach day" },
    { src: "/images/shecation-3/beach-five.jpg", alt: "Five women in matching printed trousers on the beach", title: "The shore crew", tag: "Beach day" },
    { src: "/images/shecation-3/beach-day.jpg", alt: "Four women in sun hats and sunglasses taking a selfie on the beach", title: "Beach day", tag: "Sisters" },
    { src: "/images/shecation-3/sunset-yoga.jpg", alt: "Women sitting on mats under a wooden pergola at sunset", title: "Sunset yoga", tag: "Slow mornings" },
    { src: "/images/shecation-3/terrace-session.jpg", alt: "A woman speaking to a seated group of women on a sunlit terrace", title: "Morning session", tag: "Connection" },
    { src: "/images/shecation-3/breakfast-selfie.jpg", alt: "Four women taking a selfie at breakfast", title: "Breakfast selfies", tag: "Good mornings" },
    { src: "/images/shecation-3/pyjama-night.jpg", alt: "Women in matching pink pyjamas", title: "Pyjama night", tag: "Evening in" },
    { src: "/images/shecation-3/pyjama-night-lobby.jpg", alt: "Seven women in matching pink pyjamas laughing in a hotel lobby", title: "Pink pyjamas", tag: "Evening in" },
    { src: "/images/shecation-3/white-night-lobby.jpg", alt: "Six women in white dresses posing in a hotel lobby", title: "All in white", tag: "White night" },
    { src: "/images/shecation-3/staircase.jpg", alt: "Women in white and gold outfits on a marble staircase", title: "Grand entrance", tag: "White night" },
    { src: "/images/shecation-3/staircase-2.jpg", alt: "A woman in white on a marble staircase", title: "The staircase", tag: "White night" },
    { src: "/images/shecation-3/white-night-party.jpg", alt: "Women in white holding glow sticks and a microphone at a party", title: "Glow up", tag: "Party night" },
    { src: "/images/shecation-3/poolside-evening.jpg", alt: "Two women in blue dresses beside a lit pool at night", title: "Poolside evenings", tag: "Nights out" },
    { src: "/images/shecation-3/thank-you-envelopes.jpg", alt: "Kraft envelopes with thank-you stickers laid on a bed", title: "A little card", tag: "Little touches" },
    { src: "/images/shecation-3/thank-you-card.jpg", alt: "A card reading a little card to say a big thank you", title: "A big thank you", tag: "Little touches" },
    { src: "/images/shecation-3/hosts-dinner.jpg", alt: "Dinma and Bokun in pink fascinators at a dinner table", title: "Dinma and Bokun", tag: "Your hosts" },
    { src: "/images/shecation-3/hosts-pool.jpg", alt: "Dinma and Bokun by the pool in floral dresses", title: "Poolside with the hosts", tag: "Your hosts" },
  ],
  filmsLabel: "On film",
  filmsIntro:
    "Photographs tell you what SHE-CATION 3.0 looked like. The intro film shows you where SHE-CATION 4.0 is going, and a guest tells you what it felt like.",
  films: [
    {
      kind: "film",
      src: "/video/shecation.mp4",
      poster: "/images/stone-town-waterfront.jpg",
      label: "SHE-CATION 4.0 intro film: a first look at Zanzibar",
      title: "The SHE-CATION 4.0 intro",
      description: "Your first look at where we are going next: Zanzibar, 9-13 March 2027.",
    },
    {
      kind: "testimonial",
      src: videoTestimonial.src,
      poster: videoTestimonial.poster,
      label: videoTestimonial.label,
      title: "A guest's story",
      description: "One SHE-CATION 3.0 guest on what the trip meant to her, in her own words.",
    },
  ],
  saidLabel: "What they said",
  saidIntro:
    "Messages sent to the group after everyone got home, quoted exactly as they were written.",
  saidPhoto: {
    src: "/images/shecation-3/sisters-on-deck.jpg",
    alt: "Three women smiling on the deck of a boat",
    caption: "Told by the women who were there.",
  },
} as const;
