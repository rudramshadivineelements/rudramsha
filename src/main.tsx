import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  CircleCheck,
  Gem,
  Leaf,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { whatsappHref } from './site-config';
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
  },
  {
    eyebrow: 'Wearable practice',
    title: 'Mala & bracelets',
    copy: 'Thoughtfully composed pieces designed to sit comfortably in meditation and everyday life.',
    tone: 'collection-mala',
  },
  {
    eyebrow: 'Earth’s palette',
    title: 'Natural stones',
    copy: 'Semi-precious stones chosen for colour, character, finish, and the quiet beauty of natural variation.',
    tone: 'collection-stones',
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
      <section className="hero-shell relative min-h-[760px] px-5 pb-10 pt-5 sm:px-8 lg:min-h-screen lg:px-12">
        <div className="hero-glow" aria-hidden="true" />
        <nav className="relative z-20 mx-auto flex max-w-[1440px] items-center justify-between border-b border-cream/15 pb-5 text-cream" aria-label="Primary navigation">
          <a href="#top" aria-label="Rudramsha Divine Elements home"><Brand /></a>

          <div className="hidden items-center gap-9 text-[11px] font-medium uppercase tracking-[0.18em] text-cream/70 md:flex">
            <a className="nav-link" href="#story">Our philosophy</a>
            <a className="nav-link" href="#guide">Rudraksha guide</a>
            <a className="nav-link" href="#collection">Collection</a>
          </div>

          <a href="#enquire" className="nav-enquire">
            Enquire <ArrowUpRight className="size-3.5" />
          </a>
        </nav>

        <div id="top" className="relative z-10 mx-auto grid min-h-[650px] max-w-[1440px] items-center gap-12 pb-12 pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:pb-20 lg:pt-12">
          <div className="max-w-[760px]">
            <p className="eyebrow mb-8"><span />Sacred by nature · chosen with discernment</p>
            <h1 className="hero-title">
              Nature,<br />
              <span>made divine.</span>
            </h1>
            <p className="mt-10 max-w-lg text-[15px] font-light leading-7 text-cream/68 sm:text-base">
              Authentic Rudrakshas and semi-precious stones, thoughtfully sourced for those who seek meaning, beauty, and a deeper connection to the natural world.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#collection" className="cta-primary group">
                Discover the collection
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a href="#story" className="cta-secondary">The story of Rudraksha</a>
            </div>
          </div>

          <div className="hero-image-wrap">
            <div className="hero-image-frame">
              {/* A static Vite site uses a pre-compressed local WebP rather than a framework image component. */}
              {/* oxlint-disable-next-line next/no-img-element */}
              <img src={`${import.meta.env.BASE_URL}hero.webp`} width="1400" height="788" alt="A natural Rudraksha bead and polished stones arranged on dark stone" className="hero-image" />
            </div>
            <div className="hero-image-ring hero-image-ring-one" aria-hidden="true" />
            <div className="hero-image-ring hero-image-ring-two" aria-hidden="true" />
            <div className="authenticity-pill">
              <BadgeCheck className="size-4 text-gold" strokeWidth={1.6} />
              <span>Authenticity first</span>
            </div>
          </div>
        </div>

        <a href="#story" className="scroll-cue" aria-label="Scroll to discover our story">
          <span>Explore</span>
          <ArrowDown className="size-4 animate-bounce" strokeWidth={1.3} />
        </a>
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

      <section id="story" className="section-shell bg-background">
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-28">
          <div>
            <p className="section-kicker">The origin</p>
            <p className="mt-8 max-w-xs text-sm leading-7 text-forest/58">
              A sacred botanical object shaped by time, place, and tradition—not manufactured into sameness.
            </p>
          </div>
          <div>
            <h2 className="section-title max-w-4xl">
              Born of a tree.<br /><em>Held as sacred.</em>
            </h2>
            <div className="mt-12 grid gap-10 border-t border-forest/15 pt-9 sm:grid-cols-2">
              <p className="body-copy">
                Rudraksha is the naturally grooved seed of trees from the <i>Elaeocarpus</i> family. Across Hindu traditions, it has long been held close in prayer, meditation, and daily life—a bridge between the living world and inward practice.
              </p>
              <p className="body-copy">
                Its name is often understood as “the eye of Rudra.” Yet beyond symbolism, every bead is distinctly earthly: textured, irregular, and marked by natural lines known as <i>mukhis</i>. No two carry exactly the same presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="guide" className="section-shell bg-forest text-cream">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="section-kicker section-kicker-light">Understanding Rudraksha</p>
              <h2 className="section-title mt-8 max-w-3xl text-cream">
                The beauty is in<br /><em className="text-gold">what nature reveals.</em>
              </h2>
            </div>
            <p className="max-w-xl text-sm font-light leading-7 text-cream/62 lg:pb-3">
              A good choice begins with understanding the object itself. We look beyond dramatic claims and focus on natural form, appropriate identification, honest context, and the way you wish to use it.
            </p>
          </div>

          <div className="mt-16 grid border-y border-cream/14 md:grid-cols-3">
            <article className="guide-card">
              <span className="guide-symbol"><Leaf /></span>
              <p className="guide-number">I</p>
              <h3>Origin</h3>
              <p>Geography can influence a bead’s size, shape, density, and surface character. Origin is one part of the story, never a shortcut to quality.</p>
            </article>
            <article className="guide-card">
              <span className="guide-symbol"><Sparkles /></span>
              <p className="guide-number">II</p>
              <h3>Mukhi</h3>
              <p>The naturally occurring longitudinal lines are counted as faces or mukhis. Identification should be careful, clear, and never forced.</p>
            </article>
            <article className="guide-card">
              <span className="guide-symbol"><Gem /></span>
              <p className="guide-number">III</p>
              <h3>Character</h3>
              <p>Shape, texture, condition, and workmanship matter. Natural irregularity is expected; thoughtful selection honours it.</p>
            </article>
          </div>

          <p className="mt-7 max-w-3xl text-[11px] leading-5 text-cream/38">
            Traditional spiritual meanings are shared as cultural guidance, not medical advice or a promise of specific outcomes. Personal experience and practice vary.
          </p>
        </div>
      </section>

      <section className="section-shell bg-sand">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-12 lg:grid-cols-[0.74fr_1.26fr]">
            <div>
              <p className="section-kicker">The Rudramsha standard</p>
              <h2 className="mt-8 max-w-md font-serif text-5xl leading-[0.94] tracking-[-0.045em] text-forest sm:text-6xl">
                Trust is the true <em className="text-rust">luxury.</em>
              </h2>
            </div>
            <div className="grid border-l border-forest/15 sm:grid-cols-2">
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
        </div>
      </section>

      <section id="collection" className="section-shell bg-background">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
            <div>
              <p className="section-kicker">Begin your journey</p>
              <h2 className="section-title mt-8">The collection</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-forest/58">A considered first edit. Individual pieces and current availability are shared personally.</p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-forest/15 bg-forest/15 lg:grid-cols-3">
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
                  <WhatsAppLink label={`Enquire about ${item.title}`} className="collection-link" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-rust text-cream">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <ShieldCheck className="mb-8 size-9 text-gold" strokeWidth={1.2} />
            <p className="section-kicker section-kicker-light">A quieter promise</p>
            <h2 className="mt-8 max-w-xl font-serif text-5xl leading-[0.94] tracking-[-0.045em] sm:text-7xl">
              No spectacle.<br /><em className="text-gold">Just substance.</em>
            </h2>
          </div>
          <blockquote className="border-l border-cream/20 pl-8 sm:pl-12">
            <p className="font-serif text-2xl font-normal leading-snug text-cream/92 sm:text-3xl">
              “We believe sacred objects deserve the same thing people do: context, honesty, and care.”
            </p>
            <footer className="mt-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/55">The Rudramsha philosophy</footer>
          </blockquote>
        </div>
      </section>

      <section className="section-shell bg-background">
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="section-kicker">Questions, answered</p>
            <h2 className="mt-8 font-serif text-5xl leading-none tracking-[-0.045em] text-forest sm:text-6xl">Before you choose.</h2>
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

      <section id="enquire" className="enquire-shell px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="relative z-10 mx-auto max-w-[980px] text-center">
          <p className="eyebrow justify-center"><span />A personal beginning<span /></p>
          <h2 className="mt-9 font-serif text-[clamp(3.6rem,8vw,7.8rem)] leading-[0.86] tracking-[-0.055em] text-cream">
            Find the piece<br /><em className="text-gold">that speaks to you.</em>
          </h2>
          <p className="mx-auto mt-9 max-w-xl text-sm font-light leading-7 text-cream/62 sm:text-base">
            Tell us what you are drawn to, how you plan to use it, or simply where you would like guidance. We will share suitable pieces, details, and prices on WhatsApp.
          </p>
          <WhatsAppLink label="Start a WhatsApp enquiry" className="whatsapp-cta" />
          <p className="mt-5 text-[9px] uppercase tracking-[0.2em] text-cream/35">Personal guidance · No obligation</p>
        </div>
      </section>

      <footer className="bg-[#0a1e1a] px-5 pb-9 pt-12 text-cream sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-9 border-b border-cream/12 pb-10 md:flex-row md:items-end">
            <Brand />
            <div className="flex flex-wrap gap-x-7 gap-y-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-cream/48">
              <a className="footer-link" href="#story">Our story</a>
              <a className="footer-link" href="#guide">Rudraksha guide</a>
              <a className="footer-link" href="#collection">Collection</a>
              <a className="footer-link" href="#enquire">Contact</a>
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
