import React from 'react';

export default function Home() {
  const categories = [
    { title: "Gold Rates", link: "/gold-rates", color: "#b8860b", icon: "💰" },
    { title: "Currency Exchange", link: "/currency", color: "#2e7d32", icon: "💵" },
    { title: "Electronics", link: "/electronics", color: "#1976d2", icon: "📱" },
    { title: "Contact Us", link: "/contact", color: "#555", icon: "📞" },
  ];

  return (
    <div style={{ 
      padding: "40px 15px", 
      fontFamily: "Arial, sans-serif", 
      textAlign: "center", 
      backgroundColor: "#f4f7f6", 
      minHeight: "100vh",
      overflowX: "hidden" // موبائل پر دائیں طرف کی فالتو جگہ ختم کرنے کے لیے
    }}>
      <h1 style={{ color: "#333", fontSize: "2.5rem", fontWeight: "bold" }}>Saudi Price Portal</h1>
      <p style={{ color: "#666", marginBottom: "40px" }}>Your one-stop shop for latest rates in Saudi Arabia</p>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
        gap: "20px", 
        maxWidth: "1000px", 
        margin: "0 auto" 
      }}>
        {categories.map((cat, i) => (
          <a key={i} href={cat.link} style={{ 
            textDecoration: "none", 
            padding: "30px", 
            backgroundColor: "white", 
            borderRadius: "15px", 
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            display: "block"
          }}>
            <div style={{ fontSize: "3rem", marginBottom: "10px" }}>{cat.icon}</div>
            <h3 style={{ color: cat.color, margin: "10px 0" }}>{cat.title}</h3>
            <span style={{ fontSize: "0.9rem", color: "#888" }}>View Details →</span>
          </a>
        ))}
      </div>
      
      {/* ہم نے یہاں سے فوٹر ہٹا دیا ہے کیونکہ وہ اب layout.tsx سے آ رہا ہے */}
    </div>
  );
}