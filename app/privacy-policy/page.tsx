'use client';
import React from 'react';

const PrivacyPage = () => {
  return (
    <div style={{ padding: '60px 20px', backgroundColor: '#fdfdfd', minHeight: '80vh', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px', color: '#1a1a1a' }}>Privacy Policy</h1>
        <p style={{ color: '#888', marginBottom: '30px', fontSize: '0.9rem' }}>Last Updated: February 2026</p>

        <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
          At SaudiRate.com, accessible from https://saudirate.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by SaudiRate.com and how we use it.
        </p>

        <h3 style={{ fontSize: '1.3rem', marginTop: '25px', marginBottom: '10px', color: '#333' }}>Log Files</h3>
        <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
          SaudiRate.com follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
        </p>

        <h3 style={{ fontSize: '1.3rem', marginTop: '25px', marginBottom: '10px', color: '#333' }}>Google DoubleClick DART Cookie</h3>
        <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
          Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage;