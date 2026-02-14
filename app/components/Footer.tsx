import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#1a1a1a', 
      color: 'white', 
      padding: '40px 20px', 
      marginTop: '50px',
      borderTop: '3px solid #ffcc00'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '30px',
        textAlign: 'center'
      }}>
        {/* About Section */}
        <div>
          <h3 style={{ color: '#ffcc00' }}>SaudiRate.com</h3>
          <p style={{ fontSize: '0.9rem', color: '#ccc', lineHeight: '1.6' }}>
            Your trusted source for daily gold rates, currency exchange, and latest electronics prices in KSA.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ marginBottom: '15px' }}>Quick Links</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link href="/gold-rates" style={{ color: '#bbb', textDecoration: 'none' }}>Gold Rates</Link>
            <Link href="/currency" style={{ color: '#bbb', textDecoration: 'none' }}>Currency Exchange</Link>
            <Link href="/electronics" style={{ color: '#bbb', textDecoration: 'none' }}>Electronics</Link>
          </div>
        </div>

        {/* Contact info */}
        <div>
          <h4 style={{ marginBottom: '15px' }}>Stay Updated</h4>
          <p style={{ fontSize: '0.9rem', color: '#bbb' }}>Arabic support coming in 6 months!</p>
          <p style={{ fontSize: '0.9rem', color: '#ffcc00' }}>🇸🇦 Proudly serving KSA</p>
        </div>
      </div>

      <div style={{ 
        textAlign: 'center', 
        marginTop: '40px', 
        paddingTop: '20px', 
        borderTop: '1px solid #333',
        fontSize: '0.8rem',
        color: '#777'
      }}>
        © 2026 SaudiRate.com - All Rights Reserved.
      </div>
    </footer>
  );
}