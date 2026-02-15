'use client';
import React from 'react';
import Link from 'next/link';

export default function CurrencyPage() {
  const currencies = [
    { pair: 'SAR to PKR', rate: '74.25', country: 'Pakistan', flag: '🇵🇰' },
    { pair: 'SAR to INR', rate: '22.12', country: 'India', flag: '🇮🇳' },
    { pair: 'SAR to BDT', rate: '29.30', country: 'Bangladesh', flag: '🇧🇩' },
    { pair: 'SAR to PHP', rate: '14.85', country: 'Philippines', flag: '🇵🇭' },
    { pair: 'SAR to EGP', rate: '13.10', country: 'Egypt', flag: '🇪🇬' },
    { pair: 'SAR to NPR', rate: '35.40', country: 'Nepal', flag: '🇳🇵' },
    { pair: 'SAR to LKR', rate: '82.15', country: 'Sri Lanka', flag: '🇱🇰' },
    { pair: 'SAR to USD', rate: '0.27', country: 'USA', flag: '🇺🇸' },
    { pair: 'SAR to EUR', rate: '0.25', country: 'Europe', flag: '🇪🇺' },
    { pair: 'SAR to GBP', rate: '0.21', country: 'UK', flag: '🇬🇧' },
    { pair: 'SAR to AED', rate: '0.98', country: 'UAE', flag: '🇦🇪' },
    { pair: 'SAR to TRY', rate: '8.20', country: 'Turkey', flag: '🇹🇷' },
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f4f7f6', fontFamily: 'system-ui, sans-serif' }}>
      {/* Premium Header */}
      <section style={{ backgroundColor: '#111', color: 'white', padding: '60px 20px', textAlign: 'center', borderBottom: '5px solid #ffcc00' }}>
        <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: '800' }}>SAR <span style={{ color: '#ffcc00' }}>Exchange</span> Rates</h1>
        <p style={{ color: '#aaa', marginTop: '10px', fontSize: '1rem' }}>Live Saudi Riyal rates for international money transfers</p>
      </section>

      {/* Top Ad Unit */}
      <div style={{ maxWidth: '1100px', margin: '20px auto', padding: '15px', backgroundColor: '#f0f0f0', textAlign: 'center', color: '#999', fontSize: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }}>
        -- Display Ad: Top Banner --
      </div>

      {/* Currency Grid */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px 40px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {currencies.map((item, index) => (
            <div key={index} style={{ backgroundColor: 'white', borderRadius: '16px', padding: '25px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #eee', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '10px', right: '15px', fontSize: '2rem', opacity: '0.8' }}>{item.flag}</div>
              <h3 style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px', fontWeight: '600' }}>{item.pair}</h3>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#111', margin: '10px 0' }}>{item.rate}</div>
              <div style={{ color: '#28a745', fontSize: '0.8rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ height: '8px', width: '8px', backgroundColor: '#28a745', borderRadius: '50%' }}></span>
                Live Market Rate
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Middle/Bottom Ad Space */}
      <div style={{ maxWidth: '1100px', margin: '20px auto', padding: '50px', backgroundColor: '#f0f0f0', textAlign: 'center', color: '#999', borderRadius: '8px' }}>
        -- Large Content Ad Unit --
      </div>

      {/* Navigation Footer */}
      <div style={{ backgroundColor: '#fff', padding: '40px 20px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <Link href="/" style={{ flex: '1', minWidth: '140px', padding: '15px', textAlign: 'center', backgroundColor: '#111', color: 'white', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
            🏠 Home
          </Link>
          <Link href="/gold-rates" style={{ flex: '1', minWidth: '140px', padding: '15px', textAlign: 'center', backgroundColor: '#ffcc00', color: 'black', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(255,204,0,0.2)' }}>
            💰 Gold Rates
          </Link>
          <Link href="/calculator" style={{ flex: '1', minWidth: '140px', padding: '15px', textAlign: 'center', backgroundColor: '#0070f3', color: 'white', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(0,112,243,0.2)' }}>
            🔢 Converter
          </Link>
        </div>
      </div>
    </main>
  );
}