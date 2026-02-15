'use client';
import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '80px 20px', 
        textAlign: 'center', 
        backgroundColor: '#1a1a1a', 
        color: 'white',
        backgroundImage: 'linear-gradient(45deg, #1a1a1a 0%, #333 100%)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>
            Saudi <span style={{ color: '#ffcc00' }}>Gold & Currency</span> Rates
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '40px' }}>
            Get real-time updates on Gold prices and Exchange rates in Saudi Arabia. 
            Trusted, fast, and accurate data at your fingertips.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/gold-rates" style={{ 
              backgroundColor: '#ffcc00', color: '#000', padding: '15px 30px', 
              borderRadius: '10px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.1rem' 
            }}>
              Check Gold Rates
            </Link>
            <Link href="/calculator" style={{ 
              backgroundColor: 'transparent', color: 'white', padding: '15px 30px', 
              borderRadius: '10px', fontWeight: 'bold', textDecoration: 'none', 
              fontSize: '1.1rem', border: '2px solid white' 
            }}>
              Currency Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section style={{ padding: '60px 20px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          
          <div style={{ padding: '30px', borderRadius: '15px', border: '1px solid #eee', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>💰</div>
            <h3 style={{ marginBottom: '10px' }}>Live Gold Prices</h3>
            <p style={{ color: '#666' }}>Daily updates for 24K, 22K, 21K, and 18K gold across KSA.</p>
          </div>

          <div style={{ padding: '30px', borderRadius: '15px', border: '1px solid #eee', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>💱</div>
            <h3 style={{ marginBottom: '10px' }}>Currency Exchange</h3>
            <p style={{ color: '#666' }}>Real-time SAR exchange rates for PKR, INR, PHP, and more.</p>
          </div>

          <div style={{ padding: '30px', borderRadius: '15px', border: '1px solid #eee', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📊</div>
            <h3 style={{ marginBottom: '10px' }}>Smart Calculator</h3>
            <p style={{ color: '#666' }}>Easily convert your currency with our latest market-based calculator.</p>
          </div>

        </div>
      </section>
    </main>
  );
}