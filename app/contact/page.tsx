import React from 'react';

export default function ContactPage() {
  return (
    <div style={{ 
      padding: "60px 20px", 
      textAlign: "center", 
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      minHeight: "100vh"
    }}>
      <div style={{ 
        maxWidth: "500px", 
        margin: "0 auto", 
        backgroundColor: "white", 
        padding: "40px", 
        borderRadius: "15px", 
        boxShadow: "0 4px 15px rgba(0,0,0,0.05)" 
      }}>
        <h1 style={{ color: "#333", marginBottom: "20px" }}>Contact Us</h1>
        <p style={{ color: "#666", fontSize: "1.1rem" }}>
          Have questions? Reach out to us at:
        </p>
        <p style={{ 
          color: "#0070f3", 
          fontSize: "1.2rem", 
          fontWeight: "bold", 
          margin: "20px 0" 
        }}>
          support@saudiprice.com
        </p>
        <p style={{ color: "#888", fontSize: "0.9rem", marginBottom: "30px" }}>
          We provide daily price updates for Saudi Arabia. 
          Arabic support is coming in 6 months!
        </p>

        {/* یہ رہا واپسی کا بٹن */}
        <div style={{ borderTop: "1px solid #eee", paddingTop: "20px" }}>
          <a href="/" style={{ 
            color: "#0070f3", 
            textDecoration: "none", 
            fontWeight: "bold",
            fontSize: "1rem" 
          }}>
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}