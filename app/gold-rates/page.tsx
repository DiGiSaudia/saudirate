"use client";
import React from 'react';
import Link from 'next/link';

export default function GoldRatesPage() {
  // Yeh rates aap rozana manually update kar sakte hain ya baad mein API se connect kar denge
  const goldRates = [
    { unit: 'Gold 24K (1 Gram)', price: '285.50 SAR' },
    { unit: 'Gold 22K (1 Gram)', price: '261.75 SAR' },
    { unit: 'Gold 21K (1 Gram)', price: '249.80 SAR' },
    { unit: 'Gold 18K (1 Gram)', price: '214.15 SAR' },
  ];

  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f4f7f6', fontFamily: 'sans-serif' }}>
      
      {/* Top Navigation */}
      <div style={{ backgroundColor: '#000', color: '#fff', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ color: '#FFD700', textDecoration: 'none', fontWeight: 'bold' }}>← Back to Home</Link>
        <span style={{ fontWeight: 'bold', color: '#FFD700' }}>SaudiRate Gold</span>
      </div>

      <div style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#111', marginBottom: '10px' }}>
            Gold Rates in <span style={{ color: '#b8860b' }}>Saudi Arabia</span>
          </h1>
          <p style={{ color: '#666' }}>Last Updated: <strong>{today}</strong></p>
        </div>

        {/* Top Ad Unit */}
        <div style={{ backgroundColor: '#fff', padding: '15px', textAlign: 'center', border: '1px dashed #ccc', marginBottom: '30px', borderRadius: '10px' }}>
          <small style={{ color: '#bbb' }}>ADVERTISEMENT</small>
          <div style={{ minHeight: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ddd' }}>Top Banner Ad Area</div>
        </div>

        {/* Gold Price Table */}
        <div style={{ backgroundColor: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '1px solid #eee' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: '#000', color: '#FFD700' }}>
                <th style={{ padding: '20px', fontSize: '1.1rem' }}>Gold Type / Quality</th>
                <th style={{ padding: '20px', fontSize: '1.1rem', textAlign: 'right' }}>Price (SAR)</th>
              </tr>
            </thead>
            <tbody>
              {goldRates.map((item, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #eee', backgroundColor: index % 2 === 0 ? '#fff' : '#fafafa' }}>
                  <td style={{ padding: '18px 20px', fontWeight: 'bold', color: '#333' }}>{item.unit}</td>
                  <td style={{ padding: '18px 20px', textAlign: 'right', fontWeight: 'bold', color: '#b8860b', fontSize: '1.2rem' }}>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Info Box */}
        <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff8e1', borderRadius: '10px', borderLeft: '5px solid #FFD700' }}>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>
            <strong>Note:</strong> Gold prices in Saudi Arabia are subject to market fluctuations. These rates are indicative and based on the international bullion market.
          </p>
        </div>

        {/* Bottom Ad Unit */}
        <div style={{ marginTop: '40px', backgroundColor: '#fff', padding: '20px', borderRadius: '15px', textAlign: 'center', border: '1px solid #eee' }}>
          <div style={{ minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ddd' }}>Large Responsive Ad</div>
        </div>

      </div>
    </main>
  );
}