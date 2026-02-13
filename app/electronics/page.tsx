import React from 'react';

export default function ElectronicsPage() {
  const products = [
    { name: "iPhone 15 Pro (256GB)", price: "4,199 SAR", brand: "Apple" },
    { name: "Samsung Galaxy S24 Ultra", price: "4,350 SAR", brand: "Samsung" },
    { name: "MacBook Air M2", price: "3,849 SAR", brand: "Apple" },
    { name: "Sony PlayStation 5", price: "2,099 SAR", brand: "Sony" },
  ];

  return (
    <div style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#1976d2", fontSize: "2rem" }}>Electronics Prices in Saudi Arabia</h1>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px", marginTop: "30px" }}>
        {products.map((p, i) => (
          <div key={i} style={{ padding: "20px", backgroundColor: "white", borderRadius: "15px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", border: "1px solid #eef2f6" }}>
            <span style={{ fontSize: "0.8rem", color: "#1976d2", fontWeight: "bold", textTransform: "uppercase" }}>{p.brand}</span>
            <h3 style={{ margin: "10px 0", color: "#333" }}>{p.name}</h3>
            <p style={{ fontSize: "1.4rem", color: "#d32f2f", fontWeight: "bold" }}>{p.price}</p>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <a href="/" style={{ color: "#0070f3", textDecoration: "none", fontWeight: "bold" }}>← Back to Home</a>
      </div>
    </div>
  );
}