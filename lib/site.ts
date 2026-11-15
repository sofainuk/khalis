export const site = {
  name: "Khalis Kothi",
  tagline: "Pure pantry staples, the desi way.",
  description:
    "Khalis Kothi — your online desi pantry. Jaggery (gur), desi shakkar, sattu, barley & corn flour, moringa powder, mustard and sesame oil. Browse and order in one tap on WhatsApp.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://khalis-kothi.vercel.app").replace(/\/$/, ""),
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "923000000000").replace(/\D/g, ""),
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "+92 300 0000000",
  city: process.env.NEXT_PUBLIC_CITY ?? "Pakistan",
  currency: "PKR",
  currencyLabel: "Rs",
  socials: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM ?? "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK ?? "",
    tiktok: process.env.NEXT_PUBLIC_TIKTOK ?? "",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "Our Story" },
    { href: "/contact", label: "Contact" },
  ],
} as const;
