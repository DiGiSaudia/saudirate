'use client';
import React from 'react';

export default function CurrencyPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fdfdfd', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ backgroundColor: '#111', color: 'white', padding: '40px 20px', textAlign: 'center', borderBottom: '4px solid #ffcc00' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>SAR Exchange Rates Today</h1>
        <p style={{ color: '#aaa', marginTop: '10px' }}>Current Saudi Riyal rates for international transfers.</p>
      </div>

      <div style={{ maxWidth: '900px', margin: '20px auto', textAlign: 'center', padding: '15px', backgroundColor: '#eee', color: '#777', fontSize: '0.8rem' }}>
        -- Top Ad Unit --
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {/* Currency Cards */}
        {['SAR to PKR', 'SAR to INR', 'SAR to PHP', 'SAR to BDT'].map((pair) => (
          <div key={pair} style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', border: '1px solid #eee', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
            <h3 style={{ color: '#555', fontSize: '1rem' }}>{pair}</h3>
            <p style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: '10px 0', color: '#1a1a1a' }}>--.--</p>
            <span style={{ fontSize: '0.8rem', color: '#28a745' }}>Updated 5m ago</span>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: '900px', margin: '40px auto', textAlign: 'center', padding: '50px', backgroundColor: '#eee', color: '#777', fontSize: '0.8rem' }}>
        -- Bottom Ad Unit (Horizontal) --
      </div>
    </main>
  );
}