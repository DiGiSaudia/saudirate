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
    refreshBtn: isDarkMode ? '#333' : '#e0e0e0',
    adBg: isDarkMode ? '#1a1a1a' : '#eaeaea',
    adText: isDarkMode ? '#555' : '#999'
  };

  const styles: { [key: string]: CSSProperties } = {
    container: { minHeight: '100vh', backgroundColor: theme.bg, color: theme.text, fontFamily: 'Arial, sans-serif', transition: '0.3s', paddingBottom: '20px' },
    nav: { backgroundColor: '#111', color: '#fff', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    link: { color: '#FFD700', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' },
    themeBtn: { background: '#FFD700', border: 'none', padding: '6px 12px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', color: '#000', fontSize: '0.9rem' },
    main: { maxWidth: '800px', margin: '0 auto', padding: '20px' },
    
    // اشتہارات (Ads) کا سٹائل
    adContainer: { width: '100%', minHeight: '90px', backgroundColor: theme.adBg, border: `1px dashed ${theme.border}`, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px 0', color: theme.adText, fontSize: '0.8rem' },
    
    headingContainer: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '5px' },
    heading: { fontWeight: '800', fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', margin: 0, textAlign: 'center' }, // Responsive Font Size
    refreshBtn: { background: theme.refreshBtn, border: 'none', borderRadius: '50%', width: '35px', height: '35px', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.text, transition: '0.2s', flexShrink: 0 },
    subText: { textAlign: 'center', color: '#666', marginBottom: '20px', fontSize: '0.9rem' },
    
    calcCard: { background: 'linear-gradient(145deg, #1a1a1a, #000)', color: '#fff', padding: '25px', borderRadius: '20px', marginBottom: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' },
    
    // موبائل کے لیے ان پٹ فیلڈز کا فلیکس لے آؤٹ
    inputsRow: { display: 'flex', flexWrap: 'wrap', gap: '20px' },
    inputWrapper: { flex: '1 1 250px' }, // یہ لائن موبائل ریسپانسو بناتی ہے (کم از کم 250px ورنہ نیچے آ جائے گی)
    
    label: { display: 'flex', justifyContent: 'space-between', color: '#FFD700', marginBottom: '8px', fontSize: '0.9rem' },
    input: { width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #444', fontSize: '1.1rem', backgroundColor: '#222', color: '#fff' },
    
    resultBox: { textAlign: 'center', marginTop: '20px', borderTop: '1px solid #333', paddingTop: '20px' },
    resultText: { fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 'bold', color: '#FFD700' }, // Responsive Font Size

    tableContainer: { backgroundColor: theme.cardBg, borderRadius: '15px', overflow: 'hidden', border: `1px solid ${theme.border}` },
    th: { padding: '15px', textAlign: 'left', backgroundColor: isDarkMode ? '#252525' : '#f1f1f1', color: theme.text, fontSize: '0.95rem' },
    td: { padding: '15px', borderBottom: `1px solid ${theme.border}`, fontSize: '0.95rem' }
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
        
        {/* --- TOP AD SLOT --- */}
        <div style={styles.adContainer}>
          <span>ADVERTISEMENT SPACE (Top)</span>
        </div>

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
          <div style={styles.inputsRow}>
            <div style={styles.inputWrapper}>
              <div style={styles.label}>
                <span>Weight (Grams)</span>
                <button onClick={handleClear} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '0.75rem', textDecoration: 'underline', opacity: 0.8 }}>Clear</button>
              </div>
              <input 
                type="number" 
                value={weight} 
                onChange={(e: any) => setWeight(Number(e.target.value))} 
                style={styles.input} 
                placeholder="1"
              />
            </div>
            <div style={styles.inputWrapper}>
              <label style={styles.label}>Purity</label>
              <select value={selectedPurity} onChange={(e: any) => setSelectedPurity(Number(e.target.value))} style={styles.input}>
                <option value={rates.k24}>24K - Pure Gold</option>
                <option value={rates.k22}>22K - Jewelry</option>
                <option value={rates.k21}>21K - Trade</option>
                <option value={rates.k18}>18K - Other</option>
              </select>
            </div>
          </div>
          <div style={styles.resultBox}>
            <div style={{fontSize: '0.9rem', color: '#aaa', marginBottom: '5px'}}>Estimated Price</div>
            <div style={styles.resultText}>{total} <span style={{fontSize: '1rem'}}>SAR</span></div>
          </div>
        </div>

        {/* --- MIDDLE AD SLOT (High Revenue) --- */}
        <div style={styles.adContainer}>
          <span>ADVERTISEMENT SPACE (Middle)</span>
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
                    {loading ? 'Loading...' : val.toFixed(3)} <small style={{fontSize:'0.7em', color: theme.text}}>SAR</small>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- BOTTOM AD SLOT --- */}
        <div style={{ ...styles.adContainer, minHeight: '150px' }}>
          <span>ADVERTISEMENT SPACE (Bottom)</span>
        </div>

      </div>
    </div>
  );
}