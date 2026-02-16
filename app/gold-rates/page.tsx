"use client";
import React, { useState, useEffect, CSSProperties } from 'react';
import Link from 'next/link';

export default function GoldRatesPage() {
  const [weight, setWeight] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [rates, setRates] = useState({
    k24: 285.500,
    k22: 261.750,
    k21: 249.800,
    k18: 214.150
  });
  const [selectedPurity, setSelectedPurity] = useState(285.500);

  const API_KEY = '0dfe1f9efbc26627f2809000';

  // ریٹ حاصل کرنے کا فنکشن الگ کر دیا گیا ہے
  const fetchRates = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/SAR`);
      const data = await res.json();

      if (data && data.conversion_rates && data.conversion_rates.XAU) {
        const goldOunce = 1 / data.conversion_rates.XAU;
        const gram24k = goldOunce / 31.1035;

        const newRates = {
          k24: Number(gram24k.toFixed(3)),
          k22: Number((gram24k * 0.916).toFixed(3)),
          k21: Number((gram24k * 0.875).toFixed(3)),
          k18: Number((gram24k * 0.750).toFixed(3))
        };

        setRates(newRates);
        // اگر صارف نے پہلے سے کچھ منتخب کیا ہوا ہے تو اسے اپ ڈیٹ کریں، ورنہ 24K رکھیں
        if (selectedPurity === rates.k24 || selectedPurity === 285.500) {
            setSelectedPurity(newRates.k24);
        }
      }
    } catch (error) {
      console.error("Failed to fetch rates", error);
    } finally {
      setLoading(false);
    }
  };

  // جب پیج لوڈ ہو تو ریٹ لائیں
  useEffect(() => {
    fetchRates();
  }, []);

  const handleClear = () => {
    setWeight(1);
    setSelectedPurity(rates.k24);
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const total = (weight * selectedPurity).toFixed(3);

  const theme = {
    bg: isDarkMode ? '#121212' : '#f8f9fa',
    text: isDarkMode ? '#ffffff' : '#1a1a1a',
    cardBg: isDarkMode ? '#1e1e1e' : '#fff',
    border: isDarkMode ? '#333' : '#eee',
    refreshBtn: isDarkMode ? '#333' : '#e0e0e0'
  };

  const styles: { [key: string]: CSSProperties } = {
    container: { minHeight: '100vh', backgroundColor: theme.bg, color: theme.text, fontFamily: 'Arial, sans-serif', transition: '0.3s' },
    nav: { backgroundColor: '#111', color: '#fff', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    link: { color: '#FFD700', textDecoration: 'none', fontWeight: 'bold' },
    themeBtn: { background: '#FFD700', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', color: '#000' },
    main: { maxWidth: '800px', margin: '30px auto', padding: '0 20px' },
    headingContainer: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '10px' },
    heading: { fontWeight: '800', fontSize: '2.5rem', margin: 0 },
    refreshBtn: { background: theme.refreshBtn, border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.text, transition: '0.2s' },
    subText: { textAlign: 'center', color: '#666', marginBottom: '30px' },
    calcCard: { background: 'linear-gradient(145deg, #1a1a1a, #000)', color: '#fff', padding: '30px', borderRadius: '20px', marginBottom: '40px' },
    label: { display: 'flex', justifyContent: 'space-between', color: '#FFD700', marginBottom: '8px' },
    input: { width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #444', fontSize: '1.1rem' },
    tableContainer: { backgroundColor: theme.cardBg, borderRadius: '15px', overflow: 'hidden', border: `1px solid ${theme.border}` },
    th: { padding: '18px', textAlign: 'left', backgroundColor: isDarkMode ? '#252525' : '#f1f1f1', color: theme.text },
    td: { padding: '18px', borderBottom: `1px solid ${theme.border}` }
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <Link href="/" style={styles.link}>← Home</Link>
        <button onClick={toggleTheme} style={styles.themeBtn}>
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </nav>

      <div style={styles.main}>
        
        {/* ہیڈنگ اور ریفریش بٹن ایک ساتھ */}
        <div style={styles.headingContainer}>
          <h1 style={styles.heading}>Saudi Gold Rates</h1>
          <button 
            onClick={fetchRates} 
            style={styles.refreshBtn} 
            title="Refresh Rates"
            disabled={loading}
          >
            {loading ? '...' : '↻'}
          </button>
        </div>
        
        <p style={styles.subText}>Live Market Updates & Calculator</p>

        <div style={styles.calcCard}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <div style={styles.label}>
                <span>Grams</span>
                <button onClick={handleClear} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '0.7rem' }}>Clear</button>
              </div>
              <input type="number" value={weight} onChange={(e: any) => setWeight(Number(e.target.value))} style={styles.input} />
            </div>
            <div>
              <label style={styles.label}>Purity</label>
              <select value={selectedPurity} onChange={(e: any) => setSelectedPurity(Number(e.target.value))} style={styles.input}>
                <option value={rates.k24}>24K</option>
                <option value={rates.k22}>22K</option>
                <option value={rates.k21}>21K</option>
                <option value={rates.k18}>18K</option>
              </select>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '20px', borderTop: '1px solid #333', paddingTop: '20px' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FFD700' }}>{total} SAR</div>
          </div>
        </div>

        <div style={styles.tableContainer}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={styles.th}>Type</th>
                <th style={{ ...styles.th, textAlign: 'right' }}>Price (1g)</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(rates).map(([key, val]) => (
                <tr key={key}>
                  <td style={styles.td}>Gold {key.replace('k', '')}K</td>
                  <td style={{ ...styles.td, textAlign: 'right', fontWeight: 'bold', color: '#b8860b' }}>
                    {loading ? 'Loading...' : val.toFixed(3)} SAR
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}