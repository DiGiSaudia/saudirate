'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CurrencyPage() {
  const [rates, setRates] = useState<any>({});
  const [loading, setLoading] = useState(true);

  // آج کی تاریخ ڈائنامک رکھنے کے لیے (SEO کے لیے بہترین)
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // آپ کی پرانی 12 ممالک کی لسٹ (محفوظ ہے)
  const countries = [
    { pair: 'SAR to PKR', code: 'PK', name: 'Pakistan', target: 'PKR' },
    { pair: 'SAR to INR', code: 'IN', name: 'India', target: 'INR' },
    { pair: 'SAR to BDT', code: 'BD', name: 'Bangladesh', target: 'BDT' },
    { pair: 'SAR to PHP', code: 'PH', name: 'Philippines', target: 'PHP' },
    { pair: 'SAR to EGP', code: 'EG', name: 'Egypt', target: 'EGP' },
    { pair: 'SAR to NPR', code: 'NP', name: 'Nepal', target: 'NPR' },
    { pair: 'SAR to LKR', code: 'LK', name: 'Sri Lanka', target: 'LKR' },
    { pair: 'SAR to USD', code: 'US', name: 'USA', target: 'USD' },
    { pair: 'SAR to EUR', code: 'EU', name: 'Europe', target: 'EUR' },
    { pair: 'SAR to GBP', code: 'GB', name: 'UK', target: 'GBP' },
    { pair: 'SAR to AED', code: 'AE', name: 'UAE', target: 'AED' },
    { pair: 'SAR to TRY', code: 'TR', name: 'Turkey', target: 'TRY' },
  ];

  // آپ کا پرانا API Fetching طریقہ (محفوظ ہے)
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch('https://open.er-api.com/v6/latest/SAR');
        const data = await res.json();
        setRates(data.rates);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching rates:", error);
      }
    };
    fetchRates();
  }, []);

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* SEO Optimized Header */}
      <section style={{ backgroundColor: '#111', color: 'white', padding: '60px 20px', textAlign: 'center', borderBottom: '5px solid #ffcc00' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '850' }}>
          Currency Exchange Rate in Saudi Arabia Today: <span style={{ color: '#ffcc00' }}>{today}</span>
        </h1>
        <p style={{ color: '#aaa', marginTop: '10px', maxWidth: '800px', margin: '10px auto' }}>
          Get the latest **SAR to PKR today live rate**, INR, BDT, and PHP updates. Track the best exchange rates in KSA daily for 12 major countries.
        </p>
      </section>

      {/* Top Ad Unit */}
      <div style={{ maxWidth: '1100px', margin: '20px auto', padding: '15px', backgroundColor: '#eee', textAlign: 'center', color: '#999', borderRadius: '8px' }}>
        -- Display Ad Space --
      </div>

      {/* Currency Grid Boxes */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px 20px 60px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {countries.map((item, index) => (
            <div key={index} style={{ backgroundColor: 'white', borderRadius: '15px', padding: '25px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', border: '1px solid #eee', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '15px', right: '15px' }}>
                <img 
                  src={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png`} 
                  alt={item.name}
                  style={{ width: '35px', borderRadius: '4px' }}
                />
              </div>
              <h3 style={{ fontSize: '0.9rem', color: '#777', marginBottom: '5px' }}>{item.pair}</h3>
              <div style={{ fontSize: '2.2rem', fontWeight: '850', color: '#111', margin: '10px 0' }}>
                {loading ? '...' : (rates[item.target] ? rates[item.target].toFixed(2) : 'N/A')}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#28a745', fontSize: '0.85rem', fontWeight: '600' }}>
                <span style={{ width: '8px', height: '8px', backgroundColor: '#28a745', borderRadius: '50%' }}></span>
                {loading ? 'Connecting...' : `Live Rate: ${today}`}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SEO ARTICLE SECTION - Plagiarism-Free & Keyword Optimized */}
      <div style={{ maxWidth: '850px', margin: '0 auto 60px', padding: '30px', backgroundColor: 'white', borderRadius: '15px', border: '1px solid #ddd', lineHeight: '1.8' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#111', marginBottom: '20px', fontWeight: 'bold' }}>
          Best Exchange Rate in Saudi Arabia: Live SAR Updates
        </h2>
        
        <p style={{ marginBottom: '15px', color: '#444' }}>
          Finding the **best exchange rate in Saudi Arabia** is a top priority for expatriates. Whether you need the **SAR to PKR today live rate** for Pakistan or **SAR to INR** for India, staying updated with **real-time currency updates in KSA** ensures you get the most value for your money.
        </p>

        <h3 style={{ fontSize: '1.4rem', color: '#111', marginTop: '20px', marginBottom: '10px' }}>Why Do Saudi Riyal Exchange Rates Change?</h3>
        <p style={{ marginBottom: '15px', color: '#444' }}>
          The **currency exchange rate in KSA** is influenced by global economic shifts and the performance of the US Dollar. Since the Saudi Riyal is pegged to the USD, tracking the **live SAR exchange rate** on <strong>saudirate.com</strong> helps you choose the perfect time for your remittances.
        </p>

        <h3 style={{ fontSize: '1.4rem', color: '#111', marginTop: '20px', marginBottom: '10px' }}>Reliable Remittance Updates</h3>
        <p style={{ color: '#444' }}>
          At <strong>saudirate.com</strong>, we provide accurate **today's currency rate in Saudi Arabia** for all major Asian and Western currencies. Our real-time data combined with SEO-friendly content makes us your trusted financial guide in the Kingdom.
        </p>
      </div>

      {/* Bottom Nav Buttons */}
      <div style={{ maxWidth: '800px', margin: '0 auto 40px', display: 'flex', gap: '15px', padding: '0 20px', flexWrap: 'wrap' }}>
        <Link href="/" style={{ flex: '1', minWidth: '150px', padding: '16px', textAlign: 'center', backgroundColor: '#111', color: 'white', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold' }}>🏠 Home</Link>
        <Link href="/gold-rates" style={{ flex: '1', minWidth: '150px', padding: '16px', textAlign: 'center', backgroundColor: '#ffcc00', color: 'black', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold' }}>💰 Gold Rates</Link>
      </div>

    </main>
  );
}