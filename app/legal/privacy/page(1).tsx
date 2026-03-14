export default function PrivacyPage() {
  return (
    <section style={{ paddingTop: 140, paddingBottom: 80, background: '#fff' }}>
      <div className="site-wrap" style={{ maxWidth: 720 }}>
        <h1 style={{ fontSize: 42, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.025em', marginBottom: 6 }}>Privacy Policy</h1>
        <p style={{ fontSize: 14, color: 'var(--ink3)', marginBottom: 48 }}>Last updated: November 2024</p>
        {[
          ['Data storage', 'All Founderos customer data is stored on servers located within India. We do not transfer personal or business data outside Indian jurisdiction.'],
          ['Data ownership', 'You own your data. Founderos holds it in custody on your behalf. You can export all your data at any time within 24 hours of request.'],
          ['AI and model training', 'Your business data is never used to train AI models — public, shared, or proprietary — without your explicit, informed opt-in.'],
          ['Data deletion', 'If you close your account, we permanently delete all associated data within 30 days. We will send a confirmation email when deletion is complete.'],
          ['Contact', 'For privacy queries: privacy@founderos.in'],
        ].map(([h, b]) => (
          <div key={String(h)} style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 19, fontWeight: 600, color: 'var(--ink)', marginBottom: 8 }}>{h}</h2>
            <p style={{ fontSize: 15, color: 'var(--ink2)', lineHeight: 1.75 }}>{b}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
