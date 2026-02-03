const collectionCards = [
  {
    title: 'Heritage Weaves',
    description:
      'Classic motifs with contemporary palettes for boutique hotels and premium residences.',
  },
  {
    title: 'Modern Luxe',
    description:
      'Minimal textures, tonal gradients, and bespoke sizes tailored to modern spaces.',
  },
  {
    title: 'Artisan Studio',
    description:
      'Hand-crafted statement pieces designed in collaboration with global designers.',
  },
]

const stats = [
  { label: 'Countries served', value: '28+' },
  { label: 'Custom projects', value: '900+' },
  { label: 'Years of expertise', value: '18' },
]

const processSteps = [
  {
    title: 'Concept & Moodboard',
    detail: 'We define the story, palette, and pattern language with your team.',
  },
  {
    title: 'Sampling & Prototyping',
    detail: 'Artisans craft samples to perfect the texture, sheen, and density.',
  },
  {
    title: 'Production & Delivery',
    detail: 'We coordinate timelines, quality checks, and global shipping.',
  },
]

const testimonials = [
  {
    quote:
      'Azal International translated our brand ethos into a signature carpet collection.',
    author: 'Design Director, Boutique Hotel Group',
  },
  {
    quote:
      'The craftsmanship is impeccable and the team stayed ahead of every milestone.',
    author: 'Procurement Lead, Luxury Residence',
  },
]

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <p className="eyebrow">Luxury carpets & bespoke floor artistry</p>
            <h1 className="hero__title">
              Crafting statement floors for the world&apos;s most refined interiors.
            </h1>
            <p className="hero__subtitle">
              Azal International curates premium carpets, rugs, and tailored
              floor solutions for hospitality, retail, and residential spaces.
            </p>
            <div className="hero__actions">
              <button className="button" type="button">
                Explore Collections
              </button>
              <button className="button button--ghost" type="button">
                Talk to a Specialist
              </button>
            </div>
            <div className="hero__stats">
              {stats.map((item) => (
                <div key={item.label} className="hero__stat">
                  <p className="hero__stat-value">{item.value}</p>
                  <p className="hero__stat-label">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__panel hero__panel--primary" />
            <div className="hero__panel hero__panel--secondary" />
          </div>
        </div>
      </section>

      <section className="logo-strip">
        <div className="container logo-strip__inner">
          <p className="logo-strip__label">Trusted by global hospitality leaders</p>
          <div className="logo-strip__logos">
            {['Aurum', 'Vera', 'Kensington', 'Novelle', 'Sola'].map((brand) => (
              <span key={brand} className="logo-chip">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <div>
              <p className="eyebrow">Curated collections</p>
              <h2>Signature lines designed for elevated spaces.</h2>
            </div>
            <p className="section__subtitle">
              Choose from our bespoke lines or collaborate with our studio for a
              one-of-a-kind carpet program.
            </p>
          </div>
          <div className="grid grid--three">
            {collectionCards.map((card) => (
              <article key={card.title} className="card">
                <div className="card__icon" />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <button className="text-button" type="button">
                  View details →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--split">
        <div className="container split">
          <div className="split__media" />
          <div className="split__content">
            <p className="eyebrow">Craftsmanship</p>
            <h2>Every knot, tuft, and texture is intentional.</h2>
            <p>
              Our atelier blends heritage weaving techniques with innovative
              materials to deliver lasting beauty. We source responsibly and
              partner with artisans to craft carpets that feel as good as they
              look.
            </p>
            <ul className="list">
              <li>Custom sizing & pattern scaling</li>
              <li>Material expertise: wool, silk, viscose, and blends</li>
              <li>Quality testing for hospitality-grade performance</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <div>
              <p className="eyebrow">Our process</p>
              <h2>From concept to installation, we deliver with precision.</h2>
            </div>
          </div>
          <div className="process">
            {processSteps.map((step, index) => (
              <div key={step.title} className="process__step">
                <span className="process__index">0{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section__header">
            <div>
              <p className="eyebrow eyebrow--light">Project highlights</p>
              <h2>Tailored installations for iconic destinations.</h2>
            </div>
            <p className="section__subtitle section__subtitle--light">
              We collaborate with architects, interior designers, and procurement
              teams to deliver flawless rollouts.
            </p>
          </div>
          <div className="grid grid--two">
            <article className="feature-card">
              <h3>Skyline Suites</h3>
              <p>
                A tonal gradient collection developed to reflect panoramic city
                views across 240 luxury suites.
              </p>
              <span className="feature-card__tag">Hospitality</span>
            </article>
            <article className="feature-card">
              <h3>Riviera Residences</h3>
              <p>
                Hand-tufted artistry featuring ocean-inspired textures for
                high-end private villas.
              </p>
              <span className="feature-card__tag">Residential</span>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <div>
              <p className="eyebrow">Client voices</p>
              <h2>Trusted for precision and artistry.</h2>
            </div>
          </div>
          <div className="grid grid--two">
            {testimonials.map((item) => (
              <blockquote key={item.author} className="testimonial">
                <p>“{item.quote}”</p>
                <span>{item.author}</span>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner">
          <div>
            <p className="eyebrow">Let&apos;s collaborate</p>
            <h2>Ready to craft a signature carpet program?</h2>
            <p>
              Share your vision and we&apos;ll propose a tailored solution within 48
              hours.
            </p>
          </div>
          <button className="button button--light" type="button">
            Book a Consultation
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
