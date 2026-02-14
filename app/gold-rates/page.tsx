import React from 'react';
import Link from 'next/link';

const GoldRatesPage = () => {
  const goldData = [
    { type: '24K Gold', price: '298.50', change: '+1.20' },
    { type: '22K Gold', price: '273.60', change: '+1.10' },
    { type: '21K Gold', price: '261.20', change: '+1.05' },
    { type: '18K Gold', price: '223.90', change: '+0.90' },
  ];

  const currencies = [
    { code: 'pk', name: 'Pakistan', rate: '74.15' },
    { code: 'in', name: 'India', rate: '22.20' },
    { code: 'bd', name: 'Bangladesh', rate: '31.50' },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Gold Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px', backgroundColor: '#fff8e1', padding: '20px', borderRadius: '15px' }}>
        <img 
          src="https://flagcdn.com/w80/sa.png" 
          alt="Saudi Arabia Flag" 
          style={{ width: '45px', marginRight: '15px', borderRadius: '5px' }} 
        />
        <h1 style={{ margin: 0, color: '#b8860b', fontSize: '1.8rem' }}>Live Gold Rates in KSA</h1>
      </div>

      {/* Gold Rates Table */}
      <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', overflow: 'hidden', marginBottom: '40px' }}>
        {goldData.map((gold, index) => (
          <div key={index} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            padding: '18px 25px', 
            borderBottom: index !== goldData.length - 1 ? '1px solid #f0f0f0' : 'none',
            alignItems: 'center'
          }}>
            <span style={{ fontWeight: '600', fontSize: '1.1rem' }}>✨ {gold.type}</span>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: 'bold', color: '#b8860b', fontSize: '1.3rem' }}>{gold.price} SAR</div>
              <div style={{ fontSize: '0.85rem', color: '#28a745' }}>{gold.change} Today</div>
            </div>
          </div>
        ))}
      </div>

      {/* Currency Table */}
      <div style={{ marginTop: '50px' }}>
        <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '25px' }}>Currency Exchange Rates</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {currencies.map((curr) => (
            <div key={curr.code} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              padding: '15px', 
              backgroundColor: '#fff', 
              borderRadius: '10px', 
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              border: '1px solid #eee'
            }}>
              <img src={`https://flagcdn.com/w80/${curr.code}.png`} alt={curr.name} style={{ width: '35px', marginRight: '15px', borderRadius: '3px' }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 'bold', color: '#555' }}>{curr.name}</div>
                <div style={{ color: '#0070f3', fontSize: '1.1rem', fontWeight: 'bold' }}>1 SAR = {curr.rate} {curr.code.toUpperCase()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- BACK TO HOME BUTTON (اب نیچے ہے) --- */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link href="/" style={{ 
          display: 'inline-block',
          padding: '12px 25px',
          backgroundColor: '#0070f3',
          color: 'white',
          borderRadius: '25px',
          textDecoration: 'none',
          fontWeight: 'bold',
          boxShadow: '0 4px 6px rgba(0,112,243,0.3)'
        }}>
           ← Back to Homepage
        </Link>
      </div>

      <footer style={{ textAlign: 'center', marginTop: '50px', color: '#888', fontSize: '0.9rem' }}>
        <p>© 2026 SaudiRate.com</p>
      </footer>
    </div>
  );
};

export default GoldRatesPage;