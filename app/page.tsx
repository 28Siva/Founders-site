import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: 'var(--dark)', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 64, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 500, height: 500, background: 'var(--brand)', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.1, top: '5%', left: '15%', pointerEvents: 'none' }} />
        <div className="site-wrap" style={{ width: '100%', padding: '80px 40px' }}>
          <div style={{ maxWidth: 680 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', borderRadius: 20, background: 'rgba(91,79,232,0.15)', border: '1px solid rgba(91,79,232,0.25)', marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, background: 'var(--brand)', borderRadius: '50%', display: 'inline-block' }} />
              <span style={{ fontSize: 12, fontWeight: 500, color: 'rgba(165,157,241,0.9)' }}>AI co-founder · Built for Indian founders</span>
            </div>
            <h1 style={{ fontSize: 'clamp(38px,5vw,62px)', fontWeight: 600, color: '#fff', lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: 24 }}>
              Run your startup.<br />Not just your<br /><span style={{ color: 'rgba(165,157,241,0.9)' }}>dashboard.</span>
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: 500, marginBottom: 32 }}>
              Founderos is the operating system Indian founders actually need. From your morning brief to your funding readiness score — every decision, every risk, every rupee, in one place.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
              <Link href="/contact" className="btn-solid" style={{ fontSize: 15, padding: '12px 28px' }}>Get started free →</Link>
              <Link href="/contact" className="btn-outline-dark" style={{ fontSize: 15, padding: '12px 24px' }}>Book a demo</Link>
            </div>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              {['No credit card', 'Setup in 10 minutes', 'Data stays in India'].map(s => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 4, height: 4, background: 'var(--teal)', borderRadius: '50%' }} />
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ background: 'var(--surface)', padding: '96px 0' }}>
        <div className="site-wrap">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="sec-label">The founder's real day</span>
            <h2 className="h2" style={{ marginTop: 8, marginBottom: 6 }}>You are not running out of ambition.</h2>
            <p style={{ fontSize: 20, color: 'var(--ink3)' }}>You are running out of visibility.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {[
              'You shipped 40 orders this month. You have no idea which ones made money.',
              'Your GST deadline was three days ago. You found out today.',
              'One customer is 60% of your revenue. You had not noticed until now.',
              'You raised capital to grow. You are not sure where it went.',
              'Your best decisions are in your head. Your worst ones are repeating.',
            ].map((pain, i) => (
              <div key={i} className="card" style={{ transform: i % 2 === 0 ? 'rotate(-0.3deg)' : 'rotate(0.4deg)' }}>
                <p style={{ fontSize: 17, fontWeight: 500, lineHeight: 1.45 }}>{pain}</p>
              </div>
            ))}
            <div style={{ background: 'var(--brand)', borderRadius: 12, padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 8 }}>The fix is not another tool.</p>
              <p style={{ fontSize: 17, fontWeight: 600, color: '#fff', lineHeight: 1.4 }}>It is a system that sees your whole business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="site-wrap">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="sec-label">The complete system</span>
            <h2 className="h2" style={{ marginTop: 8, marginBottom: 10 }}>One platform. Every layer your business needs.</h2>
            <p style={{ fontSize: 17, color: 'var(--ink2)', maxWidth: 520, margin: '0 auto' }}>Activate what you need. Add more as you grow.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
            {[
              ['◆', 'AI co-founder', 'Advice that knows your business, not just your question'],
              ['◈', 'Morning brief', 'Your day, sorted before you open your inbox'],
              ['◉', 'Compliance calendar', 'Every India filing, before the deadline'],
              ['◎', 'Cash & runway', 'Your default-alive date, updated daily'],
              ['◇', 'Order P&L', 'Profit or loss on every transaction, in real time'],
              ['◐', 'CRM & pipeline', 'From first conversation to closed revenue'],
              ['◑', 'Receivables', 'Who owes you, how much, and for how long'],
              ['◒', 'Campaign intelligence', 'Pre-spend scenarios from your own history'],
              ['◓', 'People & capacity', 'Staff cost mapped to output, not headcount'],
              ['◔', 'Funding readiness', 'Live score with exact improvement actions'],
              ['◕', 'Decision journal', 'Every choice documented. Patterns revealed.'],
              ['○', 'Data room', 'Investor evidence built as you operate'],
            ].map(([icon, name, desc]) => (
              <Link key={name} href="/product" className="card" style={{ display: 'block' }}>
                <div style={{ width: 36, height: 36, background: 'var(--brand-light)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, marginBottom: 12, color: 'var(--brand)' }}>{icon}</div>
                <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 5, color: 'var(--ink)' }}>{name}</p>
                <p style={{ fontSize: 12, color: 'var(--ink3)', lineHeight: 1.5 }}>{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section style={{ background: 'var(--surface)', padding: '96px 0' }}>
        <div className="site-wrap">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="sec-label">Who it's for</span>
            <h2 className="h2" style={{ marginTop: 8 }}>Built for the way you actually work.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
            {[
              { t: 'Early-stage startup founder', s: 'Pre-revenue to ₹50L ARR', d: 'The first year is full of invisible traps. Compliance you did not know applied, runway underestimated, decisions undocumented. Founderos gives you a clear operating floor.', c: 'var(--brand)' },
              { t: 'D2C and product business', s: 'Shipping orders, building a brand', d: 'Revenue is vanity. Margin is sanity. Founderos shows profit or loss on every order, tracks deliveries, and flags every working capital gap.', c: 'var(--teal)' },
              { t: 'Service business or agency', s: 'Selling time and expertise', d: 'Your inventory is your team\'s hours. Founderos maps staff time to client revenue and tells you which projects are actually profitable.', c: 'var(--amber)' },
              { t: 'Incubated startup', s: 'Under grant and milestone pressure', d: 'Incubation is your best window to build investor proof. Graduate with a data room, not just a pitch deck.', c: '#A855F7' },
            ].map(seg => (
              <div key={seg.t} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', marginBottom: 3 }}>{seg.t}</p>
                  <p style={{ fontSize: 12, color: 'var(--ink3)' }}>{seg.s}</p>
                </div>
                <p style={{ fontSize: 13, color: 'var(--ink2)', lineHeight: 1.6, flex: 1 }}>{seg.d}</p>
                <Link href="/solutions" style={{ fontSize: 13, fontWeight: 500, color: seg.c }}>See how it works →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section style={{ background: 'var(--dark)', padding: '96px 0' }}>
        <div className="site-wrap">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="sec-label-dark">Data and trust</span>
            <h2 className="h2" style={{ color: '#fff', marginTop: 8, marginBottom: 10 }}>Your business data is yours. Completely.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 40 }}>
            {[
              ['🏛', 'Stored in India. Always.', 'All data on Indian servers. Never crosses international jurisdiction.'],
              ['⬇', 'Export or delete, any time.', 'Full export within 24 hours. Permanent deletion within 30 days.'],
              ['🔒', 'No model training.', 'Your data never trains public or shared AI models. Ever.'],
              ['📋', 'Full audit trail.', 'Every change, every suggestion — logged with a timestamp.'],
            ].map(([icon, title, desc]) => (
              <div key={String(title)} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 24 }}>
                <div style={{ width: 40, height: 40, background: 'rgba(91,79,232,0.15)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, marginBottom: 14 }}>{icon}</div>
                <p style={{ fontSize: 14, fontWeight: 500, color: '#fff', marginBottom: 8 }}>{title}</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.55 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="site-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
            <div>
              <span className="sec-label">FAQ</span>
              <h2 className="h2" style={{ margin: '12px 0 16px' }}>Questions founders actually ask.</h2>
              <Link href="/contact" className="btn-solid">Talk to us →</Link>
            </div>
            <div>
              {[
                ['Is Founderos only for tech startups?', 'No. Founderos works for any Indian founder — D2C brands, service businesses, manufacturing MSMEs, SaaS companies, agencies, and incubated startups. Your business type shapes which modules you see.'],
                ['How long does setup actually take?', 'Your first morning brief appears in under 10 minutes with manual entry. If you connect a payment gateway or import a bank statement, you have richer data within an hour.'],
                ['My accountant handles compliance. Why do I need this?', 'Your accountant handles filings. Founderos handles decisions between filings — cash position, order margin, team cost, business risk. They are different jobs.'],
                ['What happens to my data if I cancel?', 'You own it. Export everything in full within 24 hours of request. We permanently delete your data within 30 days of account closure.'],
                ['How accurate is the AI advice?', 'Every AI output shows its source, confidence level, and assumptions. Low-confidence outputs are flagged. You can edit any suggestion — and every edit feeds back into your AI context over time.'],
              ].map(([q, a]) => (
                <details key={String(q)} style={{ borderBottom: '1px solid var(--line)', padding: '16px 0' }}>
                  <summary style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                    <p style={{ fontSize: 15, fontWeight: 500, color: 'var(--ink)' }}>{q}</p>
                    <span style={{ fontSize: 20, color: 'var(--ink3)', fontWeight: 300, flexShrink: 0 }}>+</span>
                  </summary>
                  <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.7, marginTop: 12 }}>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--dark)', padding: '96px 0', textAlign: 'center' }}>
        <div className="site-wrap">
          <h2 style={{ fontSize: 'clamp(30px,4vw,52px)', fontWeight: 600, color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: 16, maxWidth: 640, margin: '0 auto 16px' }}>Start running your startup.<br />Not just tracking it.</h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', marginBottom: 32 }}>Join Indian founders who use Founderos as their daily operating system.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-solid" style={{ fontSize: 16, padding: '13px 32px' }}>Get started free →</Link>
          </div>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginTop: 16 }}>No credit card · Setup in 10 minutes · Your data stays in India</p>
        </div>
      </section>

      <style>{`
        .sec-label { display: inline-flex; align-items: center; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; background: var(--brand-light); color: var(--brand); margin-bottom: 16px; }
        .sec-label-dark { display: inline-flex; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; background: rgba(91,79,232,0.2); color: rgba(165,157,241,0.9); margin-bottom: 16px; }
        .h2 { font-size: clamp(26px,3vw,38px); font-weight: 600; color: var(--ink); letter-spacing: -0.02em; line-height: 1.2; }
        .card { background: #fff; border: 1px solid var(--line); border-radius: 12px; padding: 24px; transition: all 0.15s; }
        .card:hover { border-color: rgba(0,0,0,0.14); transform: translateY(-2px); box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
        .btn-solid { display: inline-flex; align-items: center; gap: 6px; padding: 10px 22px; border-radius: 10px; background: var(--brand); color: #fff; font-size: 14px; font-weight: 500; border: none; cursor: pointer; transition: filter 0.15s; font-family: inherit; }
        .btn-solid:hover { filter: brightness(1.1); }
        .btn-outline-dark { display: inline-flex; align-items: center; padding: 10px 22px; border-radius: 10px; background: transparent; color: rgba(255,255,255,0.7); font-size: 14px; font-weight: 500; border: 1px solid rgba(255,255,255,0.15); cursor: pointer; }
        .brand-light { background: var(--brand-light); }
        :root { --brand-light: #EEEDFE; }
        @media (max-width: 1024px) {
          div[style*="repeat(4,1fr)"] { grid-template-columns: repeat(2,1fr) !important; }
          div[style*="repeat(3,1fr)"] { grid-template-columns: repeat(2,1fr) !important; }
          div[style*="1fr 2fr"] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          div[style*="repeat(4,1fr)"], div[style*="repeat(3,1fr)"], div[style*="repeat(2,1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
