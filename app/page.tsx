"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';

// --- TYPES FOR ZERO RED LINES ---
interface Provider {
  id: number;
  name: string;
  rate_diff: number;
  color: string;
  speed: string;
  fee: string;
  link: string;
}

export default function PremiumHome() {
  const [amount, setAmount] = useState<number>(1);
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const API_KEY = '0dfe1f9efbc26627f2809000';

  // --- REFINED PROVIDERS DATA ---
  const providers: Provider[] = useMemo(() => [
    { id: 1, name: 'UrPay', rate_diff: 0.15, color: '#00A36C', speed: 'Instant', fee: 'Free', link: 'https://www.urpay.com.sa/' },
    { id: 2, name: 'STC Pay', rate_diff: 0.10, color: '#4F008C', speed: '5 Mins', fee: 'Free', link: 'https://stcpay.com.sa/' },
    { id: 3, name: 'Mobily Pay', rate_diff: 0.08, color: '#0062FF', speed: 'Instant', fee: 'SAR 5', link: 'https://mobilypay.com.sa/' },
    { id: 4, name: 'Al Rajhi', rate_diff: -0.05, color: '#1A237E', speed: '1-2 Days', fee: 'SAR 10', link: 'https://www.alrajhibank.com.sa/' },
    { id: 5, name: 'Enjaz', rate_diff: -0.02, color: '#FF6D00', speed: 'Instant', fee: 'SAR 15', link: 'https://enjazpayment.com/' },
  ], []);

  const fetchLiveRates = useCallback(async () => {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/SAR`);
      const data = await response.json();
      if (data && data.conversion_rates) {
        setExchangeRate(data.conversion_rates.PKR);
        setIsLoaded(true);
      }
    } catch (err) {
      console.error("API Error:", err);
    }
  }, [API_KEY]);

  useEffect(() => {
    fetchLiveRates();
  }, [fetchLiveRates]);

  return (
    <div style={{ backgroundColor: '#020617', color: '#F8FAFC', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      
      {/* --- PREMIUM DUAL LOGO SECTION --- */}
      <header style={{ textAlign: 'center', padding: '80px 20px 40px' }}>
        <div style={{ display: 'inline-block' }}>
          <div style={{ fontSize: '48px', fontWeight: '950', letterSpacing: '-2px' }}>
            <span style={{ color: '#10B981' }}>Saudi</span>
            <span style={{ color: '#FACC15' }}>Rate</span>
          </div>
          <div style={{ width: '100%', height: '5px', background: '#FACC15', borderRadius: '50px', marginTop: '5px', boxShadow: '0 0 15px rgba(250, 204, 21, 0.3)' }}></div>
        </div>
      </header>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px' }}>
        
        {/* --- HERO CONVERTER --- */}
        <section style={{ marginBottom: '100px', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(32px, 7vw, 64px)', fontWeight: '900', marginBottom: '40px', lineHeight: '1.1' }}>
            Transfer Money <span style={{ color: '#10B981' }}>Smarter</span>
          </h1>

          <div style={{ maxWidth: '600px', margin: '0 auto', background: '#0F172A', padding: '40px', borderRadius: '40px', border: '1px solid #1E293B', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
            <div style={{ textAlign: 'left' }}>
              <label style={{ fontSize: '12px', color: '#64748B', fontWeight: '800', letterSpacing: '1px' }}>YOU SEND FROM SAUDI ARABIA</label>
              <div style={{ display: 'flex', alignItems: 'center', background: '#020617', padding: '20px', borderRadius: '18px', marginTop: '10px', border: '1px solid #1E293B' }}>
                <input 
                  type="number" 
                  value={amount} 
                  onChange={(e) => setAmount(Number(e.target.value))}
                  style={{ width: '100%', background: 'transparent', border: 'none', color: 'white', fontSize: '32px', fontWeight: '800', outline: 'none' }}
                />
                <span style={{ fontWeight: '900', color: '#94A3B8', borderLeft: '1px solid #1E293B', paddingLeft: '15px' }}>SAR</span>
              </div>
            </div>

            <div style={{ margin: '30px 0', position: 'relative' }}>
              <div style={{ width: '50px', height: '50px', background: '#10B981', borderRadius: '50%', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '6px solid #0F172A', cursor: 'pointer', transition: '0.3s' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
              </div>
            </div>

            <div style={{ textAlign: 'left', background: 'rgba(16, 185, 129, 0.05)', padding: '30px', borderRadius: '25px', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
              <label style={{ fontSize: '12px', color: '#10B981', fontWeight: '800' }}>RECIPIENT GETS IN PAKISTAN</label>
              <div style={{ fontSize: '48px', fontWeight: '900', marginTop: '5px' }}>
                {isLoaded ? (amount * exchangeRate).toLocaleString(undefined, {maximumFractionDigits:2}) : "0.00"}
                <span style={{ fontSize: '20px', color: '#10B981', marginLeft: '10px' }}>PKR</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- COMPARISON MARKET --- */}
        <section style={{ marginBottom: '100px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: '800', marginBottom: '50px' }}>Market Comparison</h2>
          <div style={{ display: 'grid', gap: '15px' }}>
            {providers.map((p) => (
              <div key={p.id} style={{ background: '#0F172A', border: '1px solid #1E293B', padding: '25px 35px', borderRadius: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', transition: '0.3s' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', minWidth: '180px' }}>
                  <div style={{ width: '50px', height: '50px', background: p.color, borderRadius: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: '20px', boxShadow: '0 8px 16px rgba(0,0,0,0.3)' }}>{p.name[0]}</div>
                  <span style={{ fontWeight: '800', fontSize: '20px' }}>{p.name}</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '800' }}>RATE</div>
                  <div style={{ color: '#10B981', fontWeight: '900', fontSize: '18px' }}>{(exchangeRate + p.rate_diff).toFixed(3)}</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '800' }}>FEE</div>
                  <div style={{ fontWeight: '800' }}>{p.fee}</div>
                </div>
                <a href={p.link} target="_blank" style={{ background: '#1E293B', color: 'white', padding: '12px 28px', borderRadius: '12px', textDecoration: 'none', fontWeight: '800', fontSize: '14px', border: '1px solid #334155' }}>Send Now</a>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}