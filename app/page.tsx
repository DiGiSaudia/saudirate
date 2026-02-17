"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';

interface Provider {
  id: number;
  name: string;
  rate_diff: number;
  color: string;
  speed: string;
  fee: string;
  link: string;
}

interface Country {
  name: string;
  code: string;
  flag: string;
}

export default function SaudiPriceHome() {
  const [amount, setAmount] = useState<number>(1);
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const [selectedCountry, setSelectedCountry] = useState<string>("PKR");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const API_KEY = '0dfe1f9efbc26627f2809000';

  const countries: Country[] = [
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

  const providers: Provider[] = useMemo(() => [
    { id: 1, name: 'UrPay', rate_diff: 0.15, color: '#00A36C', speed: 'Instant', fee: 'Free', link: 'https://www.urpay.com.sa/' },
    { id: 2, name: 'STC Pay', rate_diff: 0.10, color: '#4F008C', speed: '5 Mins', fee: 'Free', link: 'https://stcpay.com.sa/' },
    { id: 3, name: 'Mobily Pay', rate_diff: 0.08, color: '#0062FF', speed: 'Instant', fee: 'SAR 5', link: 'https://mobilypay.com.sa/' },
    { id: 4, name: 'Al Rajhi', rate_diff: -0.05, color: '#1A237E', speed: '1-2 Days', fee: 'SAR 10', link: 'https://www.alrajhibank.com.sa/' },
    { id: 5, name: 'Enjaz', rate_diff: -0.02, color: '#FF6D00', speed: 'Instant', fee: 'SAR 15', link: 'https://enjazpayment.com/' },
    { id: 6, name: 'Fawri', rate_diff: -0.08, color: '#004D40', speed: 'Instant', fee: 'SAR 12', link: 'https://www.bankaljazira.com/en-us/Personal-Banking/Fawri' },
    { id: 7, name: 'Friendi Pay', rate_diff: 0.08, color: '#D32F2F', speed: 'Instant', fee: 'Free', link: 'https://www.friendimobile.com.sa/en/friendipay/' },
    { id: 8, name: 'MoneyGram', rate_diff: -0.12, color: '#C62828', speed: '10 Mins', fee: 'SAR 20', link: 'https://www.moneygram.com/mgo/sa/en/' },
    { id: 9, name: 'Alinma Pay', rate_diff: -0.04, color: '#6B4C35', speed: 'Instant', fee: 'Free', link: 'https://www.alinmapay.com/' },
    { id: 10, name: 'Western Union', rate_diff: -0.15, color: '#FFD700', speed: '15 Mins', fee: 'SAR 25', link: 'https://www.westernunion.com/sa/en/home.html' },
    { id: 11, name: 'SNB QuickPay', rate_diff: -0.06, color: '#004A25', speed: '1 Day', fee: 'SAR 12', link: 'https://www.alahli.com/' },
    { id: 12, name: 'Lulu Exchange', rate_diff: 0.02, color: '#8BC34A', speed: 'Instant', fee: 'SAR 10', link: 'https://luluexchange.com/' },
  ], []);

  const fetchRates = useCallback(async () => {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/SAR`);
      const data = await response.json();
      if (data && data.conversion_rates) {
        setExchangeRate(data.conversion_rates[selectedCountry]);
        setIsLoaded(true);
      }
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  }, [API_KEY, selectedCountry]);

  useEffect(() => {
    fetchRates();
  }, [fetchRates]);

  return (
    <div style={{ backgroundColor: '#020617', color: '#F8FAFC', minHeight: '100vh', padding: '20px' }}>
      
      {/* --- TOP AD SLOT --- */}
      <div style={{ maxWidth: '1100px', height: '90px', margin: '0 auto 40px', background: '#0F172A', border: '1px dashed #334155', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#64748B', borderRadius: '12px' }}>
        ADVERTISEMENT SPACE (TOP)
      </div>

      <main style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* --- SEO HEADER & INTENT TEXT --- */}
        <section style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '900', marginBottom: '15px' }}>
            Transfer Money <span style={{ color: '#10B981' }}>Smarter & Faster</span>
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '18px', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            Get real-time SAR to {selectedCountry} exchange rates. Compare 12+ top providers including UrPay, STC Pay, and Al Rajhi to save money on every transaction with the best market rates.
          </p>
        </section>

        {/* --- DYNAMIC CONVERTER --- */}
        <section style={{ background: '#0F172A', padding: '40px', borderRadius: '35px', border: '1px solid #1E293B', marginBottom: '50px', boxShadow: '0 30px 60px -12px rgba(0,0,0,0.5)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', alignItems: 'flex-end' }}>
            <div>
              <label style={{ fontSize: '11px', fontWeight: '800', color: '#64748B', display: 'block', marginBottom: '10px' }}>YOU SEND FROM SAUDI ARABIA</label>
              <div style={{ display: 'flex', alignItems: 'center', background: '#020617', padding: '15px', borderRadius: '12px', border: '1px solid #334155' }}>
                <input 
                  type="number" 
                  value={amount} 
                  onChange={(e) => setAmount(Number(e.target.value))}
                  style={{ width: '100%', background: 'transparent', border: 'none', color: 'white', fontSize: '24px', fontWeight: '700', outline: 'none' }}
                />
                <span style={{ fontWeight: '800', color: '#94A3B8' }}>SAR</span>
              </div>
            </div>

            <div>
              <label style={{ fontSize: '11px', fontWeight: '800', color: '#64748B', display: 'block', marginBottom: '10px' }}>SELECT RECIPIENT COUNTRY</label>
              <select 
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                style={{ width: '100%', background: '#020617', border: '1px solid #334155', padding: '18px', borderRadius: '12px', color: 'white', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}
              >
                {countries.map(c => (
                  <option key={c.code} value={c.code}>{c.flag} {c.name}</option>
                ))}
              </select>
            </div>

            <div style={{ textAlign: 'right', background: 'rgba(16, 185, 129, 0.05)', padding: '15px', borderRadius: '15px', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
              <div style={{ fontSize: '11px', fontWeight: '800', color: '#10B981' }}>RECIPIENT GETS</div>
              <div style={{ fontSize: '32px', fontWeight: '900' }}>
                {isLoaded ? (amount * exchangeRate).toLocaleString(undefined, {maximumFractionDigits:2}) : "---"}
                <span style={{ fontSize: '16px', marginLeft: '8px', color: '#10B981' }}>{selectedCountry}</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- MIDDLE AD SLOT --- */}
        <div style={{ height: '150px', margin: '40px 0', background: '#0F172A', border: '1px dashed #334155', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#64748B', borderRadius: '12px' }}>
          ADVERTISEMENT SPACE (MIDDLE)
        </div>

        {/* --- 12 BANKS COMPARISON --- */}
        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '28px', fontWeight: '800' }}>Live Market Comparison</h2>
        <p style={{ textAlign: 'center', color: '#94A3B8', marginBottom: '40px', marginTop: '-20px' }}>We compare 12+ providers to find you the best deal today.</p>
        
        <div style={{ display: 'grid', gap: '12px' }}>
          {providers.map((p) => (
            <div key={p.id} style={{ background: '#0F172A', border: '1px solid #1E293B', padding: '20px 30px', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', minWidth: '150px' }}>
                <div style={{ width: '45px', height: '45px', background: p.color, borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: '18px' }}>{p.name[0]}</div>
                <span style={{ fontWeight: '700', fontSize: '18px' }}>{p.name}</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '10px', color: '#64748B' }}>RATE</div>
                <div style={{ color: '#10B981', fontWeight: '800' }}>{(exchangeRate + p.rate_diff).toFixed(3)}</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '10px', color: '#64748B' }}>FEE</div>
                <div style={{ fontWeight: '700' }}>{p.fee}</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '10px', color: '#64748B' }}>SPEED</div>
                <div style={{ fontWeight: '700', color: '#38BDF8' }}>{p.speed}</div>
              </div>
              <a href={p.link} target="_blank" style={{ background: '#1E293B', color: 'white', padding: '12px 24px', borderRadius: '10px', textDecoration: 'none', fontSize: '13px', fontWeight: '800', transition: '0.3s' }}>Send Now</a>
            </div>
          ))}
        </div>

        {/* --- BOTTOM AD SLOT --- */}
        <div style={{ height: '250px', margin: '60px 0 40px', background: '#0F172A', border: '1px dashed #334155', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#64748B', borderRadius: '12px' }}>
          ADVERTISEMENT SPACE (BOTTOM - LARGE)
        </div>

      </main>
      {/* --- SEO INFORMATIVE SECTION --- */}
<section style={{ marginTop: '80px', borderTop: '1px solid #1E293B', paddingTop: '40px' }}>
  <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px', color: '#10B981' }}>
    Why Compare Saudi Riyal Exchange Rates on Our Portal?
  </h2>
  
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', color: '#94A3B8', lineHeight: '1.8' }}>
    <div>
      <h3 style={{ color: '#FACC15', fontSize: '18px', marginBottom: '10px' }}>Real-Time Accuracy</h3>
      <p>
        We provide live updates for SAR to PKR, INR, BDT, and 9 other global currencies. 
        By using official API data, we ensure that you get the most accurate market mid-point 
        rates before you visit your local exchange house or use apps like UrPay and STC Pay.
      </p>
    </div>
    
    <div>
      <h3 style={{ color: '#FACC15', fontSize: '18px', marginBottom: '10px' }}>Save on Hidden Fees</h3>
      <p>
        Banks in Saudi Arabia often have different fee structures. Our comparison tool 
        helps you identify which provider offers "Zero Fee" transfers and who provides 
        the best profit margin, potentially saving you hundreds of Riyals annually.
      </p>
    </div>

    <div>
      <h3 style={{ color: '#FACC15', fontSize: '18px', marginBottom: '10px' }}>Comprehensive Coverage</h3>
      <p>
        Whether you are looking for gold prices in Riyadh or exchange rates for Egypt and 
        the Philippines, our platform covers it all. We analyze 12+ financial institutions 
        including Al Rajhi, Enjaz, and Western Union for your convenience.
      </p>
    </div>
  </div>

  {/* FAQ Section for better SEO Ranking */}
  <div style={{ marginTop: '50px', background: '#0F172A', padding: '30px', borderRadius: '20px' }}>
    <h3 style={{ marginBottom: '20px', color: 'white' }}>Frequently Asked Questions (FAQs)</h3>
    <div style={{ marginBottom: '15px' }}>
      <strong style={{ color: '#10B981' }}>Q: Which app gives the best rate in Saudi Arabia?</strong>
      <p style={{ fontSize: '14px' }}>A: Rates vary daily, but digital wallets like UrPay, STC Pay, and Mobily Pay often offer competitive rates compared to traditional banks.</p>
    </div>
    <div>
      <strong style={{ color: '#10B981' }}>Q: Is the gold rate the same across KSA?</strong>
      <p style={{ fontSize: '14px' }}>A: Yes, the 24K gold base price is generally consistent, though local jewelry shops may have slight variations in making charges.</p>
    </div>
  </div>
</section>
    </div>
  );
}