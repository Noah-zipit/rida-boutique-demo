// Cart state: line items keyed by product id, persisted to localStorage.
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { products } from '../data/catalog.js'
import { buildOrderMessage, buildOrderWA, priceNum } from './orderMessage.js'

const KEY = 'ashar-store-cart-v1'
const byId = Object.fromEntries(products.map((p) => [p.id, p]))

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return {}
    const obj = JSON.parse(raw)
    const clean = {}
    for (const [id, qty] of Object.entries(obj)) {
      if (byId[id] && Number.isInteger(qty) && qty > 0) clean[id] = Math.min(qty, 99)
    }
    return clean
  } catch {
    return {}
  }
}

const CartCtx = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState(load)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(items)) } catch { /* private mode */ }
  }, [items])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open ])

  const add = useCallback((id) => {
    if (!byId[id]) return
    setItems((prev) => ({ ...prev, [id]: Math.min((prev[id] || 0) + 1, 99) }))
    setOpen(true)
  }, [])

  const setQty = useCallback((id, qty) => {
    setItems((prev) => {
      const next = { ...prev }
      if (qty <= 0) delete next[id]
      else next[id] = Math.min(qty, 99)
      return next
    })
  }, [])

  const remove = useCallback((id) => {
    setItems((prev) => {
      const next = { ...prev }
      delete next[id]
      return next
    })
  }, [])

  const clear = useCallback(() => setItems({}), [])

  const lines = useMemo(
    () => Object.entries(items).map(([id, qty]) => ({ p: byId[id], qty })).filter((l) => l.p),
    [items]
  )
  const count = lines.reduce((n, l) => n + l.qty, 0)
  const subtotal = lines.reduce((n, l) => n + priceNum(l.p) * l.qty, 0)
  const message = useMemo(() => buildOrderMessage(lines), [lines])
  const orderWA = useMemo(() => buildOrderWA(lines), [lines])

  const value = useMemo(
    () => ({ lines, count, subtotal, message, orderWA, open, setOpen, add, setQty, remove, clear }),
    [lines, count, subtotal, message, orderWA, open, add, setQty, remove, clear]
  )

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>
}

export function useCart() {
  const ctx = useContext(CartCtx)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
