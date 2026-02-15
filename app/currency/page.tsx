'use client';
import React from 'react';
import Link from 'next/link';

export default function CurrencyPage() {
  const currencies = [
    { pair: 'SAR to PKR', rate: '74.25', code: 'PK', name: 'Pakistan' },
    { pair: 'SAR to INR', rate: '22.12', code: 'IN', name: 'India' },
    { pair: 'SAR to BDT', rate: '29.30', code: 'BD', name: 'Bangladesh' },
    { pair: 'SAR to PHP', rate: '14.85', code: 'PH', name: 'Philippines' },
    { pair: 'SAR to EGP', rate: '13.10', code: 'EG', name: 'Egypt' },
    { pair: 'SAR to NPR', rate: '35.40', code: 'NP', name: 'Nepal' },
    { pair: 'SAR to LKR', rate: '82.15', code: 'LK', name: 'Sri Lanka' },
    { pair: 'SAR to USD', rate: '0.27', code: 'US', name: 'USA' },
    { pair: 'SAR to EUR', rate: '0.25', code: 'EU', name: 'Europe' },
    { pair: 'SAR to GBP', rate: '0.21', code: 'GB', name: 'UK' },
    { pair: 'SAR to AED', rate: '0.98', code: 'AE', name: 'UAE' },
    { pair: 'SAR to TRY', rate: '8.20', code: 'TR', name: 'Turkey' },
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', fontFamily: 'system-ui, sans-serif' }}>
      {/* Header Section */}
      <section style={{ backgroundColor: '#111', color: 'white', padding: '60px 20px', textAlign: 'center', borderBottom: '5px solid #ffcc00' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '850' }}>SAR <span style={{ color: '#ffcc00' }}>Exchange</span> Rates</h1>
        <p style={{ color: '#aaa', marginTop: '10px' }}>Live conversion rates for Saudi Riyal across 12 countries</p>
      </section>

      {/* Top Ad Unit */}
      <div style={{ maxWidth: '1100px', margin: '25px auto', padding: '15px', backgroundColor: '#eee', textAlign: 'center', color: '#888', borderRadius: '8px', border: '1px solid #ddd' }}>
        -- Advertisement Area --
      </div>

      {/* Currency Cards Grid */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px 60px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {currencies.map((item, index) => (
            <div key={index} style={{ backgroundColor: 'white', borderRadius: '15px', padding: '25px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', border: '1px solid #eee', position: 'relative' }}>
              
              {/* Flag Image Fix for Chrome */}
              <div style={{ position: 'absolute', top: '15px', right: '15px' }}>
                <img 
                  src={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png`} 
                  alt={item.name}
                  style={{ width: '35px', borderRadius: '4px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
                />
              </div>

              <h3 style={{ fontSize: '0.9rem', color: '#777', marginBottom: '5px' }}>{item.pair}</h3>
              <div style={{ fontSize: '2rem', fontWeight: '850', color: '#111', margin: '10px 0' }}>{item.rate}</div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#28a745', fontSize: '0.85rem', fontWeight: '600' }}>
                <span style={{ width: '8px', height: '8px', backgroundColor: '#28a745', borderRadius: '50%', display: 'inline-block' }}></span>
                Live Market Rate
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation & Footer Buttons */}
      <section style={{ backgroundColor: 'white', padding: '50px 20px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <Link href="/" style={{ flex: '1', minWidth: '150px', padding: '16px', textAlign: 'center', backgroundColor: '#111', color: 'white', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold', border: 'none' }}>
            🏠 Home Page
          </Link>
          <Link href="/gold-rates" style={{ flex: '1', minWidth: '150px', padding: '16px', textAlign: 'center', backgroundColor: '#ffcc00', color: 'black', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold' }}>
            💰 Gold Prices
          </Link>
          <Link href="/calculator" style={{ flex: '1', minWidth: '150px', padding: '16px', textAlign: 'center', backgroundColor: '#f0f0f0', color: '#111', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold', border: '1px solid #ddd' }}>
            🔢 Converter
          </Link>
        </div>
      </section>
    </main>
  );
}