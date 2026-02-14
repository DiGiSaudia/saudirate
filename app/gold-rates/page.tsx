import React from 'react';

export default function GoldPage() {
  const goldRates = [
    { purity: "24K Gold", price: "315.50 SAR", change: "+1.20" },
    { purity: "22K Gold", price: "289.20 SAR", change: "+1.10" },
    { purity: "21K Gold", price: "276.00 SAR", change: "+1.05" },
    { purity: "18K Gold", price: "236.60 SAR", change: "+0.90" },
  ];

  const internationalRates = [
    { country: "Pakistan", currency: "PKR", rate: "74.15" },
    { country: "India", currency: "INR", rate: "22.20" },
    { country: "Bangladesh", currency: "BDT", rate: "31.50" },
    { country: "Egypt", currency: "EGP", rate: "13.10" },
    { country: "Philippines", currency: "PHP", rate: "14.90" },
    { country: "Indonesia", currency: "IDR", rate: "4150.00" },
    { country: "Nepal", currency: "NPR", rate: "35.60" },
    { country: "Sri Lanka", currency: "LKR", rate: "82.40" },
    { country: "Iran", currency: "IRR", rate: "11200.00" },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Gold Rates Section */}
      <h1 style={{ textAlign: 'center', color: '#b8860b', fontSize: '2rem' }}>Saudi Gold Rates Today</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>Real-time gold prices per gram in SAR</p>

      {/* Responsive Table / Card Container */}
      <div className="responsive-container">
        {goldRates.map((gold, index) => (
          <div key={index} className="data-row">
            <span className="label">{gold.purity}</span>
            <span className="value">{gold.price}</span>
            <span className="change" style={{ color: 'green' }}>{gold.change}</span>
          </div>
        ))}
      </div>

      {/* Hajj & Umrah Pilgrims Section */}
      <div style={{ marginTop: '50px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '15px' }}>
        <h2 style={{ textAlign: 'center', color: '#1976d2' }}>Currency Rates for Pilgrims</h2>
        <p style={{ textAlign: 'center', color: '#666' }}>1 Saudi Riyal (SAR) exchange rate for popular destinations</p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
          gap: '15px', 
          marginTop: '20px' 
        }}>
          {internationalRates.map((item, idx) => (
            <div key={idx} style={{ 
              backgroundColor: 'white', 
              padding: '15px', 
              borderRadius: '10px', 
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              border: '1px solid #eee'
            }}>
              <div style={{ fontWeight: 'bold', color: '#333' }}>{item.country}</div>
              <div style={{ color: '#1976d2', fontSize: '1.2rem', margin: '5px 0' }}>{item.rate}</div>
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
        }
        .data-row {
          display: flex;
          justify-content: space-between;
          padding: 20px;
          border-bottom: 1px solid #eee;
        }
        .label { font-weight: bold; font-size: 1.1rem; }
        .value { color: #b8860b; font-weight: bold; }

        @media (max-width: 600px) {
          .data-row {
            flex-direction: column;
            align-items: center;
            gap: 8px;
            text-align: center;
          }
          .label { font-size: 1.2rem; color: #333; }
          .value { font-size: 1.4rem; }
        }
      `}</style>
    </div>
  );
}