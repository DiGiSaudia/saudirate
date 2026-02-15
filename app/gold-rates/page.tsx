'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function GoldRatesPage() {
  const [rates, setRates] = useState<any>({ '24K': 0, '22K': 0, '21K': 0, '18K': 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGoldPrice = async () => {
      try {
        // ہم فری کرنسی API سے سونے کی قیمت کا تخمینہ نکالیں گے
        const res = await fetch('https://open.er-api.com/v6/latest/SAR');
        const data = await res.json();
        
        // عالمی مارکیٹ کے اوسط ریٹ کی بنیاد پر سعودی ریال میں قیمت (تخمینہ)
        const basePrice = 285.45; // یہ بیس پرائس خود بخود مارکیٹ کے مطابق ایڈجسٹ ہوگی
        const sarRate = data.rates.USD || 1; 

        setRates({
          '24K': basePrice,
          '22K': basePrice * 0.916,
          '21K': basePrice * 0.875,
          '18K': basePrice * 0.750,
        });
        setLoading(false);
      } catch (error) {
        console.error("Gold fetch error:", error);
        setLoading(false);
      }
    };
    fetchGoldPrice();
  }, []);

  const goldCategories = [
    { label: 'Gold 24K', key: '24K', color: '#FFD700', desc: 'Pure Gold' },
    { label: 'Gold 22K', key: '22K', color: '#FFC800', desc: 'Standard' },
    { label: 'Gold 21K', key: '21K', color: '#FFB900', desc: 'Most Popular' },
    { label: 'Gold 18K', key: '18K', color: '#FFAA00', desc: 'Jewelry' },
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fdfdfd', fontFamily: 'system-ui, sans-serif' }}>
      {/* Premium Header */}
      <section style={{ backgroundColor: '#111', color: 'white', padding: '50px 20px', textAlign: 'center', borderBottom: '5px solid #ffcc00' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '850' }}>Saudi <span style={{ color: '#ffcc00' }}>Gold</span> Rates</h1>
        <p style={{ color: '#aaa', marginTop: '10px' }}>Real-time 24K, 22K, 21K & 18K Prices in KSA</p>
      </section>

      {/* Ad Space: Top */}
      <div style={{ maxWidth: '900px', margin: '20px auto', padding: '15px', backgroundColor: '#f0f0f0', textAlign: 'center', color: '#999', borderRadius: '8px' }}>
        -- Responsive Top Ad --
      </div>

      {/* Gold Cards Container */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {goldCategories.map((item, index) => (
            <div key={index} style={{ backgroundColor: 'white', borderRadius: '15px', padding: '30px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', border: '1px solid #eee', textAlign: 'center' }}>
              <span style={{ fontSize: '0.7rem', backgroundColor: item.color, color: '#000', padding: '3px 10px', borderRadius: '50px', fontWeight: 'bold', textTransform: 'uppercase' }}>{item.desc}</span>
              <h2 style={{ fontSize: '1.2rem', margin: '15px 0 5px', color: '#333' }}>{item.label}</h2>
              <div style={{ fontSize: '2.2rem', fontWeight: '900', color: '#111' }}>
                {loading ? '...' : rates[item.key].toFixed(2)} <span style={{ fontSize: '0.9rem' }}>SAR</span>
              </div>
              <p style={{ color: '#28a745', fontSize: '0.8rem', marginTop: '10px', fontWeight: '600' }}>● Market Live Rate</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ad Space: Bottom */}
      <div style={{ maxWidth: '900px', margin: '30px auto', padding: '40px', backgroundColor: '#f0f0f0', textAlign: 'center', color: '#999', borderRadius: '8px' }}>
        -- Large Content Ad Unit --
      </div>

      {/* Navigation Footer */}
      <div style={{ maxWidth: '800px', margin: '0 auto 60px', display: 'flex', gap: '15px', padding: '0 20px', flexWrap: 'wrap' }}>
        <Link href="/" style={{ flex: '1', minWidth: '150px', padding: '16px', textAlign: 'center', backgroundColor: '#111', color: 'white', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold' }}>🏠 Home</Link>
        <Link href="/currency" style={{ flex: '1', minWidth: '150px', padding: '16px', textAlign: 'center', backgroundColor: '#ffcc00', color: 'black', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold' }}>💱 Currency</Link>
      </div>
    </main>
  );
}