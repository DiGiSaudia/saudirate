import React from 'react';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 15px',
      backgroundColor: '#333',
      color: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%',
      boxSizing: 'border-box', // یہ لائن چوڑائی کو کنٹرول میں رکھتی ہے
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
        <a href="/" style={{ color: 'white', textDecoration: 'none' }}>SaudiPrice</a>
      </div>
      <div style={{ 
        display: 'flex', 
        gap: '8px', 
        flexWrap: 'wrap', // موبائل پر لنکس خود بخود نیچے آ جائیں گے
        justifyContent: 'flex-end'
      }}>
        <a href="/gold-rates" style={{ color: 'white', textDecoration: 'none', fontSize: '0.75rem' }}>Gold</a>
        <a href="/currency" style={{ color: 'white', textDecoration: 'none', fontSize: '0.75rem' }}>Currency</a>
        <a href="/electronics" style={{ color: 'white', textDecoration: 'none', fontSize: '0.75rem' }}>Electronics</a>
        <a href="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '0.75rem' }}>Contact</a>
      </div>
    </nav>
  );
}