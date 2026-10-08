// Shopping bag drawer: slide-in on desktop, full-screen sheet on mobile.
import { useEffect } from 'react'
import { useCart } from '../store/cart.jsx'
import { fmtRs, priceNum } from '../store/orderMessage.js'
import { CloseIcon, WhatsAppIcon } from './icons.jsx'

export default function Bag() {
  const { open, setOpen, lines, count, subtotal, orderWA, setQty, remove } = useCart()

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, setOpen])

  const backToShop = () => {
    setOpen(false)
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {open && <button className="scrim bag-scrim" aria-label="Close bag" onClick={() => setOpen(false)} />}
      <aside className={`bag${open ? ' open' : ''}`} inert={!open} aria-label="Shopping bag">
        <div className="bag-head">
          <h2 className="h-lg">YOUR BAG <span className="caption">({count})</span></h2>
          <button className="icon-btn" aria-label="Close bag" onClick={() => setOpen(false)}>
            <CloseIcon />
          </button>
        </div>
        {lines.length === 0 ? (
          <div className="bag-empty">
            <p className="h-lg">Your bag is empty.</p>
            <p className="caption">The rack is full, though.</p>
            <button className="pill" onClick={backToShop}>Back to the rack</button>
          </div>
        ) : (
          <>
            <ul className="bag-lines">
              {lines.map(({ p, qty }) => (
                <li className="bag-line" key={p.id}>
                  <img src={p.img} alt={p.alt} loading="lazy" />
                  <div className="bag-line-meta">
                    <p className="body-strong">{p.name}</p>
                    <p className="caption-sm">{p.subtitle}</p>
                    <div className="stepper" role="group" aria-label={`Quantity for ${p.name}`}>
                      <button type="button" aria-label="Decrease quantity" onClick={() => setQty(p.id, qty - 1)}>
                        &minus;
                      </button>
                      <span aria-live="polite">{qty}</span>
                      <button type="button" aria-label="Increase quantity" onClick={() => setQty(p.id, qty + 1)}>
                        +
                      </button>
                    </div>
                    <button type="button" className="bag-remove" onClick={() => remove(p.id)}>
                      Remove
                    </button>
                  </div>
                  <p className="bag-line-total body-strong">{fmtRs(priceNum(p) * qty)}</p>
                </li>
              ))}
            </ul>
            <div className="bag-foot">
              <div className="bag-subtotal">
                <span>Subtotal</span>
                <span className="body-strong">{fmtRs(subtotal)}</span>
              </div>
              <a className="pill bag-checkout" href={orderWA} target="_blank" rel="noreferrer" aria-label="Order this bag on WhatsApp">
                <WhatsAppIcon /> Order on WhatsApp
              </a>
              <p className="caption-sm">One message with your full list. Cash on delivery all over Pakistan.</p>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
