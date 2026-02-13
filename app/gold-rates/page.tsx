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
      fontFamily: "Arial, sans-serif",
      color: "#333"
    }}>
      <h1 style={{ 
        textAlign: "center", 
        color: "#b8860b", 
        fontSize: "2.5rem",
        marginBottom: "10px",
        fontWeight: "bold"
      }}>
        Daily Gold Rates in Saudi Arabia
      </h1>
      
      <p style={{ textAlign: "center", color: "#666", marginBottom: "30px" }}>
        Last Updated: February 13, 2026
      </p>
      
      <div style={{ overflowX: "auto", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
        <table style={{ 
          width: "100%", 
          borderCollapse: "collapse", 
          backgroundColor: "#fff"
        }}>
          <thead>
            <tr style={{ backgroundColor: "#b8860b", color: "white" }}>
              <th style={{ padding: "18px", textAlign: "left", fontSize: "1.1rem" }}>Gold Unit</th>
              <th style={{ padding: "18px", textAlign: "left", fontSize: "1.1rem" }}>Price (SAR)</th>
            </tr>
          </thead>
          <tbody>
            {rates.map((rate, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #eee", backgroundColor: index % 2 === 0 ? "#fff" : "#fffcf2" }}>
                <td style={{ padding: "15px", fontSize: "1rem" }}>{rate.unit}</td>
                <td style={{ padding: "15px", fontSize: "1.1rem", fontWeight: "bold", color: "#b8860b" }}>{rate.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ 
        marginTop: "40px", 
        padding: "20px", 
        backgroundColor: "#fdf8e6", 
        borderRadius: "8px",
        borderLeft: "5px solid #b8860b",
        lineHeight: "1.6"
      }}>
        <p style={{ margin: 0 }}>
          <strong>Note:</strong> Our rates are fetched daily from reliable sources in Saudi Arabia. 
          Currently, we are in English, but <strong>Arabic language support</strong> is coming in 6 months.
        </p>
      </div>
      
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <a href="/" style={{ color: "#0070f3", textDecoration: "none", fontWeight: "600" }}>← Back to Home</a>
      </div>
    </div>
  );
}