"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function GlobalRemittancePage() {
  const [amount, setAmount] = useState<any>(1);
  const [targetCurrency, setTargetCurrency] = useState<any>('PKR');
  const [ratesData, setRatesData] = useState<any>(null);
  const [loading, setLoading] = useState<any>(true);

  const API_KEY = '0dfe1f9efbc26627f2809000';

  // Providers Margin (Real-time calculation logic)
  const providers = [
    { name: 'STC Pay', margin: 1.002, fee: '0 SAR', color: '#4f2d7f', tag: 'Best Rate' },
    { name: 'UrPay', margin: 1.003, fee: '0 SAR', color: '#00d084', tag: 'Fast' },
    { name: 'Mobily Pay', margin: 1.001, fee: '5 SAR', color: '#0061ff', tag: 'Easy' },
    { name: 'Tahweel Al Rajhi', margin: 0.998, fee: '15 SAR', color: '#0054a6', tag: 'Bank' },
    { name: 'Enjaz', margin: 0.997, fee: '18 SAR', color: '#9d2235', tag: 'Bank' },
    { name: 'Fawri', margin: 0.999, fee: '10 SAR', color: '#00a19c', tag: 'Bank' },
    { name: 'Friendi Pay', margin: 1.001, fee: '7 SAR', color: '#e60000', tag: 'Wallet' },
    { name: 'QuickPay', margin: 0.996, fee: '20 SAR', color: '#006a4d', tag: 'Bank' }
  ];

  // Top 10+ Countries List
  const topCountries = [
    { code: 'PKR', name: 'Pakistan' },
    { code: 'INR', name: 'India' },
    { code: 'BDT', name: 'Bangladesh' },
    { code: 'PHP', name: 'Philippines' },
    { code: 'EGP', name: 'Egypt' },
    { code: 'LKR', name: 'Sri Lanka' },
    { code: 'NPR', name: 'Nepal' },
    { code: 'USD', name: 'USA' },
    { code: 'EUR', name: 'Europe' },
    { code: 'AED', name: 'UAE' }
  ];

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/SAR`)
      .then(res => res.json())
      .then(data => {
        if (data && data.conversion_rates) setRatesData(data.conversion_rates);
        setLoading(false);
      }).catch(() => setLoading(false));
  }, []);

  const getRate = (margin: number) => {
    if (!ratesData) return "0.00";
    const base = ratesData[targetCurrency] || 0;
    return (Number(amount) * base * margin).toFixed(2);
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', paddingBottom: '40px', fontFamily: 'sans-serif' }}>
      
      {/* Header */}
      <nav style={{ backgroundColor: '#000', color: '#fff', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>SAUDI RATE</div>
        <Link href="/gold-rates" style={{ color: '#FFD700', textDecoration: 'none', fontWeight: 'bold' }}>GOLD PRICE →</Link>
      </nav>

      <div style={{ maxWidth: '480px', margin: '0 auto', padding: '15px' }}>
        
        {/* Ad Space */}
        <div style={{ backgroundColor: '#fff', height: '50px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ddd', marginBottom: '15px' }}>
          <small style={{ color: '#ccc' }}>ADVERTISEMENT</small>
        </div>

        {/* Global Input Card */}
        <div style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', marginBottom: '20px' }}>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
            <div style={{ flex: 2 }}>
              <label style={{ fontSize: '12px', color: '#666', display: 'block', marginBottom: '5px' }}>Amount (SAR)</label>
              <input 
                type="number" value={amount} onChange={(e: any) => setAmount(e.target.value)}
                style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #eee', fontSize: '18px', fontWeight: 'bold', outline: 'none' }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '12px', color: '#666', display: 'block', marginBottom: '5px' }}>To Country</label>
              <select 
                value={targetCurrency} onChange={(e: any) => setTargetCurrency(e.target.value)}
                style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #eee', fontSize: '14px', fontWeight: 'bold', height: '50px' }}
              >
                {topCountries.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
              </select>
            </div>
          </div>
          <p style={{ textAlign: 'center', fontSize: '12px', color: '#2e7d32', fontWeight: 'bold' }}>
            Live: 1 SAR = {ratesData ? ratesData[targetCurrency] : '...'} {targetCurrency}
          </p>
        </div>

        {/* Dynamic Provider List */}
        {providers.map((p, i) => (
          <div key={i} style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '15px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #eee' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: p.color, borderRadius: '10px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '10px' }}>
                {p.name.substring(0, 3)}
              </div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{p.name}</div>
                <div style={{ fontSize: '10px', color: '#888' }}>Fee: {p.fee} • {p.tag}</div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#000' }}>{getRate(p.margin)}</div>
              <div style={{ fontSize: '10px', color: '#999' }}>{targetCurrency}</div>
            </div>
          </div>
        ))}

        {/* AdSense Box */}
        <div style={{ backgroundColor: '#fff', height: '200px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ddd', marginTop: '20px' }}>
          <small style={{ color: '#ccc' }}>ADSENSE BOX</small>
        </div>

      </div>
    </div>
  );
}