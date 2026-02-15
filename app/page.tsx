import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  // Dynamic Date for SEO and User Trust
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', fontFamily: 'system-ui, -apple-system, sans-serif', paddingBottom: '40px' }}>
      
      {/* --- HERO SECTION (Premium Dark Theme) --- */}
      <section style={{ 
        background: 'linear-gradient(135deg, #111 0%, #333 100%)', 
        color: 'white', 
        padding: '60px 20px 80px', 
        textAlign: 'center', 
        borderBottom: '6px solid #FFD700',
        position: 'relative'
      }}>
        
        {/* Date Badge */}
        <div style={{ 
          display: 'inline-block', 
          backgroundColor: 'rgba(255, 215, 0, 0.2)', 
          color: '#FFD700', 
          border: '1px solid #FFD700',
          padding: '8px 20px', 
          borderRadius: '50px', 
          fontSize: '0.9rem', 
          fontWeight: '600',
          marginBottom: '20px'
        }}>
          📅 {today}
        </div>

        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: '900', 
          margin: '0 0 15px', 
          letterSpacing: '-1px' 
        }}>
          Saudi<span style={{ color: '#FFD700' }}>Rate</span>.com
        </h1>
        
        <p style={{ 
          fontSize: '1.2rem', 
          color: '#ddd', 
          maxWidth: '600px', 
          margin: '0 auto 40px', 
          lineHeight: '1.5' 
        }}>
          Your trusted source for **Gold Prices**, **Exchange Rates**, and **Zakat Calculation** in Saudi Arabia.
        </p>

        {/* Quick Action Buttons (Mobile Friendly) */}
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/gold-rates" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '15px 30px', backgroundColor: '#FFD700', color: '#000', fontWeight: 'bold', borderRadius: '50px', boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)' }}>
              Check Gold 🟡
            </div>
          </Link>
          <Link href="/currency" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '15px 30px', backgroundColor: '#fff', color: '#000', fontWeight: 'bold', borderRadius: '50px', boxShadow: '0 4px 15px rgba(255, 255, 255, 0.1)' }}>
              Check Currency 💱
            </div>
          </Link>
        </div>
      </section>

      {/* --- ADVERTISEMENT SPACE (Responsive) --- */}
      <div style={{ maxWidth: '1000px', margin: '30px auto', padding: '0 20px' }}>
        <div style={{ backgroundColor: '#fff', border: '1px dashed #ccc', padding: '30px', borderRadius: '10px', textAlign: 'center', color: '#999', fontSize: '0.9rem' }}>
          -- SPONSORED ADVERTISEMENT SPACE --
        </div>
      </div>

      {/* --- MAIN FEATURES GRID --- */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          
          {/* 1. Gold Rate Box */}
          <Link href="/gold-rates" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '15px', border: '1px solid #eee', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'center', height: '100%' }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🟡</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Gold Rates</h2>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>Live updates for 24K, 22K, 21K gold prices in SAR.</p>
              <div style={{ marginTop: '15px', color: '#FFD700', fontWeight: 'bold' }}>View Prices →</div>
            </div>
          </Link>

          {/* 2. Currency Exchange Box */}
          <Link href="/currency" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '15px', border: '1px solid #eee', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'center', height: '100%' }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>💱</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Exchange Rates</h2>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>Best rates for SAR to PKR, INR, BDT, and PHP.</p>
              <div style={{ marginTop: '15px', color: '#28a745', fontWeight: 'bold' }}>Check Rates →</div>
            </div>
          </Link>

          {/* 3. Calculator Box (NEW) */}
          <Link href="/calculator" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '15px', border: '1px solid #eee', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'center', height: '100%' }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🧮</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Zakat Calculator</h2>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>Calculate Gold Zakat and currency conversions instantly.</p>
              <div style={{ marginTop: '15px', color: '#0070f3', fontWeight: 'bold' }}>Calculate Now →</div>
            </div>
          </Link>

        </div>
      </div>

      {/* --- SEO ARTICLE SECTION (Clean & Simple) --- */}
      <div style={{ backgroundColor: 'white', padding: '60px 20px', borderTop: '1px solid #eee', marginTop: '40px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111', marginBottom: '20px' }}>
            Why Choose SaudiRate.com?
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
            Welcome to the #1 financial guide in the Kingdom. We provide **real-time gold prices** and **currency exchange rates** to help you make smart financial decisions. Whether you are sending money home or buying jewelry, our data is accurate, free, and updated daily for **{today}**.
          </p>
        </div>
      </div>

      {/* FOOTER REMOVED - It will come from layout.tsx automatically */}

    </main>
  );
}