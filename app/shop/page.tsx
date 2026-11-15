import type { Metadata } from "next";
import ShopGrid from "@/components/ShopGrid";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { getProducts } from "@/lib/catalog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop — Jaggery, Sattu, Flours, Moringa & Oils",
  description:
    "Shop all 9 desi pantry staples: jaggery (gur), desi shakkar, jaggery with dry fruits, barley flour, corn flour, sattu, moringa powder, mustard oil and sesame oil. Order on WhatsApp.",
  alternates: { canonical: "/shop" },
  openGraph: { title: `Shop all products | ${site.name}`, url: "/shop" },
};

export default function ShopPage() {
  const products = getProducts();
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: products.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${site.url}/shop/${p.slug}`,
            name: `${p.name} (${p.localName})`,
          })),
        }}
      />
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-200 to-cream-50 pb-10 pt-36">
        <div className="grain absolute inset-0 opacity-[0.05]" />
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-jag-300/30 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="animate-pop-in text-xs font-bold uppercase tracking-[0.25em] text-jag-600">The pantry</p>
          <h1 className="font-display animate-pop-in mt-3 text-5xl font-semibold tracking-tight text-forest-900 [animation-delay:100ms] sm:text-6xl">Shop all products</h1>
          <p className="animate-pop-in mx-auto mt-5 max-w-2xl text-lg text-bark-700 [animation-delay:200ms]">
            Nine honest staples, one easy way to order. Choose a pack size and we&apos;ll pre-fill your WhatsApp message.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-8 sm:px-8">
        <ShopGrid products={products} />
        <Reveal className="mt-16 rounded-3xl bg-forest-900 p-8 text-center text-cream-100 sm:p-12">
          <h2 className="font-display text-3xl font-semibold text-cream-50">Can&apos;t decide? Just ask.</h2>
          <p className="mx-auto mt-3 max-w-xl text-cream-300">Tell us what you cook and we&apos;ll suggest the right staples and pack sizes on WhatsApp.</p>
        </Reveal>
      </section>
    </>
  );
}
