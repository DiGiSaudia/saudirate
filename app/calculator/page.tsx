'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function CalculatorPage() {
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState('SAR');
  const [toCurrency, setToCurrency] = useState('PKR');

  // ڈمی ریٹ (آپ یہاں اپنی API سے ڈیٹا لا سکتے ہیں)
  const rate = 74.25; 
  const result = (amount * rate).toFixed(2);

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f4f7f6', fontFamily: 'system-ui, sans-serif' }}>
      {/* Header */}
      <section style={{ backgroundColor: '#111', color: 'white', padding: '60px 20px', textAlign: 'center', borderBottom: '5px solid #ffcc00' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '800' }}>Currency <span style={{ color: '#ffcc00' }}>Converter</span></h1>
        <p style={{ color: '#aaa', marginTop: '10px' }}>Fast and accurate Saudi Riyal conversion</p>
      </section>

      {/* Top Ad */}
      <div style={{ maxWidth: '800px', margin: '20px auto', padding: '15px', backgroundColor: '#f0f0f0', textAlign: 'center', color: '#999', borderRadius: '8px', border: '1px solid #ddd' }}>
        -- Ad Unit: Top Banner --
      </div>

      {/* Calculator Container */}
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', border: '1px solid #eee' }}>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>Amount</label>
            <input 
              type="number" 
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '2px solid #eee', fontSize: '1.2rem', outline: 'none' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '30px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>From</label>
              <select style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ddd', backgroundColor: '#f8f9fa' }}>
                <option>🇸🇦 SAR</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>To</label>
              <select 
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ddd', backgroundColor: '#f8f9fa' }}
              >
                <option value="PKR">🇵🇰 PKR</option>
                <option value="INR">🇮🇳 INR</option>
                <option value="BDT">🇧🇩 BDT</option>
                <option value="PHP">🇵🇭 PHP</option>
              </select>
            </div>
          </div>

          {/* Result Area */}
          <div style={{ backgroundColor: '#fff9e6', padding: '25px', borderRadius: '15px', textAlign: 'center', border: '1px solid #ffcc00' }}>
            <div style={{ fontSize: '1rem', color: '#666' }}>{amount} SAR =</div>
            <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#111', margin: '5px 0' }}>{result} {toCurrency}</div>
            <div style={{ fontSize: '0.8rem', color: '#28a745' }}>Updated live from market rates</div>
          </div>

        </div>
      </div>

      {/* Bottom Ad */}
      <div style={{ maxWidth: '800px', margin: '20px auto', padding: '50px', backgroundColor: '#f0f0f0', textAlign: 'center', color: '#999', borderRadius: '8px' }}>
        -- Large Responsive Ad Unit --
      </div>

      {/* Navigation Footer */}
      <div style={{ padding: '40px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/" style={{ flex: '1', minWidth: '140px', padding: '15px', textAlign: 'center', backgroundColor: '#111', color: 'white', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold' }}>
            🏠 Home
          </Link>
          <Link href="/gold-rates" style={{ flex: '1', minWidth: '140px', padding: '15px', textAlign: 'center', backgroundColor: '#ffcc00', color: 'black', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold' }}>
            💰 Gold Rates
          </Link>
          <Link href="/currency" style={{ flex: '1', minWidth: '140px', padding: '15px', textAlign: 'center', backgroundColor: '#333', color: 'white', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold' }}>
            💱 Exchange
          </Link>
        </div>
      </div>
    </main>
  );
}