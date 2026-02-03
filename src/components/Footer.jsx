function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <p className="footer__title">Azal International</p>
          <p className="footer__text">
            Curating premium carpets and floor artistry for modern interiors. From
            bespoke craftsmanship to global delivery, we help brands and hotels
            create unforgettable spaces.
          </p>
        </div>
        <div className="footer__links">
          <p className="footer__label">Company</p>
          <a href="#" className="footer__link">Story</a>
          <a href="#" className="footer__link">Sustainability</a>
          <a href="#" className="footer__link">Press</a>
        </div>
        <div className="footer__links">
          <p className="footer__label">Collections</p>
          <a href="#" className="footer__link">Hand-tufted</a>
          <a href="#" className="footer__link">Broadloom</a>
          <a href="#" className="footer__link">Outdoor</a>
        </div>
        <div className="footer__contact">
          <p className="footer__label">Contact</p>
          <p className="footer__text">info@azalinternational.com</p>
          <p className="footer__text">+91 00000 00000</p>
          <button className="button button--light" type="button">
            Schedule a Visit
          </button>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© 2026 Azal International. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
