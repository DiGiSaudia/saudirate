import React from 'react';

const GoldRates = () => {
  const goldData = [
    { type: '24K Gold', price: '298.50', change: '+1.20' },
    { type: '22K Gold', price: '273.60', change: '+1.10' },
    { type: '21K Gold', price: '261.20', change: '+1.05' },
    { type: '18K Gold', price: '223.90', change: '+0.90' },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
        {/* سعودی عرب کا جھنڈا جو کروم پر بھی نظر آئے گا */}
        <img 
          src="https://flagcdn.com/w80/sa.png" 
          alt="Saudi Arabia Flag" 
          style={{ width: '40px', marginRight: '15px', borderRadius: '4px' }}
        />
        <h2 style={{ margin: 0, color: '#b8860b' }}>Gold Rates in Saudi Arabia (SAR)</h2>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        {goldData.map((gold, index) => (
          <div key={index} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            padding: '15px 20px', 
            borderBottom: index !== goldData.length - 1 ? '1px solid #eee' : 'none',
            alignItems: 'center'
          }}>
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>✨ {gold.type}</span>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: 'bold', color: '#b8860b', fontSize: '1.2rem' }}>{gold.price} SAR</div>
              <div style={{ fontSize: '0.8rem', color: '#28a745' }}>{gold.change} Today</div>
            </div>
          </div>
        ))}
      </div>
      <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#666', marginTop: '10px' }}>
        * Prices are updated based on local market trends.
      </p>
    </div>
  );
};

export default GoldRates;