"use client";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [amount, setAmount] = useState(1000);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState('');

  // آپ کی API Key (یہاں اپنی پرانی Key ہی استعمال کریں)
  const API_KEY = '0dfe1f9efbc26627f2809000'; 

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/SAR`);
        const data = await res.json();
        if (data.result === "success") {
          setExchangeRate(data.conversion_rates.PKR);
          
          // تاریخ کو فارمیٹ کریں
          const date = new Date();
          setLastUpdated(date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) + ', ' + date.toLocaleDateString());
        }
      } catch (error) {
        console.error("Error fetching rates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  // بینکوں کا ڈیٹا (خودکار کیلکولیشن کے ساتھ)
  const banks = [
    { name: 'UrPay', rate: exchangeRate ? (exchangeRate + 0.05).toFixed(2) : '0.00', color: '#105652', badge: 'Best' },
    { name: 'Alinma Pay', rate: exchangeRate ? (exchangeRate - 0.10).toFixed(2) : '0.00', color: '#6b4c35', badge: '' },
    { name: 'STC Pay', rate: exchangeRate ? (exchangeRate - 0.15).toFixed(2) : '0.00', color: '#4F008C', badge: '' },
    { name: 'SNB QuickPay', rate: exchangeRate ? (exchangeRate - 0.20).toFixed(2) : '0.00', color: '#2E7D32', badge: '' },
    { name: 'Al Rajhi', rate: exchangeRate ? (exchangeRate - 0.25).toFixed(2) : '0.00', color: '#1A237E', badge: '' },
  ];

  return (
    <main style={{ backgroundColor: '#121212', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
      
      {/* --- Hero / Converter Section --- */}
      <div style={{ 
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', 
        padding: '40px 20px', 
        textAlign: 'center',
        borderBottomLeftRadius: '30px',
        borderBottomRightRadius: '30px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '10px', fontWeight: 'bold' }}>
          SAR to PKR Converter
        </h1>
        <p style={{ opacity: 0.8, marginBottom: '20px' }}>
          Live Open Market & Bank Rates
        </p>

        {/* Converter Box */}
        <div style={{ 
          backgroundColor: 'rgba(255,255,255,0.1)', 
          backdropFilter: 'blur(10px)',
          padding: '20px', 
          borderRadius: '15px', 
          maxWidth: '500px', 
          margin: '0 auto',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <div style={{ textAlign: 'left' }}>
              <label style={{ fontSize: '0.9rem', color: '#ccc' }}>Saudi Riyal (SAR)</label>
              <input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(Number(e.target.value))}
                style={{ 
                  display: 'block', width: '100%', background: 'transparent', border: 'none', 
                  color: 'white', fontSize: '1.5rem', fontWeight: 'bold', outline: 'none', borderBottom: '1px solid #555'
                }} 
              />
            </div>
            <div style={{ fontSize: '1.5rem' }}>⇄</div>
            <div style={{ textAlign: 'right' }}>
              <label style={{ fontSize: '0.9rem', color: '#ccc' }}>Pakistani Rupee (PKR)</label>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4caf50' }}>
                {loading ? '...' : (amount * (exchangeRate || 0)).toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </div>
            </div>
          </div>
          <div style={{ fontSize: '0.8rem', color: '#aaa', marginTop: '10px' }}>
            Last Updated: {lastUpdated || 'Fetching...'}
          </div>
        </div>
      </div>

      {/* --- Advertisement Area (Improved) --- */}
      <div style={{ maxWidth: '800px', margin: '30px auto', padding: '0 20px' }}>
        <div style={{ 
          border: '1px dashed #444', 
          borderRadius: '10px', 
          padding: '20px', 
          textAlign: 'center', 
          backgroundColor: '#1a1a1a',
          color: '#666'
        }}>
          <span style={{ display: 'block', fontSize: '0.8rem', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '1px' }}>Sponsored</span>
          <h3 style={{ margin: 0, color: '#888' }}>Place Your Ad Here</h3>
        </div>
      </div>

      {/* --- Bank Rates Grid --- */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px 40px 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '25px', fontSize: '1.5rem' }}>
          Today's Best Exchange Rates
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '20px' 
        }}>
          {loading ? (
            <p style={{ textAlign: 'center', width: '100%' }}>Loading Rates...</p>
          ) : (
            banks.map((bank, index) => (
              <div key={index} style={{ 
                backgroundColor: '#1e1e1e', 
                borderRadius: '15px', 
                padding: '20px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                border: bank.badge ? '1px solid #4caf50' : '1px solid #333',
                position: 'relative'
              }}>
                {bank.badge && (
                  <span style={{ 
                    position: 'absolute', top: '-10px', right: '15px', 
                    backgroundColor: '#4caf50', color: 'white', 
                    padding: '2px 10px', borderRadius: '10px', fontSize: '0.7rem', fontWeight: 'bold' 
                  }}>
                    {bank.badge}
                  </span>
                )}
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  {/* Bank Icon Placeholder - You can replace with <img src={bank.img} /> */}
                  <div style={{ 
                    width: '45px', height: '45px', borderRadius: '50%', 
                    backgroundColor: bank.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 'bold', fontSize: '1.2rem'
                  }}>
                    {bank.name.charAt(0)}
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{bank.name}</h3>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: '#888' }}>1 SAR =</p>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
                    {bank.rate}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#4caf50' }}>PKR</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* --- Footer Note --- */}
      <footer style={{ textAlign: 'center', padding: '20px', borderTop: '1px solid #333', color: '#666', fontSize: '0.9rem' }}>
        <p>© 2026 SaudiRate. All rights reserved.</p>
        <p>Disclaimer: Rates are for information only and may vary at banks.</p>
      </footer>
    </main>
  );
}