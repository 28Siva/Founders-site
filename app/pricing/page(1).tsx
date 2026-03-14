'use client'
import { useState } from 'react'
import Link from 'next/link'

const plans = [
  { id: 'starter', name: 'Starter', mo: 0, an: 0, tag: 'For founders just getting started.', cta: 'Start free — no card needed', features: ['Morning brief (5 priorities/day)', 'Compliance calendar — full India coverage', 'Cash & runway basics', 'Decision journal (up to 20 decisions)', '1 user seat', 'Community support'], featured: false, dark: false },
  { id: 'founder', name: 'Founder', mo: 999, an: 799, tag: 'For active founders with revenue.', cta: 'Start Founder plan — 14-day trial', features: ['Everything in Starter', 'Full AI co-founder with context memory', 'Order P&L tracker (unlimited orders)', 'CRM & pipeline (500 contacts)', 'Receivables & payables tracker', 'Campaign intelligence (10 campaigns)', 'Funding readiness score', 'Data room (PDF export)', 'Razorpay, Shiprocket, GST integrations', '3 user seats · Email support'], featured: true, dark: false },
  { id: 'growth', name: 'Growth', mo: 2999, an: 2399, tag: 'For growing teams.', cta: 'Start Growth plan — 14-day trial', features: ['Everything in Founder', 'Unlimited orders, campaigns, contacts', 'Team up to 20 members', 'Full collaboration & permissions', 'Document workspace', 'Inventory basics & cap table', 'Full integration suite', '10 user seats · Priority support'], featured: false, dark: false },
  { id: 'ecosystem', name: 'Ecosystem', mo: null, an: null, tag: 'For accelerators & VCs.', cta: 'Talk to our team →', features: ['Everything in Growth', 'Portfolio dashboard (cohort view)', 'Health scores across portfolio', 'LP / grant reporting export', 'API access', 'Dedicated success manager'], featured: false, dark: true, custom: 'From ₹24,999/mo' },
]

export default function PricingPage() {
  const [annual, setAnnual] = useState(true)

  return (
    <>
      <section style={{ background: 'var(--surface)', paddingTop: 140, paddingBottom: 48, textAlign: 'center' }}>
        <div className="site-wrap">
          <h1 style={{ fontSize: 'clamp(32px,4vw,50px)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.025em', marginBottom: 8 }}>Simple, honest pricing.</h1>
          <p style={{ fontSize: 18, color: 'var(--ink2)', marginBottom: 28 }}>Start free. Upgrade when Founderos earns it.</p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: 4, borderRadius: 24, border: '1px solid var(--line)', background: '#fff', marginBottom: 40 }}>
            <button onClick={() => setAnnual(false)} style={{ padding: '7px 18px', borderRadius: 20, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 500, fontFamily: 'inherit', background: !annual ? 'var(--ink)' : 'transparent', color: !annual ? '#fff' : 'var(--ink2)', transition: 'all 0.15s' }}>Monthly</button>
            <button onClick={() => setAnnual(true)} style={{ padding: '7px 18px', borderRadius: 20, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 500, fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 6, background: annual ? 'var(--ink)' : 'transparent', color: annual ? '#fff' : 'var(--ink2)', transition: 'all 0.15s' }}>
              Annual <span style={{ background: 'rgba(15,158,117,0.3)', color: '#fff', fontSize: 10, fontWeight: 600, padding: '2px 7px', borderRadius: 10 }}>Save 20%</span>
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, textAlign: 'left' }}>
            {plans.map(plan => (
              <div key={plan.id} style={{ background: plan.dark ? 'var(--dark)' : '#fff', border: `${plan.featured ? '2px' : '1px'} solid ${plan.featured ? 'var(--brand)' : plan.dark ? 'rgba(255,255,255,0.1)' : 'var(--line)'}`, borderRadius: 12, padding: 24, display: 'flex', flexDirection: 'column', position: 'relative' }}>
                {plan.featured && <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'var(--brand)', color: '#fff', fontSize: 11, fontWeight: 600, padding: '3px 12px', borderRadius: 20, whiteSpace: 'nowrap' }}>Most popular</div>}
                <p style={{ fontSize: 15, fontWeight: 600, color: plan.dark ? '#fff' : 'var(--ink)', marginBottom: 3 }}>{plan.name}</p>
                <p style={{ fontSize: 12, color: plan.dark ? 'rgba(255,255,255,0.4)' : 'var(--ink3)', marginBottom: 16 }}>{plan.tag}</p>
                <div style={{ marginBottom: 20 }}>
                  {plan.custom ? (
                    <><p style={{ fontSize: 26, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em' }}>Custom</p><p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 3 }}>{plan.custom}</p></>
                  ) : plan.mo === 0 ? (
                    <><p style={{ fontSize: 36, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', lineHeight: 1 }}>Free</p><p style={{ fontSize: 12, color: 'var(--ink3)', marginTop: 4 }}>forever</p></>
                  ) : (
                    <><p style={{ fontSize: 36, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', lineHeight: 1 }}>₹{(annual ? plan.an : plan.mo)?.toLocaleString('en-IN')}</p><p style={{ fontSize: 12, color: 'var(--ink3)', marginTop: 4 }}>/month{annual ? ', billed annually' : ''}</p></>
                  )}
                </div>
                <Link href="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 10, borderRadius: 8, fontSize: 13, fontWeight: 500, marginBottom: 20, background: plan.featured ? 'var(--brand)' : plan.dark ? 'rgba(255,255,255,0.1)' : 'var(--surface)', color: plan.featured ? '#fff' : plan.dark ? 'rgba(255,255,255,0.8)' : 'var(--ink)', border: `1px solid ${plan.featured ? 'transparent' : plan.dark ? 'rgba(255,255,255,0.15)' : 'var(--line)'}` }}>{plan.cta}</Link>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 7, fontSize: 12, color: plan.dark ? 'rgba(255,255,255,0.6)' : 'var(--ink2)' }}>
                      <span style={{ color: 'var(--teal)', flexShrink: 0, marginTop: 1 }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '64px 0' }}>
        <div className="site-wrap" style={{ maxWidth: 680 }}>
          <h2 style={{ fontSize: 26, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 24 }}>Pricing questions</h2>
          {[
            ['Is there a free trial on paid plans?', 'Yes — all paid plans come with a 14-day free trial. No credit card required to start.'],
            ['What happens when my trial ends?', 'You receive an email 3 days before. If you do not upgrade, your account moves to Starter — all your data is preserved.'],
            ['What happens to my data if I cancel?', 'Your data is yours. Export everything within 24 hours of request. Permanently deleted within 30 days of closure.'],
            ['Can I switch between monthly and annual?', 'Yes, at any time. Switching from monthly to annual applies remaining credit to the annual plan.'],
          ].map(([q, a]) => (
            <details key={String(q)} style={{ borderBottom: '1px solid var(--line)', padding: '16px 0' }}>
              <summary style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                <p style={{ fontSize: 15, fontWeight: 500, color: 'var(--ink)' }}>{q}</p>
                <span style={{ fontSize: 20, color: 'var(--ink3)', fontWeight: 300, flexShrink: 0 }}>+</span>
              </summary>
              <p style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.7, marginTop: 10 }}>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <style>{`@media(max-width:1024px){div[style*="repeat(4,1fr)"]{grid-template-columns:repeat(2,1fr)!important}}`}</style>
    </>
  )
}
