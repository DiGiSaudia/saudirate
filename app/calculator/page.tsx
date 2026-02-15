'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CalculatorPage = () => {
  const [rates, setRates] = useState<any>({});
  const [amount, setAmount] = useState<number>(1);
  const [selectedCurrency, setSelectedCurrency] = useState('PKR');

  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/SAR')
      .then(res => res.json())
      .then(data => setRates(data.rates))
      .catch(() => setRates({ PKR: 74.50, INR: 22.15, BDT: 31.50 }));
  }, []);

  const result = rates[selectedCurrency] ? (amount * rates[selectedCurrency]).toFixed(2) : '0.00';

  return (
    <div style={{ padding: '40px 20px', minHeight: '80vh', backgroundColor: '#f9fbff', fontFamily: 'Arial' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
        <h1 style={{ color: '#1a73e8', textAlign: 'center', marginBottom: '30px' }}>Currency Converter</h1>
        
        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>Amount in Saudi Riyal (SAR)</label>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(Number(e.target.value))}
            style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '2px solid #e0e0e0', fontSize: '1.2rem', outlineColor: '#1a73e8' }}
          />
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '10px' }}>Convert to Currency</label>
          <select 
            value={selectedCurrency} 
            onChange={(e) => setSelectedCurrency(e.target.value)}
            style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '2px solid #e0e0e0', fontSize: '1.1rem' }}
          >
            <option value="PKR">Pakistan (PKR)</option>
            <option value="INR">India (INR)</option>
            <option value="BDT">Bangladesh (BDT)</option>
            <option value="EGP">Egypt (EGP)</option>
            <option value="PHP">Philippines (PHP)</option>
            <option value="IDR">Indonesia (IDR)</option>
          </select>
        </div>

        <div style={{ backgroundColor: '#eef4ff', padding: '25px', borderRadius: '15px', textAlign: 'center' }}>
          <div style={{ fontSize: '1.1rem', color: '#555', marginBottom: '5px' }}>Total Amount</div>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a73e8' }}>
            {result} <span style={{ fontSize: '1rem' }}>{selectedCurrency}</span>
          </div>
        </div>

        <Link href="/" style={{ display: 'block', textAlign: 'center', marginTop: '30px', color: '#666', textDecoration: 'none' }}>
          ← Back to Rates Homepage
        </Link>
      </div>
    </div>
  );
};

export default CalculatorPage;