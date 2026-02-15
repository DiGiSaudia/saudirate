'use client';
import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', fontFamily: 'system-ui, sans-serif', backgroundColor: '#f8f9fa' }}>
      
      {/* Hero Section (Dark & Gold Theme) */}
      <section style={{ 
        padding: '100px 20px 140px 20px', // Bottom padding زیادہ رکھی ہے تاکہ کارڈز اوپر آ سکیں
        textAlign: 'center', 
        backgroundColor: '#1a1a1a', 
        color: 'white',
        backgroundImage: 'linear-gradient(to bottom, #000000, #1a1a1a)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px', letterSpacing: '-1px' }}>
            Saudi <span style={{ color: '#ffcc00' }}>Rate</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#ccc', marginBottom: '40px', lineHeight: '1.6' }}>
            The most trusted source for Live Gold Prices, Currency Exchange Rates, and Financial Tools in Saudi Arabia.
          </p>
          
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/gold-rates" style={{ 
              backgroundColor: '#ffcc00', color: '#000', padding: '14px 35px', 
              borderRadius: '50px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.1rem',
              boxShadow: '0 4px 15px rgba(255, 204, 0, 0.3)'
            }}>
              Check Gold Rates
            </Link>
            <Link href="/currency" style={{ 
              backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', padding: '14px 35px', 
              borderRadius: '50px', fontWeight: 'bold', textDecoration: 'none', 
              fontSize: '1.1rem', border: '1px solid rgba(255,255,255,0.2)' 
            }}>
              Exchange Rates
            </Link>
          </div>
        </div>
      </section>

      {/* 3 Main Categories (Linked & Styled) */}
      <section style={{ padding: '0 20px 80px 20px' }}>
        <div style={{ 
          maxWidth: '1100px', 
          margin: '-70px auto 0', // یہ کارڈز کو ہیرو سیکشن کے اوپر لے آئے گا
          position: 'relative', 
          zIndex: '10' 
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            
            {/* Card 1: Gold Rates */}
            <Link href="/gold-rates" style={{ textDecoration: 'none' }}>
              <div style={{ 
                backgroundColor: 'white', padding: '40px', borderRadius: '20px', 
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)', textAlign: 'center', 
                borderBottom: '5px solid #ffcc00', cursor: 'pointer', height: '100%',
                transition: 'transform 0.2s ease'
              }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>💰</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '10px' }}>Gold Prices</h3>
                <p style={{ color: '#666' }}>Live updates for 24K, 22K, 21K & 18K Gold.</p>
              </div>
            </Link>

            {/* Card 2: Currency Rates */}
            <Link href="/currency" style={{ textDecoration: 'none' }}>
              <div style={{ 
                backgroundColor: 'white', padding: '40px', borderRadius: '20px', 
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)', textAlign: 'center', 
                borderBottom: '5px solid #1a1a1a', cursor: 'pointer', height: '100%',
                transition: 'transform 0.2s ease'
              }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>💱</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '10px' }}>Exchange Rates</h3>
                <p style={{ color: '#666' }}>SAR to PKR, INR, PHP, BDT & more.</p>
              </div>
            </Link>

            {/* Card 3: Calculator */}
            <Link href="/calculator" style={{ textDecoration: 'none' }}>
              <div style={{ 
                backgroundColor: 'white', padding: '40px', borderRadius: '20px', 
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)', textAlign: 'center', 
                borderBottom: '5px solid #0070f3', cursor: 'pointer', height: '100%',
                transition: 'transform 0.2s ease'
              }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>🔢</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '10px' }}>Converter</h3>
                <p style={{ color: '#666' }}>Calculate precise amounts instantly.</p>
              </div>
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}