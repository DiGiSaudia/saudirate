"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function RemittanceDesign() {
  const [sarAmount, setSarAmount] = useState<any>(1);

  // Sab remittance providers ki list
  const providers = [
    { name: 'STC Pay', rate: 74.85, fee: '0 SAR', color: '#4f2d7f', tag: 'Best Rate' },
    { name: 'UrPay', rate: 74.90, fee: '0 SAR', color: '#00d084', tag: 'Fast' },
    { name: 'Mobily Pay', rate: 74.75, fee: '5 SAR', color: '#0061ff', tag: 'Easy' },
    { name: 'Tahweel Al Rajhi', rate: 74.45, fee: '15 SAR', color: '#0054a6', tag: 'Bank' },
    { name: 'Enjaz', rate: 74.30, fee: '18 SAR', color: '#9d2235', tag: 'Bank' },
    { name: 'Fawri', rate: 74.55, fee: '10 SAR', color: '#00a19c', tag: 'Bank' },
    { name: 'Friendi Pay', rate: 74.65, fee: '7 SAR', color: '#e60000', tag: 'Wallet' },
    { name: 'QuickPay (SNB)', rate: 74.40, fee: '20 SAR', color: '#006a4d', tag: 'Bank' }
  ];

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', paddingBottom: '30px', fontFamily: 'Arial' }}>
      
      {/* Black Navbar */}
      <div style={{ backgroundColor: '#000', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ color: '#fff', margin: 0, fontSize: '18px' }}>SAUDI RATE</h2>
        <Link href="/gold-rates" style={{ color: '#FFD700', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}>
          GOLD PRICE →
        </Link>
      </div>

      <div style={{ maxWidth: '450px', margin: '0 auto', padding: '15px' }}>
        
        {/* Ad Space 1 */}
        <div style={{ background: '#fff', border: '1px dashed #bbb', padding: '15px', textAlign: 'center', marginBottom: '15px', borderRadius: '10px' }}>
          <small style={{ color: '#999' }}>ADVERTISEMENT</small>
        </div>

        {/* Input Card */}
        <div style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', marginBottom: '20px', border: '1px solid #eee' }}>
          <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666', textAlign: 'center' }}>Enter Amount to Send</p>
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f9f9f9', padding: '10px 20px', borderRadius: '15px' }}>
            <span style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px' }}>SAR</span>
            <input 
              type="number" 
              value={sarAmount}
              onChange={(e: any) => setSarAmount(e.target.value)}
              style={{ border: 'none', background: 'transparent', fontSize: '28px', fontWeight: 'bold', width: '100%', outline: 'none' }}
            />
          </div>
        </div>

        {/* Providers Grid/List */}
        <h3 style={{ fontSize: '16px', marginBottom: '15px', color: '#333' }}>Available Providers</h3>

        {providers.map((p, i) => (
          <div key={i} style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '15px', marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '45px', height: '45px', backgroundColor: p.color, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', fontSize: '10px', marginRight: '12px' }}>
                {p.name.substring(0, 3)}
              </div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '15px' }}>{p.name}</div>
                <div style={{ fontSize: '11px', color: '#888' }}>Fee: {p.fee} • <span style={{color: '#2e7d32'}}>{p.tag}</span></div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#000' }}>
                {(Number(sarAmount) * p.rate).toFixed(2)}
              </div>
              <div style={{ fontSize: '10px', color: '#999' }}>1 SAR = {p.rate}</div>
            </div>
          </div>
        ))}

        {/* Square Ad Space */}
        <div style={{ background: '#fff', border: '1px solid #ddd', height: '250px', marginTop: '20px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <small style={{ color: '#ccc' }}>ADSENSE BOX</small>
        </div>

      </div>
    </div>
  );
}