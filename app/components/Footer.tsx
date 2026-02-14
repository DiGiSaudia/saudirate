import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      backgroundColor: '#222',
      color: 'white',
      padding: '40px 20px',
      marginTop: '50px',
      borderTop: '5px solid #1976d2'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px'
      }}>
        {/* About Column */}
        <div>
          <h3 style={{ color: '#1976d2' }}>SaudiPrice.com</h3>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#ccc' }}>
            Your premium destination for real-time gold rates, currency exchange, and electronics prices in Saudi Arabia.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
            <li><a href="/gold-rates" style={{ color: '#ccc', textDecoration: 'none' }}>Gold Rates</a></li>
            <li><a href="/currency" style={{ color: '#ccc', textDecoration: 'none' }}>Currency Exchange</a></li>
            <li><a href="/electronics" style={{ color: '#ccc', textDecoration: 'none' }}>Electronics</a></li>
            <li><a href="/contact" style={{ color: '#ccc', textDecoration: 'none' }}>Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4>Follow Us</h4>
          <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
            {/* یہ لنکس آپ بعد میں اپنے اصلی اکاؤنٹس سے بدل سکتے ہیں */}
            <a href="#" style={socialIconStyle}>FB</a>
            <a href="#" style={socialIconStyle}>TW</a>
            <a href="#" style={socialIconStyle}>IG</a>
          </div>
        </div>
      </div>

      <div style={{
        textAlign: 'center',
        marginTop: '40px',
        paddingTop: '20px',
        borderTop: '1px solid #444',
        fontSize: '0.8rem',
        color: '#888'
      }}>
        © {currentYear} SaudiPrice.com. All Rights Reserved.
      </div>
    </footer>
  );
}

const socialIconStyle = {
  backgroundColor: '#444',
  color: 'white',
  width: '35px',
  height: '35px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  textDecoration: 'none',
  fontSize: '0.8rem',
  fontWeight: 'bold'
};