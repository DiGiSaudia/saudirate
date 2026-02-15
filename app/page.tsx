"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      // سعودی عرب کے ٹائم زون کے مطابق فارمیٹنگ
      const formatted = now.toLocaleDateString('en-GB', {
        day: 'numeric', 
        month: 'short', 
        year: 'numeric',
        timeZone: 'Asia/Riyadh'
      }) + '  |  ' + now.toLocaleTimeString('en-GB', {
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        timeZone: 'Asia/Riyadh'
      });
      setDateTime(formatted + " (KSA)");
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f4f7f6', fontFamily: 'sans-serif' }}>
      
      {/* TOP HEADER BAR - FIXED TO SAUDI TIME */}
      <div style={{ 
        backgroundColor: '#FFD700', 
        color: '#000', 
        padding: '8px 20px', 
        fontSize: '0.85rem', 
        fontWeight: 'bold', 
        textAlign: 'center',
        borderBottom: '1px solid #e5c100'
      }}>
        {dateTime ? `🕒 Saudi Arabia Time: ${dateTime}` : 'Loading...'}
      </div>

      {/* باقی سارا ہیرو سیکشن اور باکسز وہی رہیں گے جو پہلے تھے */}
      <section style={{ background: '#000', color: '#fff', padding: '60px 20px 100px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', margin: '0 0 10px' }}>
          Saudi<span style={{ color: '#FFD700' }}>Rate</span>
        </h1>
        <p style={{ color: '#ccc', fontSize: '1.2rem', marginBottom: '50px' }}>
          Real-Time Gold Prices & Currency Exchange
        </p>

        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          {/* Box 1: Gold */}
          <div style={{ backgroundColor: '#fff', color: '#000', padding: '40px 20px', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🟡</div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold' }}>Gold Rates</h2>
            <p style={{ color: '#666', margin: '15px 0 25px' }}>Live 24K, 22K, and 21K gold prices.</p>
            <Link href="/gold-rates" style={{ display: 'block', backgroundColor: '#FFD700', color: '#000', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>View Gold Prices</Link>
          </div>

          {/* Box 2: Currency */}
          <div style={{ backgroundColor: '#fff', color: '#000', padding: '40px 20px', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>💱</div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold' }}>Currency Rates</h2>
            <p style={{ color: '#666', margin: '15px 0 25px' }}>SAR to PKR, INR, BDT exchange rates.</p>
            <Link href="/currency" style={{ display: 'block', backgroundColor: '#111', color: '#fff', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>Check Rates</Link>
          </div>

          {/* Box 3: Calculator */}
          <div style={{ backgroundColor: '#fff', color: '#000', padding: '40px 20px', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🧮</div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold' }}>Currency Calculator</h2>
            <p style={{ color: '#666', margin: '15px 0 25px' }}>Instant remittance amounts calculation.</p>
            <Link href="/calculator" style={{ display: 'block', backgroundColor: '#28a745', color: '#fff', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>Use Calculator</Link>
          </div>
        </div>
      </section>

      {/* SEO ARTICLE AREA */}
      <div style={{ maxWidth: '1100px', margin: '40px auto', padding: '0 20px' }}>
        <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '15px', border: '1px solid #eee', lineHeight: '1.8' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>Saudi Arabia Financial Insights</h2>
          <p>Get the most accurate gold and currency data updated according to Saudi Market time.</p>
        </div>
      </div>

    </main>
  );
}