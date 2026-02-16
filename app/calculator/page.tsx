"use client";
import React, { useState, useEffect } from 'react';

export default function ProfessionalCalculator() {
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>('SAR');
  const [toCurrency, setToCurrency] = useState<string>('PKR');
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  // آپ کی فراہم کردہ لائیو API Key
  const API_KEY = '0dfe1f9efbc26627f2809000'; 

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        // API سے لائیو ریٹس حاصل کرنا
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`);
        const data = await response.json();
        if (data.result === "success") {
          setExchangeRate(data.conversion_rate);
        }
      } catch (error) {
        console.error("Error fetching live rates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [fromCurrency, toCurrency]);

  const result = (amount * exchangeRate).toFixed(2);

  // کرنسیاں آپس میں بدلنے کا فنکشن (Swap)
  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '550px', margin: '40px auto' }}>
        
        {/* Ad Space for Calculator Top */}
        <div style={{ backgroundColor: '#fff', padding: '10px', textAlign: 'center', marginBottom: '20px', border: '1px dashed #ccc', borderRadius: '8px' }}>
          <small style={{ color: '#999' }}>ADVERTISEMENT</small>
        </div>

        <div style={{ backgroundColor: '#fff', padding: '35px', borderRadius: '25px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)', border: '1px solid #eee' }}>
          <h1 style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '30px', color: '#1a1a1a' }}>
            Live <span style={{ color: '#28a745' }}>Currency</span> Converter
          </h1>

          {/* Amount Input */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#555' }}>Enter Amount</label>
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(Number(e.target.value))}
              style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '2px solid #f0f0f0', fontSize: '1.2rem', outline: 'none' }}
            />
          </div>

          {/* From and To Selection with Swap Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '0.8rem', color: '#888', display: 'block', marginBottom: '4px' }}>From</label>
              <select 
                value={fromCurrency} 
                onChange={(e) => setFromCurrency(e.target.value)}
                style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ddd', backgroundColor: '#fdfdfd', cursor: 'pointer' }}
              >
                <option value="SAR">🇸🇦 SAR</option>
                <option value="PKR">🇵🇰 PKR</option>
                <option value="INR">🇮🇳 INR</option>
                <option value="BDT">🇧🇩 BDT</option>
                <option value="USD">🇺🇸 USD</option>
                <option value="EUR">🇪🇺 EUR</option>
                <option value="GBP">🇬🇧 GBP</option>
              </select>
            </div>

            <button 
              onClick={handleSwap} 
              title="Swap Currencies"
              style={{ backgroundColor: '#111', color: '#fff', border: 'none', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}
            >
              ⇄
            </button>

            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '0.8rem', color: '#888', display: 'block', marginBottom: '4px' }}>To</label>
              <select 
                value={toCurrency} 
                onChange={(e) => setToCurrency(e.target.value)}
                style={{ width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ddd', backgroundColor: '#fdfdfd', cursor: 'pointer' }}
              >
                <option value="PKR">🇵🇰 PKR</option>
                <option value="SAR">🇸🇦 SAR</option>
                <option value="INR">🇮🇳 INR</option>
                <option value="BDT">🇧🇩 BDT</option>
                <option value="USD">🇺🇸 USD</option>
                <option value="PHP">🇵🇭 PHP</option>
                <option value="EGP">🇪🇬 EGP</option>
              </select>
            </div>
          </div>

          {/* Result Display Box */}
          <div style={{ backgroundColor: '#111', color: '#fff', padding: '30px', borderRadius: '20px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            {loading ? (
              <p style={{ color: '#FFD700', fontWeight: 'bold' }}>Updating Live Rates...</p>
            ) : (
              <>
                <div style={{ fontSize: '0.9rem', color: '#aaa', marginBottom: '8px' }}>{amount} {fromCurrency} equals</div>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#FFD700' }}>
                  {result} <span style={{ fontSize: '1.2rem' }}>{toCurrency}</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '15px' }}>
                  Market Rate: 1 {fromCurrency} = {exchangeRate} {toCurrency}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Ad Space for Calculator Bottom */}
        <div style={{ marginTop: '30px', backgroundColor: '#fff', padding: '20px', borderRadius: '15px', border: '1px solid #eee', textAlign: 'center' }}>
           <p style={{ fontSize: '0.7rem', color: '#bbb', marginBottom: '10px' }}>SPONSORED BY GOOGLE ADS</p>
           <div style={{ minHeight: '150px', backgroundColor: '#fafafa', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ddd', borderRadius: '8px' }}>
              Horizontal Ad Unit Area
           </div>
        </div>

      </div>
    </main>
  );
}