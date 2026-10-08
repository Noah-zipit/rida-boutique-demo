import { useEffect, useRef, useState } from 'react'
import { UtilityBar, Navbar, Footer } from './components/Chrome.jsx'
import Hero from './components/Hero.jsx'
import Shop from './components/Shop.jsx'
import { EditorialTile, StoryBand, Faq } from './components/Sections.jsx'
import { Terms, Privacy, NotFound } from './components/Legal.jsx'

function routeFromHash() {
  const h = window.location.hash.replace(/^#/, '')
  if (h === '/' || h === '') return 'home'
  if (h === '/terms') return 'terms'
  if (h === '/privacy') return 'privacy'
  if (h.startsWith('/')) return '404'
  return 'home'
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
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target) }
      }),
      { threshold: 0.1 }
    )
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  })
  return ref
}

function Home() {
  return (
    <main>
      <Hero />
      <Shop />
      <EditorialTile />
      <StoryBand />
      <Faq />
    </main>
  )
}

export default function App() {
  const [route, setRoute] = useState(() => routeFromHash())
  const rootRef = useReveal()

  useEffect(() => {
    const onHash = () => {
      setRoute(routeFromHash())
      window.scrollTo({ top: 0 })
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    document.title =
      route === 'terms' ? 'Terms — Ashar Store'
      : route === 'privacy' ? 'Privacy — Ashar Store'
      : route === '404' ? 'Not found — Ashar Store'
      : 'Ashar Store — Stitched Suits, Lawn & Festive Wear'
  }, [route])

  return (
    <div ref={rootRef}>
      <UtilityBar />
      <Navbar />
      {route === 'home' && <Home />}
      {route === 'terms' && <main><Terms /></main>}
      {route === 'privacy' && <main><Privacy /></main>}
      {route === '404' && <main><NotFound /></main>}
      <Footer />
    </div>
  )
}
