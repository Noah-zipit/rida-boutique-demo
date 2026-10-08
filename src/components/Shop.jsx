import { useEffect, useMemo, useRef, useState } from 'react'
import { CATEGORIES, products } from '../data/catalog.js'
import { useCart } from '../store/cart.jsx'
import { SearchIcon } from './icons.jsx'

function ProductCard({ p }) {
  const { add } = useCart()
  return (
    <article className="card">
      <div className="card-img">
        <img
          src={p.img}
          alt={p.alt}
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
      </div>
      <div className="card-meta">
        <h3 className="card-name">{p.name}</h3>
        <p className="card-sub">{p.subtitle}</p>
        <div className="card-row">
          <span className="card-price">{p.price}</span>
          <button
            type="button"
            className="pill pill-sm card-add"
            onClick={() => add(p.id)}
            aria-label={`Add ${p.name} to bag`}
          >
            Add to bag
          </button>
        </div>
      </div>
    </article>
  )
}

export default function Shop() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const searchRef = useRef(null)

  useEffect(() => {
    const onFilter = (e) => {
      if (CATEGORIES.includes(e.detail)) { setCategory(e.detail); setQuery('') }
    }
    window.addEventListener('as:filter', onFilter)
    return () => window.removeEventListener('as:filter', onFilter)
  }, [])

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter((p) =>
      (category === 'All' || p.category === category) &&
      (!q || `${p.name} ${p.subtitle}`.toLowerCase().includes(q))
    )
  }, [category, query])

  return (
    <section className="shop" id="shop" aria-label="Shop the collection">
      <div className="wrap">
        <div className="shop-head reveal">
          <h2 className="h-xl">LATEST DROPS</h2>
          <span className="caption">({list.length})</span>
        </div>
        <div className="shop-tools reveal">
          <div className="chip-row" role="group" aria-label="Filter by category">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                className="chip"
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="search-pill">
            <SearchIcon />
            <input
              id="shop-search"
              ref={searchRef}
              type="search"
              placeholder="Search suits..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search suits"
            />
          </label>
        </div>
        {list.length === 0 ? (
          <div className="empty-state">
            <h3 className="h-lg">Nothing matched that search.</h3>
            <p>Try a different word, or browse the full rack.</p>
            <button
              className="pill pill-sm"
              onClick={() => { setQuery(''); setCategory('All') }}
            >
              Show everything
            </button>
          </div>
        ) : (
          <div className="grid">
            {list.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        )}
      </div>
    </section>
  )
}
