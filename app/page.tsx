"use client";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [amount, setAmount] = useState(1); // Default to 1 SAR
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  // اپنی API Key یہاں درج کریں
  const API_KEY = '0dfe1f9efbc26627f2809000'; 

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/SAR`);
        const data = await res.json();
        if (data.result === "success") {
          setExchangeRate(data.conversion_rates.PKR);
        }
      } catch (error) {
        console.error("Rates fetch error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, []);

  const providers = [
    { name: 'UrPay', diff: 0.12, color: '#00c853' },
    { name: 'STC Pay', diff: 0.08, color: '#4F008C' },
    { name: 'Mobily Pay', diff: 0.05, color: '#0062FF' },
    { name: 'Al Rajhi', diff: -0.15, color: '#1A237E' },
    { name: 'Enjaz', diff: -0.10, color: '#ff6d00' },
    { name: 'Fawri', diff: -0.12, color: '#004D40' },
    { name: 'Friendi Pay', diff: 0.02, color: '#d50000' },
    { name: 'MoneyGram', diff: -0.20, color: '#b71c1c' },
    { name: 'Tahweel Al Rajhi', diff: -0.18, color: '#283593' },
  ];

  return (
    <div style={{ backgroundColor: '#0d1117', color: '#e6edf3', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif' }}>
      
      {/* --- Clean Navbar --- */}
      <nav style={{ padding: '15px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #30363d', backgroundColor: '#161b22' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Logo with Text integrated */}
          <div style={{ padding: '8px 12px', backgroundColor: '#006C35', borderRadius: '8px', fontWeight: 'bold', fontSize: '20px', letterSpacing: '0.5px' }}>
            Saudi<span style={{color: '#ffffff'}}>Rate</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '25px', fontSize: '14px', fontWeight: '500', color: '#8b949e' }}>
          <span style={{cursor: 'pointer'}}>Home</span>
          <span style={{cursor: 'pointer'}}>Gold Rates</span>
          <span style={{cursor: 'pointer'}}>Converter</span>
          <span style={{cursor: 'pointer'}}>Contact</span>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <div style={{ textAlign: 'center', padding: '80px 20px', background: 'radial-gradient(circle at top, #161b22 0%, #0d1117 100%)' }}>
        <h1 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '15px', color: '#fff' }}>Saudi Remittance Guide</h1>
        <p style={{ color: '#8b949e', fontSize: '18px', maxWidth: '600px', margin: '0 auto 40px' }}>Compare live market rates and find the best way to send money home.</p>
        
        {/* Modern Converter Card */}
        <div style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: '#161b22', padding: '30px', borderRadius: '24px', border: '1px solid #30363d', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
          <div style={{ marginBottom: '25px' }}>
            <div style={{ textAlign: 'left', fontSize: '12px', color: '#8b949e', marginBottom: '8px', fontWeight: '600' }}>AMOUNT TO CONVERT</div>
            <div style={{ display: 'flex', alignItems: 'center', borderBottom: '2px solid #006C35', paddingBottom: '10px' }}>
              <span style={{ fontSize: '24px', marginRight: '10px' }}>🇸🇦</span>
              <input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(Number(e.target.value))}
                style={{ width: '100%', background: 'transparent', border: 'none', color: '#fff', fontSize: '32px', fontWeight: 'bold', outline: 'none' }}
              />
              <span style={{ fontWeight: 'bold', color: '#8b949e' }}>SAR</span>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0d1117', padding: '20px', borderRadius: '16px' }}>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '12px', color: '#8b949e' }}>PAKISTAN (PKR)</div>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#00c853' }}>
                {exchangeRate ? (amount * exchangeRate).toLocaleString(undefined, {maximumFractionDigits:2}) : '0.00'}
              </div>
            </div>
            <span style={{ fontSize: '24px' }}>🇵🇰</span>
          </div>
        </div>
      </div>

      {/* --- Best Rates Grid --- */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '25px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700' }}>Best Rates for 1 SAR</h2>
          <span style={{ fontSize: '12px', color: '#8b949e' }}>Market Rate: {exchangeRate?.toFixed(2)} PKR</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
          {providers.map((p, i) => (
            <div key={i} style={{ 
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
              backgroundColor: '#161b22', padding: '18px 25px', borderRadius: '16px', 
              border: '1px solid #30363d', transition: 'transform 0.2s', cursor: 'pointer'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: p.color, display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: '18px', color: '#fff' }}>
                  {p.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '16px' }}>{p.name}</div>
                  <div style={{ fontSize: '12px', color: '#8b949e' }}>1 SAR = {exchangeRate ? (exchangeRate + p.diff).toFixed(4) : '...'} PKR</div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff' }}>
                  {exchangeRate ? (exchangeRate + p.diff).toFixed(2) : '0.00'}
                </div>
                <div style={{ fontSize: '10px', color: '#00c853', fontWeight: 'bold' }}>PKR</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Final Pro Footer --- */}
      <footer style={{ backgroundColor: '#0d1117', padding: '60px 20px 30px', borderTop: '1px solid #30363d' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ color: '#006C35', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>SaudiRate</div>
          <p style={{ color: '#8b949e', fontSize: '14px', maxWidth: '500px', margin: '0 auto 30px', lineHeight: '1.6' }}>
            The most accurate platform for Saudi Riyal exchange rates and gold prices. Helping you make smarter financial decisions every day.
          </p>
          <div style={{ borderTop: '1px solid #30363d', paddingTop: '20px', fontSize: '12px', color: '#484f58' }}>
            © 2026 SaudiRate.com - All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}