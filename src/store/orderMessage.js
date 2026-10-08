// Pure order-message builder — no JSX, so it can be unit-tested in node.
import { WHATSAPP_NUMBER } from '../data/catalog.js'

export const priceNum = (p) => Number(String(p.price).replace(/[^0-9]/g, '')) || 0

export const fmtRs = (n) => 'Rs. ' + Number(n).toLocaleString('en-PK')

// lines: [{ p: product, qty: number }]
export function buildOrderMessage(lines) {
  if (!lines.length) return ''
  const rows = lines.map(
    (l) => `\u2022 ${l.p.name} x ${l.qty} \u2014 ${fmtRs(priceNum(l.p) * l.qty)}`
  )
  const subtotal = lines.reduce((n, l) => n + priceNum(l.p) * l.qty, 0)
  return [
    'Assalamualaikum Ashar Store, I want to place an order:',
    '',
    ...rows,
    '',
    `Subtotal: ${fmtRs(subtotal)}`,
    'Please confirm availability and delivery details. Shukriya!',
  ].join('\n')
}

export function buildOrderWA(lines) {
  const msg = buildOrderMessage(lines)
  return msg ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}` : ''
}
