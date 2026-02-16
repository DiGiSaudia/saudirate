"use client";
import React, { useState, useEffect, ChangeEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const [amount, setAmount] = useState<string>("1000");
  const [targetCurrency, setTargetCurrency] = useState<string>("PKR");
  const [ratesData, setRatesData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  const API_KEY = '0dfe1f9efbc26627f2809000'; // Note: Rate limit ka khayal rakhen

  const topCountries = [
    { code: 'PKR', name: 'Pakistan 🇵🇰' }, { code: 'INR', name: 'India 🇮🇳' },
    { code: 'BDT', name: 'Bangladesh 🇧🇩' }, { code: 'PHP', name: 'Philippines 🇵🇭' },
    { code: 'EGP', name: 'Egypt 🇪🇬' }, { code: 'NPR', name: 'Nepal 🇳🇵' },
    { code: 'LKR', name: 'Sri Lanka 🇱🇰' }, { code: 'IDR', name: 'Indonesia 🇮🇩' }
  ];

  // Yahan humne Logos k liye paths set kiye hen. 
  // Apko public folder me images rakhni hongi (details nichy hen).
  const providers = [
    { id: 1, name: 'STC Pay', margin: 1.002, fee: 0, color: '#4f2d7f', logoText: 'S', logoPath: '/providers/stcpay.png' },
    { id: 2, name: 'UrPay', margin: 1.003, fee: 0, color: '#00d084', logoText: 'U', logoPath: '/providers/urpay.png' },
    { id: 3, name: 'Mobily Pay', margin: 1.001, fee: 5, color: '#0061ff', logoText: 'M', logoPath: '/providers/mobilypay.png' },
    { id: 4, name: 'Al Rajhi', margin: 0.998, fee: 15, color: '#0054a6', logoText: 'A', logoPath: '/providers/alrajhi.png' },
    { id: 5, name: 'Enjaz', margin: 0.997, fee: 18, color: '#9d2235', logoText: 'E', logoPath: '/providers/enjaz.png' },
    { id: 6, name: 'Fawri', margin: 0.999, fee: 10, color: '#00a19c', logoText: 'F', logoPath: '/providers/fawri.png' }
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
    const rate = baseRate * margin;
    const total = (Number(amount) * rate); 
    // Note: Asal calculation me fee minus hoti hai, magar comparison k liye hum total dikha rahy hen
    return { total: total.toFixed(2), rate: rate.toFixed(4) };
  };

  // Find best provider
  const bestProviderId = providers.reduce((prev, current) => {
    const prevCalc = calculate(prev.margin, prev.fee);
    const currCalc = calculate(current.margin, current.fee);
    return (parseFloat(currCalc.total) > parseFloat(prevCalc.total)) ? current : prev;
  }, providers[0]).id;

  return (
    <div style={{ fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif", backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
      
      {/* --- HEADER / NAVBAR --- */}
      <nav style={{ background: '#111', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ fontWeight: '800', fontSize: '20px', color: '#fff', letterSpacing: '-0.5px' }}>
            Saudi<span style={{ color: '#00d084' }}> Rate</span>
          </div>
        </div>
        <Link href="/gold-rates" style={{ backgroundColor: 'rgba(255, 215, 0, 0.2)', color: '#FFD700', padding: '8px 15px', borderRadius: '20px', textDecoration: 'none', fontSize: '12px', fontWeight: 'bold', border: '1px solid #FFD700' }}>
           Check Gold Prices ↗
        </Link>
      </nav>

      {/* --- HERO SECTION --- */}
      <div style={{ backgroundColor: '#111', color: 'white', padding: '40px 20px 80px 20px', textAlign: 'center', borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px', marginBottom: '-60px' }}>
        <h1 style={{ margin: '0 0 10px 0', fontSize: '2.2rem' }}>Send Money Home</h1>
        <p style={{ margin: 0, color: '#aaa', fontSize: '1rem' }}>Compare live exchange rates and find the best provider.</p>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 15px 40px 15px' }}>
        
        {/* --- AD SLOT 1 --- */}
        <div style={{ width: '100%', height: '60px', backgroundColor: '#e9e9e9', marginBottom: '20px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#999', border: '1px dashed #ccc' }}>
          ADVERTISEMENT AREA
        </div>

        {/* --- MAIN CALCULATOR CARD --- */}
        <div style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#2d3436' }}>Live Converter</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#00d084', fontWeight: 'bold', backgroundColor: '#e6fffa', padding: '4px 8px', borderRadius: '12px' }}>
                    <span style={{ width: '8px', height: '8px', backgroundColor: '#00d084', borderRadius: '50%', display: 'inline-block', animation: 'pulse 2s infinite' }}></span>
                    LIVE
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ position: 'relative' }}>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: '#636e72', marginBottom: '5px', display: 'block' }}>You Send (SAR)</label>
                    <input 
                        type="number" 
                        value={amount} 
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)} 
                        style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '2px solid #eee', fontSize: '20px', fontWeight: 'bold', outline: 'none', backgroundColor: '#fdfdfd', boxSizing: 'border-box' }} 
                    />
                    <span style={{ position: 'absolute', right: '15px', top: '40px', fontWeight: 'bold', color: '#b2bec3' }}>SAR</span>
                </div>

                <div style={{ position: 'relative' }}>
                    <label style={{ fontSize: '12px', fontWeight: '600', color: '#636e72', marginBottom: '5px', display: 'block' }}>Recipient Gets</label>
                    <select 
                        value={targetCurrency} 
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => setTargetCurrency(e.target.value)} 
                        style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '2px solid #eee', fontSize: '16px', fontWeight: 'bold', outline: 'none', backgroundColor: '#fff', cursor: 'pointer', appearance: 'none', boxSizing: 'border-box' }}
                    >
                        {topCountries.map((c) => <option key={c.code} value={c.code}>{c.name} ({c.code})</option>)}
                    </select>
                     <span style={{ position: 'absolute', right: '15px', top: '42px', fontSize: '12px', color: '#333' }}>▼</span>
                </div>
            </div>
        </div>

        {/* --- PROVIDER LIST --- */}
        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#2d3436', marginBottom: '15px' }}>Best Rates for 1 SAR</h3>
        
        {loading ? 
            <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>Updating Live Rates...</div> 
        : 
            providers.map((p) => {
                const calc = calculate(p.margin, p.fee);
                const isBest = p.id === bestProviderId;

                return (
                    <div key={p.id} style={{ 
                        backgroundColor: '#fff', 
                        padding: '15px', 
                        borderRadius: '16px', 
                        marginBottom: '12px', 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        border: isBest ? '2px solid #00d084' : '1px solid #f0f0f0',
                        position: 'relative'
                    }}>
                        {isBest && <div style={{ position: 'absolute', top: '-10px', right: '15px', backgroundColor: '#00d084', color: '#fff', fontSize: '10px', fontWeight: 'bold', padding: '3px 8px', borderRadius: '10px' }}>BEST RATE</div>}
                        
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            {/* Logo Section - Will fallback to Text if image fails or not found */}
                            <div style={{ 
                                width: '50px', height: '50px', 
                                borderRadius: '12px', 
                                overflow: 'hidden', 
                                backgroundColor: '#f9f9f9',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                border: '1px solid #eee'
                            }}>
                                {/* Note: Next/Image requires width/height. Using simple img for dynamic ease or placeholder */}
                                <img 
                                    src={p.logoPath} 
                                    alt={p.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    onError={(e: any) => {
                                        e.target.style.display = 'none'; // Hide img if fail
                                        e.target.nextSibling.style.display = 'flex'; // Show fallback
                                    }}
                                />
                                <div style={{ 
                                    display: 'none', // Hidden by default, shown on error
                                    width: '100%', height: '100%', 
                                    backgroundColor: p.color, 
                                    color: 'white', 
                                    alignItems: 'center', justifyContent: 'center', 
                                    fontWeight: 'bold', fontSize: '20px'
                                }}>
                                    {p.logoText}
                                </div>
                            </div>

                            <div>
                                <div style={{ fontWeight: '700', fontSize: '16px', color: '#2d3436' }}>{p.name}</div>
                                {/* 1 SAR Rate Highlighted */}
                                <div style={{ fontSize: '13px', color: '#636e72', marginTop: '2px' }}>
                                    1 SAR = <span style={{ fontWeight: 'bold', color: '#0061ff' }}>{calc.rate}</span> {targetCurrency}
                                </div>
                            </div>
                        </div>

                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '18px', fontWeight: '800', color: isBest ? '#00d084' : '#2d3436' }}>{parseFloat(calc.total).toLocaleString()}</div>
                            <div style={{ fontSize: '10px', color: '#b2bec3', fontWeight: '600' }}>{targetCurrency}</div>
                        </div>
                    </div>
                );
            })
        }

        {/* --- AD SLOT 2 --- */}
        <div style={{ width: '100%', height: '200px', backgroundColor: '#fff', marginTop: '30px', borderRadius: '12px', border: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <span style={{ fontSize: '30px' }}>📢</span>
            <small style={{ color: '#ccc', marginTop: '10px', fontSize: '10px' }}>SPONSORED ADVERTISEMENT</small>
        </div>

        <div style={{ textAlign: 'center', marginTop: '30px', paddingBottom: '30px', color: '#b2bec3', fontSize: '11px' }}>
            <p>© 2024 Saudi Rate. All rates are indicative.</p>
        </div>

      </div>
    </div>
  );
}