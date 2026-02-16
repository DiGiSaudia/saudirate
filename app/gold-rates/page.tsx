"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function GoldRatesPage() {
  const [weight, setAmount] = useState<number>(1);
  const [purity, setPurity] = useState<number>(285.50); // Default 24K rate

  // Current Gold Rates (Manual for now)
  const rates = {
    k24: 285.50,
    k22: 261.75,
    k21: 249.80,
    k18: 214.15
  };

  const totalPrice = (weight * purity).toFixed(2);

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f4f7f6', fontFamily: 'sans-serif' }}>
      
      {/* Top Nav */}
      <div style={{ backgroundColor: '#000', color: '#fff', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ color: '#FFD700', textDecoration: 'none', fontWeight: 'bold' }}>← Back to Home</Link>
        <span style={{ fontWeight: 'bold', color: '#FFD700' }}>SaudiRate Gold</span>
      </div>

      <div style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px' }}>
        
        <h1 style={{ textAlign: 'center', fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '30px' }}>
          Live Gold Rates & <span style={{ color: '#b8860b' }}>Calculator</span>
        </h1>

        {/* --- GOLD CALCULATOR SECTION --- */}
        <div style={{ backgroundColor: '#000', color: '#fff', padding: '30px', borderRadius: '20px', marginBottom: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
          <h2 style={{ fontSize: '1.2rem', color: '#FFD700', marginBottom: '20px', textAlign: 'center' }}>Gold Value Calculator</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '5px' }}>Weight (Grams)</label>
              <input 
                type="number" 
                value={weight} 
                onChange={(e) => setAmount(Number(e.target.value))}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: 'none', fontSize: '1.1rem', color: '#000' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '5px' }}>Gold Purity (Karat)</label>
              <select 
                onChange={(e) => setPurity(Number(e.target.value))}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: 'none', fontSize: '1.1rem', color: '#000' }}
              >
                <option value={rates.k24}>24 Karat (99.9%)</option>
                <option value={rates.k22}>22 Karat (91.6%)</option>
                <option value={rates.k21}>21 Karat (87.5%)</option>
                <option value={rates.k18}>18 Karat (75.0%)</option>
              </select>
            </div>
          </div>

          <div style={{ textAlign: 'center', paddingTop: '10px', borderTop: '1px solid #333' }}>
            <p style={{ fontSize: '0.9rem', color: '#aaa', margin: '10px 0 5px' }}>Total Estimated Price:</p>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FFD700' }}>
              {totalPrice} <span style={{ fontSize: '1rem' }}>SAR</span>
            </div>
          </div>
        </div>

        {/* Ad Space */}
        <div style={{ backgroundColor: '#fff', padding: '15px', textAlign: 'center', border: '1px dashed #ccc', marginBottom: '30px', borderRadius: '10px' }}>
          <small style={{ color: '#bbb' }}>ADVERTISEMENT</small>
          <div style={{ minHeight: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ddd' }}>Banner Ad Area</div>
        </div>

        {/* Gold Table */}
        <div style={{ backgroundColor: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '1px solid #eee' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <th style={{ padding: '20px', textAlign: 'left' }}>Unit</th>
                <th style={{ padding: '20px', textAlign: 'right' }}>Price (SAR)</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '15px 20px', fontWeight: 'bold' }}>Gold 24K (1g)</td>
                <td style={{ padding: '15px 20px', textAlign: 'right', color: '#b8860b' }}>{rates.k24}</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '15px 20px', fontWeight: 'bold' }}>Gold 22K (1g)</td>
                <td style={{ padding: '15px 20px', textAlign: 'right', color: '#b8860b' }}>{rates.k22}</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '15px 20px', fontWeight: 'bold' }}>Gold 21K (1g)</td>
                <td style={{ padding: '15px 20px', textAlign: 'right', color: '#b8860b' }}>{rates.k21}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </main>
  );
}