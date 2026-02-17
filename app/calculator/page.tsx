"use client";
import React, { useState, useEffect, useCallback } from 'react';

// --- TYPES FOR FIXING RED LINES ---
interface CountryCurrency {
  code: string;
  name: string;
  flag: string;
}

interface ExchangeResponse {
  conversion_rate: number;
  result: string;
}

export default function AdvancedCalculator() {
  const [amount, setAmount] = useState<number>(1000);
  const [fromCurrency, setFromCurrency] = useState<string>("SAR");
  const [toCurrency, setToCurrency] = useState<string>("PKR");
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const API_KEY = '0dfe1f9efbc26627f2809000';

  const countries: CountryCurrency[] = [
    { name: "Saudi Arabia", code: "SAR", flag: "🇸🇦" },
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

  const fetchRate = useCallback(async () => {
    try {
      const res = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`);
      const data: ExchangeResponse = await res.json();
      if (data && data.conversion_rate) {
        setExchangeRate(data.conversion_rate);
        setIsLoaded(true);
      }
    } catch (err) {
      console.error("Calculator Fetch Error", err);
    }
  }, [fromCurrency, toCurrency, API_KEY]);

  useEffect(() => {
    fetchRate();
  }, [fetchRate]);

  return (
    <div style={{ backgroundColor: '#020617', color: '#F8FAFC', minHeight: '100vh', padding: '40px 20px' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div style={{ fontSize: 'clamp(28px, 6vw, 42px)', fontWeight: '950' }}>
          Smart <span style={{ color: '#10B981' }}>Financial</span> Calculator
        </div>
        <div style={{ color: '#94A3B8', marginTop: '10px' }}>Convert between 12 major currencies with live market data</div>
      </div>

      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Ad Space */}
        <div style={{ height: '90px', background: '#0F172A', border: '1px dashed #334155', borderRadius: '15px', marginBottom: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#64748B' }}>
          ADVERTISEMENT SPACE (TOP)
        </div>

        {/* Calculator Box */}
        <section style={{ background: '#0F172A', padding: '40px', borderRadius: '35px', border: '1px solid #1E293B', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
          <div style={{ display: 'grid', gap: '25px' }}>
            
            {/* Input */}
            <div>
              <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '800', marginBottom: '8px' }}>AMOUNT TO CONVERT</div>
              <input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(Number(e.target.value))}
                style={{ width: '100%', background: '#020617', border: '1px solid #334155', padding: '20px', borderRadius: '15px', color: 'white', fontSize: '28px', fontWeight: '900', outline: 'none' }}
              />
            </div>

            {/* Selectors */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 50px 1fr', gap: '15px', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '800' }}>FROM</div>
                <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} style={{ width: '100%', background: '#020617', border: '1px solid #334155', padding: '15px', borderRadius: '12px', color: 'white', fontWeight: 'bold', marginTop: '5px', cursor: 'pointer' }}>
                  {countries.map((c) => <option key={c.code} value={c.code}>{c.flag} {c.code}</option>)}
                </select>
              </div>
              
              <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '20px', color: '#10B981' }}>⇄</div>

              <div>
                <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '800' }}>TO</div>
                <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} style={{ width: '100%', background: '#020617', border: '1px solid #334155', padding: '15px', borderRadius: '12px', color: 'white', fontWeight: 'bold', marginTop: '5px', cursor: 'pointer' }}>
                  {countries.map((c) => <option key={c.code} value={c.code}>{c.flag} {c.code}</option>)}
                </select>
              </div>
            </div>

            {/* Result Display */}
            <div style={{ background: 'rgba(16, 185, 129, 0.05)', padding: '30px', borderRadius: '25px', border: '1px solid rgba(16, 185, 129, 0.2)', textAlign: 'center' }}>
              <div style={{ fontSize: '14px', color: '#10B981', fontWeight: '800' }}>CONVERTED TOTAL</div>
              <div style={{ fontSize: '42px', fontWeight: '950', marginTop: '10px' }}>
                {isLoaded ? (amount * exchangeRate).toLocaleString(undefined, {maximumFractionDigits: 2}) : "---"}
                <span style={{ fontSize: '18px', marginLeft: '10px', color: '#94A3B8' }}>{toCurrency}</span>
              </div>
              <div style={{ fontSize: '12px', color: '#64748B', marginTop: '10px' }}>
                Rate: 1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
              </div>
            </div>
          </div>
        </section>

        {/* SEO SECTION */}
        <section style={{ marginTop: '60px', borderTop: '1px solid #1E293B', paddingTop: '40px' }}>
          <div style={{ fontSize: '22px', fontWeight: '800', marginBottom: '20px', color: '#10B981' }}>
            International Currency Converter for Remittance
          </div>
          <p style={{ color: '#94A3B8', lineHeight: '1.7', fontSize: '15px' }}>
            Planning to send money to Pakistan, India, or Egypt? Our smart calculator provides 
            real-time mid-market rates for Saudi Riyal (SAR) and 12 other global currencies. 
            Compare accurately before you transfer through banks or digital apps like UrPay 
            and STC Pay.
          </p>
        </section>

        {/* Bottom Ad Space */}
        <div style={{ height: '250px', background: '#0F172A', border: '1px dashed #334155', borderRadius: '15px', marginTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#64748B' }}>
          ADVERTISEMENT SPACE (BOTTOM)
        </div>

      </main>
    </div>
  );
}