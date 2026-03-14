import Link from 'next/link'

export default function ProductPage() {
  return (
    <>
      <section style={{ background: 'var(--dark)', paddingTop: 140, paddingBottom: 80 }}>
        <div className="site-wrap">
          <div style={{ maxWidth: 680 }}>
            <h1 style={{ fontSize: 'clamp(36px,4.5vw,58px)', fontWeight: 600, color: '#fff', lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: 20 }}>Not a dashboard.<br />A decision engine.</h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>Built in layers. The core operating layer comes first. Business modules activate as you need them.</p>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '48px 0', borderBottom: '1px solid var(--line)' }}>
        <div className="site-wrap">
          <p style={{ fontSize: 18, color: 'var(--ink2)', lineHeight: 1.75, maxWidth: 680 }}>Most founder tools give you information. Founderos gives you decisions. Every number has a source. Every insight has an action. Every action has an owner.</p>
        </div>
      </section>

      {/* Core layer */}
      <section style={{ background: 'var(--surface)', padding: '64px 0' }}>
        <div className="site-wrap">
          <h2 style={{ fontSize: 28, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 8 }}>Core layer — active from day one</h2>
          <p style={{ fontSize: 16, color: 'var(--ink2)', marginBottom: 32 }}>Three questions answered every day, for every founder.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
            {[
              ['Morning brief', 'Your day, sorted before you open your inbox. AI-ranked priorities, compliance alerts, revenue signals — in one 2-minute read.'],
              ['Compliance calendar', 'India has 50+ compliance obligations. Founderos maps every filing that applies to your entity — with deadlines, checklists, and delegate-to-CA workflow.'],
              ['Cash & runway', 'Know your default-alive date. Updated daily. With the three levers that extend it most — calculated and ranked automatically.'],
            ].map(([n, d]) => (
              <div key={String(n)} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 12, padding: 20 }}>
                <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginBottom: 6 }}>{n}</p>
                <p style={{ fontSize: 13, color: 'var(--ink2)', lineHeight: 1.5 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All modules */}
      {[
        { id: 'ai-cofounder', name: 'AI co-founder', tagline: 'Advice that knows your business. Not just your question.', body: 'Other tools answer questions. Founderos knows your stage, your decisions, your revenue model, and your history. Every response shows its source, confidence level, and assumptions. You can edit any suggestion.', features: ['Context-aware guidance that adapts as your business evolves', 'Editable AI responses saved as founder decisions', 'Decision provenance tagging on every insight', 'Adapts by business type and stage', 'Morning brief generation', 'Proactive alert triage'], bg: '#fff' },
        { id: 'morning-brief', name: 'Morning brief', tagline: 'Your day, sorted before you open your inbox.', body: 'The morning brief pulls from compliance, cash, open orders, pipeline, and previous day revenue — and surfaces the three most important things right now, ranked by business impact.', features: ['AI-ranked daily priorities by business impact', 'Compliance alerts integrated', 'Revenue signal from previous day', 'One-click task creation', 'Segment-adapted content', 'Editable and saveable'], bg: 'var(--surface)' },
        { id: 'compliance', name: 'Compliance calendar', tagline: 'Every India filing, before the deadline — not after.', body: 'India has more than 50 compliance obligations for a registered startup. Founderos maps your entity type, registration status, and revenue band to the exact filings that apply to you.', features: ['Entity-adaptive: Pvt Ltd, LLP, Proprietorship', 'GST, MCA, DPIIT, Udyam, TDS, ROC covered', 'Delegate to CA workflow', 'Document checklist per filing', 'Compliance vault for filed documents', 'Status tracking per obligation'], bg: '#fff' },
        { id: 'cash-runway', name: 'Cash & runway', tagline: 'Know your default-alive date. Updated daily.', body: 'Most founders know their bank balance. Few know the precise date their revenue stops sustaining the business. Founderos calculates it daily, shows the three levers that extend it most.', features: ['Burn rate calculation automatic or manual', 'Runway in months', 'Default-alive date', 'Scenario modeller for hiring, pauses, price changes', 'Confidence and source tagging on every number', 'Working capital stress signals'], bg: 'var(--surface)' },
        { id: 'order-pl', name: 'Order P&L', tagline: 'Every order. Profit or loss. Instantly.', body: 'Selling price minus materials, packaging, logistics, staff time, platform fees, and returns equals what you actually made — or lost. Per order, per SKU, per channel, and in aggregate.', features: ['Per-order net margin automatically calculated', 'Staff time cost mapping per fulfilment', 'True cost floor per SKU', 'Consecutive loss alert fires at 3+ orders', 'Channel margin comparison', 'Return impact calculation'], bg: '#fff' },
        { id: 'crm', name: 'CRM & pipeline', tagline: 'From first conversation to closed revenue, visible.', body: 'Most founders die before fulfilment becomes the problem — they die because pipeline is weak, conversion is invisible, and follow-up is inconsistent. Founderos gives you a lightweight CRM built for how founders actually work.', features: ['Lead pipeline: leads to won/lost', 'Revenue forecast from active pipeline', 'AI-suggested follow-up by deal stage', 'Lost deal analytics with reason tracking', 'Follow-up reminders', 'Customer notes and conversation log'], bg: 'var(--surface)' },
        { id: 'funding', name: 'Funding readiness', tagline: 'A live score. Specific actions. No guesswork.', body: 'Investors do not fund pitches. They fund proof. Founderos builds this proof automatically as you operate and surfaces a live 0–100 funding readiness score that tells you exactly what is missing.', features: ['Live 0–100 readiness score', 'Six-dimension breakdown with sub-scores', 'Weekly improvement action items', 'Investor match by stage and sector', 'Data room auto-populated from operational data', 'Monthly score trend'], bg: '#fff' },
        { id: 'decisions', name: 'Decision journal', tagline: 'Decisions forgotten are decisions repeated.', body: 'Founderos records every major choice — context, alternatives considered, why the decision was made, and what actually happened 30, 90, and 180 days later. Over time, the AI identifies your patterns.', features: ['Decision log with full context and alternatives', 'Outcome tracking at 30/90/180 day intervals', 'AI pattern analysis across all decisions', 'Monthly reflection summary', 'Investor-proof decision history', 'Searchable decision archive'], bg: 'var(--surface)' },
      ].map((mod, idx) => (
        <section key={mod.id} id={mod.id} style={{ background: mod.bg, padding: '72px 0' }}>
          <div className="site-wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
              <div style={{ order: idx % 2 === 1 ? 2 : 1 }}>
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, fontWeight: 500, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: 12 }}>{mod.name}</p>
                <h2 style={{ fontSize: 'clamp(22px,2.5vw,30px)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.015em', lineHeight: 1.25, marginBottom: 14 }}>{mod.tagline}</h2>
                <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.75, marginBottom: 20 }}>{mod.body}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {mod.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'var(--ink2)' }}>
                      <span style={{ width: 5, height: 5, background: 'var(--brand)', borderRadius: '50%', flexShrink: 0 }} />{f}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ order: idx % 2 === 1 ? 1 : 2, display: 'flex', justifyContent: 'center' }}>
                <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 12, padding: 40, width: '100%', maxWidth: 340, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: 200 }}>
                  <p style={{ fontSize: 42, marginBottom: 14, color: 'var(--brand)' }}>◆</p>
                  <p style={{ fontSize: 16, fontWeight: 500, color: 'var(--ink)', marginBottom: 8 }}>{mod.name}</p>
                  <p style={{ fontSize: 13, color: 'var(--ink3)', lineHeight: 1.5 }}>{mod.tagline}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section style={{ background: 'var(--brand)', padding: '80px 0', textAlign: 'center' }}>
        <div className="site-wrap">
          <h2 style={{ fontSize: 36, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', marginBottom: 12 }}>Start with what hurts most.</h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', marginBottom: 28 }}>Founderos recommends your first modules in 3 minutes.</p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 32px', background: '#fff', color: 'var(--brand)', borderRadius: 10, fontWeight: 600, fontSize: 15 }}>Get started free →</Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) { div[style*="1fr 1fr"] { grid-template-columns: 1fr !important; } div[style*="repeat(3,1fr)"] { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  )
}
