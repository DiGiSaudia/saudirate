'use client';
import React from 'react';

const AboutPage = () => {
  return (
    <div style={{ padding: '60px 20px', backgroundColor: '#fdfdfd', minHeight: '80vh', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px', color: '#1a1a1a' }}>About <span style={{ color: '#ffcc00' }}>Us</span></h1>
        
        <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
          Welcome to <strong>SaudiRate.com</strong>, your number one source for all things related to Gold Prices and Currency Exchange Rates in Saudi Arabia. We're dedicated to providing you the very best of financial data, with an emphasis on accuracy, speed, and reliability.
        </p>

        <h3 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#333' }}>Our Mission</h3>
        <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
          Founded in 2024, SaudiRate.com has come a long way from its beginnings. Our mission is to help expatriates and locals in Saudi Arabia make informed financial decisions by providing real-time data on SAR (Saudi Riyal) exchange rates and Gold market trends.
        </p>

        <h3 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: '#333' }}>Why Choose Us?</h3>
        <ul style={{ lineHeight: '1.8', color: '#555', paddingLeft: '20px' }}>
          <li style={{ marginBottom: '10px' }}><strong>Real-Time Updates:</strong> We update our rates multiple times a day.</li>
          <li style={{ marginBottom: '10px' }}><strong>User-Friendly:</strong> Our calculator and charts are designed for simplicity.</li>
          <li style={{ marginBottom: '10px' }}><strong>Mobile First:</strong> Access our data seamlessly on any device.</li>
        </ul>

        <p style={{ marginTop: '30px', color: '#555' }}>
          We hope you enjoy our services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;