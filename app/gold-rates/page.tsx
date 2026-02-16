"use client";
import React, { useState, useEffect, CSSProperties } from 'react';
import Link from 'next/link';

export default function GoldRatesPage() {
  const [weight, setWeight] = useState(1);
  const [loading, setLoading] = useState(true);
  const [rates, setRates] = useState({
    k24: 285.50,
    k22: 261.75,
    k21: 249.80,
    k18: 214.15
  });
  const [selectedPurity, setSelectedPurity] = useState(285.50);

  const API_KEY = '0dfe1f9efbc26627f2809000';

  useEffect(() => {
    const getRates = async () => {
      try {
        const res = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/SAR`);
        const data = await res.json();

        if (data && data.conversion_rates && data.conversion_rates.XAU) {
          const goldOunce = 1 / data.conversion_rates.XAU;
          const gram24k = goldOunce / 31.1035;

          const newRates = {
            k24: Number(gram24k.toFixed(2)),
            k22: Number((gram24k * 0.916).toFixed(2)),
            k21: Number((gram24k * 0.875).toFixed(2)),
            k18: Number((gram24k * 0.750).toFixed(2))
          };

          setRates(newRates);
          setSelectedPurity(newRates.k24);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getRates();
  }, []);

  const total = (weight * selectedPurity).toFixed(2);

  // Styles defined with 'any' to prevent TypeScript redness
  const styles: { [key: string]: CSSProperties } = {
    container: { minHeight: '100vh', backgroundColor: '#f8f9fa', fontFamily: 'Arial, sans-serif' },
    nav: { backgroundColor: '#111', color: '#fff', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    link: { color: '#FFD700', textDecoration: 'none', fontWeight: 'bold' },
    logoText: { fontWeight: 'bold', fontSize: '1.2rem' },
    main: { maxWidth: '800px', margin: '30px auto', padding: '0 20px' },
    adBox: { backgroundColor: '#fff', border: '1px dashed #ccc', padding: '20px', textAlign: 'center', marginBottom: '30px', borderRadius: '8px' },
    heading: { textAlign: 'center', marginBottom: '10px', fontWeight: '800', fontSize: '2.5rem', color: '#1a1a1a' },
    subText: { textAlign: 'center', color: '#666', marginBottom: '30px' },
    calcCard: { background: 'linear-gradient(145deg, #1a1a1a, #000)', color: '#fff', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', marginBottom: '40px' },
    inputGroup: { marginBottom: '20px' },
    label: { display: 'block', color: '#FFD700', marginBottom: '8px', fontSize: '0.9rem' },
    input: { width: '100%', padding: '12px', borderRadius: '8px', border: 'none', fontSize: '1.1rem' },
    resultBox: { textAlign: 'center', borderTop: '1px solid #333', paddingTop: '20px', marginTop: '10px' },
    tableContainer: { backgroundColor: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', border: '1px solid #eee' },
    th: { padding: '18px', textAlign: 'left', backgroundColor: '#f1f1f1', color: '#333' },
    thRight: { padding: '18px', textAlign: 'right', backgroundColor: '#f1f1f1', color: '#333' },
    td: { padding: '18px', borderBottom: '1px solid #eee' },
    priceTd: { padding: '18px', borderBottom: '1px solid #eee', textAlign: 'right', fontWeight: 'bold', color: '#b8860b' }
  };

  return (
    <div style={styles.container}>
      
      {/* Navbar */}
      <nav style={styles.nav}>
        <Link href="/" style={styles.link}>← Back to Home</Link>
        <span style={styles.logoText}>SAUDI<span style={{ color: '#FFD700' }}>RATE</span> GOLD</span>
      </nav>

      <div style={styles.main}>

        {/* Top Ad */}
        <div style={styles.adBox}>
          <small style={{ color: '#999' }}>ADVERTISEMENT AREA</small>
        </div>

        <h1 style={styles.heading}>Gold Rates Saudi Arabia</h1>
        <p style={styles.subText}>Live Market Updates & Calculator</p>

        {/* Calculator */}
        <div style={styles.calcCard}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Weight (Grams)</label>
              <input 
                type="number" 
                value={weight}
                onChange={(e: any) => setWeight(Number(e.target.value))}
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Purity (Type)</label>
              <select 
                value={selectedPurity}
                onChange={(e: any) => setSelectedPurity(Number(e.target.value))}
                style={styles.input}
              >
                <option value={rates.k24}>24 Karat (Pure)</option>
                <option value={rates.k22}>22 Karat (Jewelry)</option>
                <option value={rates.k21}>21 Karat (Trade)</option>
                <option value={rates.k18}>18 Karat (Design)</option>
              </select>
            </div>
          </div>
          
          <div style={styles.resultBox}>
            <div style={{ fontSize: '0.9rem', color: '#ccc' }}>Estimated Price:</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FFD700' }}>
              {total} <span style={{ fontSize: '1rem' }}>SAR</span>
            </div>
          </div>
        </div>

        {/* Pricing Table */}
        <div style={styles.tableContainer}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={styles.th}>Gold Type</th>
                <th style={styles.thRight}>Price per Gram</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>Gold 24K</td>
                <td style={styles.priceTd}>{loading ? '...' : rates.k24} SAR</td>
              </tr>
              <tr>
                <td style={styles.td}>Gold 22K</td>
                <td style={styles.priceTd}>{loading ? '...' : rates.k22} SAR</td>
              </tr>
              <tr>
                <td style={styles.td}>Gold 21K</td>
                <td style={styles.priceTd}>{loading ? '...' : rates.k21} SAR</td>
              </tr>
              <tr>
                <td style={styles.td}>Gold 18K</td>
                <td style={styles.priceTd}>{loading ? '...' : rates.k18} SAR</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom Ad */}
        <div style={{ ...styles.adBox, marginTop: '40px', minHeight: '150px' }}>
          <small style={{ color: '#999' }}>BOTTOM AD SPACE</small>
        </div>

      </div>
    </div>
  );
}