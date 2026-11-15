import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProductArt from "@/components/ProductArt";
import ProductCard from "@/components/ProductCard";
import JsonLd from "@/components/JsonLd";
import { ArrowRight, ChevronDown, FlameIcon, HandIcon, LeafIcon, SparkIcon, TruckIcon, WhatsAppIcon } from "@/components/Icons";
import { getProducts } from "@/lib/catalog";
import { site } from "@/lib/site";
import { generalMessage, waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — Pure Desi Jaggery, Sattu, Flours & Oils | Order on WhatsApp` },
  alternates: { canonical: "/" },
};

const marquee = ["Pure Jaggery", "Desi Shakkar", "Roasted Sattu", "Barley Flour", "Makai Atta", "Moringa Powder", "Sarson Oil", "Til Oil"];

const values = [
  { icon: LeafIcon, title: "Traditional & natural", text: "Staples from the desi kitchen, kept simple — the way your grandmother stocked her kothi." },
  { icon: FlameIcon, title: "Small-batch freshness", text: "Packed in smaller lots so flours, oils and jaggery reach you fresh and full of aroma." },
  { icon: HandIcon, title: "Ordering made human", text: "No carts, no logins. Pick a pack, tap once, and chat with us directly on WhatsApp." },
  { icon: TruckIcon, title: "Delivered with care", text: "Share your address on WhatsApp and we'll confirm availability and delivery details." },
];

const steps = [
  { n: "01", title: "Pick your pantry", text: "Browse all nine staples and open the one you love." },
  { n: "02", title: "Choose a pack size", text: "Select 250g, 500g, 1kg or litres — and your quantity." },
  { n: "03", title: "Confirm on WhatsApp", text: "Your order message is pre-filled. Just hit send and we'll take it from there." },
];

const faqs = [
  { q: "How do I place an order?", a: "Open any product, choose a pack size and quantity, then tap “Order Now on WhatsApp”. A message with your product and pack size is pre-filled — just press send." },
  { q: "How do I pay?", a: "There is no online checkout. We confirm availability, total and payment options with you directly on WhatsApp." },
  { q: "Do you deliver to my city?", a: "Send us your city and address on WhatsApp and we'll confirm delivery areas and charges." },
  { q: "Are prices on the website final?", a: "Prices shown are per pack size. We'll confirm the final amount, including delivery, when you message us." },
];

export default async function HomePage() {
  const products = getProducts();
  const featured = products.filter((p) => p.featured).slice(0, 4);
  const hero = [products[0], products[7], products[5]];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />

      {/* ============ HERO ============ */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-cream-50 pb-16 pt-32 sm:pt-36 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-jag-300/30 blur-3xl" />
          <div className="absolute -left-40 top-1/2 h-[28rem] w-[28rem] rounded-full bg-forest-200/60 blur-3xl" />
          <svg className="absolute right-[-10rem] top-10 h-[44rem] w-[44rem] animate-spin-slow text-forest-800/[0.07]" viewBox="0 0 200 200" aria-hidden="true">
            <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1 4" />
            <circle cx="100" cy="100" r="72" fill="none" stroke="currentColor" strokeWidth="0.6" />
            {Array.from({ length: 24 }).map((_, i) => (
              <line key={i} x1="100" y1="4" x2="100" y2="22" stroke="currentColor" strokeWidth="1" transform={`rotate(${i * 15} 100 100)`} />
            ))}
          </svg>
          <div className="grain absolute inset-0 opacity-[0.05]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="animate-pop-in inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-forest-700 shadow-sm ring-1 ring-forest-200 backdrop-blur">
              <SparkIcon className="h-4 w-4 text-jag-500" /> Traditional · Natural · Desi
            </span>
            <h1 className="font-display animate-pop-in mt-6 text-[2.9rem] font-semibold leading-[1.04] tracking-tight text-forest-900 [animation-delay:120ms] sm:text-6xl lg:text-[4rem] xl:text-[4.25rem]">
              Pure pantry staples, the <span className="text-shimmer whitespace-nowrap italic">desi way.</span>
            </h1>
            <p className="animate-pop-in mt-6 max-w-xl text-lg leading-relaxed text-bark-700 [animation-delay:240ms]">
              Golden jaggery, sattu, traditional flours, moringa and golden mustard and sesame oils — nine honest staples for everyday cooking. Browse, pick a pack and order in one tap on WhatsApp.
            </p>
            <div className="animate-pop-in mt-8 flex flex-col gap-3 [animation-delay:360ms] sm:flex-row">
              <Link href="/shop" className="group inline-flex items-center justify-center gap-2 rounded-full bg-forest-800 px-8 py-4 text-base font-bold text-cream-50 shadow-xl shadow-forest-900/25 transition hover:-translate-y-0.5 hover:bg-forest-700 active:scale-95">
                Shop Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={waLink(generalMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-base font-bold text-forest-950 shadow-xl shadow-[#25D366]/30 transition hover:-translate-y-0.5 hover:brightness-105 active:scale-95">
                <WhatsAppIcon className="h-5 w-5" />
                Order on WhatsApp
              </a>
            </div>
            <dl className="animate-pop-in mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-cream-300 pt-6 [animation-delay:480ms]">
              {[["9", "Desi staples"], ["1 tap", "WhatsApp order"], ["0", "Logins needed"]].map(([k, v]) => (
                <div key={v}>
                  <dt className="font-display text-3xl font-semibold text-forest-800">{k}</dt>
                  <dd className="text-xs font-semibold uppercase tracking-wider text-bark-500">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* floating product stack */}
          <div className="relative mx-auto h-[26rem] w-full max-w-md sm:h-[32rem] lg:col-span-6 lg:h-[36rem] lg:max-w-none">
            <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-jag-300/50 to-forest-200/60 blur-2xl" />
            <div className="absolute left-[2%] top-[10%] w-[36%] animate-float-rev rounded-[1.6rem] bg-white p-1.5 shadow-2xl shadow-bark-900/20 [--r:-6deg] sm:w-[34%]" style={{ rotate: "-6deg" }}>
              <div className="aspect-[4/5] overflow-hidden rounded-[1.25rem]"><ProductArt kind={hero[1].art} label={hero[1].name} /></div>
            </div>
            <div className="absolute left-1/2 top-0 z-10 w-[52%] -translate-x-1/2 animate-float rounded-[2rem] bg-white p-2 shadow-2xl shadow-forest-900/30 sm:w-[46%]">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.6rem]"><ProductArt kind={hero[0].art} label={hero[0].name} /></div>
              <span className="absolute -right-3 top-6 rotate-6 rounded-full bg-jag-400 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider text-bark-900 shadow-lg">Bestseller</span>
            </div>
            <div className="absolute bottom-[4%] right-[2%] w-[38%] animate-float-slow rounded-[1.6rem] bg-white p-1.5 shadow-2xl shadow-bark-900/20 [--r:5deg] sm:w-[34%]" style={{ rotate: "5deg" }}>
              <div className="aspect-[4/5] overflow-hidden rounded-[1.25rem]"><ProductArt kind={hero[2].art} label={hero[2].name} /></div>
            </div>
            <div className="absolute bottom-[10%] left-[4%] z-20 flex animate-pop-in items-center gap-3 rounded-2xl bg-forest-900 px-4 py-3 text-cream-50 shadow-xl [animation-delay:900ms]">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#25D366] text-forest-950"><WhatsAppIcon className="h-5 w-5" /></span>
              <span className="text-sm leading-tight"><b className="block">Order in seconds</b><span className="text-cream-300">Pre-filled message</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <section aria-label="Our staples" className="relative overflow-hidden bg-forest-900 py-5 text-cream-100">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap will-change-transform">
          {[0, 1].map((k) => (
            <ul key={k} aria-hidden={k === 1} className="flex shrink-0 items-center gap-10">
              {marquee.map((m) => (
                <li key={m + k} className="font-display flex items-center gap-10 text-xl italic">
                  {m}
                  <SparkIcon className="h-5 w-5 text-jag-400" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* ============ FEATURED ============ */}
      <section className="mx-auto max-w-7xl px-5 pt-24 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-jag-600">Featured favourites</p>
          <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight text-forest-900 sm:text-5xl">From our kothi to your kitchen</h2>
          <p className="mt-4 text-lg text-bark-700">Our most-loved staples — pick a size and message us in a tap.</p>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90} dir="zoom">
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link href="/shop" className="group inline-flex items-center gap-2 rounded-full border-2 border-forest-800 px-8 py-3.5 font-bold text-forest-800 transition hover:bg-forest-800 hover:text-cream-50">
            View all 9 products
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>

      {/* ============ VALUES ============ */}
      <section className="relative mt-28 overflow-hidden bg-forest-900 py-24 text-cream-100">
        <div className="grain absolute inset-0 opacity-[0.07]" />
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-forest-600/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-jag-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-jag-300">Why Khalis Kothi</p>
            <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight text-cream-50 sm:text-5xl">Khalis means pure. We take that personally.</h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="group h-full rounded-3xl bg-white/[0.06] p-7 ring-1 ring-white/10 transition duration-500 hover:-translate-y-1.5 hover:bg-white/[0.1]">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-jag-300 to-jag-500 text-bark-900 shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <v.icon className="h-7 w-7" />
                  </span>
                  <h3 className="font-display mt-6 text-xl font-semibold text-cream-50">{v.title}</h3>
                  <p className="mt-2 leading-relaxed text-cream-300/90">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW TO ORDER ============ */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-jag-600">How it works</p>
          <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight text-forest-900 sm:text-5xl">Order in three easy steps</h2>
        </Reveal>
        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-8 hidden border-t-2 border-dashed border-jag-400/60 md:block" aria-hidden="true" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120} className="relative text-center">
              <span className="font-display relative mx-auto grid h-16 w-16 place-items-center rounded-full bg-forest-800 text-2xl font-semibold text-jag-300 shadow-xl shadow-forest-900/25 ring-8 ring-cream-50">{s.n}</span>
              <h3 className="font-display mt-6 text-2xl font-semibold text-forest-900">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-bark-700">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ STORY TEASER ============ */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-jag-300 via-jag-400 to-jag-500 p-8 sm:p-14 lg:p-20">
          <div className="grain absolute inset-0 opacity-[0.12]" />
          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            <Reveal dir="left">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-bark-800">Our story</p>
              <h2 className="font-display mt-3 text-4xl font-semibold leading-tight tracking-tight text-bark-900 sm:text-5xl">A kothi is where families kept their best grain.</h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-bark-800">
                We named ourselves after that old granary — a place of trust, abundance and care. Every staple we stock is something we would keep in our own pantry.
              </p>
              <Link href="/about" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-bark-900 px-7 py-3.5 font-bold text-cream-50 transition hover:-translate-y-0.5 hover:bg-bark-800">
                Read our story
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
            <Reveal dir="right" className="relative mx-auto h-72 w-full max-w-md sm:h-96">
              <div className="absolute left-0 top-6 w-[48%] -rotate-6 overflow-hidden rounded-3xl bg-white p-1.5 shadow-2xl"><div className="aspect-[4/5] overflow-hidden rounded-[1.2rem]"><ProductArt kind="corn" label="Corn flour" /></div></div>
              <div className="absolute right-0 top-0 w-[48%] rotate-6 overflow-hidden rounded-3xl bg-white p-1.5 shadow-2xl"><div className="aspect-[4/5] overflow-hidden rounded-[1.2rem]"><ProductArt kind="moringa" label="Moringa powder" /></div></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-jag-600">Good to know</p>
          <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight text-forest-900 sm:text-5xl">Questions, answered</h2>
        </Reveal>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 70}>
              <details className="group rounded-2xl bg-white p-1 shadow-sm ring-1 ring-cream-300 open:shadow-lg">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-4 text-left text-lg font-semibold text-forest-900 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-jag-600 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="px-5 pb-5 leading-relaxed text-bark-700">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal dir="zoom">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-forest-900 px-6 py-16 text-center sm:px-12 sm:py-20">
            <div className="grain absolute inset-0 opacity-[0.08]" />
            <div className="absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-jag-400/25 blur-3xl" />
            <div className="relative">
              <h2 className="font-display mx-auto max-w-2xl text-4xl font-semibold tracking-tight text-cream-50 sm:text-5xl">Ready to stock your <span className="italic text-jag-300">kothi?</span></h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-cream-300">Message us on WhatsApp — we reply personally and confirm availability and delivery.</p>
              <a href={waLink(generalMessage)} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-9 py-4 text-lg font-bold text-forest-950 shadow-2xl shadow-[#25D366]/30 transition hover:-translate-y-1 hover:brightness-105 active:scale-95">
                <WhatsAppIcon className="h-6 w-6" />
                Start a WhatsApp chat
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
