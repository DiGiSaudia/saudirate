import React from 'react';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 30px',
      backgroundColor: '#333',
      color: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        <a href="/" style={{ color: 'white', textDecoration: 'none' }}>SaudiPrice</a>
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="/gold-rates" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem' }}>Gold</a>
        <a href="/currency" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem' }}>Currency</a>
        <a href="/electronics" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem' }}>Electronics</a>
        <a href="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</a>
      </div>
    </nav>
  );
}