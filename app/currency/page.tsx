"use client";
import React, { useState, useEffect, useCallback } from 'react';

interface ExchangeData {
  [key: string]: number;
}

export default function CurrencyHub() {
  const [amount, setAmount] = useState<number>(100);
  const [rates, setRates] = useState<ExchangeData>({});
  const [isLoaded, setIsLoaded] = useState(false);
  
  const API_KEY = '0dfe1f9efbc26627f2809000';

  const countries = [
    { name: "Pakistan", code: "PKR", flag: "🇵🇰" },
    { name: "India", code: "INR", flag: "🇮🇳" },
    { name: "Bangladesh", code: "BDT", flag: "🇧🇩" },
    { name: "Philippines", code: "PHP", flag: "🇵🇭" },
    { name: "Egypt", code: "EGP", flag: "🇪🇬" },
    { name: "Nepal", code: "NPR", flag: "🇳🇵" },
    { name: "Sri Lanka", code: "LKR", flag: "🇱🇰" },
    { name: "USA", code: "USD", flag: "🇺🇸" },
    { name: "UK", code: "GBP", flag: "🇬🇧" },
    { name: "Europe", code: "EUR", flag: "🇪🇺" },
    { name: "UAE", code: "AED", flag: "🇦🇪" },
    { name: "Turkey", code: "TRY", flag: "🇹🇷" },
  ];

  const fetchAllRates = useCallback(async () => {
    try {
      const res = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/SAR`);
      const data = await res.json();
      if (data && data.conversion_rates) {
        setRates(data.conversion_rates);
        setIsLoaded(true);
      }
    } catch (err) {
      console.error("Currency Fetch Error", err);
    }
  }, [API_KEY]);

  useEffect(() => {
    fetchAllRates();
  }, [fetchAllRates]);

  return (
    <div style={{ backgroundColor: '#020617', color: '#F8FAFC', minHeight: '100vh', padding: '40px 20px' }}>
      
      {/* Page Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: 'clamp(28px, 6vw, 44px)', fontWeight: '950' }}>
          Global <span style={{ color: '#10B981' }}>Currency</span> Hub
        </h1>
        <p style={{ color: '#94A3B8', marginTop: '10px', fontSize: '18px' }}>Live SAR Exchange Rates for 12 Major Countries</p>
      </div>

      <main style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Main Converter Box */}
        <section style={{ background: '#0F172A', padding: '40px', borderRadius: '35px', border: '1px solid #1E293B', marginBottom: '60px', textAlign: 'center' }}>
          <label style={{ fontSize: '12px', color: '#64748B', fontWeight: '800', letterSpacing: '1px' }}>ENTER AMOUNT IN SAUDI RIYAL</label>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginTop: '15px' }}>
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(Number(e.target.value))}
              style={{ background: '#020617', border: '2px solid #10B981', padding: '15px 25px', borderRadius: '15px', color: 'white', fontSize: '32px', fontWeight: '900', width: '200px', textAlign: 'center', outline: 'none' }}
            />
            <span style={{ fontSize: '24px', fontWeight: '900', color: '#10B981' }}>SAR</span>
          </div>
        </section>

        {/* Currency Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {countries.map((c) => (
            <div key={c.code} style={{ background: '#0F172A', padding: '25px', borderRadius: '25px', border: '1px solid #1E293B', transition: '0.3s', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>{c.flag}</div>
              <div style={{ fontWeight: '800', fontSize: '18px', color: '#94A3B8' }}>{c.name}</div>
              <div style={{ fontSize: '12px', color: '#64748B', marginBottom: '15px' }}>1 SAR = {rates[c.code] ? rates[c.code].toFixed(2) : "---"} {c.code}</div>
              
              <div style={{ height: '1px', width: '100%', background: '#1E293B', marginBottom: '15px' }}></div>
              
              <div style={{ fontSize: '24px', fontWeight: '900', color: '#10B981' }}>
                {isLoaded ? (amount * rates[c.code]).toLocaleString(undefined, {maximumFractionDigits: 2}) : "---"}
                <span style={{ fontSize: '12px', marginLeft: '5px', color: 'white' }}>{c.code}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Ad Space */}
        <div style={{ marginTop: '60px', height: '200px', background: '#0F172A', border: '1px dashed #334155', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#64748B' }}>
          ADVERTISEMENT SPACE
        </div>

      </main>
      {/* --- SEO CURRENCY INFORMATIVE SECTION --- */}
        <section style={{ marginTop: '80px', borderTop: '1px solid #1E293B', paddingTop: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px', color: '#10B981' }}>
            International Money Transfer from Saudi Arabia
          </h2>
          <p style={{ color: '#94A3B8', marginBottom: '30px' }}>
            Sending money home shouldn't be expensive. Compare the latest Saudi Riyal (SAR) exchange 
            rates for 12 major corridors including Pakistan, India, Egypt, and the Philippines.
          </p>
          
          {/* Quick Tips */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#020617', padding: '20px', borderRadius: '15px', border: '1px solid #1E293B' }}>
              <h4 style={{ color: '#38BDF8' }}>Exchange Rate vs. Fee</h4>
              <p style={{ fontSize: '13px', color: '#64748B' }}>Sometimes a "Low Fee" means a "Lower Rate". Always look at the total amount the recipient gets.</p>
            </div>
            <div style={{ background: '#020617', padding: '20px', borderRadius: '15px', border: '1px solid #1E293B' }}>
              <h4 style={{ color: '#38BDF8' }}>Digital Advantage</h4>
              <p style={{ fontSize: '13px', color: '#64748B' }}>Wallets like STC Pay and UrPay usually provide better rates than traditional physical exchange houses.</p>
            </div>
          </div>
        </section>
    </div>
  );
}