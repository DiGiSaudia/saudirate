// @ts-nocheck
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#111', color: '#fff', padding: '50px 20px 20px', fontSize: '0.9rem', borderTop: '4px solid #ffcc00' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
        
        {/* Brand Section */}
        <div>
          <h2 style={{ fontSize: '1.5rem', color: '#ffcc00', marginBottom: '15px', fontWeight: 'bold' }}>SaudiRate.com</h2>
          <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '15px' }}>
            Your trusted source for daily gold rates, currency exchange, and financial tools in Saudi Arabia.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '20px', color: 'white', borderBottom: '1px solid #333', paddingBottom: '5px', display: 'inline-block' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2' }}>
            <li><Link href="/gold-rates" style={{ color: '#aaa', textDecoration: 'none' }}>Gold Rates</Link></li>
            <li><Link href="/currency" style={{ color: '#aaa', textDecoration: 'none' }}>Currency Exchange</Link></li>
            <li><Link href="/calculator" style={{ color: '#aaa', textDecoration: 'none' }}>Currency Calculator</Link></li>
            <li><Link href="/contact" style={{ color: '#aaa', textDecoration: 'none' }}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal Links Section */}
        <div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '20px', color: 'white', borderBottom: '1px solid #333', paddingBottom: '5px', display: 'inline-block' }}>Legal</h3>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.2' }}>
            <li><Link href="/about" style={{ color: '#aaa', textDecoration: 'none' }}>About Us</Link></li>
            <li><Link href="/disclaimer" style={{ color: '#aaa', textDecoration: 'none' }}>Disclaimer</Link></li>
            <li><Link href="/privacy-policy" style={{ color: '#aaa', textDecoration: 'none' }}>Privacy Policy</Link></li>
            <li><Link href="/terms" style={{ color: '#aaa', textDecoration: 'none' }}>Terms & Conditions</Link></li>
          </ul>
        </div>

      </div>

      {/* Disclaimer Text & Copyright */}
      <div style={{ borderTop: '1px solid #333', marginTop: '40px', paddingTop: '20px', textAlign: 'center' }}>
        <p style={{ fontSize: '11px', color: '#777', maxWidth: '800px', margin: '0 auto 20px', lineHeight: '1.5' }}>
          <strong>Disclaimer:</strong> All rates provided on Saudi Rate are for information purposes only. While we aim for accuracy, market rates change constantly. Please verify all rates with your bank or financial institution before making any transactions.
        </p>
        <p style={{ color: '#666', fontSize: '12px' }}>
          &copy; {new Date().getFullYear()} SaudiRate.com - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;