import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fdfdfd', fontFamily: 'sans-serif' }}>
      
      {/* Hero Section */}
      <section style={{ backgroundColor: '#000', color: '#fff', padding: '100px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', margin: '0' }}>
          Saudi<span style={{ color: '#FFD700' }}>Rate</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#ccc', marginTop: '15px' }}>
          Live Gold Prices & Currency Exchange Rates in Saudi Arabia
        </p>
        <div style={{ marginTop: '30px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <Link href="/gold-rates" style={{ padding: '12px 25px', backgroundColor: '#FFD700', color: '#000', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold' }}>
            Gold Rates
          </Link>
          <Link href="/currency" style={{ padding: '12px 25px', backgroundColor: '#fff', color: '#000', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold' }}>
            Currency Rates
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <div style={{ maxWidth: '1100px', margin: '50px auto', padding: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          
          {/* Gold Card */}
          <Link href="/gold-rates" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ padding: '40px', border: '1px solid #eee', borderRadius: '10px', textAlign: 'center', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Gold Price</h2>
              <p style={{ color: '#666' }}>Today's 24K, 22K, and 21K gold rates in KSA.</p>
            </div>
          </Link>

          {/* Currency Calculator Card */}
          <Link href="/calculator" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ padding: '40px', border: '1px solid #eee', borderRadius: '10px', textAlign: 'center', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Currency Calculator</h2>
              <p style={{ color: '#666' }}>Convert SAR to PKR, INR, and BDT instantly.</p>
            </div>
          </Link>

        </div>
      </div>

      {/* SEO Section */}
      <section style={{ padding: '60px 20px', textAlign: 'center', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Trusted Finance Hub in Saudi Arabia</h2>
          <p style={{ color: '#444', lineHeight: '1.6' }}>
            SaudiRate is your go-to platform for accurate and real-time financial data. 
            We provide the latest market updates to help expats and locals make informed decisions.
          </p>
        </div>
      </section>

    </main>
  );
}