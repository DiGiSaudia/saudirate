import React from 'react';

export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <section style={{
        backgroundColor: '#1976d2',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '10px' }}>Welcome to Saudi Price</h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9' }}>Your Trusted Partner for Gold, Currency & Electronics Rates in KSA</p>
      </section>

      {/* Services Section */}
      <section style={{
        maxWidth: '1200px',
        margin: '50px auto',
        padding: '0 20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px'
      }}>
        {/* Gold Card */}
        <div style={cardStyle}>
          <div style={{ fontSize: '3rem' }}>🟡</div>
          <h3>Gold Rates</h3>
          <p>Live 24K, 22K, and 21K gold prices updated daily from Saudi markets.</p>
          <a href="/gold-rates" style={buttonStyle}>Check Gold Prices</a>
        </div>

        {/* Currency Card */}
        <div style={cardStyle}>
          <div style={{ fontSize: '3rem' }}>💵</div>
          <h3>Currency Exchange</h3>
          <p>Get latest SAR exchange rates for PKR, INR, PHP and more.</p>
          <a href="/currency" style={buttonStyle}>View Exchange Rates</a>
        </div>

        {/* Electronics Card */}
        <div style={cardStyle}>
          <div style={{ fontSize: '3rem' }}>📱</div>
          <h3>Electronics Deals</h3>
          <p>Compare prices for latest iPhones, Samsung phones, and Laptops.</p>
          <a href="/electronics" style={buttonStyle}>Browse Electronics</a>
        </div>
      </section>

      {/* About Section */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '50px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2>Why Choose SaudiPrice.com?</h2>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            We provide accurate and real-time data to help you make better financial decisions. 
            Whether you are an investor in gold or looking for the best deal on your next smartphone, we have you covered.
          </p>
        </div>
      </section>
    </main>
  );
}

// Styles
const cardStyle = {
  backgroundColor: 'white',
  padding: '30px',
  borderRadius: '15px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  textAlign: 'center' as const,
  border: '1px solid #eee'
};

const buttonStyle = {
  display: 'inline-block',
  marginTop: '15px',
  padding: '10px 20px',
  backgroundColor: '#1976d2',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '5px',
  fontWeight: 'bold'
};