import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  // ڈائنامک تاریخ (SEO کے لیے)
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Hero Section */}
      <section style={{ backgroundColor: '#111', color: 'white', padding: '80px 20px', textAlign: 'center', borderBottom: '5px solid #ffcc00' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '15px' }}>
          Saudi<span style={{ color: '#ffcc00' }}>Rate</span>.com
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '700px', margin: '0 auto' }}>
          Your Trusted Source for **Gold Prices** and **Currency Exchange Rates** in Saudi Arabia. Updated for {today}.
        </p>
        <div style={{ marginTop: '30px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/gold-rates" style={{ padding: '15px 30px', backgroundColor: '#ffcc00', color: 'black', fontWeight: 'bold', borderRadius: '50px', textDecoration: 'none', fontSize: '1.1rem' }}>
            Check Gold Rates 🟡
          </Link>
          <Link href="/currency" style={{ padding: '15px 30px', backgroundColor: '#fff', color: 'black', fontWeight: 'bold', borderRadius: '50px', textDecoration: 'none', fontSize: '1.1rem' }}>
            Check Currency 💱
          </Link>
        </div>
      </section>

      {/* Ad Space */}
      <div style={{ maxWidth: '1000px', margin: '30px auto', padding: '20px', backgroundColor: '#eee', textAlign: 'center', color: '#999', borderRadius: '8px' }}>
        -- Sponsored Ad Space --
      </div>

      {/* Features Grid */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          
          {/* Gold Box */}
          <Link href="/gold-rates" style={{ textDecoration: 'none' }}>
            <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #eee', transition: 'transform 0.2s', cursor: 'pointer' }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🟡</div>
              <h2 style={{ fontSize: '1.8rem', color: '#111', fontWeight: 'bold' }}>Gold Rates Today</h2>
              <p style={{ color: '#666', marginTop: '10px' }}>
                Live updates for 24K, 22K, 21K, and 18K Gold in Saudi Riyal (SAR).
              </p>
              <div style={{ marginTop: '20px', color: '#ffcc00', fontWeight: 'bold' }}>View Prices →</div>
            </div>
          </Link>

          {/* Currency Box */}
          <Link href="/currency" style={{ textDecoration: 'none' }}>
            <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #eee', transition: 'transform 0.2s', cursor: 'pointer' }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>💱</div>
              <h2 style={{ fontSize: '1.8rem', color: '#111', fontWeight: 'bold' }}>Exchange Rates</h2>
              <p style={{ color: '#666', marginTop: '10px' }}>
                Real-time conversion for SAR to PKR, INR, BDT, PHP, and USD.
              </p>
              <div style={{ marginTop: '20px', color: '#28a745', fontWeight: 'bold' }}>Check Rates →</div>
            </div>
          </Link>

        </div>
      </div>

      {/* SEO Article Section - Essential for Google Ranking */}
      <div style={{ backgroundColor: 'white', padding: '60px 20px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111', marginBottom: '20px', textAlign: 'center' }}>
            Why SaudiRate.com is the #1 Financial Guide in KSA?
          </h2>
          
          <p style={{ marginBottom: '20px', color: '#444', fontSize: '1.1rem' }}>
            Welcome to **SaudiRate.com**, the ultimate destination for daily financial updates in the Kingdom of Saudi Arabia. Whether you are an investor monitoring the **Saudi gold market** or an expatriate looking for the **best exchange rate today**, our platform delivers accuracy you can trust. [cite: 2026-02-15]
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '10px' }}>✅ Live Gold Updates</h3>
              <p style={{ color: '#555' }}>We track international spot prices to bring you precise rates for 24K, 22K, and 21K gold grams and ounces.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '10px' }}>✅ Currency Converter</h3>
              <p style={{ color: '#555' }}>Sending money home? Check live rates for SAR to PKR, INR, and BDT instantly before visiting the bank.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '10px' }}>✅ 100% Free Service</h3>
              <p style={{ color: '#555' }}>Our data is free for everyone. No subscriptions, just reliable daily updates for the community.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#111', color: '#666', padding: '40px 20px', textAlign: 'center', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} SaudiRate.com - All Rights Reserved.</p>
        <div style={{ marginTop: '10px' }}>
          <Link href="/gold-rates" style={{ color: '#ccc', margin: '0 10px', textDecoration: 'none' }}>Gold</Link> | 
          <Link href="/currency" style={{ color: '#ccc', margin: '0 10px', textDecoration: 'none' }}>Currency</Link>
        </div>
      </footer>
    </main>
  );
}