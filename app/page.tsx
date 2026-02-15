import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f4f7f6', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* 1. PREMIUM HERO SECTION */}
      <section style={{ 
        background: '#111', 
        color: 'white', 
        padding: '80px 20px', 
        textAlign: 'center', 
        borderBottom: '6px solid #FFD700' 
      }}>
        {/* Date at the Top Header Area */}
        <div style={{ backgroundColor: '#FFD700', color: '#000', display: 'inline-block', padding: '6px 18px', borderRadius: '5px', fontWeight: 'bold', marginBottom: '20px', fontSize: '0.9rem' }}>
          📅 Updated: {today}
        </div>

        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', margin: '0 0 10px', letterSpacing: '-1px' }}>
          Saudi<span style={{ color: '#FFD700' }}>Rate</span>.com
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '700px', margin: '0 auto 30px', lineHeight: '1.6' }}>
          Real-time Gold Prices, Currency Exchange Rates, and Finance Tools in Saudi Arabia.
        </p>

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/gold-rates" style={{ padding: '15px 35px', backgroundColor: '#FFD700', color: '#000', fontWeight: 'bold', borderRadius: '10px', textDecoration: 'none' }}>Gold Rates 🟡</Link>
          <Link href="/currency" style={{ padding: '15px 35px', backgroundColor: '#fff', color: '#000', fontWeight: 'bold', borderRadius: '10px', textDecoration: 'none' }}>Currency Rates 💱</Link>
        </div>
      </section>

      {/* 2. THREE MAIN CARDS */}
      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          
          {/* Gold Card */}
          <Link href="/gold-rates" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '15px' }}>🟡</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Gold Price Today</h2>
              <p style={{ color: '#666', marginTop: '10px' }}>Live 24K, 22K, 21K & 18K rates in Saudi Riyal (SAR).</p>
            </div>
          </Link>

          {/* Currency Card */}
          <Link href="/currency" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '15px' }}>💱</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Exchange Rates</h2>
              <p style={{ color: '#666', marginTop: '10px' }}>Latest SAR to PKR, INR, BDT, and PHP live rates.</p>
            </div>
          </Link>

          {/* CURRENCY CALCULATOR (Corrected Name) */}
          <Link href="/calculator" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '2px solid #28a745' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '15px' }}>🧮</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#28a745' }}>Currency Calculator</h2>
              <p style={{ color: '#666', marginTop: '10px' }}>Convert Saudi Riyal to your home currency instantly.</p>
            </div>
          </Link>

        </div>
      </div>

      {/* 3. AD SPACE */}
      <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '25px', backgroundColor: '#fff', border: '1px dashed #bbb', textAlign: 'center', color: '#999', borderRadius: '12px' }}>
        -- DISPLAY AD SPACE --
      </div>

      {/* 4. CLEAN SEO SECTION */}
      <section style={{ backgroundColor: '#fff', padding: '80px 20px', borderTop: '1px solid #eee', textAlign: 'center' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '20px', color: '#111' }}>The Best Financial Hub in KSA</h2>
          <p style={{ color: '#444', lineHeight: '1.8', fontSize: '1.1rem' }}>
            **SaudiRate.com** provides accurate, real-time updates for anyone living or working in Saudi Arabia. 
            From tracking the **gold market** for investments to using our **currency calculator** for remittances, 
            we ensure you get the most reliable data every single day. [cite: 2026-02-15]
          </p>
        </div>
      </section>

    </main>
  );
}