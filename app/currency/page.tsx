import React from 'react';

export default function CurrencyPage() {
  const rates = [
    { country: "Pakistan (PKR)", rate: "74.12", flag: "🇵🇰" },
    { country: "India (INR)", rate: "22.45", flag: "🇮🇳" },
    { country: "Bangladesh (BDT)", rate: "29.30", flag: "🇧🇩" },
    { country: "Philippines (PHP)", rate: "14.85", flag: "🇵🇭" },
  ];

  return (
    <div style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#2e7d32", fontSize: "2rem" }}>Saudi Riyal (SAR) Exchange Rates</h1>
      <p style={{ textAlign: "center", color: "#666", marginBottom: "30px" }}>Live Interbank Rates - Feb 13, 2026</p>
      
      <div style={{ boxShadow: "0 4px 15px rgba(0,0,0,0.1)", borderRadius: "10px", overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "white" }}>
          <thead style={{ backgroundColor: "#2e7d32", color: "white" }}>
            <tr>
              <th style={{ padding: "18px", textAlign: "left" }}>Country</th>
              <th style={{ padding: "18px", textAlign: "left" }}>1 SAR Equals</th>
            </tr>
          </thead>
          <tbody>
            {rates.map((r, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #eee", backgroundColor: i % 2 === 0 ? "#fff" : "#f9fdf9" }}>
                <td style={{ padding: "15px" }}>{r.flag} {r.country}</td>
                <td style={{ padding: "15px", fontWeight: "bold", color: "#2e7d32" }}>{r.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <a href="/" style={{ color: "#0070f3", textDecoration: "none", fontWeight: "bold" }}>← Back to Home</a>
      </div>
    </div>
  );
}