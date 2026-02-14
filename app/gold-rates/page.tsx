import React from 'react';

export default function GoldRates() {
  // یہ لائن خود بخود آج کی تاریخ بنا دے گی
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const goldPrices = [
    { unit: "24K Gold (10 Gram)", price: "2,850 SAR" },
    { unit: "22K Gold (10 Gram)", price: "2,612 SAR" },
    { unit: "24K Gold (1 Tola)", price: "3,324 SAR" },
    { unit: "22K Gold (1 Tola)", price: "3,047 SAR" },
  ];

  return (
    <div style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#b8860b", fontSize: "2.5rem" }}>Gold Rates in Saudi Arabia</h1>
      
      {/* یہاں تاریخ خود بخود اپ ڈیٹ ہوگی */}
      <p style={{ textAlign: "center", color: "#666", fontSize: "1.1rem", marginBottom: "30px" }}>
        Last Updated: <strong>{today}</strong>
      </p>
      
      <div style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.1)", borderRadius: "15px", overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "white" }}>
          <thead style={{ backgroundColor: "#b8860b", color: "white" }}>
            <tr>
              <th style={{ padding: "20px", textAlign: "left" }}>Gold Unit</th>
              <th style={{ padding: "20px", textAlign: "left" }}>Price (SAR)</th>
            </tr>
          </thead>
          <tbody>
            {goldPrices.map((item, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #eee", backgroundColor: index % 2 === 0 ? "#fff" : "#fffcf2" }}>
                <td style={{ padding: "18px" }}>{item.unit}</td>
                <td style={{ padding: "18px", fontWeight: "bold", color: "#b8860b" }}>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: "40px", padding: "20px", backgroundColor: "#fff9e6", borderRadius: "10px", border: "1px solid #ffeeba" }}>
        <p style={{ margin: 0, fontSize: "0.9rem", color: "#856404" }}>
          <strong>Note:</strong> Gold prices change frequently. These are estimated market rates in Saudi Arabia.
        </p>
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <a href="/" style={{ color: "#0070f3", textDecoration: "none", fontWeight: "bold" }}>← Back to Home</a>
      </div>
    </div>
  );
}