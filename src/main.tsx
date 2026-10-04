/* oxlint-disable next/no-html-link-for-pages -- This is a Vite multi-page site, not Next.js. */
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ArrowUpRight,
  BadgeCheck,
  CircleCheck,
  Gem,
  Leaf,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { contactPhoneDisplay, contactPhoneHref, whatsappHref } from './site-config';
import './styles.css';

const standards = [
  {
    number: '01',
    title: 'Source with intention',
    copy: 'We build relationships around traceability, consistency, and respect for the natural material.',
  },
  {
    number: '02',
    title: 'Examine every piece',
    copy: 'Natural form, surface, drill, condition, and workmanship are carefully reviewed before selection.',
  },
  {
    number: '03',
    title: 'Describe honestly',
    copy: 'Clear guidance, natural variations, and known treatments are communicated without exaggeration.',
  },
  {
    number: '04',
    title: 'Guide personally',
    copy: 'We help you choose with context—not pressure—so the piece feels right for your intention and use.',
  },
];

const collections = [
  {
    eyebrow: 'Sacred seeds',
    title: 'Rudraksha',
    copy: 'Individual beads selected for natural character, clarity of form, and meaningful daily practice.',
    tone: 'collection-rudraksha',
    category: 'rudraksha',
  },
  {
    eyebrow: 'Earth’s palette',
    title: 'Semi-precious stones',
    copy: 'Natural stones selected for colour, character, polish, and the quiet beauty of variation.',
    tone: 'collection-stones',
    category: 'stones',
  },
  {
    eyebrow: 'Sacred geometry',
    title: 'Yantras',
    copy: 'Traditional geometric forms in brass and copper for meditation, ritual, and sacred spaces.',
    tone: 'collection-mala',
    category: 'yantras',
  },
];

const faqs = [
  {
    question: 'How do I choose a Rudraksha?',
    answer:
      'Begin with how you intend to wear or use it, your preference for size and origin, and any tradition you follow. Share that with us on WhatsApp and we will guide you through suitable options without pressure.',
  },
  {
    question: 'What does “mukhi” mean?',
    answer:
      'A mukhi is a natural longitudinal line or face on a Rudraksha seed. The number of these natural divisions is used to describe different Rudraksha forms.',
  },
  {
    question: 'Are natural variations normal?',
    answer:
      'Yes. Colour, contour, texture, and size naturally vary. Those differences are part of the identity of a natural seed or stone, not flaws to be hidden.',
  },
  {
    question: 'How does pricing work?',
    answer:
      'Pricing depends on the type, origin, size, condition, rarity, and any supporting documentation. Because every piece is individual, we currently share availability and price personally on WhatsApp.',
  },
];

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

function WhatsAppLink({ label, className = '' }: { label: string; className?: string }) {
  return (
    <a href={whatsappHref} target="_blank" rel="noreferrer" className={className}>
      <MessageCircle className="size-4" strokeWidth={1.7} />
      {label}
      <ArrowUpRight className="size-3.5" />
    </a>
  );
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="site-header px-4 sm:px-8 lg:px-12">
        <nav className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between text-cream" aria-label="Primary navigation">
          <a href="#top" aria-label="Rudramsha Divine Elements home"><Brand /></a>

          <div className="hidden items-center gap-8 text-[10px] font-semibold uppercase tracking-[0.17em] text-cream/65 lg:flex">
            <a className="nav-link" href="#collection">Collection</a>
            <a className="nav-link" href="#essentials">Rudraksha 101</a>
            <a className="nav-link" href="#faq">Questions</a>
          </div>

          <div className="nav-actions">
            <a href="./catalog/" className="nav-catalog">
              Catalogue <ArrowUpRight className="size-3.5" />
            </a>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="nav-whatsapp" aria-label="Enquire on WhatsApp">
              <MessageCircle className="size-4" strokeWidth={1.7} />
              <span>WhatsApp</span>
            </a>
          </div>
        </nav>
      </header>

      <section id="top" className="hero-shell relative px-5 pb-12 pt-24 sm:px-8 lg:px-12 lg:pb-16 lg:pt-28">
        <div className="hero-glow" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-12 py-10 lg:min-h-[590px] lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 lg:py-8">
          <div className="max-w-[760px]">
            <p className="eyebrow mb-7"><span />Sacred by nature · chosen with discernment</p>
            <h1 className="hero-title">
              Nature,<br />
              <span>made divine.</span>
            </h1>
            <p className="mt-8 max-w-lg text-[15px] font-light leading-7 text-cream/68 sm:text-base">
              Authentic Rudrakshas and semi-precious stones, thoughtfully sourced for those who seek meaning, beauty, and a deeper connection to the natural world.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="./catalog/" className="cta-primary group">
                Explore the catalogue
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a href="#essentials" className="cta-secondary">Rudraksha 101</a>
            </div>
          </div>

          <div className="hero-image-wrap">
            <div className="hero-image-frame">
              {/* A static Vite site uses a pre-compressed local WebP rather than a framework image component. */}
              {/* oxlint-disable-next-line next/no-img-element */}
              <img src={`${import.meta.env.BASE_URL}hero.webp`} width="1400" height="788" alt="A natural Rudraksha bead and polished stones arranged on dark stone" className="hero-image" />
            </div>
            <div className="authenticity-pill">
              <BadgeCheck className="size-4 text-gold" strokeWidth={1.6} />
              <span>Authenticity first</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand px-5 py-6 sm:px-8 lg:px-12" aria-label="Our standards">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-5 text-center sm:grid-cols-3">
          {['Authentically sourced', 'Individually selected', 'Guided with care'].map((item, index) => (
            <div key={item} className="flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-forest/70">
              <span className="font-serif text-base italic text-rust">0{index + 1}</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="collection" className="section-shell section-shell-compact bg-background">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
            <div>
              <p className="section-kicker">Begin with the collection</p>
              <h2 className="section-title mt-7">Choose your path</h2>
            </div>
            <a href="./catalog/" className="text-link">View the full catalogue <ArrowUpRight className="size-3.5" /></a>
          </div>

          <div className="collection-grid mt-10">
            {collections.map((item, index) => (
              <article key={item.title} className={`collection-card ${item.tone}`}>
                <div className="collection-orb" aria-hidden="true"><span /></div>
                <div className="relative z-10 mt-auto">
                  <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-gold">{item.eyebrow}</p>
                  <div className="mt-4 flex items-end justify-between gap-4">
                    <h3>{item.title}</h3>
                    <span className="collection-index">0{index + 1}</span>
                  </div>
                  <p>{item.copy}</p>
                  <a href={`./catalog/?category=${item.category}`} className="collection-link">
                    View {item.title}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="essentials" className="section-shell section-shell-compact bg-forest text-cream">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.86fr] lg:items-end">
            <div>
              <p className="section-kicker section-kicker-light">Rudraksha 101</p>
              <h2 className="section-title mt-7 max-w-3xl text-cream">
                Born of a tree.<br /><em className="text-gold">Held as sacred.</em>
              </h2>
            </div>
            <div className="space-y-5 text-sm font-light leading-7 text-cream/62">
              <p>Rudraksha is the naturally grooved seed of trees from the <i>Elaeocarpus</i> family. Across Hindu traditions, it has long been used in prayer, meditation, and daily practice.</p>
              <p>Every bead is distinctly earthly—textured, irregular, and marked by natural lines known as <i>mukhis</i>. No two carry exactly the same presence.</p>
            </div>
          </div>

          <div className="guide-grid mt-10">
            <article className="guide-card">
              <span className="guide-symbol"><Leaf /></span>
              <p className="guide-number">I</p>
              <h3>Origin</h3>
              <p>Geography can influence size, shape, density, and surface character. Origin is one part of the story, never a shortcut to quality.</p>
            </article>
            <article className="guide-card">
              <span className="guide-symbol"><Sparkles /></span>
              <p className="guide-number">II</p>
              <h3>Mukhi</h3>
              <p>The naturally occurring longitudinal lines are counted as faces or mukhis. Identification should be careful and clear.</p>
            </article>
            <article className="guide-card">
              <span className="guide-symbol"><Gem /></span>
              <p className="guide-number">III</p>
              <h3>Character</h3>
              <p>Shape, texture, condition, and workmanship matter. Natural irregularity is expected; thoughtful selection honours it.</p>
            </article>
          </div>

          <p className="mt-6 max-w-3xl text-[11px] leading-5 text-cream/38">
            Traditional spiritual meanings are shared as cultural guidance, not medical advice or a promise of specific outcomes. Personal experience and practice vary.
          </p>
        </div>
      </section>

      <section className="standards-shell bg-sand px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="section-kicker">The Rudramsha standard</p>
            <h2 className="mt-6 max-w-md font-serif text-4xl leading-[0.96] tracking-[-0.04em] text-forest sm:text-5xl">
              Trust is the true <em className="text-rust">luxury.</em>
            </h2>
          </div>
          <div className="standards-grid">
            {standards.map((item) => (
              <article key={item.number} className="standard-card">
                <span>{item.number}</span>
                <CircleCheck className="size-5 text-rust" strokeWidth={1.4} />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section-shell section-shell-compact bg-background">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="section-kicker">Questions, answered</p>
            <h2 className="mt-7 font-serif text-5xl leading-none tracking-[-0.045em] text-forest sm:text-6xl">Before you choose.</h2>
            <a href="./catalog/" className="text-link mt-8">Browse available pieces <ArrowUpRight className="size-3.5" /></a>
          </div>
          <div className="border-t border-forest/15">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="faq-item" open={index === 0}>
                <summary>
                  <span>{faq.question}</span>
                  <span className="faq-plus" aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="enquire" className="enquire-shell px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="relative z-10 mx-auto max-w-[900px] text-center">
          <p className="eyebrow justify-center"><span />Personal guidance<span /></p>
          <h2 className="mt-7 font-serif text-[clamp(3.25rem,7vw,6.5rem)] leading-[0.88] tracking-[-0.055em] text-cream">
            Find the piece<br /><em className="text-gold">that speaks to you.</em>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-sm font-light leading-7 text-cream/62 sm:text-base">
            Tell us what you are drawn to or how you plan to use it. We will share suitable pieces, details, and prices on WhatsApp.
          </p>
          <WhatsAppLink label="Start a WhatsApp enquiry" className="whatsapp-cta" />
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[9px] uppercase tracking-[0.2em] text-cream/35">
            <span>Personal guidance · No obligation</span>
            <span aria-hidden="true">·</span>
            <a href={contactPhoneHref} className="transition-colors hover:text-gold">{contactPhoneDisplay}</a>
          </div>
        </div>
      </section>

      <footer className="bg-[#0a1e1a] px-5 pb-9 pt-10 text-cream sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-8 border-b border-cream/12 pb-9 md:flex-row md:items-end">
            <Brand />
            <div className="flex flex-wrap gap-x-7 gap-y-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-cream/48">
              <a className="footer-link" href="#collection">Collection</a>
              <a className="footer-link" href="#essentials">Rudraksha 101</a>
              <a className="footer-link" href="#faq">Questions</a>
              <a className="footer-link" href="./catalog/">Catalogue</a>
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
    <App />
  </React.StrictMode>,
);
