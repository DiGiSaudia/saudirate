"use client";
import React, { useState, useEffect, ChangeEvent } from 'react';
import Link from 'next/link';

export default function PremiumRemittance() {
  const [amount, setAmount] = useState<string>("1000"); // Default 1000 for better calc view
  const [targetCurrency, setTargetCurrency] = useState<string>("PKR");
  const [ratesData, setRatesData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  const API_KEY = '0dfe1f9efbc26627f2809000';

  const topCountries = [
    { code: 'PKR', name: 'Pakistan 🇵🇰' }, { code: 'INR', name: 'India 🇮🇳' },
    { code: 'BDT', name: 'Bangladesh 🇧🇩' }, { code: 'PHP', name: 'Philippines 🇵🇭' },
    { code: 'EGP', name: 'Egypt 🇪🇬' }, { code: 'NPR', name: 'Nepal 🇳🇵' },
    { code: 'LKR', name: 'Sri Lanka 🇱🇰' }, { code: 'IDR', name: 'Indonesia 🇮🇩' }
  ];

  const providers = [
    { id: 1, name: 'STC Pay', margin: 1.002, fee: 0, color: '#4f2d7f', logo: 'S' },
    { id: 2, name: 'UrPay', margin: 1.003, fee: 0, color: '#00d084', logo: 'U' },
    { id: 3, name: 'Mobily Pay', margin: 1.001, fee: 5, color: '#0061ff', logo: 'M' },
    { id: 4, name: 'Al Rajhi', margin: 0.998, fee: 15, color: '#0054a6', logo: 'A' },
    { id: 5, name: 'Enjaz', margin: 0.997, fee: 18, color: '#9d2235', logo: 'E' },
    { id: 6, name: 'Fawri', margin: 0.999, fee: 10, color: '#00a19c', logo: 'F' }
  ];

  useEffect(() => {
    const fetchRates = () => {
      fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/SAR`)
        .then((res) => res.json())
        .then((data) => {
          if (data && data.conversion_rates) {
            setRatesData(data.conversion_rates);
            const now = new Date();
            setLastUpdated(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
          }
          setLoading(false);
        }).catch(() => setLoading(false));
    };
    fetchRates();
  }, []);

  const calculate = (margin: number, fee: number) => {
    if (!ratesData) return { total: "0.00", rate: "0.00" };
    const baseRate = ratesData[targetCurrency] || 0;
    // Calculation: (Amount - Fee) * Rate * Margin
    // Note: Usually fee is deducted from SAR amount before conversion or added separately. 
    // Simplified here: showing pure conversion for rate comparison.
    const rate = baseRate * margin;
    const total = (Number(amount) * rate); 
    return { total: total.toFixed(2), rate: rate.toFixed(4) };
  };

  // Find best provider index
  const bestProviderId = providers.reduce((prev, current) => {
    const prevCalc = calculate(prev.margin, prev.fee);
    const currCalc = calculate(current.margin, current.fee);
    return (parseFloat(currCalc.total) > parseFloat(prevCalc.total)) ? current : prev;
  }).id;

  return (
    <div style={{ fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif", paddingBottom: '40px' }}>
      
      {/* --- HEADER --- */}
      <nav style={{ background: 'linear-gradient(90deg, #111 0%, #333 100%)', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '22px' }}>🇸🇦</span>
            <div style={{ fontWeight: '800', fontSize: '20px', color: '#fff', letterSpacing: '-0.5px' }}>SAUDI <span style={{ color: '#00d084' }}>RATE</span></div>
        </div>
        <Link href="/gold-rates" style={{ backgroundColor: 'rgba(255, 215, 0, 0.15)', color: '#FFD700', padding: '6px 12px', borderRadius: '20px', textDecoration: 'none', fontSize: '12px', fontWeight: 'bold', border: '1px solid #FFD700' }}>
           GOLD PRICES ✨
        </Link>
      </nav>

      <div style={{ maxWidth: '500px', margin: '0 auto', padding: '15px' }}>
        
        {/* --- TOP AD SLOT --- */}
        <div style={{ width: '100%', height: '60px', backgroundColor: '#e9e9e9', marginBottom: '15px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#999', border: '1px dashed #ccc' }}>
          ADVERTISEMENT AREA
        </div>

        {/* --- MAIN CALCULATOR CARD --- */}
        <div style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '25px', boxShadow: '0 8px 30px rgba(0,0,0,0.08)', marginBottom: '25px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '6px', background: 'linear-gradient(90deg, #00d084 0%, #0061ff 100%)' }}></div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#2d3436' }}>Live Converter</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#00d084', fontWeight: 'bold', backgroundColor: '#e6fffa', padding: '4px 8px', borderRadius: '12px' }}>
                    <span style={{ width: '6px', height: '6px', backgroundColor: '#00d084', borderRadius: '50%', display: 'inline-block', animation: 'pulse 2s infinite' }}></span>
                    LIVE {lastUpdated && `@ ${lastUpdated}`}
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ position: 'relative' }}>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: '#636e72', marginBottom: '5px', display: 'block' }}>You Send (SAR)</label>
                    <input 
                        type="number" 
                        value={amount} 
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)} 
                        style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '2px solid #eee', fontSize: '20px', fontWeight: 'bold', outline: 'none', backgroundColor: '#fdfdfd', transition: 'border 0.2s' }} 
                        onFocus={(e) => e.target.style.borderColor = '#0061ff'}
                        onBlur={(e) => e.target.style.borderColor = '#eee'}
                    />
                    <span style={{ position: 'absolute', right: '15px', top: '40px', fontWeight: 'bold', color: '#b2bec3' }}>SAR</span>
                </div>

                <div style={{ position: 'relative' }}>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: '#636e72', marginBottom: '5px', display: 'block' }}>Recipient Gets</label>
                    <select 
                        value={targetCurrency} 
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setTargetCurrency(e.target.value)} 
                        style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '2px solid #eee', fontSize: '16px', fontWeight: 'bold', outline: 'none', backgroundColor: '#fff', cursor: 'pointer', appearance: 'none' }}
                    >
                        {topCountries.map((c) => <option key={c.code} value={c.code}>{c.name} ({c.code})</option>)}
                    </select>
                     <span style={{ position: 'absolute', right: '15px', top: '42px', fontSize: '12px', color: '#333' }}>▼</span>
                </div>
            </div>
        </div>

        {/* --- PROVIDER LIST --- */}
        <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#2d3436', marginBottom: '15px', paddingLeft: '5px' }}>Compare Best Rates</h3>
        
        {loading ? 
            <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>Updating Live Rates...</div> 
        : 
            providers.map((p, index) => {
                const calc = calculate(p.margin, p.fee);
                const isBest = p.id === bestProviderId;

                return (
                    <div key={p.id} style={{ 
                        backgroundColor: '#fff', 
                        padding: '16px', 
                        borderRadius: '16px', 
                        marginBottom: '12px', 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        border: isBest ? '2px solid #00d084' : '1px solid #f0f0f0',
                        boxShadow: isBest ? '0 4px 15px rgba(0, 208, 132, 0.15)' : 'none',
                        position: 'relative'
                    }}>
                        {isBest && <div style={{ position: 'absolute', top: '-10px', right: '15px', backgroundColor: '#00d084', color: '#fff', fontSize: '10px', fontWeight: 'bold', padding: '3px 8px', borderRadius: '10px' }}>BEST RATE</div>}
                        
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '42px', height: '42px', backgroundColor: p.color, borderRadius: '12px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '14px', boxShadow: `0 4px 10px ${p.color}40` }}>
                                {p.logo}
                            </div>
                            <div>
                                <div style={{ fontWeight: '700', fontSize: '15px', color: '#2d3436' }}>{p.name}</div>
                                <div style={{ fontSize: '11px', color: '#636e72', marginTop: '2px' }}>
                                    1 SAR = <span style={{ fontWeight: 'bold', color: '#333' }}>{calc.rate}</span> {targetCurrency}
                                </div>
                            </div>
                        </div>

                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '18px', fontWeight: '800', color: isBest ? '#00d084' : '#2d3436' }}>{parseFloat(calc.total).toLocaleString()}</div>
                            <div style={{ fontSize: '10px', color: '#b2bec3', fontWeight: '600' }}>{targetCurrency} (Fee: {p.fee})</div>
                        </div>
                    </div>
                );
            })
        }

        {/* --- IN-FEED AD SLOT --- */}
        <div style={{ width: '100%', height: '250px', backgroundColor: '#fff', marginTop: '30px', borderRadius: '12px', border: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <span style={{ fontSize: '40px' }}>📢</span>
            <small style={{ color: '#ccc', marginTop: '10px', fontSize: '10px', letterSpacing: '1px' }}>SPONSORED ADVERTISEMENT</small>
        </div>

        <div style={{ textAlign: 'center', marginTop: '30px', color: '#b2bec3', fontSize: '11px' }}>
            <p>© 2024 Saudi Rate. Rates are indicative.</p>
        </div>

      </div>
    </div>
  );
}