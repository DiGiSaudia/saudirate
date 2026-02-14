import React from 'react';

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#333',
      color: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      width: '100%',
    }}>
      <div style={{
        maxWidth: '1200px', // ڈیسک ٹاپ پر مینیو کو بہت زیادہ پھیلنے سے روکے گا
        margin: '0 auto',   // مینیو کو اسکرین کے درمیان میں لائے گا
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 20px',
        flexWrap: 'wrap'
      }}>
        {/* Logo Text */}
        <div style={{ fontSize: '1.6rem', fontWeight: 'bold', letterSpacing: '1px' }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>
            Saudi<span style={{ color: '#b8860b' }}>Price</span>
          </a>
        </div>
        
        {/* Menu Links */}
        <div style={{ 
          display: 'flex', 
          gap: '25px', 
          alignItems: 'center'
        }}>
          <a href="/gold-rates" style={{ color: 'white', textDecoration: 'none', fontSize: '1rem', fontWeight: '500' }}>Gold</a>
          <a href="/currency" style={{ color: 'white', textDecoration: 'none', fontSize: '1rem', fontWeight: '500' }}>Currency</a>
          <a href="/electronics" style={{ color: 'white', textDecoration: 'none', fontSize: '1rem', fontWeight: '500' }}>Electronics</a>
          <a href="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '1rem', fontWeight: '500' }}>Contact</a>
        </div>
      </div>
    </nav>
  );
}