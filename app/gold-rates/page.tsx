"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function GoldRatesPage() {
  const [weight, setAmount] = useState<number>(1);
  // Default values taake NaN na aaye
  const [rates, setRates] = useState({
    k24: 285.50,
    k22: 261.75,
    k21: 249.80,
    k18: 214.15
  });
  const [purity, setPurity] = useState<number>(285.50);
  const [loading, setLoading] = useState<boolean>(true);

  const API_KEY = '0dfe1f9efbc26627f2809000';

  useEffect(() => {
    const fetchGold = async () => {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/SAR`);
        const data = await response.json();
        
        // Check if XAU exists in the response
        if (data && data.result === "success" && data.conversion_rates.XAU) {
          const goldOunceInSar = 1 / data.conversion_rates.XAU;
          const base24K = goldOunceInSar / 31.1035;

          const newRates = {
            k24: Number(base24K.toFixed(2)) || 285.50,
            k22: Number((base24K * 0.916).toFixed(2)) || 261.75,
            k21: Number((base24K * 0.875).toFixed(2)) || 249.80,
            k18: Number((base24K * 0.750).toFixed(2)) || 214.15
          };
          setRates(newRates);
          setPurity(newRates.k24);
        }
      } catch (error) {
        console.error("Error fetching gold:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGold();
  }, [API_KEY]);

  // NaN se bachne ke liye safe calculation
  const safeWeight = weight || 0;
  const safePurity = purity || rates.k24;
  const totalPrice = (safeWeight * safePurity).toFixed(2);

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f4f7f6', fontFamily: 'sans-serif' }}>
      
      <div style={{ backgroundColor: '#000', color: '#fff', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ color: '#FFD700', textDecoration: 'none', fontWeight: 'bold' }}>← Back to Home</Link>
        <span style={{ fontWeight: 'bold', color: '#FFD700' }}>SaudiRate Gold</span>
      </div>

      <div style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px' }}>
        
        <h1 style={{ textAlign: 'center', fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '30px' }}>
          Live Gold Rates & <span style={{ color: '#b8860b' }}>Calculator</span>
        </h1>

        <div style={{ backgroundColor: '#000', color: '#fff', padding: '30px', borderRadius: '20px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.2rem', color: '#FFD700', marginBottom: '20px', textAlign: 'center' }}>Gold Value Calculator</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '5px' }}>Weight (Grams)</label>
              <input 
                type="number" 
                value={weight} 
                onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: 'none', fontSize: '1.1rem', color: '#000' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '5px' }}>Gold Purity (Karat)</label>
              <select 
                value={purity}
                onChange={(e) => setPurity(Number(e.target.value))}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: 'none', fontSize: '1.1rem', color: '#000' }}
              >
                <option value={rates.k24}>24 Karat (99.9%)</option>
                <option value={rates.k22}>22 Karat (91.6%)</option>
                <option value={rates.k21}>21 Karat (87.5%)</option>
                <option value={rates.k18}>18 Karat (75.0%)</option>
              </select>
            </div>
          </div>

          <div style={{ textAlign: 'center', paddingTop: '10px', borderTop: '1px solid #333' }}>
            <p style={{ fontSize: '0.9rem', color: '#aaa', margin: '10px 0 5px' }}>Total Estimated Price:</p>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FFD700' }}>
              {totalPrice} <span style={{ fontSize: '1rem' }}>SAR</span>
            </div>
          </div>
        </div>

        {/* Gold Table */}
        <div style={{ backgroundColor: '#fff', borderRadius: '15px', overflow: 'hidden', border: '1px solid #eee' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <th style={{ padding: '20px', textAlign: 'left' }}>Unit (1 Gram)</th>
                <th style={{ padding: '20px', textAlign: 'right' }}>Price (SAR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '15px 20px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>Gold 24K</td>
                <td style={{ padding: '15px 20px', textAlign: 'right', color: '#b8860b', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>{rates.k24}</td>
              </tr>
              <tr>
                <td style={{ padding: '15px 20px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>Gold 22K</td>
                <td style={{ padding: '15px 20px', textAlign: 'right', color: '#b8860b', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>{rates.k22}</td>
              </tr>
              <tr>
                <td style={{ padding: '15px 20px', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>Gold 21K</td>
                <td style={{ padding: '15px 20px', textAlign: 'right', color: '#b8860b', fontWeight: 'bold', borderBottom: '1px solid #eee' }}>{rates.k21}</td>
              </tr>
              <tr>
                <td style={{ padding: '15px 20px', fontWeight: 'bold' }}>Gold 18K</td>
                <td style={{ padding: '15px 20px', textAlign: 'right', color: '#b8860b', fontWeight: 'bold' }}>{rates.k18}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </main>
  );
}