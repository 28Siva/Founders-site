'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobile, setMobile] = useState(false)
  const [prod, setProd] = useState(false)
  const [sol, setSol] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const pl = [
    { l: 'AI co-founder', h: '/product' },
    { l: 'Morning brief', h: '/product' },
    { l: 'Compliance', h: '/product' },
    { l: 'Cash & runway', h: '/product' },
    { l: 'Order P&L', h: '/product' },
    { l: 'Funding readiness', h: '/product' },
  ]
  const sl = [
    { l: 'Early-stage founders', h: '/solutions' },
    { l: 'D2C brands', h: '/solutions' },
    { l: 'Service businesses', h: '/solutions' },
    { l: 'Incubated startups', h: '/solutions' },
    { l: 'Accelerators & VCs', h: '/solutions' },
  ]

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, height: 64,
        display: 'flex', alignItems: 'center',
        background: scrolled ? 'rgba(250,250,250,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.07)' : 'none',
        transition: 'all 0.2s',
      }}>
        <div className="site-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600, fontSize: 16, color: 'var(--ink)' }}>
            <span style={{ width: 28, height: 28, background: 'var(--brand)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13, fontWeight: 700 }}>F</span>
            Founderos
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden md:flex">
            {/* Product dropdown — onMouseEnter/Leave on DIV only, not Link */}
            <div style={{ position: 'relative' }}
              onMouseEnter={() => setProd(true)}
              onMouseLeave={() => setProd(false)}>
              <button style={{ padding: '8px 14px', borderRadius: 8, background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, color: 'var(--ink2)', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 4 }}>
                Product <span style={{ fontSize: 9, display: 'inline-block', transform: prod ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>▼</span>
              </button>
              {prod && (
                <div style={{ position: 'absolute', top: '100%', left: 0, marginTop: 4, background: '#fff', border: '1px solid var(--line)', borderRadius: 12, padding: 8, boxShadow: '0 8px 32px rgba(0,0,0,0.1)', zIndex: 200, minWidth: 200 }}>
                  {pl.map(i => (
                    <Link key={i.l} href={i.h} className="nav-drop-item">{i.l}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions dropdown */}
            <div style={{ position: 'relative' }}
              onMouseEnter={() => setSol(true)}
              onMouseLeave={() => setSol(false)}>
              <button style={{ padding: '8px 14px', borderRadius: 8, background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, color: 'var(--ink2)', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 4 }}>
                Solutions <span style={{ fontSize: 9, display: 'inline-block', transform: sol ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>▼</span>
              </button>
              {sol && (
                <div style={{ position: 'absolute', top: '100%', left: 0, marginTop: 4, background: '#fff', border: '1px solid var(--line)', borderRadius: 12, padding: 8, boxShadow: '0 8px 32px rgba(0,0,0,0.1)', zIndex: 200, minWidth: 200 }}>
                  {sl.map(i => (
                    <Link key={i.l} href={i.h} className="nav-drop-item">{i.l}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/pricing" className="nav-plain-link">Pricing</Link>
            <Link href="/about" className="nav-plain-link">About</Link>
          </div>

          {/* Desktop CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }} className="hidden md:flex">
            <Link href="/contact" className="btn-outline">Sign in</Link>
            <Link href="/contact" className="btn-solid">Request demo →</Link>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setMobile(true)} className="md:hidden" style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', padding: 8 }}>☰</button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobile && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, background: '#fff', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', height: 64, borderBottom: '1px solid var(--line)' }}>
            <span style={{ fontWeight: 600, fontSize: 16 }}>Founderos</span>
            <button onClick={() => setMobile(false)} style={{ background: 'none', border: 'none', fontSize: 24, cursor: 'pointer' }}>✕</button>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: 20, display: 'flex', flexDirection: 'column' }}>
            {[['Home', '/'], ['Product', '/product'], ['Solutions', '/solutions'], ['Pricing', '/pricing'], ['About', '/about'], ['Contact', '/contact']].map(([l, h]) => (
              <Link key={h} href={h} onClick={() => setMobile(false)} style={{ padding: '14px 0', fontSize: 18, fontWeight: 500, borderBottom: '1px solid var(--line)', display: 'block' }}>{l}</Link>
            ))}
          </div>
          <div style={{ padding: 20 }}>
            <Link href="/contact" onClick={() => setMobile(false)} className="btn-solid" style={{ width: '100%', justifyContent: 'center', fontSize: 15, padding: '12px 0' }}>Request demo →</Link>
          </div>
        </div>
      )}

      <style>{`
        .nav-drop-item { display: block; padding: 10px 12px; border-radius: 8px; font-size: 13px; font-weight: 500; color: var(--ink); }
        .nav-drop-item:hover { background: var(--surface); }
        .nav-plain-link { padding: 8px 14px; border-radius: 8px; font-size: 14px; color: var(--ink2); }
        .nav-plain-link:hover { background: rgba(0,0,0,0.05); color: var(--ink); }
        .btn-solid { display: inline-flex; align-items: center; gap: 6px; padding: 8px 18px; border-radius: 10px; background: var(--brand); color: #fff; font-size: 13px; font-weight: 500; border: none; cursor: pointer; transition: filter 0.15s; }
        .btn-solid:hover { filter: brightness(1.1); }
        .btn-outline { display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px; border-radius: 10px; background: transparent; color: var(--ink); font-size: 13px; font-weight: 500; border: 1px solid var(--line); cursor: pointer; transition: background 0.15s; }
        .btn-outline:hover { background: rgba(0,0,0,0.04); }
      `}</style>
    </>
  )
}
