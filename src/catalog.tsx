/* oxlint-disable next/no-html-link-for-pages -- This is a Vite multi-page site, not Next.js. */
import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  ArrowLeft,
  ArrowUpRight,
  Gem,
  MessageCircle,
  SlidersHorizontal,
} from 'lucide-react';
import {
  contactPhoneDisplay,
  contactPhoneHref,
  productEnquiryHref,
  whatsappHref,
} from './site-config';
import './styles.css';

type Category = 'all' | 'rudraksha' | 'stones' | 'yantras';

type Product = {
  name: string;
  category: Exclude<Category, 'all'>;
  categoryLabel: string;
  detail: string;
  description: string;
  image: string;
  alt: string;
  price?: string;
};

const filters: { value: Category; label: string }[] = [
  { value: 'all', label: 'All pieces' },
  { value: 'rudraksha', label: 'Rudrakshas' },
  { value: 'stones', label: 'Semi-precious stones' },
  { value: 'yantras', label: 'Yantras' },
];

const products: Product[] = [
  {
    name: 'Five Mukhi Rudraksha',
    category: 'rudraksha',
    categoryLabel: 'Rudraksha',
    detail: 'Nepal origin · approx. 22–24 mm',
    description: 'A naturally grooved individual bead selected for its balanced form, clear faces, and rich surface character.',
    image: '../catalog/five-mukhi-rudraksha.webp',
    alt: 'Natural five mukhi Rudraksha bead on a dark green stone plinth',
    price: '₹2,850',
  },
  {
    name: 'Rudraksha Meditation Mala',
    category: 'rudraksha',
    categoryLabel: 'Rudraksha',
    detail: '108 + 1 beads · hand knotted',
    description: 'A complete meditation mala with naturally textured beads, a warm metal guru bead, and a rust-red tassel.',
    image: '../catalog/rudraksha-mala.webp',
    alt: 'Rudraksha meditation mala with a red tassel arranged on natural stone',
  },
  {
    name: 'Amethyst Cluster',
    category: 'stones',
    categoryLabel: 'Semi-precious stone',
    detail: 'Brazil origin · natural formation',
    description: 'A sculptural cluster chosen for its saturated violet tone, dimensional points, and naturally varied crystalline form.',
    image: '../catalog/amethyst-cluster.webp',
    alt: 'Natural purple amethyst cluster photographed on dark stone',
    price: '₹4,200',
  },
  {
    name: 'Tiger Eye Bracelet',
    category: 'stones',
    categoryLabel: 'Semi-precious stone',
    detail: '8 mm beads · stretch fit',
    description: 'Polished tiger eye beads displaying warm golden-brown bands and the stone’s characteristic shifting lustre.',
    image: '../catalog/tiger-eye-bracelet.webp',
    alt: 'Polished tiger eye gemstone bracelet on a dark stone surface',
    price: '₹1,650',
  },
  {
    name: 'Brass Shri Yantra',
    category: 'yantras',
    categoryLabel: 'Yantra',
    detail: 'Antique brass · 6 inch plate',
    description: 'A weighty engraved meditation plate with layered sacred geometry and a quietly aged, hand-finished character.',
    image: '../catalog/shri-yantra.webp',
    alt: 'Engraved antique brass Shri Yantra plate on dark stone',
    price: '₹3,200',
  },
  {
    name: 'Copper Meru Shri Yantra',
    category: 'yantras',
    categoryLabel: 'Yantra',
    detail: 'Solid copper · 4 inch base',
    description: 'A dimensional Meru form crafted in copper, bringing the geometry of the Shri Yantra into a sculptural object.',
    image: '../catalog/meru-yantra.webp',
    alt: 'Three-dimensional copper Meru Shri Yantra on natural stone',
  },
];

function initialCategory(): Category {
  const requestedCategory = new URLSearchParams(window.location.search).get('category');
  return filters.some((filter) => filter.value === requestedCategory)
    ? (requestedCategory as Category)
    : 'all';
}

function Brand() {
  return (
    <span className="flex items-center gap-3">
      <span className="brand-mark" aria-hidden="true">
        <Gem className="size-4" strokeWidth={1.5} />
      </span>
      <span>
        <span className="block font-serif text-[19px] leading-none tracking-[0.08em]">RUDRAMSHA</span>
        <span className="mt-1 block text-[8px] font-medium uppercase tracking-[0.34em] text-gold">Divine Elements</span>
      </span>
    </span>
  );
}

function Catalog() {
  const [activeCategory, setActiveCategory] = useState<Category>(initialCategory);
  const visibleProducts = useMemo(
    () => products.filter((product) => activeCategory === 'all' || product.category === activeCategory),
    [activeCategory],
  );

  return (
    <main className="catalog-page">
      <header className="catalog-header px-5 pt-5 sm:px-8 lg:px-12">
        <nav className="relative z-10 mx-auto flex max-w-[1440px] items-center justify-between border-b border-cream/15 pb-5" aria-label="Catalogue navigation">
          <a href="../" aria-label="Return to Rudramsha home"><Brand /></a>
          <div className="hidden items-center gap-9 text-[11px] font-medium uppercase tracking-[0.18em] text-cream/70 md:flex">
            <a className="nav-link" href="../#story">Our philosophy</a>
            <a className="nav-link" href="../#guide">Rudraksha guide</a>
            <a className="nav-link text-gold" href="./">Catalogue</a>
          </div>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="nav-enquire">
            Enquire <ArrowUpRight className="size-3.5" />
          </a>
        </nav>

        <div className="mx-auto max-w-[1320px]">
          <div className="catalog-hero-copy">
            <a href="../" className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-cream/45 transition-colors hover:text-gold">
              <ArrowLeft className="size-3.5" /> Back to the story
            </a>
            <p className="eyebrow mt-12"><span />The current edit</p>
            <h1 className="catalog-title">Objects of nature.<br /><em>Chosen with care.</em></h1>
            <p className="catalog-intro">Explore a considered selection of Rudrakshas, natural stones, and sacred yantras. Every enquiry begins with the individual piece—its character, details, and present availability.</p>
          </div>
        </div>
      </header>

      <section className="catalog-shell" aria-labelledby="catalogue-heading">
        <div className="catalog-toolbar">
          <div>
            <p id="catalogue-heading" className="section-kicker">Browse the collection</p>
            <fieldset className="filter-list mt-5">
              <legend className="sr-only">Filter products by category</legend>
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  className="filter-button"
                  aria-pressed={activeCategory === filter.value}
                  onClick={() => setActiveCategory(filter.value)}
                >
                  {filter.label}
                </button>
              ))}
            </fieldset>
          </div>
          <p className="result-count" aria-live="polite">
            <SlidersHorizontal className="size-3.5" />
            {visibleProducts.length} {visibleProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="product-grid">
          {visibleProducts.map((product) => (
            <article key={product.name} className="product-card">
              <div className="product-image">
                {/* Static catalogue images are pre-compressed WebP assets in this Vite site. */}
                {/* oxlint-disable-next-line next/no-img-element */}
                <img src={product.image} width="900" height="1125" loading="lazy" alt={product.alt} />
                <span className="product-badge">{product.categoryLabel}</span>
              </div>
              <div className="product-copy">
                <p className="product-meta">{product.detail}</p>
                <h2>{product.name}</h2>
                <p className="product-description">{product.description}</p>
                <div className="product-actions">
                  <div>
                    <span className="product-price-label">{product.price ? 'Indicative price' : 'Price'}</span>
                    <strong className="product-price">{product.price ?? 'On enquiry'}</strong>
                  </div>
                  <a
                    href={productEnquiryHref(product.name, product.price)}
                    target="_blank"
                    rel="noreferrer"
                    className="product-enquire"
                    aria-label={`Enquire about ${product.name} on WhatsApp`}
                  >
                    <MessageCircle className="size-3.5" /> Enquire
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="catalog-note"><strong>Sample catalogue:</strong> These first entries, availability, specifications, and prices are placeholders for the catalogue structure. Replace them with the details of each verified piece before accepting orders. Natural colour, shape, and surface character will vary from piece to piece.</p>
      </section>

      <footer className="catalog-footer px-5 pb-9 pt-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-9 border-b border-cream/12 pb-10 md:flex-row md:items-end">
            <a href="../"><Brand /></a>
            <div className="flex flex-wrap gap-x-7 gap-y-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-cream/48">
              <a className="footer-link" href="../#story">Our story</a>
              <a className="footer-link" href="../#guide">Rudraksha guide</a>
              <a className="footer-link" href="./">Catalogue</a>
              <a className="footer-link" href={contactPhoneHref}>{contactPhoneDisplay}</a>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 pt-7 text-[9px] uppercase tracking-[0.16em] text-cream/30 sm:flex-row">
            <p>© {new Date().getFullYear()} Rudramsha Divine Elements</p>
            <p>Authenticity · Discernment · Reverence</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Catalog />
  </React.StrictMode>,
);
