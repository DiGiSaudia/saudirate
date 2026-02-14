'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const GoldRates = () => {
  const [rates, setRates] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState('');

  const API_KEY = 'goldapi-2fojksmlmivjd4-io';

  useEffect(() => {
    const fetchGoldRates = async () => {
      try {
        const response = await fetch("https://www.goldapi.io/api/XAU/SAR", {
          headers: { "x-access-token": API_KEY, "Content-Type": "application/json" }
        });
        const data = await response.json();
        setRates(data);
        // وقت کو سیکنڈز کے ساتھ دکھانا تاکہ لائیو ہونے کا پتہ چلے
        setLastUpdated(new Date().toLocaleTimeString());
        setLoading(false);
      } catch (error) {
        console.error("Error fetching rates:", error);
        setLoading(false);
      }
    };
    fetchGoldRates();
  }, []);

  if (loading) return <div style={{textAlign: 'center', padding: '50px'}}>Fetching Latest Market Rates...</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial' }}>
      
      {/* Header with Live Indicator */}
      <div style={{ textAlign: 'center', marginBottom: '30px', backgroundColor: '#fff8e1', padding: '20px', borderRadius: '15px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <span style={{ height: '10px', width: '10px', backgroundColor: '#28a745', borderRadius: '50%', display: 'inline-block' }}></span>
          <span style={{ color: '#28a745', fontWeight: 'bold', fontSize: '0.9rem' }}>LIVE MARKET DATA</span>
        </div>
        <h1 style={{ color: '#b8860b', margin: 0 }}>Saudi Gold Price Today</h1>
        <p style={{ color: '#666', marginTop: '5px' }}>Last Updated: <b>{lastUpdated}</b></p>
      </div>

      {/* Gold Table */}
      <div style={{ backgroundColor: 'white', borderRadius: '15px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', backgroundColor: '#f9f9f9' }}>
          <span style={{ fontWeight: 'bold' }}>Gold Type (1 Gram)</span>
          <span style={{ fontWeight: 'bold' }}>Price in SAR</span>
        </div>
        {[
          { label: '24K Gold', price: rates?.price_gram_24k.toFixed(2) },
          { label: '22K Gold', price: rates?.price_gram_22k.toFixed(2) },
          { label: '21K Gold', price: rates?.price_gram_21k.toFixed(2) },
          { label: '18K Gold', price: rates?.price_gram_18k.toFixed(2) }
        ].map((item, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', borderBottom: index !== 3 ? '1px solid #eee' : 'none' }}>
            <span>{item.label}</span>
            <span style={{ fontWeight: 'bold', color: '#b8860b' }}>{item.price} SAR</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link href="/" style={{ padding: '12px 30px', backgroundColor: '#b8860b', color: 'white', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold' }}>
           ← Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default GoldRates;