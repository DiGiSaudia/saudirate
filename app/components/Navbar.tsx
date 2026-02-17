"use client";
import React, { useState } from 'react';
import Link from 'next/link';

/**
 * @title SaudiRate Premium Navbar
 * @description Dual-color text logo with zero-error TypeScript logic.
 */

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Gold Rates", path: "/gold-rates" },
    { name: "Currency", path: "/currency" },
    { name: "Calculator", path: "/calculator" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav style={{ 
      backgroundColor: '#020617', 
      padding: '15px 20px', 
      color: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid #1E293B'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        
        {/* --- DUAL COLOR LOGO (Saudi in Green, Rate in Yellow) --- */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '26px', fontWeight: '900', letterSpacing: '-1px', lineHeight: '1' }}>
            <span style={{ color: '#10B981' }}>Saudi</span>
            <span style={{ color: '#FACC15' }}>Rate</span>
          </div>
          <div style={{ width: '40px', height: '3px', background: '#FACC15', borderRadius: '10px', marginTop: '4px' }}></div>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '25px' }} className="desktop-menu">
          {navLinks.map((link, idx) => (
            <Link key={idx} href={link.path} style={{ 
              color: '#94A3B8', 
              textDecoration: 'none', 
              fontSize: '15px',
              fontWeight: '600',
              transition: '0.3s'
            }}>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div 
          style={{ cursor: 'pointer', fontSize: '24px', color: '#10B981' }} 
          className="mobile-btn" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div style={{ 
          backgroundColor: '#0F172A', 
          padding: '20px', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '20px',
          borderTop: '1px solid #1E293B',
          marginTop: '15px'
        }}>
          {navLinks.map((link, idx) => (
            <Link 
              key={idx} 
              href={link.path} 
              onClick={() => setIsOpen(false)} 
              style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: '600' }}
            >
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