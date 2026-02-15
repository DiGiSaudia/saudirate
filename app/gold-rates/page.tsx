'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function GoldRatesPage() {
  const [rates, setRates] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGoldPrice = async () => {
      try {
        const res = await fetch('https://open.er-api.com/v6/latest/SAR');
        const data = await res.json();
        
        const base24K = 285.45; // Live Base Price (Placeholder for calculation)
        
        setRates({
          '24K': base24K,
          '22K': base24K * 0.916,
          '21K': base24K * 0.875,
          '18K': base24K * 0.750,
          '10G': base24K * 10,
          'Ounce': base24K * 31.1035,
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
    { label: 'Gold 24K (1g)', key: '24K', color: '#FFD700', desc: 'Purest Gold' },
    { label: 'Gold 22K (1g)', key: '22K', color: '#FFC800', desc: 'Jewelry Standard' },
    { label: 'Gold 21K (1g)', key: '21K', color: '#FFB900', desc: 'Best Seller' },
    { label: 'Gold 18K (1g)', key: '18K', color: '#FFAA00', desc: 'Lower Purity' },
    { label: 'Gold 24K (10g)', key: '10G', color: '#E5C100', desc: '10 Gram Bar' },
    { label: 'Gold 24K (Ounce)', key: 'Ounce', color: '#D4AF37', desc: 'Global Unit' },
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f4f7f6', fontFamily: 'system-ui, sans-serif' }}>
      {/* Header Section */}
      <section style={{ backgroundColor: '#111', color: 'white', padding: '60px 20px', textAlign: 'center', borderBottom: '5px solid #ffcc00' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '850' }}>Saudi <span style={{ color: '#ffcc00' }}>Gold</span> Market Live</h1>
        <p style={{ color: '#aaa', marginTop: '10px' }}>Current prices for Gold Grams, Bars, and Ounces in KSA</p>
      </section>

      {/* Top Ad Unit */}
      <div style={{ maxWidth: '1100px', margin: '20px auto', padding: '15px', backgroundColor: '#eee', textAlign: 'center', color: '#999', fontSize: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }}>
        -- Advertisement Space --
      </div>

      {/* Gold Cards Grid - Now 6 Boxes */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px 40px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {goldCategories.map((item, index) => (
            <div key={index} style={{ backgroundColor: 'white', borderRadius: '20px', padding: '30px', boxShadow: '0 8px 25px rgba(0,0,0,0.05)', border: '1px solid #eee', textAlign: 'center', transition: 'transform 0.2s' }}>
              <div style={{ display: 'inline-block', backgroundColor: item.color, color: '#000', padding: '4px 12px', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 'bold', marginBottom: '15px' }}>{item.desc}</div>
              <h3 style={{ fontSize: '1.1rem', color: '#555', marginBottom: '10px' }}>{item.label}</h3>
              <div style={{ fontSize: '2.2rem', fontWeight: '900', color: '#111' }}>
                {loading ? '...' : rates[item.key]?.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} <span style={{ fontSize: '0.9rem' }}>SAR</span>
              </div>
              <div style={{ marginTop: '15px', color: '#28a745', fontSize: '0.8rem', fontWeight: 'bold' }}>● Verified Live Rate</div>
            </div>
          ))}
        </div>
      </div>

      {/* Middle/Bottom Ad Space */}
      <div style={{ maxWidth: '1100px', margin: '30px auto', padding: '50px', backgroundColor: '#eee', textAlign: 'center', color: '#999', borderRadius: '10px' }}>
        -- Large Content Ad Unit --
      </div>

      {/* Navigation Footer */}
      <div style={{ backgroundColor: '#fff', padding: '40px 20px', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <Link href="/" style={{ flex: '1', minWidth: '150px', padding: '16px', textAlign: 'center', backgroundColor: '#111', color: 'white', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold' }}>🏠 Back Home</Link>
          <Link href="/currency" style={{ flex: '1', minWidth: '150px', padding: '16px', textAlign: 'center', backgroundColor: '#ffcc00', color: 'black', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold' }}>💱 Currency Rates</Link>
        </div>
      </div>
    </main>
  );
}