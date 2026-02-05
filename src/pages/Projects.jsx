import { useMemo, useState } from 'react'

const projects = [
  {
    id: 1,
    name: 'Skyline Suites',
    sector: 'Hospitality',
    location: 'Dubai, UAE',
    scope: '240 luxury suites + sky lobby',
    year: '2025',
    status: 'Completed',
    description:
      'A tonal gradient carpet program mirroring city light patterns, delivered across 18 floors.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600&h=420&fit=crop'
  },
  {
    id: 2,
    name: 'Riviera Residences',
    sector: 'Residential',
    location: 'Cannes, FR',
    scope: 'Private villas + penthouse lounges',
    year: '2024',
    status: 'Completed',
    description:
      'Hand-tufted artistry in ocean-inspired palettes for ultra-private beachfront homes.',
    image: 'https://images.unsplash.com/photo-1521782462922-9318be1cfd04?w=600&h=420&fit=crop'
  },
  {
    id: 3,
    name: 'Aurum Flagship',
    sector: 'Retail',
    location: 'London, UK',
    scope: 'Flagship boutique + VIP salon',
    year: '2026',
    status: 'In progress',
    description:
      'Custom geometry with metallic yarns to reflect the brand’s jewelry craftsmanship.',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=420&fit=crop'
  },
  {
    id: 4,
    name: 'Sola Corporate Tower',
    sector: 'Corporate',
    location: 'Singapore',
    scope: 'Executive floors + boardrooms',
    year: '2025',
    status: 'Completed',
    description:
      'Acoustic-focused woven textures designed to soften open-plan executive areas.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=420&fit=crop'
  },
  {
    id: 5,
    name: 'Novelle Cultural Center',
    sector: 'Cultural',
    location: 'Doha, QA',
    scope: 'Gallery wings + performance hall',
    year: '2026',
    status: 'In progress',
    description:
      'A heritage-inspired motif system translated into contemporary modular carpets.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=420&fit=crop'
  },
  {
    id: 6,
    name: 'Kensington Boutique Hotel',
    sector: 'Hospitality',
    location: 'New York, US',
    scope: 'Lobby, suites, and spa corridors',
    year: '2024',
    status: 'Completed',
    description:
      'Layered neutrals and plush textures to elevate the guest arrival experience.',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=420&fit=crop'
  }
]

const sectors = ['All', 'Hospitality', 'Residential', 'Retail', 'Corporate', 'Cultural']
const statuses = ['All', ...new Set(projects.map((project) => project.status))]
const years = ['All', ...new Set(projects.map((project) => project.year))]

function Projects() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSector, setSelectedSector] = useState('All')
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [selectedYear, setSelectedYear] = useState('All')
  const [activeProject, setActiveProject] = useState(null)

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.scope.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesSector =
        selectedSector === 'All' || project.sector === selectedSector

      const matchesStatus =
        selectedStatus === 'All' || project.status === selectedStatus

      const matchesYear =
        selectedYear === 'All' || project.year === selectedYear

      return matchesSearch && matchesSector && matchesStatus && matchesYear
    })
  }, [searchQuery, selectedSector, selectedStatus, selectedYear])

  return (
    <section className="page">
      <div className="container">
        <div className="projects__header">
          <div>
            <p className="eyebrow">Projects</p>
            <h1>Case studies across hospitality, retail, and bespoke residences.</h1>
            <p className="projects__intro">
              Filter by sector, search by location, or explore a tailored case study
              for your next installation.
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
              placeholder="Search by project, location, or scope..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            {searchQuery && (
              <button
                className="search-bar__clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
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

          <div className="collections__selects">
            <label className="select-field">
              <span>Status</span>
              <select
                value={selectedStatus}
                onChange={(event) => setSelectedStatus(event.target.value)}
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </label>
            <label className="select-field">
              <span>Year</span>
              <select
                value={selectedYear}
                onChange={(event) => setSelectedYear(event.target.value)}
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="filter-chips">
            {sectors.map((sector) => (
              <button
                key={sector}
                className={`filter-chip ${
                  selectedSector === sector ? 'filter-chip--active' : ''
                }`}
                onClick={() => setSelectedSector(sector)}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>

        <div className="projects__results-info">
          <p className="projects__count">
            {filteredProjects.length}{' '}
            {filteredProjects.length === 1 ? 'Project' : 'Projects'}
          </p>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="projects__grid">
            {filteredProjects.map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-card__image">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-card__img"
                  />
                  <span className="project-card__badge">{project.sector}</span>
                </div>
                <div className="project-card__content">
                  <div className="project-card__meta">
                    <span>{project.location}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                    <span className="project-card__status">{project.status}</span>
                  </div>
                  <h3 className="project-card__title">{project.name}</h3>
                  <p className="project-card__description">{project.description}</p>
                  <p className="project-card__scope">
                    <span>Scope:</span> {project.scope}
                  </p>
                  <button
                    className="project-card__button"
                    type="button"
                    onClick={() => setActiveProject(project)}
                  >
                    Live Case Study
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
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
            <h3>No projects found</h3>
            <p>Try a different keyword or select another sector.</p>
            <button
              className="button button--ghost"
              onClick={() => {
                setSearchQuery('')
                setSelectedSector('All')
                setSelectedStatus('All')
                setSelectedYear('All')
              }}
              type="button"
            >
              Clear Filters
            </button>
          </div>
        )}

        {activeProject && (
          <div className="case-study">
            <div className="case-study__overlay" onClick={() => setActiveProject(null)} />
            <div className="case-study__panel" role="dialog" aria-modal="true">
              <div className="case-study__header">
                <div>
                  <p className="eyebrow">Live case study</p>
                  <h2>{activeProject.name}</h2>
                  <p className="case-study__meta">
                    {activeProject.location} • {activeProject.year} • {activeProject.sector}
                  </p>
                </div>
                <button
                  className="case-study__close"
                  onClick={() => setActiveProject(null)}
                  aria-label="Close case study"
                  type="button"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              <div className="case-study__body">
                <div className="case-study__image">
                  <img src={activeProject.image} alt={activeProject.name} />
                </div>
                <div className="case-study__content">
                  <p className="case-study__description">{activeProject.description}</p>
                  <div className="case-study__grid">
                    <div>
                      <p className="case-study__label">Scope</p>
                      <p>{activeProject.scope}</p>
                    </div>
                    <div>
                      <p className="case-study__label">Status</p>
                      <p>{activeProject.status}</p>
                    </div>
                    <div>
                      <p className="case-study__label">Sector</p>
                      <p>{activeProject.sector}</p>
                    </div>
                    <div>
                      <p className="case-study__label">Location</p>
                      <p>{activeProject.location}</p>
                    </div>
                  </div>
                  <div className="case-study__actions">
                    <button className="button" type="button">Request Full Deck</button>
                    <button className="button button--ghost" type="button">
                      Talk to a Specialist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
