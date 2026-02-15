'use client';
import React from 'react';

const TermsPage = () => {
  return (
    <div style={{ padding: '60px 20px', backgroundColor: '#fdfdfd', minHeight: '80vh', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px', color: '#1a1a1a' }}>Terms and Conditions</h1>

        <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
          Welcome to SaudiRate.com! These terms and conditions outline the rules and regulations for the use of SaudiRate.com's Website.
        </p>

        <h3 style={{ fontSize: '1.3rem', marginTop: '25px', marginBottom: '10px', color: '#333' }}>Disclaimer</h3>
        <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
          The materials on SaudiRate.com are provided on an 'as is' basis. SaudiRate.com makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
        
        <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
          Further, SaudiRate.com does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
        </p>

        <h3 style={{ fontSize: '1.3rem', marginTop: '25px', marginBottom: '10px', color: '#333' }}>Accuracy of Materials</h3>
        <p style={{ lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
          The materials appearing on SaudiRate.com's website could include technical, typographical, or photographic errors. SaudiRate.com does not warrant that any of the materials on its website are accurate, complete or current.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;