"use client";
import React, { useState, useEffect } from 'react';

// --- Premium SVGs Components ---
const CheckIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;

export default function Home() {
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeFaq, setActiveFaq] = useState(null);

  const API_KEY = '0dfe1f9efbc26627f2809000'; 

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/SAR`);
        const data = await res.json();
        if (data.result === "success") {
          setExchangeRate(data.conversion_rates.PKR);
        }
      } catch (error) { console.error("API error", error); } finally { setLoading(false); }
    };
    fetchRates();
  }, []);

  // بینک لنکس کے ساتھ ڈیٹا
  const providers = [
    { name: 'UrPay', diff: 0.18, color: '#00A36C', speed: 'Instant', fee: 'Free', link: 'https://www.urpay.com.sa/' },
    { name: 'STC Pay', diff: 0.12, color: '#4F008C', speed: '5 Mins', fee: 'Free', link: 'https://stcpay.com.sa/' },
    { name: 'Mobily Pay', diff: 0.10, color: '#0062FF', speed: 'Instant', fee: 'SAR 5', link: 'https://mobilypay.com.sa/' },
    { name: 'Al Rajhi', diff: -0.05, color: '#1A237E', speed: '1-2 Days', fee: 'SAR 10', link: 'https://www.alrajhibank.com.sa/' },
    { name: 'Enjaz', diff: -0.02, color: '#FF6D00', speed: 'Instant', fee: 'SAR 15', link: 'https://enjazpayment.com/' },
    { name: 'Fawri', diff: -0.08, color: '#004D40', speed: 'Instant', fee: 'SAR 12', link: 'https://www.bankaljazira.com/en-us/Personal-Banking/Fawri' },
    { name: 'Friendi Pay', diff: 0.08, color: '#D32F2F', speed: 'Instant', fee: 'Free', link: 'https://www.friendimobile.com.sa/en/friendipay/' },
    { name: 'MoneyGram', diff: -0.12, color: '#C62828', speed: '10 Mins', fee: 'SAR 20', link: 'https://www.moneygram.com/mgo/sa/en/' },
    { name: 'Alinma Pay', diff: -0.04, color: '#6B4C35', speed: 'Instant', fee: 'Free', link: 'https://www.alinmapay.com/' },
  ];

  return (
    <div style={{ backgroundColor: '#020617', color: '#F8FAFC', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      
      {/* --- NAVBAR --- */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 1000, padding: '15px 6%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(2, 6, 23, 0.9)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #1E293B' }}>
        <div style={{ fontSize: '26px', fontWeight: '900' }}>
          <span style={{ color: '#10B981' }}>Saudi</span><span style={{ color: '#FACC15' }}>Rate</span>
        </div>
        <div style={{ display: 'flex', gap: '30px', fontSize: '14px', fontWeight: '600', color: '#94A3B8' }}>
          <span>Home</span><span>Gold Rates</span><span>Currency</span><span>Calculator</span><span>Contact</span>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section style={{ padding: '80px 20px', textAlign: 'center' }}>
         <h1 style={{ fontSize: 'clamp(30px, 5vw, 60px)', fontWeight: '800', marginBottom: '20px' }}>
          Transfer Money <span style={{ color: '#10B981' }}>Smarter</span>
        </h1>
        {/* Converter Box (پچھلا لاجک برقرار ہے) */}
      </section>

      {/* --- MARKET COMPARISON WITH LINKS --- */}
      <section style={{ maxWidth: '1100px', margin: '40px auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Market Comparison</h2>
        <div style={{ display: 'grid', gap: '15px' }}>
          {providers.map((p, i) => (
            <div key={i} style={{ backgroundColor: '#0F172A', padding: '20px', borderRadius: '20px', border: '1px solid #1E293B', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', alignItems: 'center', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '12px', backgroundColor: p.color, display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', color: 'white' }}>{p.name[0]}</div>
                <div style={{fontWeight: '700'}}>{p.name}</div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '11px', color: '#64748B' }}>Rate</div>
                <div style={{ fontWeight: 'bold', color: '#10B981' }}>{(exchangeRate ? exchangeRate + p.diff : 0).toFixed(3)}</div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '11px', color: '#64748B' }}>Fee</div>
                <div style={{ fontWeight: 'bold' }}>{p.fee}</div>
              </div>

              <div style={{ textAlign: 'right' }}>
                {/* لنکس یہاں لگائے گئے ہیں */}
                <a 
                  href={p.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    backgroundColor: '#1E293B', 
                    color: 'white', 
                    textDecoration: 'none',
                    padding: '8px 16px', 
                    borderRadius: '10px', 
                    fontSize: '13px',
                    fontWeight: 'bold',
                    display: 'inline-block'
                  }}
                >
                  Send Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER (As requested) --- */}
      <footer style={{ backgroundColor: '#020617', padding: '60px 6% 20px', borderTop: '2px solid #FACC15', marginTop: '50px' }}>
        <div style={{ fontSize: '24px', fontWeight: '900', marginBottom: '15px' }}>
          <span style={{ color: '#10B981' }}>Saudi</span> <span style={{ color: '#FACC15' }}>Rate</span>
        </div>
        <p style={{ color: '#64748B', fontSize: '12px' }}>© 2026 SaudiRate.com - All Rights Reserved.</p>
      </footer>
    </div>
  );
}