'use client';
import React from 'react';
import Link from 'next/link';

export default function CurrencyPage() {
  const currencies = [
    { pair: 'SAR to PKR (Pakistan)', rate: '74.20' },
    { pair: 'SAR to INR (India)', rate: '22.15' },
    { pair: 'SAR to BDT (Bangladesh)', rate: '29.35' },
    { pair: 'SAR to PHP (Philippines)', rate: '14.80' },
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f9f9f9', fontFamily: 'system-ui, sans-serif' }}>
      <section style={{ backgroundColor: '#111', color: 'white', padding: '50px 20px', textAlign: 'center', borderBottom: '5px solid #ffcc00' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800' }}>Currency <span style={{ color: '#ffcc00' }}>Exchange</span> Rates</h1>
        <p style={{ color: '#aaa', marginTop: '10px' }}>Current Saudi Riyal rates for top remittance countries</p>
      </section>

      {/* Top Ad Unit */}
      <div style={{ maxWidth: '900px', margin: '20px auto', padding: '20px', backgroundColor: '#f0f0f0', textAlign: 'center', color: '#999', fontSize: '0.8rem' }}>
        -- Ad Unit --
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {currencies.map((item, index) => (
          <div key={index} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '15px', textAlign: 'center', border: '1px solid #eee', boxShadow: '0 5px 15px rgba(0,0,0,0.03)' }}>
            <h3 style={{ fontSize: '1rem', color: '#666', marginBottom: '10px' }}>{item.pair}</h3>
            <div style={{ fontSize: '2.2rem', fontWeight: 'bold', color: '#1a1a1a' }}>{item.rate}</div>
            <div style={{ marginTop: '10px', color: '#28a745', fontSize: '0.85rem' }}>Live Market Rate</div>
          </div>
        ))}
      </div>

      {/* Bottom Ad Space */}
      <div style={{ maxWidth: '900px', margin: '30px auto', padding: '50px', backgroundColor: '#f0f0f0', textAlign: 'center', color: '#999' }}>
        -- Large Footer Ad --
      </div>

      {/* Navigation Buttons */}
      <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link href="/" style={{ flex: '1', minWidth: '150px', padding: '15px', textAlign: 'center', backgroundColor: '#111', color: 'white', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold' }}>
          🏠 Back Home
        </Link>
        <Link href="/gold-rates" style={{ flex: '1', minWidth: '150px', padding: '15px', textAlign: 'center', backgroundColor: '#ffcc00', color: 'black', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold' }}>
          💰 Gold Rates
        </Link>
      </div>
    </main>
  );
}