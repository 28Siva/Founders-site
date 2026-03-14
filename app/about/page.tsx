import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <section style={{ background: '#fff', paddingTop: 140, paddingBottom: 80 }}>
        <div className="site-wrap" style={{ maxWidth: 800 }}>
          <p style={{ fontSize: 'clamp(22px,3vw,36px)', fontWeight: 500, color: 'var(--ink)', lineHeight: 1.35, letterSpacing: '-0.015em' }}>
            Indian founders are running some of the most complex businesses in the world — on spreadsheets, WhatsApp groups, and intuition. Not because they are not capable. Because no one has built the infrastructure they deserve.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--surface)', padding: '72px 0' }}>
        <div className="site-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
            <div>
              <h2 style={{ fontSize: 26, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', lineHeight: 1.3, marginBottom: 18 }}>The problem is not the tools. It is the gaps between them.</h2>
              <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.75 }}>Founders use a compliance tool here, a CRM there, accounting software somewhere else, and a spreadsheet for everything that does not fit. When your campaign spend, order margin, receivables delay, and runway are all in separate systems, you cannot see how they connect — until the connection becomes a crisis.</p>
            </div>
            <div>
              <h2 style={{ fontSize: 26, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', lineHeight: 1.3, marginBottom: 18 }}>Seeing the numbers is not the same as knowing what to do.</h2>
              <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.75, marginBottom: 20 }}>A dashboard that shows last month's burn rate does not tell you which three actions would extend your runway by four months. Information without action is just anxiety with better formatting. Founderos is built to close that gap.</p>
              <blockquote style={{ borderLeft: '3px solid var(--brand)', paddingLeft: 18 }}>
                <p style={{ fontSize: 19, fontStyle: 'italic', color: 'var(--ink)', fontFamily: 'Georgia, serif', lineHeight: 1.5 }}>"Information without action is just anxiety with better formatting."</p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '72px 0' }}>
        <div className="site-wrap">
          <h2 style={{ fontSize: 34, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 40 }}>The Founderos philosophy.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              ['Revenue from customers is the real fundraising.', 'Every rupee a customer pays you is market validation with no dilution attached. Founderos is built to help you earn that revenue with clarity, protect it with discipline, and grow it with intelligence.'],
              ['Founders should be default alive.', 'The goal is not to survive on external capital. It is to grow without needing it. External capital should accelerate, not rescue. Founderos keeps you honest about where you are on that spectrum.'],
              ['Decisions deserve to be remembered.', 'The best founders treat decisions as learning objects, not events. They document context, alternatives, and outcomes. They learn from the patterns. We build that habit into the product.'],
              ['Trust is not a feature. It is the foundation.', 'We will never sell your data, train public models on your business activity, or compromise your privacy for revenue. That is not a policy created by a legal team. It is a founding principle.'],
            ].map(([title, body]) => (
              <div key={String(title)} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 12, padding: 28 }}>
                <p style={{ fontSize: 17, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.01em', lineHeight: 1.3, marginBottom: 12 }}>{title}</p>
                <p style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.75 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--dark)', padding: '72px 0' }}>
        <div className="site-wrap">
          <h2 style={{ fontSize: 32, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', marginBottom: 40 }}>Four things we will never compromise on.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, maxWidth: 800 }}>
            {[
              ['01', 'Your data is stored on Indian servers. It does not leave Indian jurisdiction.'],
              ['02', 'Your data is never used to train AI models — public or private — without your explicit opt-in.'],
              ['03', 'You can export your complete data at any time, in full, within 24 hours of request.'],
              ['04', 'You can delete your account and all data permanently. Confirmed within 30 days. No dark patterns.'],
            ].map(([num, text]) => (
              <div key={num} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 22, display: 'flex', gap: 14 }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.2)', flexShrink: 0, marginTop: 2 }}>{num}</span>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--brand)', padding: '80px 0', textAlign: 'center' }}>
        <div className="site-wrap">
          <h2 style={{ fontSize: 34, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', marginBottom: 12 }}>If this is the product you have been waiting for, let's talk.</h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', marginBottom: 28 }}>We will show you what Founderos does for your business — or tell you honestly if it is not the right fit.</p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 32px', background: '#fff', color: 'var(--brand)', borderRadius: 10, fontWeight: 600, fontSize: 15 }}>Book a 20-minute walkthrough →</Link>
        </div>
      </section>

      <style>{`@media(max-width:1024px){div[style*="1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
    </>
  )
}
