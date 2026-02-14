'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const GoldRates = () => {
  const [rates, setRates] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = 'goldapi-2fojksmlmivjd4-io'; // آپ کی API Key

  useEffect(() => {
    const fetchGoldRates = async () => {
      try {
        const response = await fetch("https://www.goldapi.io/api/XAU/SAR", {
          headers: { "x-access-token": API_KEY, "Content-Type": "application/json" }
        });
        const data = await response.json();
        setRates(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching rates:", error);
        setLoading(false);
      }
    };
    fetchGoldRates();
  }, []);

  if (loading) return <div style={{textAlign: 'center', padding: '50px'}}>Loading Live Gold Rates...</div>;

  // سونے کی مختلف اقسام کی قیمتیں (فی گرام)
  const gold24k = rates ? rates.price_gram_24k.toFixed(2) : "0.00";
  const gold22k = rates ? rates.price_gram_22k.toFixed(2) : "0.00";
  const gold21k = rates ? rates.price_gram_21k.toFixed(2) : "0.00";
  const gold18k = rates ? rates.price_gram_18k.toFixed(2) : "0.00";

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '30px', backgroundColor: '#fff8e1', padding: '20px', borderRadius: '15px' }}>
        <img src="https://flagcdn.com/w80/sa.png" alt="KSA" style={{ width: '50px', borderRadius: '5px', marginBottom: '10px' }} />
        <h1 style={{ color: '#b8860b', margin: 0 }}>Live Gold Rates in KSA (SAR)</h1>
        <p style={{ color: '#666' }}>Updated: {new Date().toLocaleString()}</p>
      </div>

      {/* Gold Table */}
      <div style={{ backgroundColor: 'white', borderRadius: '15px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        {[
          { label: '24K Gold (1 Gram)', price: gold24k },
          { label: '22K Gold (1 Gram)', price: gold22k },
          { label: '21K Gold (1 Gram)', price: gold21k },
          { label: '18K Gold (1 Gram)', price: gold18k }
        ].map((item, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', borderBottom: index !== 3 ? '1px solid #eee' : 'none' }}>
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>✨ {item.label}</span>
            <span style={{ fontWeight: 'bold', color: '#b8860b', fontSize: '1.2rem' }}>{item.price} SAR</span>
          </div>
        ))}
      </div>

      {/* Back to Home Button */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link href="/" style={{ 
          display: 'inline-block', padding: '12px 30px', backgroundColor: '#b8860b', color: 'white', 
          borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold' 
        }}>
           ← Back to Homepage
        </Link>
      </div>

    </div>
  );
};

export default GoldRates;