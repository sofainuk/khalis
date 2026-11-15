import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProductArt from "@/components/ProductArt";
import { ArrowRight, HandIcon, LeafIcon, SparkIcon, WhatsAppIcon } from "@/components/Icons";
import { site } from "@/lib/site";
import { generalMessage, waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Our Story — The Kothi Behind the Pantry",
  description: `Meet ${site.name}: a desi pantry built on traditional staples, honest ingredients and personal service over WhatsApp.`,
  alternates: { canonical: "/about" },
};

const pillars = [
  { icon: LeafIcon, title: "Honest ingredients", text: "We stock simple, recognisable staples — jaggery, grains, leaves, seeds and oils — without fuss." },
  { icon: SparkIcon, title: "Quality we'd serve at home", text: "Every product has to earn its place in our own kitchens before it reaches yours." },
  { icon: HandIcon, title: "A personal touch", text: "You talk to a real person on WhatsApp — for questions, recommendations and delivery." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-900 pb-24 pt-40 text-cream-100">
        <div className="grain absolute inset-0 opacity-[0.07]" />
        <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-jag-500/25 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="animate-pop-in text-xs font-bold uppercase tracking-[0.25em] text-jag-300">Our story</p>
          <h1 className="font-display animate-pop-in mt-4 text-5xl font-semibold leading-[1.05] tracking-tight text-cream-50 [animation-delay:100ms] sm:text-6xl lg:text-7xl">
            A kothi is where families kept their <span className="italic text-jag-300">best</span>.
          </h1>
          <p className="animate-pop-in mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream-300 [animation-delay:200ms]">
            In old homes, the kothi was the granary — the safe, full room that fed the family through every season. {site.name} brings that spirit online.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal dir="left" className="relative mx-auto h-[26rem] w-full max-w-md sm:h-[32rem]">
            <div className="absolute left-0 top-0 w-[58%] -rotate-3 overflow-hidden rounded-[2rem] bg-white p-2 shadow-2xl"><div className="aspect-[4/5] overflow-hidden rounded-[1.6rem]"><ProductArt kind="jaggery" label="Jaggery" /></div></div>
            <div className="absolute bottom-0 right-0 w-[52%] rotate-3 overflow-hidden rounded-[2rem] bg-white p-2 shadow-2xl"><div className="aspect-[4/5] overflow-hidden rounded-[1.6rem]"><ProductArt kind="mustard" label="Mustard oil" /></div></div>
          </Reveal>
          <Reveal dir="right">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-jag-600">What we believe</p>
            <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight text-forest-900 sm:text-5xl">Food should be simple, traditional and trusted.</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-bark-700">
              <p>We started {site.name} for people who miss the taste of the desi kitchen: warm gur in winter milk, makki ki roti with saag, a cool glass of sattu in summer, mustard oil in the achar jar.</p>
              <p>Our pantry is small on purpose — nine staples we believe in. No endless aisles, no complicated checkout. Just good food, clear prices and a conversation on WhatsApp.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-100 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-jag-600">Our values</p>
            <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight text-forest-900 sm:text-5xl">Three promises</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 110}>
                <div className="group h-full rounded-3xl bg-white p-8 shadow-sm ring-1 ring-cream-300 transition duration-500 hover:-translate-y-1.5 hover:shadow-xl">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-forest-800 text-jag-300 transition-transform duration-500 group-hover:rotate-6"><p.icon className="h-7 w-7" /></span>
                  <h3 className="font-display mt-6 text-2xl font-semibold text-forest-900">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-bark-700">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-24 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-forest-900 sm:text-5xl">Come say salaam.</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-bark-700">Questions about a product, pack size or delivery? We&apos;re a message away.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={waLink(generalMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 font-bold text-forest-950 shadow-xl shadow-[#25D366]/30 transition hover:-translate-y-0.5">
              <WhatsAppIcon className="h-5 w-5" /> Chat on WhatsApp
            </a>
            <Link href="/shop" className="group inline-flex items-center gap-2 rounded-full border-2 border-forest-800 px-8 py-3.5 font-bold text-forest-800 transition hover:bg-forest-800 hover:text-cream-50">
              Browse the pantry <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
