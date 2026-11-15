import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="grid min-h-[80vh] place-items-center bg-gradient-to-b from-cream-200 to-cream-50 px-5 pt-28 text-center">
      <div>
        <p className="font-display text-8xl font-semibold text-jag-500 sm:text-9xl">404</p>
        <h1 className="font-display mt-4 text-3xl font-semibold text-forest-900 sm:text-4xl">This shelf is empty.</h1>
        <p className="mx-auto mt-3 max-w-md text-bark-700">The page you&apos;re looking for has moved or never existed. Let&apos;s get you back to the pantry.</p>
        <Link href="/shop" className="mt-8 inline-flex rounded-full bg-forest-800 px-8 py-4 font-bold text-cream-50 shadow-xl transition hover:-translate-y-0.5 hover:bg-forest-700">Browse products</Link>
      </div>
    </section>
  );
}
