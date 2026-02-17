"use client";
import React, { useState, useEffect, useCallback } from 'react';

export default function GoldRatesSaudi() {
  const [basePrice, setBasePrice] = useState<number>(285.50); 
  const [weight, setWeight] = useState<number>(1);
  const [unit, setUnit] = useState<string>("gram");

  // --- ٹائپس کو فکس کیا گیا ہے ---
  const units: Record<string, number> = {
    gram: 1,
    tola: 11.6638,
    ounce: 31.1035
  };

  const purities = [
    { label: "24K - Pure Gold", factor: 1.0, color: "#FACC15" },
    { label: "22K - Standard", factor: 0.9167, color: "#EAB308" },
    { label: "21K - Popular", factor: 0.875, color: "#CA8A04" },
    { label: "18K - Economy", factor: 0.75, color: "#A16207" }
  ];

  return (
    <div style={{ backgroundColor: '#020617', color: '#F8FAFC', minHeight: '100vh', padding: '40px 20px' }}>
      {/* --- GOLD RATE SCHEMA MARKUP (گوگل کے لیے) --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "SaudiRate Gold Portal",
            "description": "Live 24K, 22K, 21K, and 18K gold rates in Saudi Arabia.",
            "url": "https://saudirate.com/gold-rates",
            "address": { "@type": "PostalAddress", "addressCountry": "SA" },
            "priceRange": "SAR",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Daily Gold Rates",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "24K Gold Rate" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "22K Gold Rate" } }
              ]
            }
          }),
        }}
      />
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: 'clamp(24px, 5vw, 40px)', fontWeight: '900' }}>
          Saudi <span style={{ color: '#FACC15' }}>Gold Rates</span> Live
        </h1>
        <p style={{ color: '#94A3B8', marginTop: '10px' }}>Real-time 24K, 22K, 21K & 18K gold prices in Saudi Arabia</p>
      </div>

      <main style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Ad Space */}
        <div style={{ height: '90px', background: '#0F172A', border: '1px dashed #334155', borderRadius: '15px', marginBottom: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#64748B' }}>
          ADVERTISEMENT SPACE
        </div>

        {/* Calculator */}
        <section style={{ background: '#0F172A', padding: '30px', borderRadius: '30px', border: '1px solid #1E293B', marginBottom: '50px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px' }}>
            <div>
              <label style={{ fontSize: '11px', color: '#64748B', fontWeight: '800' }}>ENTER WEIGHT</label>
              <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} style={{ width: '100%', background: '#020617', border: '1px solid #334155', padding: '15px', borderRadius: '12px', color: 'white', fontSize: '20px', fontWeight: 'bold', marginTop: '8px', outline: 'none' }} />
            </div>
            <div>
              <label style={{ fontSize: '11px', color: '#64748B', fontWeight: '800' }}>SELECT UNIT</label>
              <select value={unit} onChange={(e) => setUnit(e.target.value)} style={{ width: '100%', background: '#020617', border: '1px solid #334155', padding: '15px', borderRadius: '12px', color: 'white', fontSize: '16px', fontWeight: 'bold', marginTop: '8px', cursor: 'pointer' }}>
                <option value="gram">Gram</option>
                <option value="tola">Tola</option>
                <option value="ounce">Ounce (oz)</option>
              </select>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '11px', color: '#FACC15', fontWeight: '800' }}>ESTIMATED {weight} {unit} (24K)</div>
              <div style={{ fontSize: '32px', fontWeight: '900', color: '#F8FAFC' }}>
                {(basePrice * weight * units[unit]).toLocaleString(undefined, {maximumFractionDigits: 2})}
                <span style={{ fontSize: '14px', marginLeft: '5px', color: '#FACC15' }}>SAR</span>
              </div>
            </div>
          </div>
        </section>

        {/* Rate Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '50px' }}>
          {purities.map((p) => (
            <div key={p.label} style={{ background: '#0F172A', padding: '25px', borderRadius: '25px', borderLeft: `6px solid ${p.color}`, borderTop: '1px solid #1E293B', borderRight: '1px solid #1E293B', borderBottom: '1px solid #1E293B' }}>
              <div style={{ color: '#94A3B8', fontSize: '12px', fontWeight: '800' }}>{p.label}</div>
              <div style={{ fontSize: '24px', fontWeight: '900', margin: '10px 0' }}>
                {(basePrice * p.factor).toFixed(2)} 
                <span style={{ fontSize: '12px', color: '#64748B', marginLeft: '5px' }}>SAR/g</span>
              </div>
              <div style={{ height: '1px', background: '#1E293B', margin: '10px 0' }}></div>
              <div style={{ fontSize: '13px', color: '#94A3B8' }}>
                Per Tola: <span style={{ color: 'white', fontWeight: 'bold' }}>{(basePrice * p.factor * 11.6638).toFixed(0)} SAR</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Ad Space */}
        <div style={{ height: '250px', background: '#0F172A', border: '1px dashed #334155', borderRadius: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#64748B' }}>
          LARGE AD UNIT
        </div>
      </main>

      {/* SEO Section */}
      <section style={{ marginTop: '80px', borderTop: '1px solid #1E293B', paddingTop: '40px', maxWidth: '1000px', margin: '80px auto 0 auto' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px', color: '#FACC15' }}>Understanding Gold Prices in Saudi Arabia</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', color: '#94A3B8', lineHeight: '1.8' }}>
          <div>
            <h3 style={{ color: '#10B981', fontSize: '18px', marginBottom: '10px' }}>Daily Market Updates</h3>
            <p>Accuracy is key in the dynamic KSA gold market. We provide live updates for Riyadh and Jeddah souks.</p>
          </div>
          <div>
            <h3 style={{ color: '#10B981', fontSize: '18px', marginBottom: '10px' }}>Buying Guide</h3>
            <p>From Grams to Tolas, our calculator handles all units for your jewelry or investment bullion needs.</p>
          </div>
        </div>
      </section>
    </div>
  );
}