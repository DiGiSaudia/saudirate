'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CurrencyCards = () => {
  const [rates, setRates] = useState<any>({});
  const [loading, setLoading] = useState(true);

  // یہ 24 ممالک کی لسٹ ہے (کرنسی کوڈز کے ساتھ)
  const countries = [
    { code: 'pk', name: 'Pakistan', currency: 'PKR' },
    { code: 'in', name: 'India', currency: 'INR' },
    { code: 'bd', name: 'Bangladesh', currency: 'BDT' },
    { code: 'id', name: 'Indonesia', currency: 'IDR' },
    { code: 'eg', name: 'Egypt', currency: 'EGP' },
    { code: 'ph', name: 'Philippines', currency: 'PHP' },
    { code: 'np', name: 'Nepal', currency: 'NPR' },
    { code: 'lk', name: 'Sri Lanka', currency: 'LKR' },
    { code: 'tr', name: 'Turkey', currency: 'TRY' },
    { code: 'my', name: 'Malaysia', currency: 'MYR' },
    { code: 'af', name: 'Afghanistan', currency: 'AFN' },
    { code: 'ma', name: 'Morocco', currency: 'MAD' },
    { code: 'dz', name: 'Algeria', currency: 'DZD' },
    { code: 'sd', name: 'Sudan', currency: 'SDG' },
    { code: 'jo', name: 'Jordan', currency: 'JOD' },
    { code: 'ye', name: 'Yemen', currency: 'YER' },
    { code: 'ng', name: 'Nigeria', currency: 'NGN' },
    { code: 'gb', name: 'UK', currency: 'GBP' },
    { code: 'us', name: 'USA', currency: 'USD' },
    { code: 'ca', name: 'Canada', currency: 'CAD' },
    { code: 'fr', name: 'France', currency: 'EUR' },
    { code: 'iq', name: 'Iraq', currency: 'IQD' },
    { code: 'sy', name: 'Syria', currency: 'SYP' },
    { code: 'ir', name: 'Iran', currency: 'IRR' },
  ];

  useEffect(() => {
    const fetchRates = async () => {
      try {
        // یہ ایک فری اور تیز API ہے جو کبھی بند نہیں ہوتی
        const res = await fetch('https://open.er-api.com/v6/latest/SAR');
        const data = await res.json();
        setRates(data.rates);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching currency:', error);
        setLoading(false);
      }
    };
    fetchRates();
  }, []);

  return (
    <div style={{ padding: '40px 20px', backgroundColor: '#fdfdfd' }}>
      <h2 style={{ textAlign: 'center', color: '#1a73e8', marginBottom: '10px', fontSize: '2rem' }}>
        Saudi Riyal (SAR) Exchange Rates
      </h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>
        Today's live currency conversion from Saudi Arabia
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {countries.map((item) => (
          <div key={item.code} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', // اس سے ریٹ دائیں طرف چلا جائے گا
            padding: '20px', 
            backgroundColor: '#fff', 
            borderRadius: '12px', 
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            border: '1px solid #eee'
          }}>
            
            {/* بائیں طرف: جھنڈا اور ملک کا نام */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img 
                src={`https://flagcdn.com/w80/${item.code}.png`} 
                alt={item.name} 
                style={{ width: '40px', height: 'auto', borderRadius: '4px', marginRight: '15px', border: '1px solid #e0e0e0' }}
              />
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#333' }}>{item.name}</div>
                <div style={{ fontSize: '0.8rem', color: '#888' }}>1 SAR to {item.currency}</div>
              </div>
            </div>

            {/* دائیں طرف: لائیو ریٹ */}
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: '#0070f3', fontSize: '1.4rem', fontWeight: 'bold' }}>
                {loading ? '...' : rates[item.currency] ? rates[item.currency].toFixed(2) : 'N/A'}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#28a745', fontWeight: '600' }}>Live Rate</div>
            </div>

          </div>
        ))}
      </div>

      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        <Link href="/gold-rates" style={{ 
          display: 'inline-block',
          padding: '12px 30px',
          backgroundColor: '#1a73e8',
          color: 'white',
          borderRadius: '30px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
           Check Live Gold Rates →
        </Link>
      </div>
    </div>
  );
};

export default CurrencyCards;