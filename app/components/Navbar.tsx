"use client"; // یہ لائن اوپر لازمی لکھنی ہے تاکہ بٹن کام کرے
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 20px',
      }}>
        {/* Logo */}
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>
            Saudi<span style={{ color: '#b8860b' }}>Price</span>
          </a>
        </div>

        {/* Mobile Toggle Button (تین لائنیں) */}
        <div 
          onClick={() => setIsOpen(!isOpen)} 
          style={{ cursor: 'pointer', display: 'block', padding: '5px' }}
          className="mobile-menu-btn"
        >
          <div style={{ width: '25px', height: '3px', backgroundColor: 'white', margin: '5px 0' }}></div>
          <div style={{ width: '25px', height: '3px', backgroundColor: 'white', margin: '5px 0' }}></div>
          <div style={{ width: '25px', height: '3px', backgroundColor: 'white', margin: '5px 0' }}></div>
        </div>

        {/* Links Area */}
        <div style={{
          display: isOpen ? 'flex' : 'none', // بٹن دبانے پر کھلے گا یا بند ہوگا
          flexDirection: 'column',
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          backgroundColor: '#333',
          padding: '20px',
          gap: '15px',
          boxSizing: 'border-box',
          borderTop: '1px solid #444'
        }} className="nav-links">
          <a href="/gold-rates" onClick={() => setIsOpen(false)} style={{ color: 'white', textDecoration: 'none' }}>Gold Rates</a>
          <a href="/currency" onClick={() => setIsOpen(false)} style={{ color: 'white', textDecoration: 'none' }}>Currency</a>
          <a href="/electronics" onClick={() => setIsOpen(false)} style={{ color: 'white', textDecoration: 'none' }}>Electronics</a>
          <a href="/contact" onClick={() => setIsOpen(false)} style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
        </div>
      </div>

      {/* CSS for responsiveness - اسے مٹائیے گا نہیں */}
      <style jsx>{`
        @media (min-width: 768px) {
          .mobile-menu-btn { display: none !important; }
          .nav-links {
            display: flex !important;
            flex-direction: row !important;
            position: static !important;
            width: auto !important;
            padding: 0 !important;
            border: none !important;
            gap: 25px !important;
          }
        }
      `}</style>
    </nav>
  );
}