import React from 'react';

export default function ContactPage() {
  return (
    <div style={{ 
      padding: "60px 20px", 
      maxWidth: "900px", 
      margin: "0 auto", 
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: "1.6",
      color: "#333"
    }}>
      <h1 style={{ color: "#0070f3", fontSize: "2.5rem", marginBottom: "20px" }}>Contact Us</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
        Have questions about gold rates or currency exchange in Saudi Arabia? We are here to help!
      </p>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
        gap: "20px",
        marginTop: "40px" 
      }}>
        {/* Email Box */}
        <div style={{ padding: "20px", border: "1px solid #eaeaea", borderRadius: "10px", backgroundColor: "#fafafa" }}>
          <h3 style={{ marginTop: "0" }}>📧 Email</h3>
          <p>Send us an email at:<br />
          <strong>support@saudiprice.com</strong></p>
        </div>

        {/* Support Box */}
        <div style={{ padding: "20px", border: "1px solid #eaeaea", borderRadius: "10px", backgroundColor: "#fafafa" }}>
          <h3 style={{ marginTop: "0" }}>🕒 Support Hours</h3>
          <p>We are available from 9:00 AM to 6:00 PM (Saudi Time), Sunday to Thursday.</p>
        </div>
      </div>

      <div style={{ marginTop: "50px", fontSize: "0.9rem", color: "#666" }}>
        <p>Note: Our website is currently in English, but we will provide support in Arabic starting in 6 months. [cite: 2026-02-13]</p>
      </div>
    </div>
  );
}