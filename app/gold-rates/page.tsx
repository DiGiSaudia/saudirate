import React from 'react';

export default function GoldPage() {
  const goldRates = [
    { purity: "24K Gold", price: "315.50 SAR", change: "+1.20" },
    { purity: "22K Gold", price: "289.20 SAR", change: "+1.10" },
    { purity: "21K Gold", price: "276.00 SAR", change: "+1.05" },
    { purity: "18K Gold", price: "236.60 SAR", change: "+0.90" },
  ];

  const internationalRates = [
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
      
      {/* Gold Rates Section */}
      <h1 style={{ textAlign: 'center', color: '#b8860b', fontSize: '2rem' }}>Saudi Gold Rates Today</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>Real-time gold prices per gram in SAR</p>

      <div className="responsive-container">
        {goldRates.map((gold, index) => (
          <div key={index} className="data-row">
            <span className="label">✨ {gold.purity}</span>
            <span className="value">{gold.price}</span>
            <span className="change" style={{ color: 'green' }}>{gold.change}</span>
          </div>
        ))}
      </div>

      {/* Hajj & Umrah Pilgrims Section */}
      <div style={{ marginTop: '50px', backgroundColor: '#f9f9f9', padding: '25px', borderRadius: '15px', border: '1px solid #eee' }}>
        <h2 style={{ textAlign: 'center', color: '#1976d2' }}>Currency Rates for Pilgrims</h2>
        <p style={{ textAlign: 'center', color: '#666' }}>1 SAR exchange rate for international travelers</p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
          gap: '15px', 
          marginTop: '25px' 
        }}>
          {internationalRates.map((item, idx) => (
            <div key={idx} style={{ 
              backgroundColor: 'white', 
              padding: '15px', 
              borderRadius: '12px', 
              textAlign: 'center',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '5px' }}>{item.flag}</div>
              <div style={{ fontWeight: 'bold', color: '#333', fontSize: '1rem' }}>{item.country}</div>
              <div style={{ color: '#1976d2', fontSize: '1.3rem', fontWeight: 'bold', margin: '5px 0' }}>{item.rate}</div>
              <div style={{ fontSize: '0.8rem', color: '#999' }}>{item.currency}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .responsive-container {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          overflow: hidden;
          border: 1px solid #eee;
        }
        .data-row {
          display: flex;
          justify-content: space-between;
          padding: 20px;
          border-bottom: 1px solid #eee;
          align-items: center;
        }
        .label { font-weight: bold; font-size: 1.1rem; color: #444; }
        .value { color: #b8860b; font-weight: bold; font-size: 1.1rem; }

        @media (max-width: 600px) {
          .data-row {
            flex-direction: column;
            gap: 10px;
            text-align: center;
            padding: 15px;
          }
          .label { font-size: 1.1rem; }
          .value { font-size: 1.3rem; }
        }
      `}</style>
    </div>
  );
}