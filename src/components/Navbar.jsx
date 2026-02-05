import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Collections', to: '/collections' },
  { label: 'Projects', to: '/projects' },
  { label: 'Sectors', to: '/sectors' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__brand">
          <img
            className="navbar__logo"
            src="/logo.png"
            alt="Azal International logo"
          />
          <span className="navbar__brand-text">Azal International</span>
        </NavLink>
        <nav className="navbar__links">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `navbar__link${isActive ? ' navbar__link--active' : ''}`
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="navbar__actions">
          <button className="button button--ghost" type="button">
            Request Catalog
          </button>
          <button className="button" type="button">
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
