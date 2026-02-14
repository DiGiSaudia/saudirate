import React from 'react';

export default function CurrencyPage() {
  const rates = [
    { country: "Pakistan", currency: "PKR", buy: "74.10", sell: "74.80" },
    { country: "India", currency: "INR", buy: "22.15", sell: "22.40" },
    { country: "Philippines", currency: "PHP", buy: "14.85", sell: "15.10" },
    { country: "Egypt", currency: "EGP", buy: "12.90", sell: "13.20" },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center', color: '#1976d2', fontSize: '1.8rem' }}>Today's SAR Exchange Rates</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>Live currency rates from Saudi Riyal (SAR)</p>

      {/* ٹیبل کو موبائل پر فٹ کرنے کے لیے اس کنٹینر کا استعمال ضروری ہے */}
      <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', minWidth: '500px' }}>
          <thead>
            <tr style={{ backgroundColor: '#1976d2', color: 'white' }}>
              <th style={thStyle}>Country</th>
              <th style={thStyle}>Currency</th>
              <th style={thStyle}>Bank Buy</th>
              <th style={thStyle}>Bank Sell</th>
            </tr>
          </thead>
          <tbody>
            {rates.map((rate, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                <td style={tdStyle}><strong>{rate.country}</strong></td>
                <td style={tdStyle}>{rate.currency}</td>
                <td style={{ ...tdStyle, color: 'green', fontWeight: 'bold' }}>{rate.buy}</td>
                <td style={{ ...tdStyle, color: 'red', fontWeight: 'bold' }}>{rate.sell}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <p style={{ marginTop: '20px', fontSize: '0.8rem', color: '#999', textAlign: 'center' }}>
        * Rates are subject to change according to market conditions.
      </p>
    </div>
  );
}

const thStyle = { padding: '15px', textAlign: 'left' as const };
const tdStyle = { padding: '15px', textAlign: 'left' as const };