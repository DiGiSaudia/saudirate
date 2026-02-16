"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function GlobalRatesPage() {
  const [amount, setAmount] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [currencyData, setCurrencyData] = useState<any>(null);
  const [targetCurrency, setTargetCurrency] = useState<string>('PKR');
  const [targetRate, setTargetRate] = useState<number>(0);

  const API_KEY = '0dfe1f9efbc26627f2809000';

  const popularCurrencies = [
    { code: 'PKR', name: 'Pakistan (Rupee)' },
    { code: 'INR', name: 'India (Rupee)' },
    { code: 'PHP', name: 'Philippines (Peso)' },
    { code: 'BDT', name: 'Bangladesh (Taka)' },
    { code: 'EGP', name: 'Egypt (Pound)' },
    { code: 'LKR', name: 'Sri Lanka (Rupee)' },
    { code: 'NPR', name: 'Nepal (Rupee)' },
    { code: 'USD', name: 'USA (Dollar)' },
    { code: 'EUR', name: 'Europe (Euro)' },
    { code: 'AED', name: 'UAE (Dirham)' },
    { code: 'IDR', name: 'Indonesia (Rupiah)' },
  ];

  useEffect(() => {
    async function fetchAllRates() {
      try {
        const res = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/SAR`);
        const data = await res.json();
        if (data && data.result === "success") {
          setCurrencyData(data.conversion_rates);
          setTargetRate(data.conversion_rates[targetCurrency] || 0);
        }
      } catch (err) {
        console.error("Error fetching rates", err);
      } finally {
        setLoading(false);
      }
    }
    fetchAllRates();
  }, [targetCurrency]);

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = e.target.value;
    setTargetCurrency(code);
    if (currencyData) {
      setTargetRate(currencyData[code]);
    }
  };

  const finalResult = (amount * targetRate).toFixed(2);

  return (
    <div style={{ backgroundColor: '#f4f7f6', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* Navbar */}
      <nav style={{ backgroundColor: '#111', color: '#fff', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>
          SAUDI<span style={{ color: '#FFD700' }}>RATE</span>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link href="/gold-rates" style={{ color: '#FFD700', textDecoration: 'none', fontWeight: 'bold' }}>Gold Price</Link>
          <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        </div>
      </nav>

      <div style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px' }}>
        
        {/* Converter Card */}
        <div style={{ background: 'linear-gradient(135deg, #004d40 0%, #00251a 100%)', borderRadius: '30px', padding: '40px', color: '#fff', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>Global Currency Converter</h1>
          
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '30px' }}>
            <div style={{ textAlign: 'left' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', color: '#80cbc4', marginBottom: '5px' }}>Amount in SAR</label>
              <input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(Number(e.target.value))}
                style={{ padding: '15px', borderRadius: '12px', border: 'none', fontSize: '1.2rem', width: '180px' }}
              />
            </div>

            <div style={{ textAlign: 'left' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', color: '#80cbc4', marginBottom: '5px' }}>Convert To</label>
              <select 
                value={targetCurrency}
                onChange={handleCurrencyChange}
                style={{ padding: '15px', borderRadius: '12px', border: 'none', fontSize: '1.1rem', width: '220px', fontWeight: 'bold' }}
              >
                {currencyData && Object.keys(currencyData).map((code) => (
                  <option key={code} value={code}>{code}</option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ marginTop: '40px', borderTop: '1px solid #00695c', paddingTop: '30px' }}>
            <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#FFD700' }}>
              {loading ? '---' : finalResult} <span style={{ fontSize: '1.2rem' }}>{targetCurrency}</span>
            </div>
          </div>
        </div>

        {/* Popular Rates Table */}
        <h2 style={{ marginTop: '50px', marginBottom: '20px', textAlign: 'center' }}>Popular Transfer Rates</h2>
        <div style={{ backgroundColor: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f1f1f1' }}>
                <th style={{ padding: '20px', textAlign: 'left' }}>Country</th>
                <th style={{ padding: '20px', textAlign: 'right' }}>Rate (1 SAR)</th>
              </tr>
            </thead>
            <tbody>
              {popularCurrencies.map((item, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '18px 20px', fontWeight: 'bold' }}>{item.name}</td>
                  <td style={{ padding: '18px 20px', textAlign: 'right', fontWeight: 'bold', color: '#2e7d32' }}>
                    {loading ? '...' : (currencyData ? currencyData[item.code] : '---')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}