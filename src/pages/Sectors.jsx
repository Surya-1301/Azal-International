import { useMemo, useState } from 'react'

const sectors = [
  {
    title: 'Hospitality',
    description:
      'Luxury hotels, resorts, and boutique properties rely on our tailored carpet programs to elevate guest experience.',
    highlights: ['Guestroom programs', 'Ballrooms & event spaces', 'Brand-aligned palettes'],
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=420&fit=crop'
  },
  {
    title: 'Residential',
    description:
      'Private villas and premium residences demand bespoke textures crafted for comfort and longevity.',
    highlights: ['Custom sizing', 'Soft-touch materials', 'Private collection development'],
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600&h=420&fit=crop'
  },
  {
    title: 'Retail',
    description:
      'We create statement floors that reinforce brand stories across flagship and multi-site retail rollouts.',
    highlights: ['Brand motifs', 'High-traffic durability', 'Global rollout support'],
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=420&fit=crop'
  },
  {
    title: 'Corporate',
    description:
      'Acoustic-forward textiles and refined palettes for executive suites, boardrooms, and collaboration zones.',
    highlights: ['Acoustic performance', 'Modular systems', 'Sustainability standards'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=420&fit=crop'
  },
  {
    title: 'Cultural',
    description:
      'Museums, galleries, and cultural centers lean on our heritage craft for immersive visitor journeys.',
    highlights: ['Heritage motifs', 'Curated storytelling', 'Collaborative sampling'],
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=600&h=420&fit=crop'
  }
]

const valueProps = [
  {
    title: 'Design Collaboration',
    detail: 'Partner with our studio to translate architectural narratives into woven art.'
  },
  {
    title: 'Material Expertise',
    detail: 'From wool to bamboo silk, we match fiber performance to each environment.'
  },
  {
    title: 'Global Delivery',
    detail: 'We manage procurement timelines, quality checks, and logistics end-to-end.'
  }
]

function Sectors() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredSectors = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    if (!query) {
      return sectors
    }

    return sectors.filter((sector) => {
      const matchesText =
        sector.title.toLowerCase().includes(query) ||
        sector.description.toLowerCase().includes(query) ||
        sector.highlights.some((item) => item.toLowerCase().includes(query))

      return matchesText
    })
  }, [searchQuery])

  return (
    <section className="page">
      <div className="container">
        <div className="sectors__header">
          <div>
            <p className="eyebrow">Sectors</p>
            <h1>Specialized carpet programs for every space.</h1>
            <p className="sectors__intro">
              Explore how Azal International tailors textures, palettes, and performance
              standards for each industry we serve.
            </p>
          </div>
        </div>

        <div className="projects__controls">
          <div className="search-bar">
            <svg
              className="search-bar__icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              className="search-bar__input"
              placeholder="Search sectors, focus areas, or highlights..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            {searchQuery && (
              <button
                className="search-bar__clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                type="button"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>
        </div>

        <div className="projects__results-info">
          <p className="projects__count">
            {filteredSectors.length} {filteredSectors.length === 1 ? 'Sector' : 'Sectors'}
          </p>
        </div>

        {filteredSectors.length > 0 ? (
          <div className="sectors__grid">
            {filteredSectors.map((sector) => (
              <article key={sector.title} className="sector-card">
                <div className="sector-card__image">
                  <img src={sector.image} alt={sector.title} />
                </div>
                <div className="sector-card__content">
                  <h3>{sector.title}</h3>
                  <p>{sector.description}</p>
                  <ul>
                    {sector.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="collections__empty">
            <svg
              className="collections__empty-icon"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <h3>No sectors found</h3>
            <p>Try a different keyword to explore our sector expertise.</p>
            <button
              className="button button--ghost"
              onClick={() => setSearchQuery('')}
              type="button"
            >
              Clear Search
            </button>
          </div>
        )}

        <div className="sectors__value">
          <div className="sectors__value-header">
            <p className="eyebrow">Why Azal</p>
            <h2>Strategic support at every milestone.</h2>
            <p>
              Whether you&apos;re preparing a global rollout or a one-of-a-kind installation,
              our team stays aligned with your timelines and brand standards.
            </p>
          </div>
          <div className="sectors__value-grid">
            {valueProps.map((item) => (
              <div key={item.title} className="sector-value">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sectors
