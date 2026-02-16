// @ts-nocheck
"use client";
import React from 'react';
import Link from 'next/link';

export default function DisclaimerPage() {
  return (
    <div style={{ backgroundColor: '#f9f9f9', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <nav style={{ backgroundColor: '#000', padding: '15px', display: 'flex', justifyContent: 'space-between' }}>
        <Link href="/" style={{ color: '#FFD700', textDecoration: 'none', fontWeight: 'bold' }}>← Back to Home</Link>
      </nav>

      <div style={{ maxWidth: '700px', width: '90%', margin: '40px auto', backgroundColor: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <h1 style={{ color: '#333', borderBottom: '2px solid #FFD700', paddingBottom: '10px' }}>Disclaimer</h1>
        
        <p style={{ lineHeight: '1.6', color: '#555' }}>
          The information provided on <strong>SaudiRate.com</strong> is for general informational purposes only. All currency and gold rates are updated automatically from third-party sources.
        </p>

        <h3 style={{ color: '#000', marginTop: '20px' }}>No Financial Advice</h3>
        <p style={{ lineHeight: '1.6', color: '#555' }}>
          The rates shown here do not constitute financial advice. We strongly recommend that you verify the current rates with your bank or local exchange house before making any financial transaction.
        </p>

        <h3 style={{ color: '#000', marginTop: '20px' }}>Accuracy of Data</h3>
        <p style={{ lineHeight: '1.6', color: '#555' }}>
          While we strive to provide the most accurate and up-to-date information, market conditions can change rapidly. SaudiRate.com is not responsible for any losses or damages resulting from the use of this information.
        </p>

        <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#fff3cd', borderRadius: '8px', borderLeft: '5px solid #ffecb5' }}>
          <small style={{ color: '#856404' }}>
            Note: Actual bank rates, transfer fees, and taxes may vary depending on the service provider.
          </small>
        </div>
      </div>
    </div>
  );
}