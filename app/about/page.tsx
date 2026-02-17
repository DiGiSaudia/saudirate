export default function AboutUs() {
  return (
    <div style={{ backgroundColor: '#020617', color: '#F8FAFC', minHeight: '100vh', padding: '60px 20px' }}>
      <main style={{ maxWidth: '850px', margin: '0 auto', background: '#0F172A', padding: '45px', borderRadius: '35px', border: '1px solid #1E293B' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '950', marginBottom: '25px' }}>
          About <span style={{ color: '#FACC15' }}>Us</span>
        </h1>
        <p style={{ color: '#94A3B8', fontSize: '16px', lineHeight: '1.8', marginBottom: '30px' }}>
          Welcome to SaudiRate.com, your number one source for all things related to Gold Prices and Currency Exchange Rates in Saudi Arabia. We are dedicated to providing you the very best of financial data, with an emphasis on accuracy, speed, and reliability.
        </p>

        <div style={{ display: 'grid', gap: '25px' }}>
          <section>
            <h2 style={{ color: '#10B981', fontSize: '22px', marginBottom: '10px' }}>Our Mission</h2>
            <p style={{ color: '#CBD5E1' }}>Founded in 2024, SaudiRate.com has come a long way from its beginnings. Our mission is to help expatriates and locals in Saudi Arabia make informed financial decisions by providing real-time data on SAR (Saudi Riyal) exchange rates and Gold market trends.</p>
          </section>

          <section style={{ background: '#020617', padding: '25px', borderRadius: '20px', border: '1px solid #1E293B' }}>
            <h2 style={{ color: '#FACC15', fontSize: '22px', marginBottom: '15px' }}>Why Choose Us?</h2>
            <ul style={{ color: '#94A3B8', listStyle: 'none', padding: 0, display: 'grid', gap: '10px' }}>
              <li>✅ <strong style={{color:'white'}}>Real-Time Updates:</strong> We update our rates multiple times a day.</li>
              <li>✅ <strong style={{color:'white'}}>User-Friendly:</strong> Our calculator and charts are designed for simplicity.</li>
              <li>✅ <strong style={{color:'white'}}>Mobile First:</strong> Access our data seamlessly on any device.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}