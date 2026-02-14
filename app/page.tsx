import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  const sections = [
    {
      title: "Gold Rates",
      description: "Live 24K, 22K, and 21K gold prices in Saudi Arabia.",
      link: "/gold-rates",
      icon: "💰",
      color: "#b8860b"
    },
    {
      title: "Currency Exchange",
      description: "Latest SAR exchange rates for PKR, INR, BDT and more.",
      link: "/currency",
      icon: "💵",
      color: "#1976d2"
    },
    {
      title: "Electronics Deals",
      description: "Best prices for iPhone, Samsung, and latest gadgets.",
      link: "/electronics",
      icon: "📱",
      color: "#333"
    }
  ];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#222', marginBottom: '10px' }}>Welcome to Saudi Price</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>Your trusted partner for daily rates and electronic prices in KSA</p>
      </div>

      {/* Navigation Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px' 
      }}>
        {sections.map((section, index) => (
          <Link href={section.link} key={index} style={{ textDecoration: 'none' }}>
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '20px', 
              padding: '30px', 
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              border: '1px solid #eee',
              cursor: 'pointer',
              height: '100%',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>{section.icon}</div>
              <h2 style={{ color: section.color, marginBottom: '15px' }}>{section.title}</h2>
              <p style={{ color: '#777', lineHeight: '1.6', marginBottom: '20px' }}>{section.description}</p>
              <span style={{ 
                display: 'inline-block', 
                padding: '10px 25px', 
                backgroundColor: section.color, 
                color: 'white', 
                borderRadius: '50px',
                fontWeight: 'bold'
              }}>
                View Details
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Future Arabic Support Note */}
      <div style={{ marginTop: '80px', textAlign: 'center', padding: '20px', backgroundColor: '#f0f4f8', borderRadius: '15px' }}>
        <p style={{ color: '#555', margin: 0 }}>
          <strong>Note:</strong> We currently support English. Arabic language support is coming in 6 months! 🇸🇦
        </p>
      </div>
    </div>
  );
}