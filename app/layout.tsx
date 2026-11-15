import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

const fraunces = localFont({
  src: [
    { path: "./fonts/fraunces-latin-wght-normal.woff2", style: "normal", weight: "100 900" },
    { path: "./fonts/fraunces-latin-wght-italic.woff2", style: "italic", weight: "100 900" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const jakarta = localFont({
  src: [{ path: "./fonts/plus-jakarta-sans-latin-wght-normal.woff2", style: "normal", weight: "200 800" }],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#16301f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Desi Jaggery, Sattu, Flours & Oils | Order on WhatsApp`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "jaggery", "gur", "desi shakkar", "sattu", "barley flour", "jau atta", "corn flour", "makai atta",
    "moringa powder", "mustard oil", "sarson ka oil", "sesame oil", "til ka oil", "desi pantry",
    "natural food", "order on WhatsApp", "Khalis Kothi",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: "/",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  formatDetection: { telephone: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const sameAs = Object.values(site.socials).filter(Boolean);
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">
          Skip to content
        </a>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${site.url}/#org`,
                name: site.name,
                url: site.url,
                logo: `${site.url}/icon`,
                description: site.description,
                sameAs,
                contactPoint: [{ "@type": "ContactPoint", telephone: `+${site.whatsapp}`, contactType: "customer service", availableLanguage: ["English", "Urdu", "Hindi"] }],
              },
              { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, publisher: { "@id": `${site.url}/#org` }, inLanguage: "en" },
            ],
          }}
        />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
