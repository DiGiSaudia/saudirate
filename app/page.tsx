'use client';
import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', fontFamily: 'system-ui, sans-serif', backgroundColor: '#fdfdfd' }}>
      
      {/* Hero Section - Optimized for Mobile */}
      <section style={{ 
        padding: '60px 20px 100px 20px', 
        textAlign: 'center', 
        backgroundColor: '#111', 
        color: 'white',
        borderBottom: '4px solid #ffcc00'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', fontWeight: '850', marginBottom: '15px' }}>
            Saudi <span style={{ color: '#ffcc00' }}>Rate</span>
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 4vw, 1.2rem)', color: '#aaa', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
            Live Gold Prices & Currency Exchange Rates in Saudi Arabia.
          </p>
          
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/gold-rates" style={{ backgroundColor: '#ffcc00', color: '#000', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' }}>
              Gold Rates
            </Link>
            <Link href="/currency" style={{ backgroundColor: '#333', color: 'white', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', border: '1px solid #444' }}>
              Exchange Rates
            </Link>
          </div>
        </div>
      </section>

      {/* Ad Space 1: Below Hero (Placeholder) */}
      <div style={{ width: '100%', textAlign: 'center', padding: '20px 0', backgroundColor: '#f0f0f0', fontSize: '0.8rem', color: '#999' }}>
        -- Advertisement Space --
      </div>

      {/* Category Cards Section */}
      <section style={{ padding: '0 15px 60px 15px', marginTop: '-40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '20px' 
          }}>
            
            {/* Gold Card */}
            <Link href="/gold-rates" style={{ textDecoration: 'none' }}>
              <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', textAlign: 'center', border: '1px solid #eee' }}>
                <span style={{ fontSize: '3rem' }}>💰</span>
                <h3 style={{ fontSize: '1.4rem', color: '#111', margin: '15px 0 10px' }}>Gold Prices</h3>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>Daily 24K, 22K, 21K & 18K updates.</p>
              </div>
            </Link>

            {/* Currency Card */}
            <Link href="/currency" style={{ textDecoration: 'none' }}>
              <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', textAlign: 'center', border: '1px solid #eee' }}>
                <span style={{ fontSize: '3rem' }}>💱</span>
                <h3 style={{ fontSize: '1.4rem', color: '#111', margin: '15px 0 10px' }}>Exchange Rates</h3>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>SAR to PKR, INR, PHP & others.</p>
              </div>
            </Link>

            {/* Calculator Card */}
            <Link href="/calculator" style={{ textDecoration: 'none' }}>
              <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', textAlign: 'center', border: '1px solid #eee' }}>
                <span style={{ fontSize: '3rem' }}>🔢</span>
                <h3 style={{ fontSize: '1.4rem', color: '#111', margin: '15px 0 10px' }}>Currency Converter</h3>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>Fast and accurate conversions.</p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Ad Space 2: Above Footer (Placeholder) */}
      <div style={{ width: '100%', textAlign: 'center', padding: '40px 0', color: '#ccc' }}>
        -- Display Ads Here --
      </div>

    </main>
  );
}