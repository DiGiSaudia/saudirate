"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';

// TypeScript کی ریڈ لائنز ختم کرنے کے لیے انٹرفیس
interface RemittanceProvider {
  id: number;
  name: string;
  diff: number;
  color: string;
  speed: string;
  fee: string;
  link: string;
}

export default function SaudiRateRemittance() {
  // --- STATES (Explicitly typed to avoid VS Code errors) ---
  const [amount, setAmount] = useState<number>(1);
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null); // Fixed for TS
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const API_KEY: string = '0dfe1f9efbc26627f2809000';

  // --- DATA ---
  const providers: RemittanceProvider[] = useMemo(() => [
    { id: 1, name: 'UrPay', diff: 0.18, color: '#00A36C', speed: 'Instant', fee: 'Free', link: 'https://www.urpay.com.sa/' },
    { id: 2, name: 'STC Pay', diff: 0.12, color: '#4F008C', speed: '5 Mins', fee: 'Free', link: 'https://stcpay.com.sa/' },
    { id: 3, name: 'Mobily Pay', diff: 0.10, color: '#0062FF', speed: 'Instant', fee: 'SAR 5', link: 'https://mobilypay.com.sa/' },
    { id: 4, name: 'Al Rajhi', diff: -0.05, color: '#1A237E', speed: '1-2 Days', fee: 'SAR 10', link: 'https://www.alrajhibank.com.sa/' },
    { id: 5, name: 'Enjaz', diff: -0.02, color: '#FF6D00', speed: 'Instant', fee: 'SAR 15', link: 'https://enjazpayment.com/' },
    { id: 6, name: 'Fawri', diff: -0.08, color: '#004D40', speed: 'Instant', fee: 'SAR 12', link: 'https://www.bankaljazira.com/en-us/Personal-Banking/Fawri' },
    { id: 7, name: 'Friendi Pay', diff: 0.08, color: '#D32F2F', speed: 'Instant', fee: 'Free', link: 'https://www.friendimobile.com.sa/en/friendipay/' },
    { id: 8, name: 'MoneyGram', diff: -0.12, color: '#C62828', speed: '10 Mins', fee: 'SAR 20', link: 'https://www.moneygram.com/mgo/sa/en/' },
    { id: 9, name: 'Alinma Pay', diff: -0.04, color: '#6B4C35', speed: 'Instant', fee: 'Free', link: 'https://www.alinmapay.com/' },
  ], []);

  const faqs = [
    { q: "How to get the best rate?", a: "To get the best SAR to PKR rate, always compare digital wallets like UrPay and STC Pay first." },
    { q: "Are these rates live?", a: "Yes, our rates are updated every few minutes via official exchange rate APIs." },
    { q: "Is there any hidden fee?", a: "We list all official fees clearly. However, banks may have small internal processing charges." }
  ];

  // --- API CALL ---
  const getRates = useCallback(async () => {
    try {
      const res = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/SAR`);
      const data = await res.json();
      if (data && data.conversion_rates) {
        setExchangeRate(data.conversion_rates.PKR);
        setIsLoaded(true);
      }
    } catch (error) {
      console.error("Error fetching rates", error);
    }
  }, [API_KEY]);

  useEffect(() => {
    getRates();
  }, [getRates]);

  return (
    <div style={{ backgroundColor: '#020617', color: '#F8FAFC', minHeight: '100vh', paddingBottom: '100px' }}>
      
      {/* --- PREMIUM DUAL COLOR LOGO (تصویر کے مطابق) --- */}
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <div style={{ fontSize: '42px', fontWeight: '900', letterSpacing: '-2px' }}>
          <span style={{ color: '#10B981' }}>Saudi</span>
          <span style={{ color: '#FACC15' }}>Rate</span>
        </div>
        <div style={{ width: '80px', height: '5px', background: '#FACC15', margin: '15px auto', borderRadius: '50px' }}></div>
      </div>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* --- CONVERTER SECTION --- */}
        <section style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 style={{ fontSize: 'clamp(32px, 6vw, 68px)', fontWeight: '900', marginBottom: '40px' }}>
            Transfer Money <span style={{ color: '#10B981' }}>Smarter</span>
          </h1>

          <div style={{ maxWidth: '650px', margin: '0 auto', background: '#0F172A', padding: '45px', borderRadius: '40px', border: '1px solid #1E293B' }}>
            <div style={{ textAlign: 'left', marginBottom: '30px' }}>
              <label style={{ fontSize: '12px', color: '#64748B', fontWeight: '800' }}>YOU SEND FROM SAUDI</label>
              <div style={{ display: 'flex', alignItems: 'center', background: '#020617', padding: '20px 25px', borderRadius: '20px', marginTop: '12px', border: '2px solid #1E293B' }}>
                <input 
                  type="number" 
                  value={amount} 
                  onChange={(e) => setAmount(Number(e.target.value))}
                  style={{ width: '100%', background: 'transparent', border: 'none', color: 'white', fontSize: '32px', fontWeight: '800', outline: 'none' }}
                />
                <span style={{ fontWeight: '900', color: '#94A3B8' }}>SAR</span>
              </div>
            </div>

            <div style={{ height: '60px', width: '60px', background: '#10B981', borderRadius: '50%', margin: '0 auto 30px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '8px solid #0F172A' }}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
            </div>

            <div style={{ textAlign: 'left', background: 'rgba(16, 185, 129, 0.05)', padding: '30px', borderRadius: '30px', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
              <label style={{ fontSize: '12px', color: '#10B981', fontWeight: '800' }}>RECIPIENT GETS IN PAKISTAN</label>
              <div style={{ fontSize: '48px', fontWeight: '900', marginTop: '10px' }}>
                {isLoaded ? (amount * exchangeRate).toLocaleString(undefined, {maximumFractionDigits:2}) : "---"}
                <span style={{ fontSize: '20px', color: '#10B981', marginLeft: '10px' }}>PKR</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- COMPARISON TABLE --- */}
        <section style={{ marginBottom: '100px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '36px', fontWeight: '800' }}>Market Comparison</h2>
          <div style={{ display: 'grid', gap: '12px' }}>
            {providers.map((p) => (
              <div key={p.id} style={{ background: '#0F172A', border: '1px solid #1E293B', padding: '25px 35px', borderRadius: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', minWidth: '180px' }}>
                  <div style={{ width: '50px', height: '50px', background: p.color, borderRadius: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: '20px' }}>{p.name[0]}</div>
                  <span style={{ fontWeight: '800', fontSize: '20px' }}>{p.name}</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '800' }}>RATE</div>
                  <div style={{ color: '#10B981', fontWeight: '900', fontSize: '18px' }}>{(exchangeRate + p.diff).toFixed(3)}</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '800' }}>FEE</div>
                  <div style={{ fontWeight: '800' }}>{p.fee}</div>
                </div>
                <a href={p.link} target="_blank" style={{ background: '#1E293B', color: 'white', padding: '12px 28px', borderRadius: '12px', textDecoration: 'none', fontWeight: '800', fontSize: '14px' }}>Send Now</a>
              </div>
            ))}
          </div>
        </section>

        {/* --- FAQ SECTION (Fixed Red Lines) --- */}
        <section style={{ maxWidth: '850px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '32px', fontWeight: '800' }}>Common Questions</h2>
          {faqs.map((f, i) => (
            <div key={i} style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '20px', marginBottom: '12px', overflow: 'hidden' }}>
              <div 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                style={{ width: '100%', padding: '25px 30px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span style={{ fontWeight: '800', fontSize: '18px', color: activeFaq === i ? '#10B981' : 'white' }}>{f.q}</span>
                <span style={{ fontSize: '24px', color: '#64748B' }}>{activeFaq === i ? '−' : '+'}</span>
              </div>
              {activeFaq === i && (
                <div style={{ padding: '0 30px 25px', color: '#94A3B8', fontSize: '16px', lineHeight: '1.6' }}>
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}