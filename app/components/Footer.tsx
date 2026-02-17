// @ts-nocheck
import React from 'react';
import Link from 'next/link';

/**
 * @title SaudiRate Premium Footer
 * @description Dual-color logo and clean layout matching the brand identity.
 */

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#020617', 
      color: '#fff', 
      padding: '60px 20px 30px', 
      fontSize: '0.9rem', 
      borderTop: '1px solid #1E293B' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '50px' }}>
        
        {/* Brand Section */}
        <div>
          {/* --- DUAL COLOR LOGO (Matching Navbar) --- */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '28px', fontWeight: '900', letterSpacing: '-1px', lineHeight: '1' }}>
              <span style={{ color: '#10B981' }}>Saudi</span>
              <span style={{ color: '#FACC15' }}>Rate</span>
            </div>
            <div style={{ width: '40px', height: '3px', background: '#FACC15', borderRadius: '10px', marginTop: '6px' }}></div>
          </div>
          
          <p style={{ color: '#94A3B8', lineHeight: '1.7', marginBottom: '15px' }}>
            Your trusted source for daily gold rates, currency exchange, and financial tools in Saudi Arabia.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '25px', color: 'white', fontWeight: '700' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.5' }}>
            <li><Link href="/gold-rates" style={{ color: '#94A3B8', textDecoration: 'none' }}>Gold Rates</Link></li>
            <li><Link href="/currency" style={{ color: '#94A3B8', textDecoration: 'none' }}>Currency Exchange</Link></li>
            <li><Link href="/calculator" style={{ color: '#94A3B8', textDecoration: 'none' }}>Currency Calculator</Link></li>
            <li><Link href="/contact" style={{ color: '#94A3B8', textDecoration: 'none' }}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal Links Section */}
        <div>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '25px', color: 'white', fontWeight: '700' }}>Legal</h3>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.5' }}>
            <li><Link href="/about" style={{ color: '#94A3B8', textDecoration: 'none' }}>About Us</Link></li>
            <li><Link href="/disclaimer" style={{ color: '#94A3B8', textDecoration: 'none' }}>Disclaimer</Link></li>
            <li><Link href="/privacy-policy" style={{ color: '#94A3B8', textDecoration: 'none' }}>Privacy Policy</Link></li>
            <li><Link href="/terms" style={{ color: '#94A3B8', textDecoration: 'none' }}>Terms & Conditions</Link></li>
          </ul>
        </div>

      </div>

      {/* Disclaimer Text & Copyright */}
      <div style={{ borderTop: '1px solid #1E293B', marginTop: '50px', paddingTop: '30px', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', color: '#475569', maxWidth: '900px', margin: '0 auto 20px', lineHeight: '1.6' }}>
          <strong style={{ color: '#94A3B8' }}>Disclaimer:</strong> All rates provided on SaudiRate.com are for information purposes only. While we aim for accuracy, market rates change constantly. Please verify all rates with your bank or financial institution before making any transactions.
        </p>
        <p style={{ color: '#64748B', fontSize: '13px', fontWeight: '500' }}>
          &copy; {new Date().getFullYear()} SaudiRate.com - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;