import { useRef, useState } from 'react'
import { shopWA } from '../data/catalog.js'
import { PlusIcon } from './icons.jsx'
import { setShopFilter } from './Chrome.jsx'

const FESTIVE_IMG = import.meta.env.BASE_URL + 'img/p05.jpg'
const STORY_IMG = import.meta.env.BASE_URL + 'img/p03.jpg'

export function EditorialTile() {
  return (
    <section className="ed-tile" aria-label="Festive collection">
      <img
        className="bg"
        src={FESTIVE_IMG}
        alt="Teal festive three piece suit with floral embroidery"
        loading="lazy"
      />
      <div className="ed-copy">
        <h2 className="display">Festive<br />season<br />is here.</h2>
        <div style={{ marginTop: 24 }}>
          <button className="pill-white" onClick={() => setShopFilter('Festive')}>
            Shop festive
          </button>
        </div>
      </div>
    </section>
  )
}

export function StoryBand() {
  return (
    <section className="story" id="story" aria-label="About the store">
      <div className="story-inner">
        <div className="reveal">
          <span className="story-kicker">The store</span>
          <h2>Picked like it&rsquo;s for family.</h2>
          <p>
            Every suit on this rack passed one test: would we buy it for our own
            home? If the stitching isn&rsquo;t clean or the fabric doesn&rsquo;t
            feel right, it goes back. That is the whole policy.
          </p>
          <a className="pill-white" href={shopWA} target="_blank" rel="noreferrer">
            Chat with us
          </a>
        </div>
        <div className="story-img reveal">
          <img
            src={STORY_IMG}
            alt="Olive green three piece suit with delicate white embroidery, close up"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

const FAQS = [
  {
    q: 'How do I place an order?',
    a: 'Tap Add to bag on anything you like, then open your bag and hit Order on WhatsApp. It sends us your whole list in one message. Tell us your size and address, and we confirm.',
  },
  {
    q: 'What sizes do you carry?',
    a: 'Small, medium and large on stitched pieces. We confirm your size on WhatsApp before anything ships.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Three to five working days, anywhere in Pakistan. Cash on delivery, so no advance is needed.',
  },
  {
    q: 'What if it doesn\u2019t fit?',
    a: 'Seven-day exchange. Keep it unworn with the tags on and we swap the size.',
  },
]

function FaqRow({ q, a }) {
  const [open, setOpen] = useState(false)
  const bodyRef = useRef(null)
  return (
    <div className="faq-row">
      <button
        className="faq-q"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{q}</span>
        <PlusIcon />
      </button>
      <div
        className="faq-a"
        ref={bodyRef}
        style={{ maxHeight: open ? bodyRef.current?.scrollHeight + 'px' : 0 }}
      >
        <p>{a}</p>
      </div>
    </div>
  )
}

export function Faq() {
  return (
    <section className="faq" id="faq" aria-label="Frequently asked questions">
      <div className="wrap">
        <h2 className="h-xl reveal" style={{ marginBottom: 16 }}>GOOD TO KNOW</h2>
        <div className="reveal">
          {FAQS.map((f) => <FaqRow key={f.q} q={f.q} a={f.a} />)}
        </div>
      </div>
    </section>
  )
}
