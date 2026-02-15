import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#111', color: '#fff', padding: '60px 20px', fontSize: '0.9rem', borderTop: '4px solid #ffcc00' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
        
        {/* Brand Section */}
        <div>
          <h2 style={{ fontSize: '1.5rem', color: '#ffcc00', marginBottom: '15px' }}>SaudiRate.com</h2>
          <p style={{ color: '#ccc', lineHeight: '1.6' }}>
            Your trusted source for daily gold rates, currency exchange, and financial tools in KSA.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', color: 'white' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
            <li><Link href="/gold-rates" style={{ color: '#aaa', textDecoration: 'none' }}>Gold Rates</Link></li>
            <li><Link href="/currency" style={{ color: '#aaa', textDecoration: 'none' }}>Currency Exchange</Link></li>
            <li><Link href="/calculator" style={{ color: '#aaa', textDecoration: 'none' }}>Currency Calculator</Link></li>
            <li><Link href="/contact" style={{ color: '#aaa', textDecoration: 'none' }}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal Pages */}
        <div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', color: 'white' }}>Legal</h3>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
            <li><Link href="/about" style={{ color: '#aaa', textDecoration: 'none' }}>About Us</Link></li>
            <li><Link href="/privacy-policy" style={{ color: '#aaa', textDecoration: 'none' }}>Privacy Policy</Link></li>
            <li><Link href="/terms" style={{ color: '#aaa', textDecoration: 'none' }}>Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #333', marginTop: '40px', paddingTop: '20px', textAlign: 'center', color: '#666' }}>
        <p>&copy; {new Date().getFullYear()} SaudiRate.com - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;