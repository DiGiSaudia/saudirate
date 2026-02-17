"use client";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [amount, setAmount] = useState(1); // Default value set to 1
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState('');

  // اپنی API Key یہاں درج کریں
  const API_KEY = '0dfe1f9efbc26627f2809000'; 

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/SAR`);
        const data = await res.json();
        if (data.result === "success") {
          setExchangeRate(data.conversion_rates.PKR);
          const date = new Date();
          setLastUpdated(date.toLocaleDateString() + ' ' + date.toLocaleTimeString());
        }
      } catch (error) {
        console.error("Rates fetch error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, []);

  // 9 ریمیٹنس فراہم کرنے والے (Providers)
  const providers = [
    { name: 'UrPay', rate: 0.12, color: '#105652', badge: 'Best Rate' },
    { name: 'STC Pay', rate: 0.08, color: '#4F008C' },
    { name: 'Mobily Pay', rate: 0.05, color: '#0062FF' },
    { name: 'Al Rajhi', rate: -0.15, color: '#1A237E' },
    { name: 'Enjaz', rate: -0.10, color: '#E65100' },
    { name: 'Fawri', rate: -0.12, color: '#004D40' },
    { name: 'Friendi Pay', rate: 0.02, color: '#D32F2F' },
    { name: 'MoneyGram', rate: -0.20, color: '#C62828' },
    { name: 'Tahweel Al Rajhi', rate: -0.18, color: '#283593' },
  ];

  return (
    <div style={{ backgroundColor: '#0a0a0a', color: 'white', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Navbar Section */}
      <nav style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #222' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#4caf50' }}>Saudi<span style={{color: 'white'}}>Rate</span></div>
        <div style={{ display: 'flex', gap: '20px', fontSize: '14px' }}>
          <span>Home</span><span>Gold Rates</span><span>Currency</span><span>Calculator</span><span>Contact</span>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '10px' }}>Send Money Home</h1>
        <p style={{ color: '#aaa', marginBottom: '30px' }}>Compare live exchange rates and find the best provider.</p>
        
        {/* Converter Box */}
        <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#161616', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
          <div style={{ textAlign: 'left', marginBottom: '20px' }}>
            <label style={{ fontSize: '12px', color: '#888' }}>You Send (SAR)</label>
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(Number(e.target.value))}
              style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '2px solid #333', color: 'white', fontSize: '24px', padding: '10px 0', outline: 'none' }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#222', padding: '15px', borderRadius: '10px' }}>
            <span>Pakistan (PKR)</span>
            <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#4caf50' }}>
              {exchangeRate ? (amount * exchangeRate).toLocaleString(undefined, {maximumFractionDigits:2}) : '...'}
            </span>
          </div>
          <div style={{ fontSize: '11px', color: '#555', marginTop: '15px' }}>Last Updated: {lastUpdated}</div>
        </div>
      </div>

      {/* Providers List (Total 9) */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h3 style={{ marginBottom: '20px', fontSize: '18px' }}>Best Rates for 1 SAR</h3>
        {providers.map((p, i) => (
          <div key={i} style={{ 
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
            backgroundColor: '#161616', padding: '15px 25px', borderRadius: '12px', 
            marginBottom: '12px', border: p.badge ? '1px solid #4caf50' : '1px solid #222',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: p.color, display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>{p.name[0]}</div>
              <div>
                <div style={{ fontWeight: 'bold' }}>{p.name}</div>
                <div style={{ fontSize: '12px', color: '#777' }}>1 SAR = {exchangeRate ? (exchangeRate + p.rate).toFixed(4) : '...'} PKR</div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{exchangeRate ? (exchangeRate + p.rate).toFixed(2) : '0.00'}</div>
              <div style={{ fontSize: '10px', color: '#4caf50' }}>PKR</div>
            </div>
            {p.badge && <span style={{ position: 'absolute', top: '-8px', right: '10px', backgroundColor: '#4caf50', fontSize: '9px', padding: '2px 8px', borderRadius: '5px' }}>{p.badge}</span>}
          </div>
        ))}
      </div>

      {/* Pro Footer */}
      <footer style={{ backgroundColor: '#000', padding: '60px 20px 20px', marginTop: '50px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
          <div>
            <h4 style={{ color: '#4caf50' }}>Saudi Rate</h4>
            <p style={{ fontSize: '13px', color: '#888', lineHeight: '1.6' }}>Your trusted source for daily gold rates and currency exchange in Saudi Arabia.</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '15px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '13px', color: '#888', lineHeight: '2' }}>
              <li>Gold Rates</li><li>Currency Exchange</li><li>Converter</li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '15px' }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '13px', color: '#888', lineHeight: '2' }}>
              <li>Privacy Policy</li><li>Terms & Conditions</li><li>Disclaimer</li>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '50px', paddingTop: '20px', borderTop: '1px solid #222', fontSize: '12px', color: '#555' }}>
          © 2026 SaudiRate.com - All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}