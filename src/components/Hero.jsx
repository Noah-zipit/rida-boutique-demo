import { shopWA } from '../data/catalog.js'

const HERO_IMG = import.meta.env.BASE_URL + 'img/p00.jpg'

export default function Hero() {
  return (
    <section className="hero" aria-label="New winter drop">
      <img
        className="bg"
        src={HERO_IMG}
        alt="Black three piece suit with red floral embroidery"
        fetchPriority="high"
      />
      <div className="hero-copy">
        <span className="hero-eyebrow">New drop · Winter &rsquo;26</span>
        <h1 className="display">Dress<br />loud.</h1>
        <p className="hero-sub">
          Stitched suits that don&rsquo;t whisper. Embroidered 3-pieces, printed
          lawn and khaddar, ready to wear and delivered to your door.
        </p>
        <div className="hero-cta">
          <a className="pill-white" href="#shop">Shop the drop</a>
          <a className="text-link" href={shopWA} target="_blank" rel="noreferrer">WhatsApp us</a>
        </div>
      </div>
    </section>
  )
}
