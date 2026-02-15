import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  // ڈائنامک تاریخ (SEO اور Header کے لیے)
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f4f7f6', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* --- HERO SECTION (Premium & Mobile Friendly) --- */}
      <section style={{ 
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)', 
        color: 'white', 
        padding: '80px 20px 100px', 
        textAlign: 'center', 
        borderBottom: '4px solid #FFD700',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        {/* Date Badge at the Top Header */}
        <div style={{ 
          display: 'inline-block', 
          backgroundColor: 'rgba(255, 215, 0, 0.15)', 
          color: '#FFD700', 
          padding: '8px 20px', 
          borderRadius: '50px', 
          fontSize: '0.9rem', 
          fontWeight: '600',
          marginBottom: '25px',
          border: '1px solid rgba(255, 215, 0, 0.3)'
        }}>
          📅 Today: {today}
        </div>

        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', // Mobile responsive font size
          fontWeight: '850', 
          margin: '0 0 15px', 
          lineHeight: '1.2' 
        }}>
          Saudi<span style={{ color: '#FFD700' }}>Rate</span>.com
        </h1>
        
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#bbb', 
          maxWidth: '600px', 
          margin: '0 auto 40px', 
          lineHeight: '1.6' 
        }}>
          Your #1 Trusted Hub for **Gold Prices**, **Currency Exchange**, and **Financial Tools** in Saudi Arabia.
        </p>

        {/* Quick Action Buttons */}
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/gold-rates" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '14px 35px', backgroundColor: '#FFD700', color: 'black', fontWeight: 'bold', borderRadius: '10px', transition: '0.3s', border: '2px solid #FFD700' }}>
              Check Gold 🟡
            </div>
          </Link>
          <Link href="/currency" style={{ textDecoration: 'none' }}>
            <div style={{ padding: '14px 35px', backgroundColor: 'transparent', color: 'white', fontWeight: 'bold', borderRadius: '10px', transition: '0.3s', border: '2px solid rgba(255,255,255,0.3)' }}>
              Check Currency 💱
            </div>
          </Link>
        </div>
      </section>

      {/* --- SPONSORED AD SPACE (Responsive) --- */}
      <div style={{ maxWidth: '1000px', margin: '-40px auto 30px', padding: '0 20px', position: 'relative', zIndex: '10' }}>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)', textAlign: 'center', border: '1px solid #eee' }}>
          <span style={{ fontSize: '0.8rem', color: '#ccc', letterSpacing: '1px' }}>-- SPONSORED ADVERTISEMENT --</span>
          {/* Ad code will go here */}
        </div>
      </div>

      {/* --- MAIN FEATURES GRID --- */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 20px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          
          {/* 1. Gold Rate Box */}
          <Link href="/gold-rates" style={{ textDecoration: 'none' }}>
            <div style={{ backgroundColor: 'white', padding: '35px', borderRadius: '20px', border: '1px solid #f0f0f0', boxShadow: '0 5px 20px rgba(0,0,0,0.03)', transition: 'transform 0.2s', height: '100%' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: '#FFF9E5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '20px' }}>🟡</div>
              <h2 style={{ fontSize: '1.5rem', color: '#111', fontWeight: 'bold', marginBottom: '10px' }}>Gold Rates</h2>
              <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>Live 24K, 22K, 21K prices updated daily. Track market trends.</p>
              <span style={{ display: 'inline-block', marginTop: '20px', color: '#B8860B', fontWeight: 'bold', fontSize: '0.9rem' }}>View Today's Prices →</span>
            </div>
          </Link>

          {/* 2. Currency Exchange Box */}
          <Link href="/currency" style={{ textDecoration: 'none' }}>
            <div style={{ backgroundColor: 'white', padding: '35px', borderRadius: '20px', border: '1px solid #f0f0f0', boxShadow: '0 5px 20px rgba(0,0,0,0.03)', transition: 'transform 0.2s', height: '100%' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: '#E5F6EA', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '20px' }}>💱</div>
              <h2 style={{ fontSize: '1.5rem', color: '#111', fontWeight: 'bold', marginBottom: '10px' }}>Exchange Rates</h2>
              <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>Best rates for SAR to PKR, INR, BDT, and PHP remittances.</p>
              <span style={{ display: 'inline-block', marginTop: '20px', color: '#28a745', fontWeight: 'bold', fontSize: '0.9rem' }}>Check Rates →</span>
            </div>
          </Link>

          {/* 3. Calculator Box (NEW) */}
          <Link href="/calculator" style={{ textDecoration: 'none' }}>
            <div style={{ backgroundColor: 'white', padding: '35px', borderRadius: '20px', border: '1px solid #f0f0f0', boxShadow: '0 5px 20px rgba(0,0,0,0.03)', transition: 'transform 0.2s', height: '100%' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: '#E0F0FF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '20px' }}>🧮</div>
              <h2 style={{ fontSize: '1.5rem', color: '#111', fontWeight: 'bold', marginBottom: '10px' }}>Zakat Calculator</h2>
              <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>Calculate Gold Zakat and Currency conversions easily instantly.</p>
              <span style={{ display: 'inline-block', marginTop: '20px', color: '#0070f3', fontWeight: 'bold', fontSize: '0.9rem' }}>Use Calculator →</span>
            </div>
          </Link>

        </div>
      </div>

      {/* --- SEO CONTENT SECTION (Minimal & Clean) --- */}
      <div style={{ backgroundColor: 'white', padding: '80px 20px', borderTop: '1px solid #eaeaea' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111', marginBottom: '20px' }}>
            Why SaudiRate.com?
          </h2>
          <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
            We provide the most accurate and real-time financial data in the Kingdom. Whether you are buying jewelry, sending money home, or calculating Zakat, **SaudiRate.com** is your trusted companion. Updated for **{today}**.
          </p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', opacity: '0.6' }}>
            <span>✅ Live Updates</span> • <span>✅ Accurate Data</span> • <span>✅ Free Service</span>
          </div>
        </div>
      </div>

      {/* FOOTER REMOVED (It will come from layout.tsx) */}
      
    </main>
  );
}