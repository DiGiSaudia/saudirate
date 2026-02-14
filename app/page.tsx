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
      padding: "40px 20px", 
      fontFamily: "Arial, sans-serif", 
      textAlign: "center", 
      backgroundColor: "#f4f7f6", 
      minHeight: "100vh",
      width: "100%",            // یہ اسکرین کو پورا کور کرے گا
      boxSizing: "border-box",  // پیڈنگ کی وجہ سے اسکرین باہر نہیں نکلے گی
      overflowX: "hidden"       // دائیں بائیں ہلنے سے روکے گا
    }}>
      <h1 style={{ color: "#333", fontSize: "2.2rem", fontWeight: "bold", marginTop: "10px" }}>Saudi Price Portal</h1>
      <p style={{ color: "#666", marginBottom: "40px", fontSize: "1rem" }}>Your one-stop shop for latest rates in Saudi Arabia</p>

      <div style={{ 
        display: "grid", 
        // یہ لائن موبائل پر کارڈز کو خود بخود سیٹ کر دے گی
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
        gap: "20px", 
        maxWidth: "1000px", 
        margin: "0 auto",
        width: "100%"
      }}>
        {categories.map((cat, i) => (
          <a key={i} href={cat.link} style={{ 
            textDecoration: "none", 
            padding: "30px", 
            backgroundColor: "white", 
            borderRadius: "15px", 
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{cat.icon}</div>
            <h3 style={{ color: cat.color, margin: "0 0 10px 0", fontSize: "1.4rem" }}>{cat.title}</h3>
            <span style={{ fontSize: "0.9rem", color: "#888", marginTop: "5px" }}>View Details →</span>
          </a>
        ))}
      </div>
      
      {/* فوٹر یہاں سے ہٹا دیا گیا ہے کیونکہ وہ layout.tsx میں موجود ہے */}
    </div>
  );
}