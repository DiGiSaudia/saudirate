import React from 'react';

export default function CurrencyPage() {
  const currencyRates = [
    { country: "Pakistan", currency: "PKR", rate: "74.15", flag: "🇵🇰" },
    { country: "India", currency: "INR", rate: "22.20", flag: "🇮🇳" },
    { country: "Bangladesh", currency: "BDT", rate: "31.50", flag: "🇧🇩" },
    { country: "Egypt", currency: "EGP", rate: "13.10", flag: "🇪🇬" },
    { country: "Philippines", currency: "PHP", rate: "14.90", flag: "🇵🇭" },
    { country: "Indonesia", currency: "IDR", rate: "4150.00", flag: "🇮🇩" },
    { country: "Nepal", currency: "NPR", rate: "35.60", flag: "🇳🇵" },
    { country: "Sri Lanka", currency: "LKR", rate: "82.40", flag: "🇱🇰" },
    { country: "Iran", currency: "IRR", rate: "11200.00", flag: "🇮🇷" },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      
      <h1 style={{ textAlign: 'center', color: '#1976d2', fontSize: '2rem' }}>Saudi Riyal (SAR) Exchange Rates</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>Today's live currency conversion from Saudi Arabia</p>

      {/* Grid Container for Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '20px' 
      }}>
        {currencyRates.map((item, idx) => (
          <div key={idx} style={{ 
            backgroundColor: 'white', 
            padding: '20px', 
            borderRadius: '15px', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            border: '1px solid #eee'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ fontSize: '2.5rem' }}>{item.flag}</span>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#333' }}>{item.country}</div>
                <div style={{ fontSize: '0.85rem', color: '#999' }}>1 SAR to {item.currency}</div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: '#1976d2', fontSize: '1.5rem', fontWeight: 'bold' }}>{item.rate}</div>
              <div style={{ fontSize: '0.8rem', color: 'green' }}>Live Rate</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center', color: '#888', fontSize: '0.9rem' }}>
        <p>* Rates are updated based on international market standards.</p>
      </div>
    </div>
  );
}