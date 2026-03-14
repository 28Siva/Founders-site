import Link from 'next/link'

const cols = [
  { h: 'Product', links: [['AI co-founder', '/product'], ['Morning brief', '/product'], ['Compliance', '/product'], ['Order P&L', '/product'], ['Cash & runway', '/product'], ['Funding readiness', '/product']] },
  { h: 'Solutions', links: [['Early-stage founders', '/solutions'], ['D2C brands', '/solutions'], ['Service businesses', '/solutions'], ['Incubated startups', '/solutions'], ['Accelerators & VCs', '/solutions']] },
  { h: 'Company', links: [['Pricing', '/pricing'], ['About', '/about'], ['Contact', '/contact'], ['Request demo', '/contact']] },
  { h: 'Legal', links: [['Privacy policy', '/legal/privacy'], ['Terms of service', '/legal/privacy'], ['Data policy', '/legal/privacy']] },
]

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', background: '#fff', padding: '64px 0 32px' }}>
      <div className="site-wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600, fontSize: 15, color: 'var(--ink)', marginBottom: 12 }}>
              <span style={{ width: 26, height: 26, background: 'var(--brand)', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 700 }}>F</span>
              Founderos
            </Link>
            <p style={{ fontSize: 13, color: 'var(--ink3)', lineHeight: 1.6, maxWidth: 180 }}>Founderos helps founders turn daily business activity into clarity, execution, and forward visibility.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 14 }}>
              <span style={{ width: 7, height: 7, background: 'var(--teal)', borderRadius: '50%', display: 'inline-block' }} />
              <span style={{ fontSize: 11, color: 'var(--ink3)' }}>India-hosted · Data stays in India</span>
            </div>
          </div>
          {cols.map(col => (
            <div key={col.h}>
              <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, fontWeight: 500, letterSpacing: '0.07em', textTransform: 'uppercase' as const, color: 'var(--ink3)', marginBottom: 14 }}>{col.h}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} style={{ fontSize: 13, color: 'var(--ink3)' }} className="footer-lnk">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ paddingTop: 24, borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'var(--ink4)' }}>© 2025 Founderos Technologies Pvt. Ltd. · Made in India 🇮🇳</p>
          <p style={{ fontSize: 12, color: 'var(--ink4)' }}>Your data stays in India. Always.</p>
        </div>
      </div>
      <style>{`.footer-lnk:hover { color: var(--ink) !important; }`}</style>
    </footer>
  )
}
