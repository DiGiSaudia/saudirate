'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CurrencyCards = () => {
  const [rates, setRates] = useState<any>({});
  const [loading, setLoading] = useState(true);

  // 24 اہم ممالک
  const countries = [
    { code: 'pk', name: 'Pakistan', currency: 'PKR' },
    { code: 'in', name: 'India', currency: 'INR' },
    { code: 'bd', name: 'Bangladesh', currency: 'BDT' },
    { code: 'id', name: 'Indonesia', currency: 'IDR' },
    { code: 'eg', name: 'Egypt', currency: 'EGP' },
    { code: 'ph', name: 'Philippines', currency: 'PHP' },
    { code: 'np', name: 'Nepal', currency: 'NPR' },
    { code: 'lk', name: 'Sri Lanka', currency: 'LKR' },
    // باقی ممالک...
  ];

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch('https://open.er-api.com/v6/latest/SAR');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setRates(data.rates);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching currency:', error);
        // Backup Rates (تاکہ N/A نظر نہ آئے)
        setRates({
            PKR: 74.50, INR: 22.15, BDT: 31.50, IDR: 4300, EGP: 12.90, PHP: 15.20, NPR: 35.60, LKR: 85.00
        });
        setLoading(false);
      }
    };
    fetchRates();
  }, []);

  return (
    <div style={{ padding: '40px 20px', backgroundColor: '#fdfdfd' }}>
      <h2 style={{ textAlign: 'center', color: '#1a73e8', marginBottom: '10px', fontSize: '2rem' }}>
        SAR Exchange Rates Today
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
        gap: '20px',
        maxWidth: '1200px',
        margin: '30px auto'
      }}>
        {countries.map((item) => (
          <div key={item.code} style={{ 
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
            padding: '20px', backgroundColor: '#fff', borderRadius: '12px', 
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #eee'
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={`https://flagcdn.com/w80/${item.code}.png`} alt={item.name} 
                   style={{ width: '40px', borderRadius: '4px', marginRight: '15px' }} />
              <div>
                <div style={{ fontWeight: 'bold' }}>{item.name}</div>
                <div style={{ fontSize: '0.8rem', color: '#888' }}>1 SAR to {item.currency}</div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: '#0070f3', fontSize: '1.4rem', fontWeight: 'bold' }}>
                {loading ? '...' : rates[item.currency] ? rates[item.currency].toFixed(2) : '---'}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        <Link href="/gold-rates" style={{ padding: '12px 30px', backgroundColor: '#1a73e8', color: 'white', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold' }}>
           Check Live Gold Rates →
        </Link>
      </div>
    </div>
  );
};

export default CurrencyCards;