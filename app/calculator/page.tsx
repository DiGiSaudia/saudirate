"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function CalculatorPage() {
  const [amount, setAmount] = useState<number>(1);
  const [targetCurrency, setTargetCurrency] = useState<string>('PKR');

  // Yeh rates hum baad mein API se bhi connect kar sakte hain
  const rates: { [key: string]: { rate: number, name: string, flag: string } } = {
    PKR: { rate: 74.25, name: 'Pakistani Rupee', flag: '🇵🇰' },
    INR: { rate: 22.15, name: 'Indian Rupee', flag: '🇮🇳' },
    BDT: { rate: 31.40, name: 'Bangladeshi Taka', flag: '🇧🇩' },
    PHP: { rate: 14.80, name: 'Philippine Peso', flag: '🇵🇭' }
  };

  const result = (amount * rates[targetCurrency].rate).toFixed(2);

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f4f7f6', fontFamily: 'sans-serif' }}>
      
      {/* Top Bar with Saudi Time (As per your home page) */}
      <div style={{ backgroundColor: '#FFD700', color: '#000', padding: '8px 20px', fontSize: '0.85rem', fontWeight: 'bold', textAlign: 'center' }}>
         Currency Calculator - SaudiRate.com
      </div>

      <div style={{ maxWidth: '600px', margin: '40px auto', padding: '0 20px' }}>
        
        {/* TOP AD UNIT */}
        <div style={{ backgroundColor: '#fff', padding: '15px', textAlign: 'center', border: '1px dashed #ccc', marginBottom: '30px', borderRadius: '8px' }}>
          <p style={{ fontSize: '0.7rem', color: '#bbb', margin: '0 0 10px' }}>ADVERTISEMENT</p>
          <div style={{ minHeight: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ddd', backgroundColor: '#fafafa' }}>
             Top Banner Ad
          </div>
        </div>

        {/* MAIN CALCULATOR CARD */}
        <div style={{ backgroundColor: '#fff', padding: '35px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '1px solid #eee' }}>
          <h1 style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '30px', color: '#111' }}>
            Currency <span style={{ color: '#28a745' }}>Converter</span>
          </h1>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#555' }}>Amount (Saudi Riyal - SAR)</label>
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(Number(e.target.value))}
              style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '2px solid #f0f0f0', fontSize: '1.2rem', outline: 'none' }}
            />
          </div>

          <div style={{ marginBottom: '30px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#555' }}>Convert To</label>
            <select 
              value={targetCurrency} 
              onChange={(e) => setTargetCurrency(e.target.value)}
              style={{ width: '100%', padding: '15px', borderRadius: '10px', border: '2px solid #f0f0f0', fontSize: '1.1rem', backgroundColor: '#fff', cursor: 'pointer' }}
            >
              <option value="PKR">🇵🇰 PKR - Pakistani Rupee</option>
              <option value="INR">🇮🇳 INR - Indian Rupee</option>
              <option value="BDT">🇧🇩 BDT - Bangladeshi Taka</option>
              <option value="PHP">🇵🇭 PHP - Philippine Peso</option>
            </select>
          </div>

          {/* RESULT AREA */}
          <div style={{ backgroundColor: '#111', color: '#fff', padding: '30px', borderRadius: '15px', textAlign: 'center' }}>
            <div style={{ fontSize: '0.9rem', color: '#FFD700', marginBottom: '10px', fontWeight: 'bold' }}>
              {amount} SAR =
            </div>
            <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#fff' }}>
              {result} <span style={{ fontSize: '1.2rem', color: '#FFD700' }}>{targetCurrency}</span>
            </div>
            <div style={{ fontSize: '0.8rem', color: '#888', marginTop: '10px' }}>
              1 SAR = {rates[targetCurrency].rate} {targetCurrency}
            </div>
          </div>
        </div>

        {/* LARGE RESPONSIVE AD UNIT */}
        <div style={{ marginTop: '40px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #eee', textAlign: 'center' }}>
          <p style={{ fontSize: '0.7rem', color: '#bbb', marginBottom: '15px' }}>SPONSORED AD</p>
          <div style={{ minHeight: '200px', backgroundColor: '#f9f9f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc' }}>
            Large Responsive Ad Unit
          </div>
        </div>

      </div>
    </main>
  );
}