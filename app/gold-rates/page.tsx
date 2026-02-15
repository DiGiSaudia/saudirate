'use client';
import React from 'react';
import Link from 'next/link';

export default function GoldRatesPage() {
  // فرض کریں یہ ڈیٹا آپ کے API سے آ رہا ہے
  const goldRates = [
    { unit: '24K Gold (1 Gram)', price: '285.50' },
    { unit: '22K Gold (1 Gram)', price: '261.75' },
    { unit: '21K Gold (1 Gram)', price: '249.80' },
    { unit: '18K Gold (1 Gram)', price: '214.15' },
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f9f9f9', fontFamily: 'system-ui, sans-serif' }}>
      {/* Header Section */}
      <section style={{ backgroundColor: '#111', color: 'white', padding: '50px 20px', textAlign: 'center', borderBottom: '5px solid #ffcc00' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800' }}>Saudi Gold Rates <span style={{ color: '#ffcc00' }}>Live</span></h1>
        <p style={{ color: '#aaa', marginTop: '10px' }}>Real-time 24K, 22K, 21K, and 18K gold prices in KSA</p>
      </section>

      {/* Top Ad Unit */}
      <div style={{ maxWidth: '800px', margin: '20px auto', height: '90px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999', borderRadius: '8px', border: '1px dashed #ccc' }}>
        -- Responsive Top Ad --
      </div>

      {/* Gold Table Container */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
          <div style={{ padding: '20px', backgroundColor: '#ffcc00', color: '#000', fontWeight: 'bold', textAlign: 'center', fontSize: '1.1rem' }}>
            Today's Market Prices (SAR)
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {goldRates.map((rate, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '20px', color: '#333', fontWeight: '500' }}>{rate.unit}</td>
                  <td style={{ padding: '20px', textAlign: 'right', fontWeight: 'bold', fontSize: '1.2rem', color: '#1a1a1a' }}>{rate.price} <span style={{ fontSize: '0.8rem', color: '#666' }}>SAR</span></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ padding: '15px', textAlign: 'center', fontSize: '0.85rem', color: '#28a745', backgroundColor: '#f8fff9' }}>
            ● Rates updated every 15 minutes
          </div>
        </div>
      </div>

      {/* Middle Ad Unit */}
      <div style={{ maxWidth: '800px', margin: '20px auto', padding: '40px', backgroundColor: '#f0f0f0', textAlign: 'center', color: '#999', borderRadius: '8px' }}>
        -- Content Ad --
      </div>

      {/* Navigation Buttons */}
      <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link href="/" style={{ flex: '1', minWidth: '150px', padding: '15px', textAlign: 'center', backgroundColor: '#111', color: 'white', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold' }}>
          🏠 Back Home
        </Link>
        <Link href="/currency" style={{ flex: '1', minWidth: '150px', padding: '15px', textAlign: 'center', backgroundColor: '#ffcc00', color: 'black', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold' }}>
          💱 Exchange Rates
        </Link>
      </div>
    </main>
  );
}