import { useEffect, useRef, useState } from 'react'
import SilkHero from './components/SilkHero.jsx'
import { products, WHATSAPP } from './data/products.js'

const shopWA = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Assalamualaikum, I was looking at the Rida Boutique website and want to place an order.')}`

function useScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        setP(max > 0 ? Math.min(1, window.scrollY / max) : 0)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [])
  return p
}

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal') ?? []
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target) } }),
      { threshold: 0.12 }
    )
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [])
  return ref
}

export default function App() {
  const scrollP = useScrollProgress()
  const rootRef = useReveal()
  const heroIntensity = Math.min(1, scrollP * 3)

  return (
    <div ref={rootRef}>
      <nav className="nav" aria-label="Main">
        <div className="wrap nav-inner">
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true">R</span>
            <span>
              <span className="brand-name">RIDA BOUTIQUE</span><br />
              <span className="brand-sub">North Nazimabad</span>
            </span>
          </a>
          <div className="nav-links">
            <a href="#collection">Collection</a>
            <a href="#sale">Sale</a>
            <a href="#visit">Visit Us</a>
            <a className="btn btn-gold btn-nav" href={shopWA} target="_blank" rel="noopener">WhatsApp Order</a>
          </div>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-3d" aria-hidden="true">
          <SilkHero intensity={heroIntensity} />
        </div>
        <div className="hero-scrim" aria-hidden="true" />
        <div
          className="wrap hero-content"
          style={{
            transform: `translateY(${scrollP * 120}px)`,
            opacity: Math.max(0, 1 - scrollP * 2.4),
          }}
        >
          <span className="eyebrow">Hyderi Gold Mark · Karachi</span>
          <h1>
            Dresses that feel<br />like <em>you.</em>
          </h1>
          <p className="hero-lede">
            Rida Boutique brings stitched and unstitched women's wear to North Nazimabad —
            HZ embroidered luxury, BinSaeed, Sadabahar and Saya, in sizes small to large.
            See something you love? One WhatsApp message and it is yours.
          </p>
          <div className="hero-cta">
            <a className="btn btn-gold" href="#collection">Shop the Collection</a>
            <a className="btn btn-outline" href={shopWA} target="_blank" rel="noopener">Order on WhatsApp</a>
          </div>
          <p className="hero-note">Shop UG-10A, Hyderi Gold Mark · WhatsApp 0334 2973795</p>
        </div>
        <span className="scroll-hint" aria-hidden="true">Scroll</span>
      </header>

      <div className="ticker" aria-label="Current offers">
        <div className="ticker-track">
          {Array.from({ length: 2 }).flatMap((_, k) => [
            <span key={`a${k}`}>Rabi ul Awal <b>Sale is on</b></span>,
            <span key={`b${k}`}>Up to <b>50% off</b> Bin Saeed Original Lawn</span>,
            <span key={`c${k}`}>New <b>HZ Festive Collection</b> in store</span>,
            <span key={`d${k}`}>Sizes <b>Small to Large</b> available</span>,
          ])}
        </div>
      </div>

      <main>
        <section className="section" id="collection">
          <div className="wrap">
            <div className="section-head reveal">
              <div className="kicker">The Collection</div>
              <h2>Picked this season, priced honestly</h2>
              <p>
                Every piece below is on the rack right now at the Hyderi shop.
                Tap order and your message opens in WhatsApp with the item already written in.
              </p>
            </div>
            <div className="grid">
              {products.map((p) => (
                <article className="card reveal" key={p.id}>
                  <div className="card-img">
                    <img src={p.img} alt={p.alt} loading="lazy" />
                  </div>
                  <div className="card-body">
                    <span className="card-brand">Rida Boutique</span>
                    <h3 className="card-name">{p.name}</h3>
                    <p className="card-detail">{p.detail}</p>
                    <p className="card-price">{p.price}</p>
                    <a className="btn btn-gold" href={p.wa} target="_blank" rel="noopener" aria-label={`Order ${p.name} on WhatsApp`}>
                      Order on WhatsApp
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section sale" id="sale">
          <div className="wrap sale-inner">
            <div className="reveal">
              <div className="kicker" style={{ color: '#C9A24B' }}>Limited Time</div>
              <h2>Rabi ul Awal Sale — <em>up to 50% off</em> Bin Saeed Original Lawn</h2>
              <p>
                The year's biggest Bin Saeed drop at its lowest prices. 100% original lawn,
                stitched 3 piece suits from Rs. 2,700. When the rack empties, the prices go back up.
              </p>
              <a className="btn btn-gold" href={shopWA} target="_blank" rel="noopener">Claim on WhatsApp</a>
            </div>
            <div className="sale-img reveal">
              <img src="/img/p01.jpg" alt="BinSaeed stitched lawn suits on sale at Rida Boutique" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="wrap two-col">
            <div className="about-copy reveal">
              <div className="kicker">About the Boutique</div>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 600, lineHeight: 1.1, marginBottom: 20 }}>
                A neighbourhood shop with brands women ask for by name
              </h2>
              <p>
                Rida Boutique sits at <strong>Shop UG-10A, Hyderi Gold Mark, North Nazimabad</strong> —
                a women's wear shop built around the labels Karachi already trusts:
                <strong> HZ, BinSaeed, Sadabahar and Saya</strong>.
              </p>
              <p>
                Everything is stitched and ready to wear, sizes small to large, and every
                new collection lands on the Instagram page first. Walk in, try it on, take it home.
                Or skip the trip: message on WhatsApp and your order is booked in a minute.
              </p>
              <ul className="fact-list">
                <li><span className="k">Stock</span><span>Stitched and unstitched women's suits, new drops every few weeks</span></li>
                <li><span className="k">Sizes</span><span>Small, medium and large on most collections</span></li>
                <li><span className="k">Ordering</span><span>WhatsApp 0334 2973795 — same-day reply</span></li>
              </ul>
            </div>
            <div className="reveal">
              <div className="sale-img">
                <img src="/img/p05.jpg" alt="Teal HZ embroidered festive suit with dupatta at Rida Boutique" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="visit" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="section-head reveal">
              <div className="kicker">Visit Us</div>
              <h2>Come see the fabric in person</h2>
            </div>
            <div className="visit-card reveal">
              <h3>Rida Boutique</h3>
              <div className="visit-row">
                <span className="k">Address</span>
                <span>Shop UG-10A, Hyderi Gold Mark,<br />North Nazimabad, Karachi</span>
              </div>
              <div className="visit-row">
                <span className="k">WhatsApp</span>
                <span>0334 2973795 — orders and questions</span>
              </div>
              <div className="visit-row">
                <span className="k">Instagram</span>
                <span>@rida_boutique.pk — new collections posted here first</span>
              </div>
              <a className="btn btn-gold" href={shopWA} target="_blank" rel="noopener">Message on WhatsApp</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <div className="foot-brand">RIDA BOUTIQUE<small>North Nazimabad · Karachi</small></div>
            </div>
            <div className="foot-links">
              <a href="#collection">Collection</a>
              <a href="#sale">Sale</a>
              <a href="#visit">Visit Us</a>
              <a href="https://www.instagram.com/rida_boutique.pk" target="_blank" rel="noopener">Instagram</a>
            </div>
          </div>
          <div className="foot-base">
            <span>Shop UG-10A, Hyderi Gold Mark, North Nazimabad, Karachi · 0334 2973795</span>
            <span>Demo website</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
