"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [amount, setAmount] = useState(1);

  // Providers List
  const providers = [
    { name: 'STC Pay', rate: 74.85, fee: '0 SAR', color: '#4f2d7f' },
    { name: 'UrPay', rate: 74.92, fee: '0 SAR', color: '#00d084' },
    { name: 'Mobily Pay', rate: 74.70, fee: '5 SAR', color: '#0061ff' },
    { name: 'Tahweel Al Rajhi', rate: 74.45, fee: '15 SAR', color: '#0054a6' },
    { name: 'Enjaz (AlBilad)', rate: 74.30, fee: '18 SAR', color: '#9d2235' },
    { name: 'Fawri', rate: 74.55, fee: '10 SAR', color: '#00a19c' },
  ];

  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', paddingBottom: '50px' }}>
      
      {/* Top Header */}
      <nav style={{ backgroundColor: '#000', color: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 'bold' }}>SAUDI RATE</div>
        <Link href="/gold-rates" style={{ color: '#FFD700', textDecoration: 'none', fontSize: '14px' }}>Gold Price</Link>
      </nav>

      <div style={{ maxWidth: '450px', margin: '0 auto', padding: '15px' }}>
        
        {/* Banner Ad */}
        <div style={{ background: '#fff', height: '50px', border: '1px solid #ddd', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <small style={{ color: '#ccc' }}>AD SPACE</small>
        </div>

        {/* Hero Card */}
        <div style={{ background: '#111', borderRadius: '15px', padding: '20px', color: '#fff', textAlign: 'center', marginBottom: '20px' }}>
          <p style={{ color: '#FFD700', margin: '0 0 10px 0' }}>Transfer Calculator</p>
          <input 
            type="number" 
            value={amount} 
            onChange={(e: any) => setAmount(e.target.value)} 
            style={{ width: '100%', padding: '12px', fontSize: '24px', fontWeight: 'bold', borderRadius: '10px', border: 'none', textAlign: 'center' }}
          />
          <p style={{ fontSize: '12px', marginTop: '10px', opacity: 0.7 }}>Enter SAR Amount</p>
        </div>

        {/* Rates List */}
        {providers.map((p, i) => (
          <div key={i} style={{ background: '#fff', padding: '15px', borderRadius: '12px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', border: '1px solid #eee' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '40px', height: '40px', background: p.color, color: '#fff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '10px' }}>
                {p.name.substring(0, 3)}
              </div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{p.name}</div>
                <div style={{ fontSize: '11px', color: '#999' }}>Fee: {p.fee}</div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: '#2e7d32', fontWeight: 'bold', fontSize: '18px' }}>{(Number(amount) * p.rate).toFixed(2)}</div>
              <div style={{ fontSize: '10px', color: '#aaa' }}>1 SAR = {p.rate}</div>
            </div>
          </div>
        ))}

        {/* Square Ad */}
        <div style={{ background: '#fff', height: '250px', border: '1px solid #ddd', marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <small style={{ color: '#ccc' }}>ADSENSE UNIT</small>
        </div>

      </div>
    </div>
  );
}