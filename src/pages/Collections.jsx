import { useState } from 'react'

const collections = [
  {
    id: 1,
    title: 'Heritage Weaves',
    category: 'Traditional',
    description: 'Classic motifs with contemporary palettes for boutique hotels and premium residences.',
    size: '8x10 ft',
    material: 'Wool & Silk',
    price: 'From $2,400',
    tags: ['Traditional', 'Luxury', 'Custom'],
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=500&h=400&fit=crop'
  },
  {
    id: 2,
    title: 'Modern Luxe',
    category: 'Contemporary',
    description: 'Minimal textures, tonal gradients, and bespoke sizes tailored to modern spaces.',
    size: '6x9 ft',
    material: 'Bamboo Silk',
    price: 'From $3,200',
    tags: ['Contemporary', 'Minimal', 'Custom'],
    image: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?w=500&h=400&fit=crop'
  },

  {
    id: 4,
    title: 'Urban Edge',
    category: 'Contemporary',
    description: 'Bold geometric patterns and industrial textures for modern urban environments.',
    size: '7x10 ft',
    material: 'Synthetic Blend',
    price: 'From $1,800',
    tags: ['Contemporary', 'Geometric', 'Durable'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop'
  },
  {
    id: 5,
    title: 'Persian Legacy',
    category: 'Traditional',
    description: 'Timeless Persian patterns recreated with premium materials and expert craftsmanship.',
    size: '9x12 ft',
    material: 'Pure Wool',
    price: 'From $4,500',
    tags: ['Traditional', 'Persian', 'Premium'],
    image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=500&h=400&fit=crop'
  },
  {
    id: 6,
    title: 'Coastal Breeze',
    category: 'Contemporary',
    description: 'Soft neutral tones and organic textures inspired by coastal landscapes.',
    size: '8x11 ft',
    material: 'Cotton & Jute',
    price: 'From $2,100',
    tags: ['Contemporary', 'Natural', 'Eco-Friendly'],
    image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=500&h=400&fit=crop'
  },
  {
    id: 7,
    title: 'Royal Medallion',
    category: 'Traditional',
    description: 'Intricate medallion designs with rich colors for luxurious interiors.',
    size: '10x14 ft',
    material: 'Wool & Silk Blend',
    price: 'From $6,200',
    tags: ['Traditional', 'Luxury', 'Medallion'],
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=500&h=400&fit=crop&sat=-20'
  },
  {
    id: 8,
    title: 'Zen Garden',
    category: 'Contemporary',
    description: 'Minimalist design with subtle texture variations for peaceful spaces.',
    size: '6x9 ft',
    material: 'Viscose',
    price: 'From $2,800',
    tags: ['Contemporary', 'Minimal', 'Serene'],
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=500&h=400&fit=crop'
  },
  {
    id: 9,
    title: 'Tribal Fusion',
    category: 'Handcrafted',
    description: 'Authentic tribal patterns woven by skilled artisans using traditional techniques.',
    size: '8x10 ft',
    material: 'Hand-Spun Wool',
    price: 'From $3,900',
    tags: ['Handcrafted', 'Tribal', 'Authentic'],
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=500&h=400&fit=crop'
  }
]

const categories = ['All', 'Traditional', 'Contemporary', 'Handcrafted']
const materials = ['All', ...new Set(collections.map((item) => item.material))]
const sizes = ['All', ...new Set(collections.map((item) => item.size))]
const tags = ['All', ...new Set(collections.flatMap((item) => item.tags))]

function Collections() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [selectedSize, setSelectedSize] = useState('All')
  const [selectedTag, setSelectedTag] = useState('All')

  const filteredCollections = collections.filter((item) => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCategory = 
      selectedCategory === 'All' || item.category === selectedCategory

    const matchesMaterial =
      selectedMaterial === 'All' || item.material === selectedMaterial

    const matchesSize =
      selectedSize === 'All' || item.size === selectedSize

    const matchesTag =
      selectedTag === 'All' || item.tags.includes(selectedTag)

    return matchesSearch && matchesCategory && matchesMaterial && matchesSize && matchesTag
  })

  return (
    <section className="page">
      <div className="container">
        {/* Header */}
        <div className="collections__header">
          <div>
            <p className="eyebrow">Collections</p>
            <h1>Signature lines with bespoke possibilities.</h1>
            <p className="collections__intro">
              Explore curated carpet families or collaborate with our studio to build
              a custom program.
            </p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="collections__controls">
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
              placeholder="Search collections, materials, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                className="search-bar__clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            )}
          </div>

          <div className="collections__selects">
            <label className="select-field">
              <span>Material</span>
              <select
                value={selectedMaterial}
                onChange={(e) => setSelectedMaterial(e.target.value)}
              >
                {materials.map((material) => (
                  <option key={material} value={material}>
                    {material}
                  </option>
                ))}
              </select>
            </label>
            <label className="select-field">
              <span>Size</span>
              <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                {sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </label>
            <label className="select-field">
              <span>Tag</span>
              <select value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)}>
                {tags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="filter-chips">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-chip ${selectedCategory === category ? 'filter-chip--active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="collections__results-info">
          <p className="collections__count">
            {filteredCollections.length} {filteredCollections.length === 1 ? 'Collection' : 'Collections'}
          </p>
        </div>

        {/* Collections Grid */}
        {filteredCollections.length > 0 ? (
          <div className="collections__grid">
            {filteredCollections.map((item) => (
              <div key={item.id} className="collection-card">
                <div className="collection-card__image">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="collection-card__img"
                  />
                  <div className="collection-card__category-badge">
                    {item.category}
                  </div>
                </div>
                <div className="collection-card__content">
                  <h3 className="collection-card__title">{item.title}</h3>
                  <p className="collection-card__description">{item.description}</p>
                  
                  <div className="collection-card__details">
                    <div className="collection-card__detail">
                      <span className="collection-card__detail-label">Size</span>
                      <span className="collection-card__detail-value">{item.size}</span>
                    </div>
                    <div className="collection-card__detail">
                      <span className="collection-card__detail-label">Material</span>
                      <span className="collection-card__detail-value">{item.material}</span>
                    </div>
                  </div>

                  <div className="collection-card__tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="collection-card__tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="collection-card__footer">
                    <span className="collection-card__price">{item.price}</span>
                    <button className="collection-card__button">
                      View Details
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="collections__empty">
            <svg className="collections__empty-icon" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <h3>No collections found</h3>
            <p>Try adjusting your search or filter to find what you're looking for.</p>
            <button 
              className="button button--ghost"
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All')
                setSelectedMaterial('All')
                setSelectedSize('All')
                setSelectedTag('All')
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Collections