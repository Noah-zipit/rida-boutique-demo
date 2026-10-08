import { WHATSAPP_DISPLAY } from '../data/catalog.js'

export function Terms() {
  return (
    <div className="wrap legal">
      <h1>Terms</h1>
      <p className="caption updated">Last updated: October 2026</p>
      <h2>A demo storefront</h2>
      <p>
        Ashar Store is a demo website with a sample catalog. Nothing here is a
        live listing, and product availability is confirmed on WhatsApp.
      </p>
      <h2>Ordering</h2>
      <p>
        Orders are placed through WhatsApp. Nothing is charged on this site.
        Prices are in Pakistani rupees and payment is cash on delivery.
      </p>
      <h2>Exchanges</h2>
      <p>
        Seven-day exchange on unworn pieces with the tags still on. We swap the
        size once we have your order details.
      </p>
      <h2>Contact</h2>
      <p>WhatsApp {WHATSAPP_DISPLAY}. Replies within a day.</p>
    </div>
  )
}

export function Privacy() {
  return (
    <div className="wrap legal">
      <h1>Privacy</h1>
      <p className="caption updated">Last updated: October 2026</p>
      <h2>What we collect</h2>
      <p>
        This demo site runs no accounts and stores nothing about you. There is
        no checkout form and no newsletter signup.
      </p>
      <h2>WhatsApp orders</h2>
      <p>
        Tapping an order button opens WhatsApp with a prefilled message. That
        chat follows WhatsApp&rsquo;s own privacy policy, not ours.
      </p>
      <h2>Cookies</h2>
      <p>
        No analytics and no tracking cookies. Your browser may keep the usual
        technical data it needs to load the page.
      </p>
    </div>
  )
}

export function NotFound() {
  return (
    <div className="wrap notfound">
      <h1 className="display">Lost<br />your way.</h1>
      <p>That page isn&rsquo;t on the rack.</p>
      <a className="pill" href="#/">Back to the store</a>
    </div>
  )
}
