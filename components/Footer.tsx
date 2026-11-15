import Link from "next/link";
import Logo from "./Logo";
import { FacebookIcon, InstagramIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";
import { site } from "@/lib/site";
import { products } from "@/lib/products";
import { generalMessage, waLink } from "@/lib/whatsapp";

export default function Footer() {
  const { instagram, facebook } = site.socials;
  return (
    <footer className="relative mt-24 overflow-hidden bg-forest-950 text-cream-200">
      <div className="grain absolute inset-0 opacity-[0.06]" />
      <svg className="absolute -top-px left-0 w-full text-cream-50" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0 0h1440v20c-240 40-480 40-720 20S240 0 0 30Z" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-24 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-5 max-w-sm leading-relaxed text-cream-300/90">
              {site.tagline} Traditional jaggery, flours, superfoods and oils for your everyday kitchen — ordered in one tap on WhatsApp.
            </p>
            <a
              href={waLink(generalMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3 font-bold text-forest-950 transition hover:-translate-y-0.5 hover:brightness-105"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-jag-300">Explore</h3>
            <ul className="mt-5 space-y-3">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="transition hover:text-jag-300">{n.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/shop" className="transition hover:text-jag-300">All products</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-jag-300">Pantry</h3>
            <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/shop/${p.slug}`} className="transition hover:text-jag-300">
                    {p.name.replace("Prepared Jaggery with Dry Fruits", "Jaggery & Dry Fruits")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <li className="flex items-center gap-2"><PhoneIcon className="h-4 w-4 text-jag-300" />{site.phoneDisplay}</li>
            <li className="flex items-center gap-2"><PinIcon className="h-4 w-4 text-jag-300" />{site.city}</li>
          </ul>
          <div className="flex items-center gap-3">
            {instagram && (
              <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-jag-400 hover:text-forest-950">
                <InstagramIcon className="h-5 w-5" />
              </a>
            )}
            {facebook && (
              <a href={facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-jag-400 hover:text-forest-950">
                <FacebookIcon className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        <p className="mt-8 text-sm text-cream-400/70">© {new Date().getFullYear()} {site.name}. All rights reserved. Orders are placed and confirmed on WhatsApp.</p>
      </div>
    </footer>
  );
}
