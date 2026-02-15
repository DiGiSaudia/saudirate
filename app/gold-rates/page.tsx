'use client';
import React from 'react';

export default function GoldRatesPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fdfdfd', fontFamily: 'system-ui, sans-serif' }}>
      {/* Header Section */}
      <div style={{ backgroundColor: '#111', color: 'white', padding: '40px 20px', textAlign: 'center', borderBottom: '4px solid #ffcc00' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Live Gold Rates in Saudi Arabia</h1>
        <p style={{ color: '#aaa', marginTop: '10px' }}>Real-time 24K, 22K, 21K, and 18K gold prices per gram.</p>
      </div>

      {/* Top Ad Space */}
      <div style={{ maxWidth: '900px', margin: '20px auto', padding: '20px', backgroundColor: '#f0f0f0', textAlign: 'center', color: '#999', fontSize: '0.8rem', borderRadius: '8px' }}>
        -- Ad Space: Top Header --
      </div>

      {/* Gold Rates Table */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', overflow: 'hidden', border: '1px solid #eee' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead style={{ backgroundColor: '#f8f9fa' }}>
              <tr>
                <th style={{ padding: '15px', borderBottom: '2px solid #eee' }}>Type</th>
                <th style={{ padding: '15px', borderBottom: '2px solid #eee' }}>Price (SAR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>Gold 24K</td>
                <td style={{ padding: '15px', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>285.50</td>
              </tr>
              <tr>
                <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>Gold 22K</td>
                <td style={{ padding: '15px', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>261.75</td>
              </tr>
              <tr>
                <td style={{ padding: '15px', borderBottom: '1px solid #eee' }}>Gold 21K</td>
                <td style={{ padding: '15px', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>249.80</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Middle/Bottom Ad Space */}
      <div style={{ maxWidth: '900px', margin: '30px auto', padding: '40px', backgroundColor: '#f0f0f0', textAlign: 'center', color: '#999', fontSize: '0.8rem', borderRadius: '8px' }}>
        -- Ad Space: In-Content Large --
      </div>
    </main>
  );
}