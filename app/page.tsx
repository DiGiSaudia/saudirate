"use client";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  // اپنی API Key یہاں درج کریں
  const API_KEY = 'YOUR_API_KEY_HERE'; 

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/SAR`);
        const data = await res.json();
        if (data.result === "success") {
          setExchangeRate(data.conversion_rates.PKR);
        }
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, []);

  const providers = [
    { name: 'UrPay', diff: 0.18, color: '#00A36C', badge: 'Best' },
    { name: 'STC Pay', diff: 0.12, color: '#4F008C' },
    { name: 'Mobily Pay', diff: 0.10, color: '#0062FF' },
    { name: 'Al Rajhi', diff: -0.05, color: '#1A237E' },
    { name: 'Enjaz', diff: -0.02, color: '#FF6D00' },
    { name: 'Fawri', diff: -0.08, color: '#004D40' },
    { name: 'Friendi Pay', diff: 0.08, color: '#D32F2F' },
    { name: 'MoneyGram', diff: -0.12, color: '#C62828' },
    { name: 'Alinma Pay', diff: -0.04, color: '#6B4C35' },
  ];

  return (
    <div style={{ backgroundColor: '#020617', color: '#F8FAFC', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* --- Fixed Navbar --- */}
      <nav style={{ 
        padding: '20px 6%', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        backgroundColor: 'rgba(15, 23, 42, 0.9)', 
        backdropFilter: 'blur(10px)', 
        borderBottom: '1px solid #1E293B', 
        position: 'sticky', 
        top: 0, 
        zIndex: 100 
      }}>
        <div style={{ 
          background: 'linear-gradient(45deg, #059669, #10B981)', 
          padding: '8px 16px', 
          borderRadius: '12px', 
          fontWeight: 'bold', 
          fontSize: '20px', 
          color: 'white' 
        }}>
          Saudi<span style={{color: '#020617'}}>Rate</span>
        </div>
        <div style={{ display: 'flex', gap: '25px', fontSize: '14px', color: '#94A3B8' }}>
          <span style={{ color: '#10B981', fontWeight: 'bold' }}>Home</span>
          <span>Gold Rates</span>
          <span>Exchange</span>
        </div>
      </nav>

      {/* --- Content Area --- */}
      <div style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '10px' }}>Global Remittance Live</h1>
        <p style={{ color: '#94A3B8', marginBottom: '40px' }}>Fast and reliable exchange rates for SAR to PKR.</p>

        {/* Converter Card */}
        <div style={{ 
          maxWidth: '450px', 
          margin: '0 auto 50px', 
          backgroundColor: '#0F172A', 
          padding: '30px', 
          borderRadius: '24px', 
          border: '1px solid #1E293B' 
        }}>
          <div style={{ textAlign: 'left', marginBottom: '20px' }}>
            <label style={{ fontSize: '11px', color: '#64748B', fontWeight: 'bold' }}>SENDING AMOUNT</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '2px solid #334155', padding: '10px 0' }}>
              <input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(Number(e.target.value))}
                style={{ width: '100%', background: 'transparent', border: 'none', color: 'white', fontSize: '24px', fontWeight: 'bold', outline: 'none' }}
              />
              <span style={{ color: '#10B981', fontWeight: 'bold' }}>SAR</span>
            </div>
          </div>
          <div style={{ backgroundColor: '#020617', padding: '20px', borderRadius: '15px', textAlign: 'left' }}>
            <label style={{ fontSize: '11px', color: '#10B981', fontWeight: 'bold' }}>RECEIVING PKR</label>
            <div style={{ fontSize: '32px', fontWeight: 'bold' }}>
              {exchangeRate ? (amount * exchangeRate).toFixed(2) : '0.00'}
            </div>
          </div>
        </div>

        {/* 9 Providers List */}
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
          {providers.map((p, i) => (
            <div key={i} style={{ 
              backgroundColor: '#0F172A', 
              padding: '20px', 
              borderRadius: '20px', 
              border: '1px solid #1E293B', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: p.color, display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>{p.name[0]}</div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '15px' }}>{p.name}</div>
                  <div style={{ fontSize: '11px', color: '#64748B' }}>1 SAR = {exchangeRate ? (exchangeRate + p.diff).toFixed(3) : '...'}</div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#10B981' }}>{exchangeRate ? (exchangeRate + p.diff).toFixed(2) : '0.00'}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '30px', borderTop: '1px solid #1E293B', color: '#475569', fontSize: '12px' }}>
        © 2026 SaudiRate.com | Accuracy is our priority.
      </footer>
    </div>
  );
}