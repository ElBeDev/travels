// All static data in one place — easy to swap/edit

export const NAV_LINKS = [
  { label: 'How it works', href: '#how' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: 'mailto:hello@travels.com' },
] as const

export const STATS = [
  { num: '500K+', label: 'Properties worldwide' },
  { num: '35%',   label: 'Max savings on 5★ stays' },
  { num: '30',    label: 'Days money-back guarantee' },
  { num: '500',   label: 'Founding member spots' },
] as const

export const STEPS = [
  {
    num: '01',
    icon: 'handshake',
    title: 'Become a Member',
    text: 'Activate your annual membership and instantly unlock exclusive rates on every trip — backed by our 30-day money-back guarantee.',
  },
  {
    num: '02',
    icon: 'ai',
    title: 'Plan with AI',
    text: 'Our AI assistant builds your ideal itinerary in seconds — just tell it where you want to go, your dates, and your style.',
  },
  {
    num: '03',
    icon: 'search',
    title: 'Compare & Choose',
    text: 'Browse your personalized results and compare member rates vs. public prices in real time — hotels, flights, transfers, and tours.',
  },
  {
    num: '04',
    icon: 'check',
    title: 'Book & Save',
    text: 'Pick your trip, book directly, and save an average of 30% vs. public prices. Every single trip.',
  },
] as const

export const DESTINATIONS = [
  {
    tag: 'Beach & Islands',
    title: 'Paradise Within Reach',
    places: 'Cancun · Riviera Maya · Punta Cana · Los Cabos · Bahamas · Maldives',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=900&q=80',
    large: true,
  },
  {
    tag: 'Luxury',
    title: 'Five-Star, Member Price',
    places: 'Exclusive rates at the world\'s top hotel brands — worldwide',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
  },
  {
    tag: 'City Escapes',
    title: 'World Cities, Better Rates',
    places: 'New York · Mexico City · Miami · Madrid · Buenos Aires · Tokyo',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
  },
  {
    tag: 'Adventure',
    title: 'Go Further',
    places: 'Costa Rica · Colombia · Peru · Patagonia · Iceland · New Zealand',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
  },
] as const

export const WHY_FEATURES = [
  {
    num: '01',
    title: 'Plan Everything in One Place',
    text: 'Flight, hotel, transfers, tours — and even your e-SIM — booked together in a single checkout. One trip, one cart, no agents, no commissions. Save your itinerary, share it with your travel crew, and go.',
  },
  {
    num: '02',
    title: 'Exclusive Member Rates',
    text: 'Access private pricing on hotels and travel services worldwide — rates the general public never sees. The higher the trip value, the more you save.',
  },
  {
    num: '03',
    title: 'Ready-Made Itineraries',
    text: 'Not sure where to start? Browse Travels\'s curated trip ideas across every destination and travel style — then book everything with a few clicks.',
  },
  {
    num: '04',
    title: 'Global Destinations',
    text: 'From city breaks in Europe to beach escapes in the Maldives — Travels covers hundreds of destinations across every continent.',
  },
] as const

export const SAVINGS_ROWS = [
  { hotel: '3★ Standard hotel',      public: '$800',   ours: '$640',   save: '$160' },
  { hotel: '4★ All-inclusive resort', public: '$2,200', ours: '$1,540', save: '$660' },
  { hotel: '5★ Premium hotel',        public: '$5,000', ours: '$3,250', save: '$1,750' },
] as const

export const DEALS = [
  { city: 'Miami, USA',       hotel: 'The Miami Beach EDITION',              nights: '4 nights · Room only',    public: '$3,297', ours: '$2,324', save: '$973',    pct: '29%' },
  { city: 'Chicago, USA',     hotel: 'Le Méridien Essex Chicago',            nights: '7 nights · Room only',    public: '$1,646', ours: '$759',   save: '$887',    pct: '54%' },
  { city: 'Punta Cana, DR',   hotel: 'Wyndham Alltra Resort',                nights: '5 nights · All inclusive', public: '$2,261', ours: '$1,073', save: '$1,188',  pct: '53%' },
  { city: 'Cancun, Mexico',   hotel: 'Grand Fiesta Americana Coral Beach',   nights: '5 nights · All inclusive', public: '$4,059', ours: '$2,117', save: '$1,942',  pct: '48%' },
  { city: 'Nassau, Bahamas',  hotel: 'Margaritaville Beach Resort',          nights: '5 nights · Room only',    public: '$3,027', ours: '$1,545', save: '$1,482',  pct: '49%' },
  { city: 'Los Cabos, Mexico',hotel: 'Hyatt Vacation Club Sirena del Mar',   nights: '5 nights · Room only',    public: '$3,800', ours: '$2,090', save: '$1,710',  pct: '45%' },
] as const

export const PLANS = [
  {
    badge: 'Annual',
    name: 'Annual',
    tagline: 'For travelers who want to make the most of every trip.',
    amount: '$199',
    period: '/year · auto-renewal',
    featured: false,
    href: 'https://travels.com/en/register?plan=annual',
    cta: 'Join Travels',
    features: [
      'Full access to the member portal',
      'Exclusive rates on 4★ and 5★ hotels, flights, transfers, and tours',
      'Multi-destination booking in a single checkout',
      'Ready-made itineraries',
      'Save and share your travel plans',
      'Standard support (chat, email)',
      '30-day money-back guarantee',
    ],
  },
  {
    badge: '★ Limited · 500 spots',
    name: 'Founding Member',
    tagline: 'Lock in our lowest rate — forever. Reserved for the first 500 members.',
    amount: '$149',
    period: '/year · locked in forever',
    featured: true,
    href: 'https://travels.com/en/register?plan=founding',
    cta: 'Join as Founder',
    features: [
      'Everything in Annual',
      'Locked-in founding rate ($149/year forever)',
      'Founding Member badge in your profile',
      '30-day money-back guarantee',
    ],
  },
  {
    badge: 'Annual Plus',
    name: 'Annual Plus',
    tagline: 'For frequent travelers who want priority service and the best rates.',
    amount: '$399',
    period: '/year · auto-renewal',
    featured: false,
    href: 'https://travels.com/en/register?plan=plus',
    cta: 'Upgrade to Plus',
    features: [
      'Everything in Annual',
      'Priority Call Center support',
      'Extended best-price guarantee',
      'Early access to new deals',
      '30-day money-back guarantee',
    ],
  },
] as const

export const FOOTER_LINKS = {
  travels: [
    { label: 'How it works', href: '#how' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Contact', href: 'mailto:hello@travels.com' },
  ],
  help: [
    { label: 'Support', href: '#' },
    { label: 'Terms & Conditions', href: 'https://travels.com/en/terms-and-conditions' },
    { label: 'Privacy Policy', href: 'https://travels.com/en/privacy-policy' },
    { label: 'Cancellations & Refunds', href: 'https://travels.com/en/cancellations-and-refunds' },
    { label: 'Money-Back Guarantee', href: 'https://travels.com/en/money-back-guarantee' },
  ],
}
