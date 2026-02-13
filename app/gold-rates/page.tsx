import React from 'react';

export default function GoldRates() {
  const rates = [
    { unit: "24K Gold (1 Gram)", price: "285.50 SAR" },
    { unit: "22K Gold (1 Gram)", price: "261.75 SAR" },
    { unit: "21K Gold (1 Gram)", price: "250.00 SAR" },
    { unit: "18K Gold (1 Gram)", price: "214.25 SAR" },
  ];

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#b8860b" }}>Daily Gold Rates in Saudi Arabia</h1>
      <p style={{ textAlign: "center", color: "#666" }}>Last Updated: February 13, 2026</p>
      
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ padding: "12px", border: "1px solid #ddd", textAlign: "left" }}>Gold Unit</th>
            <th style={{ padding: "12px", border: "1px solid #ddd", textAlign: "left" }}>Price (SAR)</th>
          </tr>
        </thead>
        <tbody>
          {rates.map((rate, index) => (
            <tr key={index}>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>{rate.unit}</td>
              <td style={{ padding: "12px", border: "1px solid #ddd", fontWeight: "bold" }}>{rate.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ marginTop: "20px", fontSize: "0.8rem", color: "#888" }}>
        Note: Prices are for educational purposes and may vary by city. Support in Arabic will be available in 6 months. [cite: 2026-02-13]
      </p>
    </div>
  );
}