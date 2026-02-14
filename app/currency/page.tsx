'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CurrencyCards = () => {
  const [rates, setRates] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const API_KEY = 'goldapi-2fojksmlmivjd4-io'; // آپ کی API Key

  // ان ممالک کے کوڈز جن کے ریٹس ہم نے دکھانے ہیں
  const countries = [
    { code: 'pk', name: 'Pakistan', currency: 'PKR' },
    { code: 'in', name: 'India', currency: 'INR' },
    { code: 'bd', name: 'Bangladesh', currency: 'BDT' },
    { code: 'id', name: 'Indonesia', currency: 'IDR' },
    { code: 'eg', name: 'Egypt', currency: 'EGP' },
    { code: 'ph', name: 'Philippines', currency: 'PHP' },
    { code: 'np', name: 'Nepal', currency: 'NPR' },
    { code: 'lk', name: 'Sri Lanka', currency: 'LKR' },
    // آپ مزید 24 ممالک یہاں اسی طرح شامل کر سکتے ہیں
  ];

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        // ہم ایک ہی بار میں SAR (سعودی ریال) کے تمام ریٹس منگوائیں گے
        const response = await fetch("https://www.goldapi.io/api/stat", {
          headers: { "x-access-token": API_KEY, "Content-Type": "application/json" }
        });
        const data = await response.json();
        // یہاں ہم مثال کے طور پر ڈیٹا سیٹ کر رہے ہیں، اصل API سے SAR کا تقابل ہوگا
        setRates(data.currencies || {}); 
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
    fetchCurrency();
  }, []);

  return (
    <div style={{ padding: '40px 20px' }}>
      <h2 style={{ textAlign: 'center', color: '#1a73e8', marginBottom: '30px' }}>
        Saudi Riyal (SAR) Live Exchange Rates
      </h2>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {countries.map((curr) => (
          <div key={curr.code} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: '20px', 
            backgroundColor: '#fff', 
            borderRadius: '15px', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            border: '1px solid #f0f0f0'
          }}>
            <img 
              src={`https://flagcdn.com/w80/${curr.code}.png`} 
              alt={curr.name} 
              style={{ width: '45px', marginRight: '20px', borderRadius: '4px' }} 
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 'bold' }}>{curr.name}</div>
              <div style={{ color: '#1a73e8', fontSize: '1.2rem', fontWeight: 'bold' }}>
                {/* یہاں لائیو ریٹ آئے گا، اگر نہ ملے تو پرانا ریٹ دکھائے گا */}
                1 SAR = {rates[curr.currency] || 'Calculating...'}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link href="/gold-rates" style={{ padding: '12px 30px', backgroundColor: '#1a73e8', color: 'white', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold' }}>
           Check Gold Rates →
        </Link>
      </div>
    </div>
  );
};

export default CurrencyCards;