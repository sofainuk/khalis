import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProductImage from "@/components/ProductImage";
import ProductCard from "@/components/ProductCard";
import OrderPanel from "@/components/OrderPanel";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { CheckIcon, ChevronDown } from "@/components/Icons";
import { getProduct, getProducts } from "@/lib/catalog";
import { products as all, formatPrice } from "@/lib/products";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return all.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  const title = `${p.name} (${p.localName}) — Buy Online`;
  const description = `${p.short} Available in ${p.sizes.map((s) => s.label).join(", ")}. Order on WhatsApp from ${site.name}.`;
  return {
    title,
    description,
    alternates: { canonical: `/shop/${p.slug}` },
    openGraph: { title: `${title} | ${site.name}`, description, url: `/shop/${p.slug}`, type: "website" },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getProducts()
    .filter((p) => p.slug !== product.slug)
    .sort((a, b) => Number(b.category === product.category) - Number(a.category === product.category))
    .slice(0, 3);

  const prices = product.sizes.map((s) => s.price);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              name: `${product.name} (${product.localName})`,
              description: product.description,
              category: product.category,
              brand: { "@type": "Brand", name: site.name },
              image: product.photo ? `${site.url}${product.photo}` : `${site.url}/shop/${product.slug}/opengraph-image`,
              url: `${site.url}/shop/${product.slug}`,
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: site.currency,
                lowPrice: Math.min(...prices),
                highPrice: Math.max(...prices),
                offerCount: product.sizes.length,
                availability: "https://schema.org/InStock",
                seller: { "@type": "Organization", name: site.name },
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: site.url },
                { "@type": "ListItem", position: 2, name: "Shop", item: `${site.url}/shop` },
                { "@type": "ListItem", position: 3, name: product.name, item: `${site.url}/shop/${product.slug}` },
              ],
            },
          ],
        }}
      />

      <section className="bg-gradient-to-b from-cream-200/70 to-cream-50 pb-16 pt-28 sm:pt-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm font-medium text-bark-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-forest-700">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/shop" className="hover:text-forest-700">Shop</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-forest-800">{product.name}</li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal dir="left" className="lg:sticky lg:top-28 lg:self-start">
              <div className="group relative aspect-[4/5] overflow-hidden rounded-[2.2rem] bg-white shadow-[0_40px_80px_-40px_rgba(31,61,43,0.6)] ring-1 ring-cream-300">
                <ProductImage product={product} priority sizes="(min-width:1024px) 50vw, 100vw" />
                {product.badge && (
                  <span className="absolute left-5 top-5 rounded-full bg-forest-900/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-jag-300 backdrop-blur">{product.badge}</span>
                )}
              </div>
            </Reveal>

            <div>
              <p className="animate-pop-in text-xs font-bold uppercase tracking-[0.22em] text-jag-600">{product.category}</p>
              <h1 className="font-display animate-pop-in mt-2 text-4xl font-semibold leading-tight tracking-tight text-forest-900 [animation-delay:80ms] sm:text-5xl">{product.name}</h1>
              <p className="animate-pop-in mt-1 text-lg font-medium text-bark-500 [animation-delay:140ms]">{product.localName}</p>
              <p className="animate-pop-in mt-5 text-lg leading-relaxed text-bark-700 [animation-delay:200ms]">{product.description}</p>

              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-bark-800">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-forest-700 text-white"><CheckIcon className="h-3 w-3" strokeWidth={3} /></span>
                    <span className="text-[0.95rem]">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8"><OrderPanel product={product} /></div>

              <div className="mt-8 space-y-3">
                <details className="group rounded-2xl bg-white p-1 ring-1 ring-cream-300" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-5 py-4 font-semibold text-forest-900 [&::-webkit-details-marker]:hidden">
                    Ways to enjoy
                    <ChevronDown className="h-5 w-5 text-jag-600 transition-transform group-open:rotate-180" />
                  </summary>
                  <ul className="grid gap-2 px-5 pb-5 text-bark-700 sm:grid-cols-2">
                    {product.uses.map((u) => (<li key={u} className="flex gap-2"><span className="text-jag-500">✦</span>{u}</li>))}
                  </ul>
                </details>
                <details className="group rounded-2xl bg-white p-1 ring-1 ring-cream-300">
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-5 py-4 font-semibold text-forest-900 [&::-webkit-details-marker]:hidden">
                    Pack sizes &amp; prices
                    <ChevronDown className="h-5 w-5 text-jag-600 transition-transform group-open:rotate-180" />
                  </summary>
                  <ul className="divide-y divide-cream-200 px-5 pb-3 text-bark-700">
                    {product.sizes.map((s) => (
                      <li key={s.label} className="flex justify-between py-2.5"><span>{s.label}</span><b className="text-forest-800">{formatPrice(s.price)}</b></li>
                    ))}
                  </ul>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8 sm:px-8">
        <Reveal><h2 className="font-display text-3xl font-semibold text-forest-900 sm:text-4xl">You may also love</h2></Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90} dir="zoom"><ProductCard product={p} /></Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
