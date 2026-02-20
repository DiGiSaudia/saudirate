"use client";
import React, { useState, useEffect } from 'react';

// --- Premium Icons ---
const GlobeIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;

export default function Home() {
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = 'YOUR_API_KEY_HERE'; 

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/SAR`);
        const data = await res.json();
        if (data.result === "success") setExchangeRate(data.conversion_rates.PKR);
      } catch (e) { console.error(e); } finally { setLoading(false); }
    };
    fetchRates();
  }, []);

  const providers = [
    { name: 'UrPay', diff: 0.18, color: '#00A36C', speed: 'Instant', fee: 'Free', best: true },
    { name: 'STC Pay', diff: 0.12, color: '#4F008C', speed: '5 Mins', fee: 'Free' },
    { name: 'Mobily Pay', diff: 0.10, color: '#0062FF', speed: 'Instant', fee: 'SAR 5' },
    { name: 'Al Rajhi', diff: -0.05, color: '#1A237E', speed: '1-2 Days', fee: 'SAR 10' },
    { name: 'Enjaz', diff: -0.02, color: '#FF6D00', speed: 'Instant', fee: 'SAR 15' },
    { name: 'Fawri', diff: -0.08, color: '#004D40', speed: 'Instant', fee: 'SAR 12' },
    { name: 'Friendi Pay', diff: 0.08, color: '#D32F2F', speed: 'Instant', fee: 'Free' },
    { name: 'MoneyGram', diff: -0.12, color: '#C62828', speed: '10 Mins', fee: 'SAR 20' },
    { name: 'Alinma Pay', diff: -0.04, color: '#6B4C35', speed: 'Instant', fee: 'Free' },
  ];

  return (
    <div style={{ backgroundColor: '#020617', color: '#F8FAFC', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      
      {/* --- Premium Floating Navbar --- */}
      <div style={{ padding: '20px 5%', position: 'sticky', top: 0, zIndex: 1000 }}>
        <nav style={{ 
          backgroundColor: 'rgba(15, 23, 42, 0.7)', 
          backdropFilter: 'blur(15px)', 
          borderRadius: '20px', 
          border: '1px solid rgba(255,255,255,0.05)', 
          padding: '12px 30px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
        }}>
          <div style={{ fontSize: '24px', fontWeight: '900', display: 'flex', alignItems: 'center', gap: '8px' }}>
             <span style={{ color: '#10B981' }}>Saudi</span>Rate
          </div>
          <div style={{ display: 'flex', gap: '25px', fontSize: '14px', fontWeight: '600', color: '#94A3B8' }}>
            <span style={{ color: '#10B981' }}>Converter</span>
            <span>Gold Price</span>
            <span>Banks</span>
          </div>
        </nav>
      </div>

      {/* --- Hero Section --- */}
      <section style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(40px, 8vw, 64px)', fontWeight: '900', letterSpacing: '-2px', marginBottom: '20px' }}>
          Money Transfer <span style={{ color: '#10B981' }}>Perfected.</span>
        </h1>
        <p style={{ color: '#64748B', fontSize: '18px', maxWidth: '600px', margin: '0 auto 60px' }}>
          Compare real-time rates across all major Saudi remittance providers instantly.
        </p>

        {/* Converter Card - Glassmorphism */}
        <div style={{ 
          maxWidth: '500px', 
          margin: '0 auto', 
          backgroundColor: 'rgba(30, 41, 59, 0.5)', 
          padding: '40px', 
          borderRadius: '40px', 
          border: '1px solid rgba(255,255,255,0.05)',
          boxShadow: '0 40px 100px -20px rgba(0,0,0,0.7)',
          backdropFilter: 'blur(20px)'
        }}>
          <div style={{ textAlign: 'left', marginBottom: '30px' }}>
            <label style={{ fontSize: '11px', color: '#10B981', fontWeight: '900', letterSpacing: '2px' }}>YOU SEND FROM KSA</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px 0', borderBottom: '1px solid #334155' }}>
              <span style={{ fontSize: '24px' }}>🇸🇦</span>
              <input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(Number(e.target.value))}
                style={{ width: '100%', background: 'transparent', border: 'none', color: 'white', fontSize: '36px', fontWeight: '900', outline: 'none' }} 
              />
              <span style={{ fontWeight: 'bold', color: '#475569' }}>SAR</span>
            </div>
          </div>

          <div style={{ textAlign: 'left', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '25px', borderRadius: '25px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
            <label style={{ fontSize: '11px', color: '#10B981', fontWeight: '900' }}>TOTAL PKR RECEIVING</label>
            <div style={{ fontSize: '42px', fontWeight: '900', color: 'white' }}>
              {exchangeRate ? (amount * exchangeRate).toLocaleString(undefined, {maximumFractionDigits:2}) : '0.00'}
            </div>
          </div>
        </div>
      </section>

      {/* --- Provider Grid --- */}
      <section style={{ maxWidth: '1100px', margin: '100px auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '800' }}>Live Market Comparison</h2>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10B981', animation: 'pulse 2s infinite' }}></div>
            <span style={{ fontSize: '12px', color: '#64748B' }}>Live Updates</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {providers.map((p, i) => (
            <div key={i} style={{ 
              backgroundColor: '#0F172A', 
              padding: '30px', 
              borderRadius: '28px', 
              border: '1px solid #1E293B',
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: p.color, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold' }}>{p.name[0]}</div>
                {p.best && <span style={{ backgroundColor: '#10B981', color: '#020617', padding: '4px 12px', borderRadius: '10px', fontSize: '10px', fontWeight: '900' }}>BEST RATE</span>}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '5px' }}>{p.name}</h3>
              <div style={{ color: '#10B981', fontSize: '24px', fontWeight: '900', marginBottom: '20px' }}>
                {(exchangeRate ? exchangeRate + p.diff : 0).toFixed(2)} <span style={{ fontSize: '12px', color: '#475569' }}>PKR</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #1E293B', paddingTop: '15px' }}>
                <div style={{ fontSize: '12px', color: '#64748B' }}>Fee: <b style={{color: 'white'}}>{p.fee}</b></div>
                <div style={{ fontSize: '12px', color: '#64748B' }}>Speed: <b style={{color: '#38BDF8'}}>{p.speed}</b></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Simple Footer --- */}
      <footer style={{ textAlign: 'center', padding: '60px', borderTop: '1px solid #1E293B', color: '#475569', fontSize: '13px' }}>
        © 2026 SaudiRate.com | Premium Exchange Services
      </footer>

      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.5; }
          70% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}