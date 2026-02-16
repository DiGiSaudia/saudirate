"use client";
import React, { useState, useEffect, ChangeEvent } from 'react';
import Link from 'next/link';

export default function RemittancePage() {
  // 1 & 2: Explicit types for state to avoid 'any' issues
  const [amount, setAmount] = useState<string>("1");
  const [targetCurrency, setTargetCurrency] = useState<string>("PKR");
  const [ratesData, setRatesData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const API_KEY = '0dfe1f9efbc26627f2809000';

  const topCountries = [
    { code: 'PKR', name: 'Pakistan 🇵🇰' }, { code: 'INR', name: 'India 🇮🇳' },
    { code: 'BDT', name: 'Bangladesh 🇧🇩' }, { code: 'PHP', name: 'Philippines 🇵🇭' },
    { code: 'EGP', name: 'Egypt 🇪🇬' }, { code: 'AED', name: 'UAE 🇦🇪' },
    { code: 'KWD', name: 'Kuwait 🇰🇼' }, { code: 'OMR', name: 'Oman 🇴🇲' },
    { code: 'QAR', name: 'Qatar 🇶🇦' }, { code: 'BHD', name: 'Bahrain 🇧🇭' },
    { code: 'LKR', name: 'Sri Lanka 🇱🇰' }, { code: 'NPR', name: 'Nepal 🇳🇵' },
    { code: 'USD', name: 'USA 🇺🇸' }, { code: 'GBP', name: 'UK 🇬🇧' },
    { code: 'EUR', name: 'Europe 🇪🇺' }, { code: 'IDR', name: 'Indonesia 🇮🇩' },
    { code: 'TRY', name: 'Turkey 🇹🇷' }, { code: 'YER', name: 'Yemen 🇾🇪' },
    { code: 'SDG', name: 'Sudan 🇸🇩' }, { code: 'JOD', name: 'Jordan 🇯🇴' }
  ];

  const providers = [
    { id: 1, name: 'STC Pay', margin: 1.002, fee: '0 SAR', color: '#4f2d7f' },
    { id: 2, name: 'UrPay', margin: 1.003, fee: '0 SAR', color: '#00d084' },
    { id: 3, name: 'Mobily Pay', margin: 1.001, fee: '5 SAR', color: '#0061ff' },
    { id: 4, name: 'Al Rajhi', margin: 0.998, fee: '15 SAR', color: '#0054a6' },
    { id: 5, name: 'Enjaz', margin: 0.997, fee: '18 SAR', color: '#9d2235' },
    { id: 6, name: 'Fawri', margin: 0.999, fee: '10 SAR', color: '#00a19c' }
  ];

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/SAR`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.conversion_rates) setRatesData(data.conversion_rates);
        setLoading(false);
      }).catch(() => setLoading(false));
  }, []);

  // 3: Fixed calculation logic
  const calculate = (margin: number): string => {
    if (!ratesData) return "0.00";
    const baseRate = ratesData[targetCurrency] || 0;
    const finalVal = Number(amount) * baseRate * margin;
    return finalVal.toFixed(2);
  };

  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <nav style={{ backgroundColor: '#000', color: '#fff', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 'bold', fontSize: '20px' }}>SAUDI RATE</div>
        <Link href="/gold-rates" style={{ color: '#FFD700', textDecoration: 'none', fontWeight: 'bold' }}>GOLD PRICE →</Link>
      </nav>

      <div style={{ maxWidth: '480px', margin: '0 auto', padding: '15px' }}>
        <div style={{ backgroundColor: '#fff', borderRadius: '15px', padding: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ flex: 2 }}>
              <label style={{ fontSize: '11px', color: '#888', display: 'block', marginBottom: '5px' }}>Amount (SAR)</label>
              <input 
                type="number" 
                value={amount} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)} 
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '18px', fontWeight: 'bold', outline: 'none' }} 
              />
            </div>
            <div style={{ flex: 1.5 }}>
              <label style={{ fontSize: '11px', color: '#888', display: 'block', marginBottom: '5px' }}>To Country</label>
              <select 
                value={targetCurrency} 
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setTargetCurrency(e.target.value)} 
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', height: '45px', fontWeight: 'bold' }}
              >
                {topCountries.map((c) => <option key={c.code} value={c.code}>{c.name}</option>)}
              </select>
            </div>
          </div>
        </div>

        {loading ? <p style={{textAlign: 'center'}}>Rates loading...</p> : 
          providers.map((p) => (
            <div key={p.id} style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '12px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #eee' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '35px', height: '35px', backgroundColor: p.color, borderRadius: '8px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '10px' }}>
                  {p.name.substring(0,3)}
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{p.name}</div>
                  <div style={{ fontSize: '10px', color: '#999' }}>Fee: {p.fee}</div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#2e7d32' }}>{calculate(p.margin)}</div>
                <div style={{ fontSize: '10px', color: '#aaa' }}>{targetCurrency}</div>
              </div>
            </div>
          ))
        }

        <div style={{ backgroundColor: '#fff', height: '250px', marginTop: '20px', borderRadius: '12px', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <small style={{ color: '#ccc' }}>GOOGLE ADSENSE UNIT</small>
        </div>
      </div>
    </div>
  );
}