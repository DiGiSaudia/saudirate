import React from 'react';

export default function CurrencyRates() {
  // یہ لائن خود بخود آج کی تاریخ اٹھا لے گی
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const rates = [
    { currency: "US Dollar (USD)", rate: "3.75 SAR" },
    { currency: "Euro (EUR)", rate: "4.05 SAR" },
    { currency: "Indian Rupee (INR)", rate: "0.045 SAR" },
    { currency: "Pakistani Rupee (PKR)", rate: "0.013 SAR" },
    { currency: "Indian Rupee (1000)", rate: "45.20 SAR" },
    { currency: "Pakistani Rupee (1000)", rate: "13.45 SAR" },
  ];

  return (
    <div style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2e7d32", fontSize: "2.5rem" }}>Currency Exchange Rates</h1>
      
      {/* یہاں تاریخ لکھی ہوئی ہے جو اب خود بخود بدلے گی */}
      <p style={{ textAlign: "center", color: "#666", fontSize: "1.1rem", marginBottom: "30px" }}>
        Last Updated: <strong>{today}</strong>
      </p>
      
      <div style={{ 
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)", 
        borderRadius: "15px", 
        overflowX: "auto", // موبائل پر ٹیبل کو اسکرول کرنے کے لیے
        backgroundColor: "white" 
      }}>
        <table style={{ width: "100%", minWidth: "400px", borderCollapse: "collapse" }}>
          <thead style={{ backgroundColor: "#2e7d32", color: "white" }}>
            <tr>
              <th style={{ padding: "20px", textAlign: "left" }}>Currency Type</th>
              <th style={{ padding: "20px", textAlign: "left" }}>Exchange Rate (SAR)</th>
            </tr>
          </thead>
          <tbody>
            {rates.map((item, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #eee", backgroundColor: index % 2 === 0 ? "#fff" : "#f9fbf9" }}>
                <td style={{ padding: "18px" }}>{item.currency}</td>
                <td style={{ padding: "18px", fontWeight: "bold", color: "#2e7d32" }}>{item.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: "40px", padding: "20px", backgroundColor: "#e8f5e9", borderRadius: "10px", border: "1px solid #c8e6c9" }}>
        <p style={{ margin: 0, fontSize: "0.9rem", color: "#2e7d32" }}>
          <strong>Note:</strong> Currency rates fluctuate. These are estimated bank rates in Saudi Arabia.
        </p>
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <a href="/" style={{ color: "#0070f3", textDecoration: "none", fontWeight: "bold" }}>← Back to Home</a>
      </div>
    </div>
  );
}