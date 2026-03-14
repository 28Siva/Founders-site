'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', type: '', stage: '', challenge: '', business: '', whatsapp: '', note: '' })

  return (
    <>
      <section style={{ background: 'var(--surface)', minHeight: '100vh', paddingTop: 100, paddingBottom: 80 }}>
        <div className="site-wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 80, alignItems: 'start' }}>
            <div style={{ position: 'sticky', top: 100 }}>
              <h1 style={{ fontSize: 'clamp(28px,3vw,40px)', fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 14 }}>Let's talk about your business.</h1>
              <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.7, marginBottom: 28 }}>We are founders, not a sales team. Tell us what you are dealing with and we will show you exactly how Founderos helps — or tell you honestly if it does not.</p>
              {[['⏱', 'We respond within 4 business hours'], ['👂', 'No sales script. We listen first.'], ['✓', 'If Founderos is not right for you, we will tell you.']].map(([icon, text]) => (
                <div key={String(text)} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}>
                  <span style={{ fontSize: 16 }}>{icon}</span>
                  <p style={{ fontSize: 14, color: 'var(--ink2)' }}>{text}</p>
                </div>
              ))}
              <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--line)' }}>
                <p style={{ fontSize: 13, color: 'var(--ink3)', marginBottom: 6 }}>Partnerships: <a href="mailto:partners@founderos.in" style={{ color: 'var(--ink2)' }}>partners@founderos.in</a></p>
                <p style={{ fontSize: 13, color: 'var(--ink3)', marginBottom: 6 }}>Press: <a href="mailto:press@founderos.in" style={{ color: 'var(--ink2)' }}>press@founderos.in</a></p>
                <p style={{ fontSize: 13, color: 'var(--ink3)' }}>Support: <a href="mailto:support@founderos.in" style={{ color: 'var(--ink2)' }}>support@founderos.in</a></p>
              </div>
            </div>

            <div style={{ background: '#fff', borderRadius: 16, border: '1px solid var(--line)', padding: 36 }}>
              {done ? (
                <div style={{ textAlign: 'center', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 56, height: 56, background: 'var(--teal-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>✓</div>
                  <h2 style={{ fontSize: 24, fontWeight: 600, color: 'var(--ink)', marginBottom: 8 }}>We have your details.</h2>
                  <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.65, maxWidth: 380 }}>We will confirm your demo slot within 4 business hours. Check your inbox — including spam.</p>
                  <div style={{ background: 'var(--surface)', borderRadius: 10, padding: '16px 20px', border: '1px solid var(--line)', maxWidth: 380, textAlign: 'left', width: '100%' }}>
                    <p style={{ fontSize: 12, color: 'var(--ink3)', marginBottom: 6 }}>While you wait</p>
                    <p style={{ fontSize: 14, color: 'var(--ink2)' }}>Explore the <Link href="/product" style={{ color: 'var(--brand)', fontWeight: 500 }}>product overview →</Link> to see which modules are most relevant for your business.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setDone(true) }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <div><label style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)', display: 'block', marginBottom: 5 }}>Your name <span style={{ color: 'var(--brand)' }}>*</span></label><input required type="text" placeholder="Priya Sharma" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--line)', borderRadius: 8, fontSize: 14, color: 'var(--ink)', background: 'var(--surface)', fontFamily: 'inherit', outline: 'none' }} /></div>
                    <div><label style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)', display: 'block', marginBottom: 5 }}>Email <span style={{ color: 'var(--brand)' }}>*</span></label><input required type="email" placeholder="priya@startup.in" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--line)', borderRadius: 8, fontSize: 14, color: 'var(--ink)', background: 'var(--surface)', fontFamily: 'inherit', outline: 'none' }} /></div>
                  </div>
                  <div><label style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)', display: 'block', marginBottom: 5 }}>What best describes you? <span style={{ color: 'var(--brand)' }}>*</span></label>
                    <select required value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--line)', borderRadius: 8, fontSize: 14, color: 'var(--ink)', background: 'var(--surface)', fontFamily: 'inherit', outline: 'none' }}>
                      <option value="">Select…</option>
                      {['Founder / co-founder', 'Accelerator or incubator manager', 'CA or financial advisor', 'Investor', 'Other'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div><label style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)', display: 'block', marginBottom: 5 }}>What stage is your business at? <span style={{ color: 'var(--brand)' }}>*</span></label>
                    <select required value={form.stage} onChange={e => setForm({ ...form, stage: e.target.value })} style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--line)', borderRadius: 8, fontSize: 14, color: 'var(--ink)', background: 'var(--surface)', fontFamily: 'inherit', outline: 'none' }}>
                      <option value="">Select…</option>
                      {['Idea stage', 'Pre-revenue', '₹0–10L ARR', '₹10L–50L ARR', '₹50L–5Cr ARR', '₹5Cr+ ARR'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div><label style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)', display: 'block', marginBottom: 5 }}>Biggest challenge? <span style={{ color: 'var(--brand)' }}>*</span></label>
                    <select required value={form.challenge} onChange={e => setForm({ ...form, challenge: e.target.value })} style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--line)', borderRadius: 8, fontSize: 14, color: 'var(--ink)', background: 'var(--surface)', fontFamily: 'inherit', outline: 'none' }}>
                      <option value="">Select…</option>
                      {['Compliance and legal', 'Cash flow and runway', 'Order profitability', 'Sales pipeline', 'Funding readiness', 'Campaign performance', 'I want the full overview'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <div><label style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)', display: 'block', marginBottom: 5 }}>Business name <span style={{ fontSize: 11, color: 'var(--ink4)', fontWeight: 400 }}>Optional</span></label><input type="text" placeholder="Your startup" value={form.business} onChange={e => setForm({ ...form, business: e.target.value })} style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--line)', borderRadius: 8, fontSize: 14, color: 'var(--ink)', background: 'var(--surface)', fontFamily: 'inherit', outline: 'none' }} /></div>
                    <div><label style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)', display: 'block', marginBottom: 5 }}>WhatsApp <span style={{ fontSize: 11, color: 'var(--ink4)', fontWeight: 400 }}>Optional</span></label><input type="tel" placeholder="+91 98765 43210" value={form.whatsapp} onChange={e => setForm({ ...form, whatsapp: e.target.value })} style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--line)', borderRadius: 8, fontSize: 14, color: 'var(--ink)', background: 'var(--surface)', fontFamily: 'inherit', outline: 'none' }} /></div>
                  </div>
                  <div><label style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)', display: 'block', marginBottom: 5 }}>Anything specific you want to see? <span style={{ fontSize: 11, color: 'var(--ink4)', fontWeight: 400 }}>Optional</span></label><textarea rows={3} placeholder="e.g. How the Order P&L tracker works for a D2C brand on Meesho…" value={form.note} onChange={e => setForm({ ...form, note: e.target.value })} style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--line)', borderRadius: 8, fontSize: 14, color: 'var(--ink)', background: 'var(--surface)', fontFamily: 'inherit', outline: 'none', resize: 'none' }} /></div>
                  <button type="submit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: 13, borderRadius: 10, background: 'var(--brand)', color: '#fff', fontSize: 15, fontWeight: 500, border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>Book my demo →</button>
                  <p style={{ fontSize: 11, color: 'var(--ink4)', textAlign: 'center' }}>We do not send unsolicited marketing emails. This form books a conversation, not a newsletter subscription.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        :root { --teal-light: #E2F7F0; }
        @media(max-width:1024px){div[style*="2fr 3fr"]{grid-template-columns:1fr!important} div[style*="position: sticky"]{position:relative!important;top:auto!important}}
        @media(max-width:640px){div[style*="1fr 1fr"]{grid-template-columns:1fr!important}}
      `}</style>
    </>
  )
}
