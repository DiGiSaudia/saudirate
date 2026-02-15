import Link from 'next/link';

export default function HomePage() {
  const heroStyle: React.CSSProperties = {
    background: '#000',
    color: '#fff',
    padding: '60px 20px 120px',
    textAlign: 'center',
    borderBottom: '5px solid #FFD700'
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    color: '#000',
    padding: '40px 25px',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const buttonStyle = (bgColor: string, textColor: string): React.CSSProperties => ({
    display: 'inline-block',
    width: '100%',
    padding: '12px 0',
    backgroundColor: bgColor,
    color: textColor,
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    marginTop: '20px'
  });

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f4f7f6', fontFamily: 'sans-serif' }}>
      
      {/* --- HERO SECTION --- */}
      <section style={heroStyle}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', margin: '0 0 10px' }}>
          Saudi<span style={{ color: '#FFD700' }}>Rate</span>
        </h1>
        <p style={{ color: '#ccc', fontSize: '1.2rem', marginBottom: '50px' }}>
          Real-Time Gold Prices, Currency Exchange, and Tools.
        </p>

        {/* --- 3 SERVICE BOXES --- */}
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '25px' 
        }}>
          
          {/* Box 1: Gold */}
          <div style={cardStyle}>
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🟡</div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: '800' }}>Gold Rates</h2>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>Live 24K, 22K, and 21K gold prices updated daily for KSA market.</p>
            </div>
            <Link href="/gold-rates" style={buttonStyle('#FFD700', '#000')}>View Gold Prices</Link>
          </div>

          {/* Box 2: Currency */}
          <div style={cardStyle}>
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>💱</div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: '800' }}>Currency Rates</h2>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>SAR to PKR, INR, BDT, and PHP exchange rates for remittances.</p>
            </div>
            <Link href="/currency" style={buttonStyle('#111', '#fff')}>Check Exchange Rates</Link>
          </div>

          {/* Box 3: Calculator */}
          <div style={cardStyle}>
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🧮</div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: '800' }}>Currency Calculator</h2>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>Calculate your remittance amounts instantly with real-time accuracy.</p>
            </div>
            <Link href="/calculator" style={buttonStyle('#28a745', '#fff')}>Use Calculator</Link>
          </div>

        </div>
      </section>

      {/* --- ADS SECTION --- */}
      <div style={{ maxWidth: '1100px', margin: '40px auto', padding: '0 20px' }}>
        <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '12px', border: '1px solid #ddd', textAlign: 'center' }}>
          <span style={{ fontSize: '0.7rem', color: '#bbb', display: 'block', marginBottom: '15px' }}>ADVERTISEMENT</span>
          <div style={{ minHeight: '120px', background: '#fafafa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             Responsive Ad Unit
          </div>
        </div>
      </div>

      {/* --- SEO ARTICLE --- */}
      <article style={{ maxWidth: '1100px', margin: '40px auto', padding: '0 20px' }}>
        <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '15px', border: '1px solid #eee', lineHeight: '1.8' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '20px' }}>Reliable Financial Hub in Saudi Arabia</h2>
          <p style={{ color: '#444' }}>
            Welcome to SaudiRate, your primary source for real-time financial updates in KSA. We track gold market fluctuations and remittance rates to provide you with the most accurate data for your daily needs.
          </p>
        </div>
      </article>

    </main>
  );
}