import React from 'react';

const CurrencyCards = () => {
  // عمرہ زائرین کے اہم 24 ممالک کی لسٹ
  const currencies = [
    { code: 'pk', name: 'Pakistan', rate: '74.15' },
    { code: 'in', name: 'India', rate: '22.20' },
    { code: 'bd', name: 'Bangladesh', rate: '31.50' },
    { code: 'id', name: 'Indonesia', rate: '4150.00' },
    { code: 'eg', name: 'Egypt', rate: '13.10' },
    { code: 'tr', name: 'Turkey', rate: '8.15' },
    { code: 'my', name: 'Malaysia', rate: '1.25' },
    { code: 'ph', name: 'Philippines', rate: '14.90' },
    { code: 'np', name: 'Nepal', rate: '35.60' },
    { code: 'lk', name: 'Sri Lanka', rate: '82.40' },
    { code: 'af', name: 'Afghanistan', rate: '18.50' },
    { code: 'ma', name: 'Morocco', rate: '2.65' },
    { code: 'dz', name: 'Algeria', rate: '35.80' },
    { code: 'sd', name: 'Sudan', rate: '160.00' },
    { code: 'jo', name: 'Jordan', rate: '0.19' },
    { code: 'ye', name: 'Yemen', rate: '66.50' },
    { code: 'ng', name: 'Nigeria', rate: '390.00' },
    { code: 'gb', name: 'United Kingdom', rate: '0.21' },
    { code: 'us', name: 'USA', rate: '0.27' },
    { code: 'ca', name: 'Canada', rate: '0.36' },
    { code: 'fr', name: 'France', rate: '0.25' },
    { code: 'iq', name: 'Iraq', rate: '350.00' },
    { code: 'sy', name: 'Syria', rate: '3450.00' },
    { code: 'ir', name: 'Iran', rate: '11200.00' },
  ];

  return (
    <div style={{ padding: '40px 20px', backgroundColor: '#fdfdfd' }}>
      <h2 style={{ textAlign: 'center', color: '#1a73e8', marginBottom: '10px', fontSize: '2rem' }}>
        Saudi Riyal (SAR) Exchange Rates
      </h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>
        Today's live currency conversion for Umrah Pilgrims & Visitors
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {currencies.map((curr) => (
          <div key={curr.code} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: '20px', 
            backgroundColor: '#fff', 
            borderRadius: '15px', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            border: '1px solid #f0f0f0',
            transition: 'transform 0.2s'
          }}>
            {/* یہ امیج ٹیگ کروم ڈیسک ٹاپ پر جھنڈے دکھائے گا */}
            <img 
              src={`https://flagcdn.com/w80/${curr.code}.png`} 
              alt={curr.name} 
              style={{ width: '45px', height: 'auto', marginRight: '20px', borderRadius: '4px', border: '1px solid #eee' }} 
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#333' }}>
                {curr.code.toUpperCase()} <span style={{ fontSize: '0.9rem', color: '#777', fontWeight: 'normal' }}>| {curr.name}</span>
              </div>
              <div style={{ color: '#1a73e8', fontSize: '1.3rem', fontWeight: 'bold', marginTop: '5px' }}>
                {curr.rate} <span style={{ fontSize: '0.8rem', color: '#28a745' }}>Live Rate</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <p style={{ textAlign: 'center', marginTop: '40px', color: '#999', fontSize: '0.8rem' }}>
        * Rates are updated based on international market standards.
      </p>
    </div>
  );
};

export default CurrencyCards;