'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const GoldRates = () => {
  const [rates, setRates] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState('');
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const fetchGoldRates = async () => {
      try {
        const res = await fetch('https://open.er-api.com/v6/latest/XAU');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        
        const pricePerOunceInSAR = data.rates.SAR;
        const pricePerGram24k = pricePerOunceInSAR / 31.1035;

        setRates({
          k24: pricePerGram24k,
          k22: pricePerGram24k * 0.9167,
          k21: pricePerGram24k * 0.875,
          k18: pricePerGram24k * 0.75
        });
        setIsLive(true);
        setLastUpdated(new Date().toLocaleTimeString());
        setLoading(false);
      } catch (error) {
        console.error("Error fetching gold rates, using backup:", error);
        // Backup Rates (Safety Net) - اگر API فیل ہو جائے تو یہ دکھائے گا
        setRates({
          k24: 335.50, // اندازاً قیمت
          k22: 307.50,
          k21: 293.50,
          k18: 251.60
        });
        setIsLive(false); // یہ بتائے گا کہ یہ لائیو نہیں بلکہ بیک اپ ہے
        setLastUpdated(new Date().toLocaleTimeString());
        setLoading(false);
      }
    };
    fetchGoldRates();
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '30px', backgroundColor: '#fff8e1', padding: '20px', borderRadius: '15px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <span style={{ 
            height: '10px', width: '10px', 
            backgroundColor: isLive ? '#28a745' : '#ffc107', 
            borderRadius: '50%', display: 'inline-block' 
          }}></span>
          <span style={{ color: isLive ? '#28a745' : '#b8860b', fontWeight: 'bold', fontSize: '0.9rem' }}>
            {isLive ? 'LIVE MARKET DATA' : 'LATEST MARKET ESTIMATES'}
          </span>
        </div>
        <img src="https://flagcdn.com/w80/sa.png" alt="Saudi Flag" style={{ width: '40px', borderRadius: '4px', marginBottom: '10px' }} />
        <h1 style={{ color: '#b8860b', margin: 0, fontSize: '1.8rem' }}>Saudi Gold Price Today</h1>
        <p style={{ color: '#666', marginTop: '5px', fontSize: '0.9rem' }}>
          Updated: <b>{loading ? 'Updating...' : lastUpdated}</b>
        </p>
      </div>

      {/* Gold Table */}
      <div style={{ backgroundColor: 'white', borderRadius: '15px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <div style={{ padding: '15px 20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', backgroundColor: '#f9f9f9' }}>
          <span style={{ fontWeight: 'bold', color: '#555' }}>Gold Type (1 Gram)</span>
          <span style={{ fontWeight: 'bold', color: '#555' }}>Price (SAR)</span>
        </div>
        
        {loading ? (
           <div style={{padding: '30px', textAlign: 'center'}}>Loading Rates...</div>
        ) : (
          [
            { label: '24K Gold', price: rates?.k24 },
            { label: '22K Gold', price: rates?.k22 },
            { label: '21K Gold', price: rates?.k21 },
            { label: '18K Gold', price: rates?.k18 }
          ].map((item, index) => (
            <div key={index} style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              padding: '20px', 
              borderBottom: index !== 3 ? '1px solid #eee' : 'none',
              alignItems: 'center'
            }}>
              <span style={{ fontWeight: '600', fontSize: '1.1rem' }}>✨ {item.label}</span>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontWeight: 'bold', color: '#b8860b', fontSize: '1.3rem' }}>
                  {item.price ? item.price.toFixed(2) : '---'}
                </span>
                <span style={{ fontSize: '0.9rem', color: '#b8860b', marginLeft: '5px' }}>SAR</span>
              </div>
            </div>
          ))
        )}
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link href="/" style={{ 
          display: 'inline-block',
          padding: '12px 30px', 
          backgroundColor: '#b8860b', 
          color: 'white', 
          borderRadius: '30px', 
          textDecoration: 'none', 
          fontWeight: 'bold' 
        }}>
           ← Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default GoldRates;