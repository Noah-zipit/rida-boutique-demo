import { useEffect, useState } from 'react'
import { shopWA, WHATSAPP_DISPLAY } from '../data/catalog.js'
import { SearchIcon, WhatsAppIcon, MenuIcon, CloseIcon } from './icons.jsx'

export function setShopFilter(category) {
  window.dispatchEvent(new CustomEvent('as:filter', { detail: category }))
  document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
}

export function UtilityBar() {
  return (
    <div className="util-bar" role="note">
      Demo store&nbsp;·&nbsp;Cash on delivery all over Pakistan
    </div>
  )
}

const NAV_LINKS = [
  { label: 'New in', filter: 'All' },
  { label: 'Embroidered', filter: 'Embroidered' },
  { label: 'Lawn', filter: 'Lawn' },
  { label: 'Festive', filter: 'Festive' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open ])
  const focusSearch = () => {
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
    window.setTimeout(() => document.getElementById('shop-search')?.focus({ preventScroll: true }), 450)
  }
  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <button
            className="icon-btn nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
          <a className="brand" href="#/" aria-label="Ashar Store home">
            <span className="brand-mark" aria-hidden="true">AS</span>
            <span>ASHAR STORE</span>
          </a>
          <nav className="nav-links" aria-label="Sections">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href="#shop" onClick={(e) => { e.preventDefault(); setShopFilter(l.filter) }}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nav-icons">
            <button className="icon-btn" aria-label="Search the collection" onClick={focusSearch}>
              <SearchIcon />
            </button>
            <a className="icon-btn" aria-label="Chat on WhatsApp" href={shopWA} target="_blank" rel="noreferrer">
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </header>
      {open && <button className="scrim" aria-label="Close menu" onClick={() => setOpen(false)} />}
      <div className={`drawer${open ? ' open' : ''}`} aria-hidden={!open}>
        {NAV_LINKS.map((l) => (
          <a key={l.label} href="#shop" onClick={(e) => { e.preventDefault(); setOpen(false); setShopFilter(l.filter) }}>
            {l.label}
          </a>
        ))}
        <a href={shopWA} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>WhatsApp us</a>
      </div>
    </>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cols">
        <div>
          <h3>Shop</h3>
          <ul>
            <li><a href="#shop" onClick={(e) => { e.preventDefault(); setShopFilter('All') }}>New in</a></li>
            <li><a href="#shop" onClick={(e) => { e.preventDefault(); setShopFilter('Embroidered') }}>Embroidered</a></li>
            <li><a href="#shop" onClick={(e) => { e.preventDefault(); setShopFilter('Lawn') }}>Lawn</a></li>
            <li><a href="#shop" onClick={(e) => { e.preventDefault(); setShopFilter('Khaddar') }}>Khaddar</a></li>
            <li><a href="#shop" onClick={(e) => { e.preventDefault(); setShopFilter('Festive') }}>Festive</a></li>
          </ul>
        </div>
        <div>
          <h3>Help</h3>
          <ul>
            <li><a href="#faq">How to order</a></li>
            <li><a href="#faq">Shipping</a></li>
            <li><a href="#faq">Exchanges</a></li>
          </ul>
        </div>
        <div>
          <h3>The store</h3>
          <ul>
            <li><a href="#story">Our story</a></li>
            <li><a href="#/terms">Terms</a></li>
            <li><a href="#/privacy">Privacy</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li><a href={shopWA} target="_blank" rel="noreferrer">WhatsApp {WHATSAPP_DISPLAY}</a></li>
            <li><span className="caption">Karachi, Pakistan</span></li>
            <li><span className="caption">Replies within a day</span></li>
          </ul>
        </div>
      </div>
      <div className="fine-print">
        <span>© 2026 Ashar Store. Demo website with a sample catalog.</span>
        <nav aria-label="Legal">
          <a href="#/terms">Terms</a>
          <a href="#/privacy">Privacy</a>
        </nav>
      </div>
    </footer>
  )
}
