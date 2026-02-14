import React from 'react';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      flexWrap: 'wrap', // یہ سب سے اہم ہے: موبائل پر لنکس کو نیچے گرا دے گا
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 15px',
      backgroundColor: '#333',
      color: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      width: '100%',
      boxSizing: 'border-box' // یہ اسکرین کو باہر نکلنے سے روکے گا
    }}>
      <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
        <a href="/" style={{ color: 'white', textDecoration: 'none' }}>SaudiPrice</a>
      </div>
      
      <div style={{ 
        display: 'flex', 
        gap: '15px', 
        marginTop: '5px' // موبائل پر تھوڑا فاصلہ دے گا
      }}>
        <a href="/gold-rates" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem' }}>Gold</a>
        <a href="/currency" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem' }}>Currency</a>
        <a href="/electronics" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem' }}>Electronics</a>
      </div>
    </nav>
  );
}