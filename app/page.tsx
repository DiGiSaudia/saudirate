"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [amount, setAmount] = useState(1);
  const [loading, setLoading] = useState(true);
  
  // Fake Rates (Ye rates API se connect kiye ja sakte hain)
  const [exchangeRates, setExchangeRates] = useState({
    alRajhi: 74.50,
    stcPay: 74.85,
    urPay: 74.90,
    enjaz: 74.40,
    fawri: 74.60,
    mobilyPay: 74.75
  });

  const [selectedBankRate, setSelectedBankRate] = useState(74.85);

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Navigation Bar */}
      <nav style={{ backgroundColor: '#111', color: '#fff', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.4rem' }}>SAUDI<span style={{ color: '#FFD700' }}>RATE</span></div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link href="/gold-rates" style={{ color: '#FFD700', textDecoration: 'none', fontWeight: 'bold' }}>Gold Rates</Link>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>

        {/* --- MAIN CURRENCY CONVERTER --- */}
        <div style={{ background: 'linear-gradient(135deg, #004d40 0%, #00241f 100%)', borderRadius: '24px', padding: '40px', color: '#fff', textAlign: 'center', marginTop: '30px', boxShadow: '0 15px 35px rgba(0,0,0,0.2)' }}>
          <h1 style={{ marginBottom: '10px' }}>SAR to PKR/INR/PHP Converter</h1>
          <p style={{ opacity: 0.8, marginBottom: '30px' }}>Get the best exchange rate before sending money</p>

          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'left' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '5px', color: '#80cbc4' }}>SAR Amount</label>
              <input 
                type="number" 
                value={amount} 
                onChange={(e: any) => setAmount(Number(e.target.value))}
                style={{ padding: '15px', borderRadius: '12px', border: 'none', fontSize: '1.3rem', width: '200px', fontWeight: 'bold' }}
              />
            </div>
            <div style={{ textAlign: 'left' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '5px', color: '#80cbc4' }}>Select Provider</label>
              <select 
                onChange={(e: any) => setSelectedBankRate(Number(e.target.value))}
                style={{ padding: '15px', borderRadius: '12px', border: 'none', fontSize: '1.1rem', width: '220px', cursor: 'pointer' }}
              >
                <option value={exchangeRates.stcPay}>STC Pay (Best Rate)</option>
                <option value={exchangeRates.urPay}>UrPay</option>
                <option value={exchangeRates.alRajhi}>Al Rajhi Bank</option>
                <option value={exchangeRates.mobilyPay}>Mobily Pay</option>
                <option value={exchangeRates.enjaz}>Enjaz Transfer</option>
              </select>
            </div>
          </div>

          <div style={{ marginTop: '30px' }}>
            <div style={{ fontSize: '1.2rem', color: '#80cbc4' }}>You will receive approximately:</div>
            <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#FFD700' }}>
              {(amount * selectedBankRate).toFixed(2)} <span style={{ fontSize: '1.2rem' }}>PKR</span>
            </div>
          </div>
        </div>

        {/* --- ALL PROVIDERS TABLE --- */}
        <h2 style={{ marginTop: '50px', marginBottom: '20px', textAlign: 'center' }}>Today's Live Exchange Rates</h2>
        <div style={{ backgroundColor: '#fff', borderRadius: '20px', overflow: 'hidden', border: '1px solid #eee', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ backgroundColor: '#f1f1f1' }}>
              <tr>
                <th style={{ padding: '20px', textAlign: 'left' }}>Money Provider</th>
                <th style={{ padding: '20px', textAlign: 'right' }}>Rate (1 SAR)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'STC Pay', rate: exchangeRates.stcPay, color: '#4f2d7f' },
                { name: 'UrPay', rate: exchangeRates.urPay, color: '#00d084' },
                { name: 'Mobily Pay', rate: exchangeRates.mobilyPay, color: '#0061ff' },
                { name: 'Al Rajhi Bank', rate: exchangeRates.alRajhi, color: '#0054a6' },
                { name: 'Enjaz (Bank AlBilad)', rate: exchangeRates.enjaz, color: '#9d2235' },
                { name: 'Fawri', rate: exchangeRates.fawri, color: '#00a19c' }
              ].map((bank, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: bank.color }}></div>
                    <span style={{ fontWeight: 'bold' }}>{bank.name}</span>
                  </td>
                  <td style={{ padding: '20px', textAlign: 'right', fontWeight: 'bold', color: '#2e7d32', fontSize: '1.2rem' }}>
                    {bank.rate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Advertisement Space */}
        <div style={{ marginTop: '40px', backgroundColor: '#fff', border: '1px dashed #ccc', padding: '30px', textAlign: 'center', borderRadius: '15px' }}>
          <small style={{ color: '#999' }}>GOOGLE ADSENSE PLACEMENT</small>
        </div>

      </div>
    </div>
  );
}