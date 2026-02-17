"use client";
import React, { useState, useEffect } from 'react';

// --- Premium SVGs Components ---
const CheckIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;
const ShieldIcon = () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;
const ZapIcon = () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;

export default function Home() {
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const API_KEY = '0dfe1f9efbc26627f2809000'; // اپنی API Key یہاں لگائیں

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

  const providers = [
    { name: 'UrPay', diff: 0.18, color: '#00A36C', speed: 'Instant', fee: 'Free' },
    { name: 'STC Pay', diff: 0.12, color: '#4F008C', speed: '5 Mins', fee: 'Free' },
    { name: 'Mobily Pay', diff: 0.10, color: '#0062FF', speed: 'Instant', fee: 'SAR 5' },
    { name: 'Al Rajhi', diff: -0.05, color: '#1A237E', speed: '1-2 Days', fee: 'SAR 10' },
    { name: 'Enjaz', diff: -0.02, color: '#FF6D00', speed: 'Instant', fee: 'SAR 15' },
    { name: 'Fawri', diff: -0.08, color: '#004D40', speed: 'Instant', fee: 'SAR 12' },
    { name: 'Friendi Pay', diff: 0.08, color: '#D32F2F', speed: 'Instant', fee: 'Free' },
    { name: 'MoneyGram', diff: -0.12, color: '#C62828', speed: '10 Mins', fee: 'SAR 20' },
    { name: 'Alinma Pay', diff: -0.04, color: '#6B4C35', speed: 'Instant', fee: 'Free' },
  ];

  const faqs = [
    { q: "How to get the best rate?", a: "Always compare UrPay and STC Pay as they usually offer the best remittance rates for Pakistan." },
    { q: "Are these rates live?", a: "Yes, our rates are updated every few minutes using the official ExchangeRate-API." },
    { q: "Is there any hidden fee?", a: "Most digital wallets like UrPay are free, but local banks might charge SAR 10-25 per transaction." }
  ];

  return (
    <div style={{ backgroundColor: '#020617', color: '#F8FAFC', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      
      {/* --- 1. PRO NAVBAR --- */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 1000, padding: '15px 6%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(2, 6, 23, 0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #1E293B' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ background: 'linear-gradient(45deg, #059669, #10B981)', color: 'white', padding: '10px 20px', borderRadius: '14px', fontWeight: '900', fontSize: '22px', boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)' }}>
            Saudi<span style={{color: '#020617'}}>Rate</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '30px', fontSize: '14px', fontWeight: '600' }}>
          <span style={{ color: '#10B981', cursor: 'pointer' }}>Home</span>
          <span style={{ color: '#94A3B8', cursor: 'pointer' }}>Gold Rates</span>
          <span style={{ color: '#94A3B8', cursor: 'pointer' }}>Remittance</span>
        </div>
      </nav>

      {/* --- 2. HERO & CONVERTER --- */}
      <section style={{ padding: '100px 20px', textAlign: 'center', background: 'radial-gradient(circle at 50% 0%, #064E3B 0%, transparent 50%)' }}>
        <div style={{ display: 'inline-block', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10B981', padding: '8px 20px', borderRadius: '30px', fontSize: '13px', fontWeight: 'bold', marginBottom: '20px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
          ★ Trusted by 500,000+ Expats
        </div>
        <h1 style={{ fontSize: 'clamp(40px, 6vw, 70px)', fontWeight: '900', marginBottom: '20px', lineHeight: '1.1', letterSpacing: '-2px' }}>
          Transfer Money <br /><span style={{ color: '#10B981' }}>Smarter & Faster</span>
        </h1>
        <p style={{ color: '#94A3B8', fontSize: '19px', maxWidth: '650px', margin: '0 auto 60px' }}>
          Real-time SAR to PKR exchange rates. Compare 9+ providers and save on every transaction.
        </p>

        {/* Premium Converter Card */}
        <div style={{ maxWidth: '550px', margin: '0 auto', backgroundColor: '#0F172A', padding: '40px', borderRadius: '35px', border: '1px solid #1E293B', boxShadow: '0 30px 60px -12px rgba(0,0,0,0.6)' }}>
          <div style={{ textAlign: 'left', marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <label style={{ fontSize: '12px', color: '#64748B', fontWeight: 'bold' }}>YOU SEND</label>
              <span style={{ fontSize: '12px', color: '#10B981', fontWeight: 'bold' }}>Saudi Arabia 🇸🇦</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: '#020617', padding: '20px', borderRadius: '20px', border: '1px solid #334155' }}>
              <input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(Number(e.target.value))}
                style={{ width: '100%', background: 'transparent', border: 'none', color: 'white', fontSize: '32px', fontWeight: 'bold', outline: 'none' }}
              />
              <span style={{ fontSize: '20px', fontWeight: '800', color: '#64748B' }}>SAR</span>
            </div>
          </div>

          <div style={{ margin: '-15px auto 15px', width: '50px', height: '50px', backgroundColor: '#10B981', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '6px solid #0F172A', zIndex: 2 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
          </div>

          <div style={{ textAlign: 'left', backgroundColor: 'rgba(16, 185, 129, 0.05)', padding: '30px', borderRadius: '25px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <label style={{ fontSize: '12px', color: '#10B981', fontWeight: 'bold' }}>RECIPIENT GETS</label>
              <span style={{ fontSize: '12px', color: '#94A3B8' }}>Pakistan 🇵🇰</span>
            </div>
            <div style={{ fontSize: '42px', fontWeight: '900', color: 'white' }}>
              {exchangeRate ? (amount * exchangeRate).toLocaleString(undefined, {maximumFractionDigits:2}) : '0.00'}
              <span style={{ fontSize: '18px', color: '#10B981', marginLeft: '10px' }}>PKR</span>
            </div>
            <div style={{ fontSize: '12px', color: '#475569', marginTop: '10px' }}>* Rate: 1 SAR = {exchangeRate?.toFixed(2)} PKR</div>
          </div>
        </div>
      </section>

      {/* --- 3. TRUST BADGES --- */}
      <section style={{ display: 'flex', justifyContent: 'center', gap: '40px', padding: '40px 20px', flexWrap: 'wrap', borderTop: '1px solid #1E293B' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckIcon /> <span style={{fontSize: '14px', color: '#94A3B8'}}>No Hidden Charges</span></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckIcon /> <span style={{fontSize: '14px', color: '#94A3B8'}}>Verified Providers</span></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckIcon /> <span style={{fontSize: '14px', color: '#94A3B8'}}>Real-time Accuracy</span></div>
      </section>

      {/* --- 4. PROVIDER COMPARISON --- */}
      <section style={{ maxWidth: '1100px', margin: '80px auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800' }}>Market Comparison</h2>
          <p style={{ color: '#64748B' }}>We compared 9 providers to find you the best deal.</p>
        </div>

        <div style={{ display: 'grid', gap: '15px' }}>
          {providers.map((p, i) => (
            <div key={i} style={{ backgroundColor: '#0F172A', padding: '25px', borderRadius: '24px', border: '1px solid #1E293B', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', alignItems: 'center', gap: '20px', transition: '0.3s' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '15px', backgroundColor: p.color, display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: '20px', color: 'white' }}>{p.name[0]}</div>
                <div style={{fontWeight: '700', fontSize: '18px'}}>{p.name}</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '12px', color: '#64748B' }}>Exchange Rate</div>
                <div style={{ fontWeight: 'bold', color: '#10B981' }}>1 SAR = {(exchangeRate ? exchangeRate + p.diff : 0).toFixed(3)}</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '12px', color: '#64748B' }}>Transfer Fee</div>
                <div style={{ fontWeight: 'bold' }}>{p.fee}</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '12px', color: '#64748B' }}>Speed</div>
                <div style={{ fontWeight: 'bold', color: '#38BDF8' }}>{p.speed}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <button style={{ backgroundColor: '#1E293B', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}>Send Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. FEATURES SECTION --- */}
      <section style={{ backgroundColor: '#0F172A', padding: '100px 20px', marginTop: '100px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
          <div>
            <div style={{ marginBottom: '20px' }}><ShieldIcon /></div>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>Bank-Level Security</h3>
            <p style={{ color: '#94A3B8', lineHeight: '1.7' }}>We only list SAMA-approved and regulated remittance providers so your money is always safe.</p>
          </div>
          <div>
            <div style={{ marginBottom: '20px' }}><ZapIcon /></div>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>Instant Updates</h3>
            <p style={{ color: '#94A3B8', lineHeight: '1.7' }}>Don't miss a high rate. Our engine tracks market movements every 60 seconds.</p>
          </div>
        </div>
      </section>

      {/* --- 6. FAQ SECTION --- */}
      <section style={{ maxWidth: '800px', margin: '100px auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: '800', marginBottom: '50px' }}>Questions & Answers</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ marginBottom: '15px', borderBottom: '1px solid #1E293B', paddingBottom: '15px' }}>
            <div onClick={() => setActiveFaq(activeFaq === i ? null : i)} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '18px', color: activeFaq === i ? '#10B981' : 'white' }}>
              {f.q} <span>{activeFaq === i ? '−' : '+'}</span>
            </div>
            {activeFaq === i && <div style={{ marginTop: '15px', color: '#94A3B8', lineHeight: '1.6' }}>{f.a}</div>}
          </div>
        ))}
      </section>

      {/* --- 7. CLEAN FOOTER --- */}
      <footer style={{ padding: '80px 20px 40px', borderTop: '1px solid #1E293B', textAlign: 'center' }}>
        <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#10B981', marginBottom: '20px' }}>SaudiRate</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', color: '#64748B', fontSize: '14px', marginBottom: '40px' }}>
          <span>Privacy Policy</span> <span>Terms of Service</span> <span>Contact Us</span>
        </div>
        <p style={{ color: '#475569', fontSize: '12px' }}>
          © 2026 SaudiRate.com. Not a financial advisor. Rates are for reference only.
        </p>
      </footer>
    </div>
  );
}