import React from 'react';

export default function GoldRates() {
  const rates = [
    { unit: "24K Gold (1 Gram)", price: "285.50 SAR" },
    { unit: "22K Gold (1 Gram)", price: "261.75 SAR" },
    { unit: "21K Gold (1 Gram)", price: "250.00 SAR" },
    { unit: "18K Gold (1 Gram)", price: "214.25 SAR" },
  ];

  return (
    <div style={{ 
      padding: "40px 20px", 
      maxWidth: "800px", 
      margin: "0 auto", 
      fontFamily: "sans-serif",
      backgroundColor: "#fff"
    }}>
      <h1 style={{ 
        textAlign: "center", 
        color: "#b8860b", 
        fontSize: "2rem",
        marginBottom: "10px" 
      }}>
        Daily Gold Rates in Saudi Arabia
      </h1>
      
      <p style={{ textAlign: "center", color: "#666", marginBottom: "30px" }}>
        Last Updated: February 13, 2026
      </p>
      
      <div style={{ overflowX: "auto" }}>
        <table style={{ 
          width: "100%", 
          borderCollapse: "collapse", 
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)" 
        }}>
          <thead>
            <tr style={{ backgroundColor: "#b8860b", color: "white" }}>
              <th style={{ padding: "15px", border: "1px solid #ddd", textAlign: "left" }}>Gold Unit</th>
              <th style={{ padding: "15px", border: "1px solid #ddd", textAlign: "left" }}>Price (SAR)</th>
            </tr>
          </thead>
          <tbody>
            {rates.map((rate, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#fff" : "#f9f9f9" }}>
                <td style={{ padding: "12px", border: "1px solid #ddd" }}>{rate.unit}</td>
                <td style={{ padding: "12px", border: "1px solid #ddd", fontWeight: "bold" }}>{rate.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ 
        marginTop: "30px", 
        padding: "20px", 
        backgroundColor: "#fff9e6", 
        borderRadius: "8px",
        fontSize: "0.9rem",
        borderLeft: "5px solid #b8860b"
      }}>
        <p><strong>Note:</strong> These rates are updated daily. Our platform currently supports English, and we will be launching the <strong>Arabic version</strong> in 6 months.</p>
      </div>
      
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <a href="/" style={{ color: "#0070f3", textDecoration: "none" }}>← Back to Home</a>
      </div>
    </div>
  );
}