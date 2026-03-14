import Link from 'next/link'

export default function NotFound() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface)', textAlign: 'center' }}>
      <div>
        <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 72, fontWeight: 500, color: 'rgba(0,0,0,0.06)', lineHeight: 1, marginBottom: 16 }}>404</p>
        <h1 style={{ fontSize: 28, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 8 }}>Page not found.</h1>
        <p style={{ fontSize: 15, color: 'var(--ink2)', marginBottom: 24 }}>The page you are looking for does not exist.</p>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 22px', borderRadius: 10, background: 'var(--brand)', color: '#fff', fontSize: 14, fontWeight: 500 }}>← Back to home</Link>
      </div>
    </section>
  )
}
