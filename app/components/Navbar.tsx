"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Gold Rates", path: "/gold-rates" },
    { name: "Currency", path: "/currency" },
    { name: "Calculator", path: "/calculator" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav style={{ 
      backgroundColor: '#1a1a1a', 
      padding: '10px 20px', 
      color: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        
        {/* Logo Section */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img 
            src="/logo.png" 
            alt="Saudi Rate Logo" 
            style={{ 
              height: '45px', 
              width: 'auto', 
              objectFit: 'contain' 
            }} 
          />
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '20px' }} className="desktop-menu">
          {navLinks.map((link, idx) => (
            <Link key={idx} href={link.path} style={{ 
              color: 'white', 
              textDecoration: 'none', 
              fontSize: '1rem',
              fontWeight: '500'
            }}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div style={{ cursor: 'pointer', fontSize: '1.5rem' }} 
              className="mobile-btn" 
              onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✖' : '☰'}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div style={{ 
          backgroundColor: '#1a1a1a', 
          padding: '20px', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '15px',
          borderTop: '1px solid #333'
        }}>
          {navLinks.map((link, idx) => (
            <Link key={idx} href={link.path} onClick={() => setIsOpen(false)} style={{ 
              color: 'white', 
              textDecoration: 'none', 
              fontSize: '1.1rem' 
            }}>
              {link.name}
            </Link>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-btn { display: none !important; }
        }
      `}</style>
    </nav>
  );
}