import Link from 'next/link'

const segments = [
  { id: 'early-stage', label: 'Early-stage startup founder', sub: 'Pre-revenue to ₹50L ARR', headline: 'Build on solid ground.', body: 'The first year is full of invisible traps. Compliance obligations you did not know applied. Runway you underestimated. Decisions made without recording why. Founderos gives early-stage founders a clear operating floor.', pains: ['Compliance confusion — which filings apply?', 'Runway blindness — how long can we sustain?', 'CRM in WhatsApp and memory', 'Decisions undocumented and forgotten'], modules: ['Morning brief', 'Compliance calendar', 'Cash & runway', 'CRM pipeline', 'Decision journal'], outcome: 'Know your obligations. Know your runway. Never lose a founder decision again.', dark: false },
  { id: 'd2c', label: 'D2C brand and product business', sub: 'Shipping orders, building a brand', headline: 'Know if you are making money. Per order.', body: 'Revenue is vanity. Margin is sanity. If you are shipping orders without knowing which ones are profitable — after returns, logistics, staff time, and platform fees — you are running on hope. Founderos closes that gap.', pains: ['Unknown per-order margin after platform fees', 'Working capital stress: collections lag shipments', 'Campaign memory loss — same mistakes each quarter', 'Returns distorting P&L invisibly'], modules: ['Order P&L', 'Delivery tracking', 'Receivables', 'Campaign intelligence', 'Cash & runway'], outcome: 'Ship with confidence. Collect faster. Spend smarter.', dark: true },
  { id: 'services', label: 'Service business and agency', sub: 'Selling time and expertise', headline: 'Time is your inventory. Track it.', body: 'A service business has one core asset: the productive time of its team. Founderos maps that time to revenue, shows you which clients generate real margin, and tells you when your pipeline is about to run dry.', pains: ['Project profitability unknown until after delivery', 'Staff time not mapped to client value', 'Receivables consistently delayed', 'Pipeline managed in email and memory'], modules: ['CRM & pipeline', 'People & capacity', 'Receivables', 'Cash & runway', 'Campaign intelligence'], outcome: 'Know your most profitable clients. Fill your pipeline. Collect on time.', dark: false },
  { id: 'incubated', label: 'Incubated startup', sub: 'Under grant and milestone pressure', headline: 'Graduate ready. Not scrambling.', body: 'Incubation is your best window to build the proof investors need. Most founders waste it because they are not systematically capturing progress. Founderos turns your incubation into a structured operating record.', pains: ['Milestone tracking in spreadsheets over email', 'Grant utilisation not documented', 'Compliance pressure high during incubation', 'Funding readiness low at graduation'], modules: ['Incubation profile', 'Compliance calendar', 'Funding readiness', 'Decision journal', 'Morning brief'], outcome: 'Track every milestone. Document every decision. Graduate with a data room, not just a pitch deck.', dark: true },
]

export default function SolutionsPage() {
  return (
    <>
      <section style={{ background: 'var(--surface)', paddingTop: 140, paddingBottom: 64 }}>
        <div className="site-wrap">
          <h1 style={{ fontSize: 'clamp(34px,4vw,56px)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 16 }}>The same system.<br />Shaped to your business.</h1>
          <p style={{ fontSize: 18, color: 'var(--ink2)', lineHeight: 1.7, maxWidth: 540 }}>Founderos adapts to your industry, stage, business model, and biggest pain point.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 32 }}>
            {segments.map(s => (
              <a key={s.id} href={`#${s.id}`} style={{ padding: '6px 16px', borderRadius: 20, border: '1px solid var(--line)', fontSize: 13, color: 'var(--ink2)', background: '#fff' }}>{s.label.split(' ').slice(0, 2).join(' ')}</a>
            ))}
          </div>
        </div>
      </section>

      {segments.map((seg, idx) => (
        <section key={seg.id} id={seg.id} style={{ background: seg.dark ? 'var(--dark)' : idx % 2 === 0 ? '#fff' : 'var(--surface)', padding: '80px 0' }}>
          <div className="site-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start' }}>
              <div>
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, letterSpacing: '0.07em', textTransform: 'uppercase', color: seg.dark ? 'rgba(255,255,255,0.3)' : 'var(--ink3)', marginBottom: 14 }}>{seg.label}</p>
                <h2 style={{ fontSize: 'clamp(24px,2.8vw,36px)', fontWeight: 600, color: seg.dark ? '#fff' : 'var(--ink)', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 8 }}>{seg.headline}</h2>
                <p style={{ fontSize: 14, color: seg.dark ? 'rgba(255,255,255,0.4)' : 'var(--ink3)', marginBottom: 18 }}>{seg.sub}</p>
                <p style={{ fontSize: 15, color: seg.dark ? 'rgba(255,255,255,0.6)' : 'var(--ink2)', lineHeight: 1.75, marginBottom: 28 }}>{seg.body}</p>
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: seg.dark ? 'rgba(255,255,255,0.3)' : 'var(--ink3)', marginBottom: 10 }}>Where founders get stuck</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                  {seg.pains.map(p => (
                    <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14, color: seg.dark ? 'rgba(255,255,255,0.55)' : 'var(--ink2)' }}>
                      <span style={{ width: 5, height: 5, background: seg.dark ? 'rgba(255,255,255,0.2)' : 'var(--ink4)', borderRadius: '50%', flexShrink: 0, marginTop: 7 }} />{p}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" style={{ fontSize: 14, fontWeight: 500, color: seg.dark ? 'rgba(255,255,255,0.7)' : 'var(--brand)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>See how Founderos helps →</Link>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ background: seg.dark ? 'rgba(255,255,255,0.05)' : 'var(--surface)', border: `1px solid ${seg.dark ? 'rgba(255,255,255,0.08)' : 'var(--line)'}`, borderRadius: 12, padding: 20 }}>
                  <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: seg.dark ? 'rgba(255,255,255,0.3)' : 'var(--ink3)', marginBottom: 12 }}>Key modules for this segment</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                    {seg.modules.map(m => (
                      <span key={m} style={{ background: seg.dark ? 'rgba(91,79,232,0.2)' : 'var(--brand-light)', color: seg.dark ? 'rgba(165,157,241,0.9)' : 'var(--brand)', fontSize: 12, fontWeight: 500, padding: '4px 12px', borderRadius: 20 }}>{m}</span>
                    ))}
                  </div>
                </div>
                <div style={{ background: seg.dark ? 'rgba(15,158,117,0.1)' : 'var(--teal-light)', border: '1px solid rgba(15,158,117,0.2)', borderRadius: 12, padding: 20 }}>
                  <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 8 }}>The outcome</p>
                  <p style={{ fontSize: 15, fontWeight: 500, color: seg.dark ? '#fff' : 'var(--ink)' }}>{seg.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section style={{ background: 'var(--dark)', padding: '80px 0', textAlign: 'center' }}>
        <div className="site-wrap">
          <h2 style={{ fontSize: 36, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', marginBottom: 12 }}>Find your starting point.</h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', marginBottom: 28 }}>Tell us about your business and we will show you which modules matter most.</p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 32px', background: 'var(--brand)', color: '#fff', borderRadius: 10, fontWeight: 500, fontSize: 15 }}>Request a demo →</Link>
        </div>
      </section>

      <style>{`
        :root { --brand-light: #EEEDFE; --teal-light: #E2F7F0; }
        @media (max-width: 1024px) { div[style*="1fr 1fr"] { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  )
}
