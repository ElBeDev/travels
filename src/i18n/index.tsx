import { createContext, useContext, useState, ReactNode } from 'react'

export type Lang = 'en' | 'es'

const T = {
  en: {
    // Navbar
    nav_how: 'How it works',
    nav_destinations: 'Destinations',
    nav_pricing: 'Pricing',
    nav_contact: 'Contact',
    nav_cta: 'Join Now',

    // Hero
    hero_eyebrow: 'Travel Membership',
    hero_h1_a: 'Hotel rates',
    hero_h1_b: 'nobody else sees.',
    hero_sub: 'Access exclusive member pricing on 500,000+ hotels, flights, and packages worldwide — up to 70% off public rates.',
    hero_cta: 'Start saving today',
    hero_ghost: 'See how it works',
    hero_badge: 'Founding · $149/yr · 500 spots left',

    // Stats
    stats: [
      { num: '500K+', label: 'Properties worldwide' },
      { num: '35%',   label: 'Max savings on 5★ stays' },
      { num: '30',    label: 'Days money-back guarantee' },
      { num: '500',   label: 'Founding member spots' },
    ],

    // HotelBrands
    brands_eyebrow: 'Exclusive member rates at',
    brands_title: 'Top Hotels & Airlines Worldwide',

    // HowItWorks
    how_eyebrow: 'Simple process',
    how_title_a: 'Four steps to',
    how_title_b: 'exclusive rates',
    steps: [
      { num: '01', icon: 'handshake', title: 'Become a Member', text: 'Activate your annual membership and instantly unlock exclusive rates on every trip — backed by our 30-day money-back guarantee.' },
      { num: '02', icon: 'ai',        title: 'Plan with AI',    text: 'Our AI assistant builds your ideal itinerary in seconds — just tell it where you want to go, your dates, and your style.' },
      { num: '03', icon: 'search',    title: 'Compare & Choose',text: 'Browse your personalized results and compare member rates vs. public prices in real time — hotels, flights, transfers, and tours.' },
      { num: '04', icon: 'check',     title: 'Book & Save',     text: 'Pick your trip, book directly, and save an average of 30% vs. public prices. Every single trip.' },
    ],

    // Destinations
    dest_eyebrow: 'Member destinations',
    dest_title_a: 'The world is',
    dest_title_b: 'waiting for you',
    destinations: [
      { tag: 'Beach & Islands',  title: 'Paradise Within Reach',      places: 'Cancun · Riviera Maya · Punta Cana · Los Cabos · Bahamas · Maldives' },
      { tag: 'Luxury',           title: 'Five-Star, Member Price',     places: "Exclusive rates at the world's top hotel brands — worldwide" },
      { tag: 'City Escapes',     title: 'World Cities, Better Rates',  places: 'New York · Mexico City · Miami · Madrid · Buenos Aires · Tokyo' },
      { tag: 'Adventure',        title: 'Go Further',                  places: 'Costa Rica · Colombia · Peru · Patagonia · Iceland · New Zealand' },
    ],

    // WhyDifferent
    why_eyebrow: 'Why Travels',
    why_title_a: 'Built for',
    why_title_b: 'serious travelers',
    why_counter_label: 'Happy members',
    why_ring_title: 'Average savings',
    why_ring_sub: 'across all bookings',
    why_features: [
      { num: '01', title: 'Plan Everything in One Place',   text: 'Flight, hotel, transfers, tours — and even your e-SIM — booked together in a single checkout. One trip, one cart, no agents, no commissions.' },
      { num: '02', title: 'Exclusive Member Rates',          text: 'Access private pricing on hotels and travel services worldwide — rates the general public never sees. The higher the trip value, the more you save.' },
      { num: '03', title: 'Ready-Made Itineraries',          text: "Not sure where to start? Browse Travels's curated trip ideas across every destination and travel style — then book everything with a few clicks." },
      { num: '04', title: 'Global Destinations',             text: 'From city breaks in Europe to beach escapes in the Maldives — Travels covers hundreds of destinations across every continent.' },
    ],

    // Savings
    savings_eyebrow: 'Real member savings',
    savings_title_a: 'Bigger trip,',
    savings_title_b: 'bigger savings.',
    savings_public: 'Public',
    savings_member: 'Member',
    savings_you_save: 'You save',

    // Deals
    deals_eyebrow: 'Live member rates',
    deals_title_a: 'Real rates.',
    deals_title_b: 'Right now.',
    deals_nights_label: 'nights',
    deals_public: 'Public',
    deals_member: 'Member',
    deals_save: 'Save',
    deals_book: 'Book this deal',

    // Pricing
    pricing_eyebrow: 'Simple pricing',
    pricing_title_a: 'Browse free.',
    pricing_title_b: 'Book when you\'re ready.',
    pricing_cta_annual:   'Join Travels',
    pricing_cta_founding: 'Join as Founder',
    pricing_cta_plus:     'Upgrade to Plus',
    plans: [
      {
        badge: 'Annual', name: 'Annual',
        tagline: 'For travelers who want to make the most of every trip.',
        amount: '$199', period: '/year · auto-renewal',
        features: ['Full access to the member portal','Exclusive rates on 4★ and 5★ hotels, flights, transfers, and tours','Multi-destination booking in a single checkout','Ready-made itineraries','Save and share your travel plans','Standard support (chat, email)','30-day money-back guarantee'],
      },
      {
        badge: '★ Limited Time', name: 'Founding Member',
        tagline: 'Lock in our lowest rate — forever. Reserved for the first 500 members.',
        amount: '$149', period: '/year · locked in forever',
        features: ['Everything in Annual','Locked-in founding rate ($149/year forever)','Founding Member badge in your profile','30-day money-back guarantee'],
      },
      {
        badge: 'Annual Plus', name: 'Annual Plus',
        tagline: 'For frequent travelers who want priority service and the best rates.',
        amount: '$399', period: '/year · auto-renewal',
        features: ['Everything in Annual','Priority Call Center support','Extended best-price guarantee','Early access to new deals','30-day money-back guarantee'],
      },
    ],

    // Guarantee
    guarantee_eyebrow: '100% risk-free',
    guarantee_title: 'The 30-Day Guarantee',
    guarantee_text: 'Try Travels for 30 days. If you don\'t save more than your membership costs — or if you\'re not completely satisfied for any reason — we\'ll refund every cent. No questions asked.',
    guarantee_cta: 'Start saving today',

    // Footer
    footer_tagline: 'Your membership to the world\'s best hotels — at prices nobody else gets.',
    footer_col_travels: 'Travels',
    footer_col_help: 'Help',
    footer_copy: '© 2025 Travels. All rights reserved.',
    footer_links_travels: [
      { label: 'How it works', href: '#how' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Destinations', href: '#destinations' },
      { label: 'Contact', href: 'mailto:hello@travels.com' },
    ],
    footer_links_help: [
      { label: 'Support', href: '#' },
      { label: 'Terms & Conditions', href: 'https://travels.com/en/terms-and-conditions' },
      { label: 'Privacy Policy', href: 'https://travels.com/en/privacy-policy' },
      { label: 'Cancellations & Refunds', href: 'https://travels.com/en/cancellations-and-refunds' },
      { label: 'Money-Back Guarantee', href: 'https://travels.com/en/money-back-guarantee' },
    ],
  },

  es: {
    // Navbar
    nav_how: 'Cómo funciona',
    nav_destinations: 'Destinos',
    nav_pricing: 'Planes',
    nav_contact: 'Contacto',
    nav_cta: 'Únete Ahora',

    // Hero
    hero_eyebrow: 'Membresía de Viajes',
    hero_h1_a: 'Tarifas de hotel que',
    hero_h1_b: 'nadie más ve.',
    hero_sub: 'Accede a precios exclusivos para miembros en más de 500,000 hoteles, vuelos y paquetes en todo el mundo — hasta 70% menos que las tarifas públicas.',
    hero_cta: 'Empieza a ahorrar hoy',
    hero_ghost: 'Ver cómo funciona',
    hero_badge: 'Fundador · $149/año · 500 lugares',

    // Stats
    stats: [
      { num: '500K+', label: 'Propiedades en el mundo' },
      { num: '35%',   label: 'Ahorro máx. en estancias 5★' },
      { num: '30',    label: 'Días de garantía de devolución' },
      { num: '500',   label: 'Lugares de miembro fundador' },
    ],

    // HotelBrands
    brands_eyebrow: 'Tarifas exclusivas para miembros en',
    brands_title: 'Los Mejores Hoteles y Aerolíneas del Mundo',

    // HowItWorks
    how_eyebrow: 'Proceso simple',
    how_title_a: 'Cuatro pasos para',
    how_title_b: 'tarifas exclusivas',
    steps: [
      { num: '01', icon: 'handshake', title: 'Hazte Miembro',       text: 'Activa tu membresía anual y desbloquea al instante tarifas exclusivas en cada viaje — respaldado por nuestra garantía de devolución de 30 días.' },
      { num: '02', icon: 'ai',        title: 'Planea con IA',        text: 'Nuestro asistente de IA arma tu itinerario ideal en segundos — solo dile a dónde quieres ir, tus fechas y tu estilo.' },
      { num: '03', icon: 'search',    title: 'Compara y Elige',      text: 'Navega tus resultados personalizados y compara tarifas de miembro vs. precios públicos en tiempo real — hoteles, vuelos, traslados y tours.' },
      { num: '04', icon: 'check',     title: 'Reserva y Ahorra',     text: 'Elige tu viaje, reserva directamente y ahorra en promedio un 30% vs. precios públicos. En cada viaje.' },
    ],

    // Destinations
    dest_eyebrow: 'Destinos para miembros',
    dest_title_a: 'El mundo te',
    dest_title_b: 'está esperando',
    destinations: [
      { tag: 'Playa e Islas',   title: 'El Paraíso a tu Alcance',       places: 'Cancún · Riviera Maya · Punta Cana · Los Cabos · Bahamas · Maldivas' },
      { tag: 'Lujo',             title: 'Cinco Estrellas, Precio Miembro', places: 'Tarifas exclusivas en las mejores marcas hoteleras del mundo' },
      { tag: 'Escapadas Urbanas',title: 'Ciudades del Mundo, Mejores Precios', places: 'Nueva York · Ciudad de México · Miami · Madrid · Buenos Aires · Tokio' },
      { tag: 'Aventura',         title: 'Explora Más Lejos',              places: 'Costa Rica · Colombia · Perú · Patagonia · Islandia · Nueva Zelanda' },
    ],

    // WhyDifferent
    why_eyebrow: 'Por qué Travels',
    why_title_a: 'Hecho para',
    why_title_b: 'viajeros serios',
    why_counter_label: 'Miembros felices',
    why_ring_title: 'Ahorro promedio',
    why_ring_sub: 'en todas las reservas',
    why_features: [
      { num: '01', title: 'Planea Todo en un Solo Lugar',   text: 'Vuelo, hotel, traslados, tours — y hasta tu e-SIM — reservados juntos en un solo checkout. Un viaje, un carrito, sin agentes, sin comisiones.' },
      { num: '02', title: 'Tarifas Exclusivas para Miembros', text: 'Accede a precios privados en hoteles y servicios de viaje en todo el mundo — tarifas que el público general nunca ve. Entre más caro el viaje, más ahorras.' },
      { num: '03', title: 'Itinerarios Listos para Usar',    text: '¿No sabes por dónde empezar? Explora los itinerarios curados de Travels para cada destino y estilo de viaje — y reserva todo con pocos clics.' },
      { num: '04', title: 'Destinos Globales',               text: 'Desde escapadas urbanas en Europa hasta playas en las Maldivas — Travels cubre cientos de destinos en todos los continentes.' },
    ],

    // Savings
    savings_eyebrow: 'Ahorros reales de miembros',
    savings_title_a: 'Viaje más grande,',
    savings_title_b: 'mayor ahorro.',
    savings_public: 'Público',
    savings_member: 'Miembro',
    savings_you_save: 'Ahorras',

    // Deals
    deals_eyebrow: 'Tarifas en vivo',
    deals_title_a: 'Tarifas reales.',
    deals_title_b: 'Ahora mismo.',
    deals_nights_label: 'noches',
    deals_public: 'Público',
    deals_member: 'Miembro',
    deals_save: 'Ahorras',
    deals_book: 'Reservar ahora',

    // Pricing
    pricing_eyebrow: 'Precio simple',
    pricing_title_a: 'Explora gratis.',
    pricing_title_b: 'Reserva cuando estés listo.',
    pricing_cta_annual:   'Únete a Travels',
    pricing_cta_founding: 'Únete como Fundador',
    pricing_cta_plus:     'Mejorar a Plus',
    plans: [
      {
        badge: 'Anual', name: 'Anual',
        tagline: 'Para viajeros que quieren aprovechar al máximo cada viaje.',
        amount: '$199', period: '/año · renovación automática',
        features: ['Acceso completo al portal de miembros','Tarifas exclusivas en hoteles 4★ y 5★, vuelos, traslados y tours','Reservas multi-destino en un solo checkout','Itinerarios listos para usar','Guarda y comparte tus planes de viaje','Soporte estándar (chat, correo)','Garantía de devolución de 30 días'],
      },
      {
        badge: '★ Tiempo Limitado', name: 'Miembro Fundador',
        tagline: 'Asegura nuestra tarifa más baja — para siempre. Reservado para los primeros 500 miembros.',
        amount: '$149', period: '/año · precio fijo para siempre',
        features: ['Todo lo del plan Anual','Tarifa fundadora fija ($149/año para siempre)','Insignia de Miembro Fundador en tu perfil','Garantía de devolución de 30 días'],
      },
      {
        badge: 'Anual Plus', name: 'Anual Plus',
        tagline: 'Para viajeros frecuentes que quieren servicio prioritario y las mejores tarifas.',
        amount: '$399', period: '/año · renovación automática',
        features: ['Todo lo del plan Anual','Soporte prioritario por teléfono','Garantía de mejor precio extendida','Acceso anticipado a nuevas ofertas','Garantía de devolución de 30 días'],
      },
    ],

    // Guarantee
    guarantee_eyebrow: '100% sin riesgo',
    guarantee_title: 'La Garantía de 30 Días',
    guarantee_text: 'Prueba Travels durante 30 días. Si no ahorras más de lo que cuesta tu membresía — o si no estás completamente satisfecho por cualquier motivo — te devolvemos cada centavo. Sin preguntas.',
    guarantee_cta: 'Empieza a ahorrar hoy',

    // Footer
    footer_tagline: 'Tu membresía a los mejores hoteles del mundo — a precios que nadie más obtiene.',
    footer_col_travels: 'Travels',
    footer_col_help: 'Ayuda',
    footer_copy: '© 2025 Travels. Todos los derechos reservados.',
    footer_links_travels: [
      { label: 'Cómo funciona', href: '#how' },
      { label: 'Planes', href: '#pricing' },
      { label: 'Destinos', href: '#destinations' },
      { label: 'Contacto', href: 'mailto:hello@travels.com' },
    ],
    footer_links_help: [
      { label: 'Soporte', href: '#' },
      { label: 'Términos y Condiciones', href: 'https://travels.com/es/terms-and-conditions' },
      { label: 'Política de Privacidad', href: 'https://travels.com/es/privacy-policy' },
      { label: 'Cancelaciones y Reembolsos', href: 'https://travels.com/es/cancellations-and-refunds' },
      { label: 'Garantía de Devolución', href: 'https://travels.com/es/money-back-guarantee' },
    ],
  },
} as const

type Translations = typeof T.en
const LangContext = createContext<{ lang: Lang; t: Translations; setLang: (l: Lang) => void }>({
  lang: 'en', t: T.en, setLang: () => {},
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  return (
    <LangContext.Provider value={{ lang, t: T[lang] as Translations, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
