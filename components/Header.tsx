"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./Icons";
import { site } from "@/lib/site";
import { generalMessage, waLink } from "@/lib/whatsapp";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) document.body.dataset.menu = "open";
    else delete document.body.dataset.menu;
    return () => {
      document.body.style.overflow = "";
      delete document.body.dataset.menu;
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          open
            ? "bg-transparent"
            : scrolled
              ? "bg-cream-50/85 shadow-[0_8px_30px_-12px_rgba(46,29,16,0.25)] backdrop-blur-xl"
              : "bg-transparent"
        }`}
      >
        <div className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8 ${scrolled ? "py-2.5" : "py-4"}`}>
          <Link href="/" aria-label="Khalis Kothi — home" className="shrink-0">
            <Logo light={open} />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {site.nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                aria-current={isActive(n.href) ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive(n.href) ? "text-forest-800" : "text-bark-700 hover:text-forest-700"
                }`}
              >
                {n.label}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-jag-500 transition-transform duration-300 ${
                    isActive(n.href) ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={waLink(generalMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-forest-800 px-5 py-2.5 text-sm font-semibold text-cream-50 shadow-lg shadow-forest-900/20 transition hover:-translate-y-0.5 hover:bg-forest-700 sm:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#7dff9f]" />
              Order on WhatsApp
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className={`grid h-11 w-11 place-items-center rounded-full transition active:scale-95 md:hidden ${open ? "bg-jag-400 text-forest-950" : "bg-forest-800 text-cream-50"}`}
            >
              {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-forest-950 transition-all duration-500 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        style={{ clipPath: open ? "circle(150% at 90% 5%)" : "circle(0% at 90% 5%)", transitionProperty: "clip-path, opacity, visibility" }}
      >
        <div className="grain absolute inset-0 opacity-[0.07]" />
        <div className="relative flex h-full flex-col justify-between px-7 pb-10 pt-28">
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {site.nav.map((n, i) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${150 + i * 70}ms` : "0ms" }}
                className={`font-display border-b border-white/10 py-4 text-4xl font-medium text-cream-50 transition-all duration-500 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                } ${isActive(n.href) ? "text-jag-300" : ""}`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <a
            href={waLink(generalMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 text-lg font-bold text-forest-950 shadow-xl"
          >
            <WhatsAppIcon className="h-6 w-6" />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
