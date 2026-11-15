import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import QuickMessage from "@/components/QuickMessage";
import JsonLd from "@/components/JsonLd";
import { ClockIcon, FacebookIcon, InstagramIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";
import { site } from "@/lib/site";
import { generalMessage, waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact — Order or Ask on WhatsApp",
  description: `Contact ${site.name} on WhatsApp or phone to order jaggery, sattu, flours, moringa and oils. Delivery confirmed directly with you.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const { instagram, facebook } = site.socials;
  const cards = [
    { icon: WhatsAppIcon, label: "WhatsApp", value: site.phoneDisplay, href: waLink(generalMessage), accent: true },
    { icon: PhoneIcon, label: "Call us", value: site.phoneDisplay, href: `tel:+${site.whatsapp}` },
    { icon: PinIcon, label: "Based in", value: site.city },
    { icon: ClockIcon, label: "Replies", value: "Daily, usually within a few hours" },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: `Contact ${site.name}`,
          url: `${site.url}/contact`,
          mainEntity: { "@type": "Organization", name: site.name, telephone: `+${site.whatsapp}` },
        }}
      />
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-200 to-cream-50 pb-12 pt-36">
        <div className="grain absolute inset-0 opacity-[0.05]" />
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-forest-200/60 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="animate-pop-in text-xs font-bold uppercase tracking-[0.25em] text-jag-600">Get in touch</p>
          <h1 className="font-display animate-pop-in mt-3 text-5xl font-semibold tracking-tight text-forest-900 [animation-delay:100ms] sm:text-6xl">Let&apos;s talk pantry.</h1>
          <p className="animate-pop-in mt-5 text-lg text-bark-700 [animation-delay:200ms]">Order, ask about a product or check delivery — WhatsApp is the fastest way to reach us.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-8 sm:px-8 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          {cards.map((c, i) => {
            const inner = (
              <div className={`group flex items-center gap-4 rounded-3xl p-5 ring-1 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${c.accent ? "bg-forest-900 text-cream-50 ring-forest-800" : "bg-white text-bark-900 ring-cream-300"}`}>
                <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${c.accent ? "bg-[#25D366] text-forest-950" : "bg-forest-100 text-forest-700"}`}>
                  <c.icon className="h-7 w-7" />
                </span>
                <span>
                  <span className={`block text-xs font-bold uppercase tracking-[0.18em] ${c.accent ? "text-jag-300" : "text-bark-500"}`}>{c.label}</span>
                  <span className="font-display block text-xl font-semibold leading-snug">{c.value}</span>
                </span>
              </div>
            );
            return (
              <Reveal key={c.label} delay={i * 80}>
                {c.href ? <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">{inner}</a> : inner}
              </Reveal>
            );
          })}

          {(instagram || facebook) && (
            <Reveal className="flex gap-3 pt-2">
              {instagram && <a href={instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-forest-800 ring-1 ring-cream-300 transition hover:bg-forest-800 hover:text-cream-50"><InstagramIcon className="h-5 w-5" /> Instagram</a>}
              {facebook && <a href={facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-forest-800 ring-1 ring-cream-300 transition hover:bg-forest-800 hover:text-cream-50"><FacebookIcon className="h-5 w-5" /> Facebook</a>}
            </Reveal>
          )}
        </div>

        <Reveal dir="right" className="lg:col-span-3">
          <div className="rounded-[2rem] bg-white p-6 shadow-[0_30px_70px_-40px_rgba(31,61,43,0.6)] ring-1 ring-cream-300 sm:p-10">
            <h2 className="font-display text-3xl font-semibold text-forest-900">Send us a quick message</h2>
            <p className="mb-6 mt-2 text-bark-700">Type below and we&apos;ll open WhatsApp with your message ready to send.</p>
            <QuickMessage />
          </div>
        </Reveal>
      </section>
    </>
  );
}
