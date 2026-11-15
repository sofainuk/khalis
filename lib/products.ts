/**
 * PRODUCT CATALOG
 * ---------------------------------------------------------------
 * Edit this file to change names, descriptions, prices and pack sizes.
 * Prices below are PLACEHOLDERS (PKR) — replace with your real prices.
 * To use real photos, drop files named after the slug into /public/products
 * (e.g. jaggery.webp, sattu.jpg). They are picked up automatically.
 */

export type Category = "Sweeteners" | "Flours" | "Superfoods" | "Oils";

export type ArtKind =
  | "jaggery"
  | "sugar"
  | "jaggery-fruits"
  | "barley"
  | "corn"
  | "sattu"
  | "moringa"
  | "mustard"
  | "sesame";

export interface PackSize {
  label: string;
  price: number;
}

export interface Product {
  slug: string;
  name: string;
  localName: string;
  category: Category;
  art: ArtKind;
  short: string;
  description: string;
  highlights: string[];
  uses: string[];
  sizes: PackSize[];
  badge?: string;
  featured?: boolean;
  /** Filled automatically by lib/catalog.ts when a photo exists in /public/products */
  photo?: string;
}

export const products: Product[] = [
  {
    slug: "jaggery-gur",
    name: "Jaggery",
    localName: "Gur",
    category: "Sweeteners",
    art: "jaggery",
    badge: "Bestseller",
    featured: true,
    short: "Golden, earthy gur with a deep caramel sweetness — the classic desi sweetener.",
    description:
      "Traditional jaggery made from pure sugarcane juice, slowly cooked and set into rich golden blocks. Its deep caramel sweetness and earthy aroma make it the heart of winter sweets, warm milk, tea and everyday desserts.",
    highlights: ["Made from sugarcane juice", "Deep caramel flavour", "No bleaching, no colour added", "Packed fresh in food-safe pouches"],
    uses: ["Stir into chai or warm milk", "Gur-wale chawal & halwa", "Traditional winter sweets", "A pinch in daal and curries"],
    sizes: [
      { label: "500g", price: 380 },
      { label: "1kg", price: 720 },
      { label: "2kg", price: 1400 },
    ],
  },
  {
    slug: "desi-sugar-shakkar",
    name: "Desi Sugar",
    localName: "Shakkar",
    category: "Sweeteners",
    art: "sugar",
    featured: true,
    short: "Unrefined golden shakkar with a warm, mellow sweetness and natural molasses notes.",
    description:
      "Granular desi shakkar made the traditional way. Golden-brown crystals with a soft molasses flavour, a lovely everyday replacement for refined white sugar in tea, sweets and baking.",
    highlights: ["Unrefined golden crystals", "Natural molasses flavour", "Easy to measure and dissolve", "Everyday sugar swap"],
    uses: ["Tea, coffee and lassi", "Baking and mithai", "Kheer and sweet dishes", "Sprinkle on porridge"],
    sizes: [
      { label: "500g", price: 320 },
      { label: "1kg", price: 600 },
      { label: "2kg", price: 1150 },
    ],
  },
  {
    slug: "jaggery-with-dry-fruits",
    name: "Prepared Jaggery with Dry Fruits",
    localName: "Gur & Mewa",
    category: "Sweeteners",
    art: "jaggery-fruits",
    badge: "Chef's pick",
    featured: true,
    short: "Soft jaggery folded with crunchy nuts and dry fruits — a wholesome after-meal treat.",
    description:
      "Our prepared jaggery is blended with a generous mix of dry fruits and nuts for a rich, crunchy bite. Enjoy a small piece after meals, or crumble it over desserts and warm milk.",
    highlights: ["Jaggery + mixed dry fruits", "Crunchy, rich and satisfying", "Great as a sweet after meals", "Lovely gifting option"],
    uses: ["After-meal sweet", "Crumble over warm milk", "Gifting in winter", "Energising evening snack"],
    sizes: [
      { label: "250g", price: 650 },
      { label: "500g", price: 1250 },
      { label: "1kg", price: 2400 },
    ],
  },
  {
    slug: "barley-flour-jau-atta",
    name: "Barley Flour",
    localName: "Jau ka Atta",
    category: "Flours",
    art: "barley",
    short: "Finely milled jau atta for soft, nutty rotis and traditional recipes.",
    description:
      "A traditional grain flour with a gentle, nutty flavour. Use it on its own or mixed with wheat flour to make rotis, parathas and other everyday breads with a rustic character.",
    highlights: ["Finely milled", "Nutty, rustic flavour", "Blends well with wheat atta", "Traditional grain"],
    uses: ["Mixed-grain rotis", "Parathas", "Porridge and halwa", "Rustic baking"],
    sizes: [
      { label: "500g", price: 260 },
      { label: "1kg", price: 480 },
      { label: "2kg", price: 920 },
    ],
  },
  {
    slug: "corn-flour-makai-atta",
    name: "Corn Flour",
    localName: "Makai ka Atta",
    category: "Flours",
    art: "corn",
    featured: true,
    short: "Sunny yellow makai atta, perfect for classic makki ki roti and winter meals.",
    description:
      "Golden corn flour ground for soft, flavourful makki ki roti. A winter favourite that pairs beautifully with sarson ka saag, white butter and a spoon of gur.",
    highlights: ["Bright, golden colour", "Sweet corn flavour", "Ideal for makki ki roti", "Freshly packed"],
    uses: ["Makki ki roti", "Sarson ka saag partner", "Corn porridge", "Crispy coatings"],
    sizes: [
      { label: "500g", price: 240 },
      { label: "1kg", price: 450 },
      { label: "2kg", price: 860 },
    ],
  },
  {
    slug: "sattu",
    name: "Sattu",
    localName: "Roasted Gram Flour",
    category: "Flours",
    art: "sattu",
    badge: "Summer favourite",
    short: "Roasted gram flour with a toasty aroma — mix a cool sattu drink or stuff parathas.",
    description:
      "Sattu is a beloved traditional flour made from roasted gram. Stir it into cold water with a pinch of salt or sugar for a refreshing drink, or use it as a flavourful stuffing for parathas and litti.",
    highlights: ["Roasted for a toasty aroma", "Fine, smooth texture", "Quick cool drink mix", "Versatile stuffing flour"],
    uses: ["Cooling sattu sharbat", "Stuffed parathas", "Litti chokha", "Laddoo and sweet bites"],
    sizes: [
      { label: "500g", price: 300 },
      { label: "1kg", price: 560 },
    ],
  },
  {
    slug: "moringa-powder",
    name: "Moringa Powder",
    localName: "Sohanjna",
    category: "Superfoods",
    art: "moringa",
    badge: "New",
    short: "Vibrant green moringa leaf powder to blend into smoothies, rotis and soups.",
    description:
      "Fine powder made from dried moringa leaves. Its fresh, earthy taste blends easily into smoothies, yoghurt, roti dough and soups for a vibrant green boost to everyday meals.",
    highlights: ["Dried moringa leaves", "Fine, vibrant green powder", "Mild earthy flavour", "Easy to add to meals"],
    uses: ["Smoothies and lassi", "Roti and paratha dough", "Soups and dips", "Warm tea infusion"],
    sizes: [
      { label: "100g", price: 450 },
      { label: "250g", price: 1050 },
      { label: "500g", price: 2000 },
    ],
  },
  {
    slug: "mustard-oil-sarson",
    name: "Mustard Oil",
    localName: "Sarson ka Oil",
    category: "Oils",
    art: "mustard",
    featured: true,
    short: "Golden, pungent sarson oil for tadkas, pickles and traditional cooking.",
    description:
      "A bold, aromatic mustard oil with the sharp, distinctive flavour that traditional kitchens love. Ideal for pickles, tadkas, saag and classic regional dishes.",
    highlights: ["Rich golden colour", "Bold, pungent aroma", "Traditional cooking staple", "Perfect for pickles"],
    uses: ["Achar and pickles", "Tadka and saag", "Fish and vegetable curries", "Traditional recipes"],
    sizes: [
      { label: "500ml", price: 700 },
      { label: "1 litre", price: 1350 },
      { label: "2 litre", price: 2600 },
    ],
  },
  {
    slug: "sesame-oil-til",
    name: "Sesame Oil",
    localName: "Til ka Oil",
    category: "Oils",
    art: "sesame",
    short: "Warm, nutty til oil with a smooth flavour for cooking and traditional use.",
    description:
      "Smooth, nutty sesame oil with a warm aroma. A versatile oil for sautéing, seasoning and traditional recipes, and a pantry favourite in many homes.",
    highlights: ["Warm, nutty aroma", "Smooth flavour", "Versatile in the kitchen", "Pantry essential"],
    uses: ["Sautéing and stir-fries", "Seasoning and dressings", "Traditional recipes", "Finishing drizzle"],
    sizes: [
      { label: "250ml", price: 650 },
      { label: "500ml", price: 1250 },
      { label: "1 litre", price: 2400 },
    ],
  },
];

export const categories: ("All" | Category)[] = ["All", "Sweeteners", "Flours", "Superfoods", "Oils"];

export function formatPrice(n: number): string {
  return `Rs ${n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

export function startingPrice(p: Product): number {
  return Math.min(...p.sizes.map((s) => s.price));
}
