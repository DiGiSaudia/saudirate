"use client";
import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f4f7f6', fontFamily: 'sans-serif' }}>
      
      {/* Top Header with Back Button */}
      <div style={{ backgroundColor: '#000', color: '#fff', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ color: '#FFD700', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>
          ← Back to Home
        </Link>
        <span style={{ fontWeight: 'bold' }}>Saudi<span style={{ color: '#FFD700' }}>Rate</span>.com</span>
      </div>

      <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
        
        {/* Top Ad Space (Ads Friendly Requirement) */}
        <div style={{ backgroundColor: '#fff', padding: '15px', textAlign: 'center', border: '1px dashed #ccc', marginBottom: '30px', borderRadius: '8px' }}>
          <p style={{ fontSize: '0.7rem', color: '#bbb', margin: '0 0 5px' }}>ADVERTISEMENT</p>
          <div style={{ minHeight: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ddd' }}>Top Banner Ad Area</div>
        </div>

        <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '10px', color: '#111' }}>Contact <span style={{ color: '#28a745' }}>Us</span></h1>
          <p style={{ color: '#666', marginBottom: '30px' }}>Have any questions or suggestions? We'd love to hear from you.</p>

          <form style={{ display: 'grid', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', fontSize: '0.9rem' }}>Your Name</label>
                <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', fontSize: '0.9rem' }}>Email Address</label>
                <input type="email" placeholder="email@example.com" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', fontSize: '0.9rem' }}>Subject</label>
              <input type="text" placeholder="Inquiry about rates" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' }} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', fontSize: '0.9rem' }}>Message</label>
              <textarea rows={5} placeholder="Write your message here..." style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none', resize: 'vertical' }}></textarea>
            </div>

            <button type="submit" style={{ backgroundColor: '#111', color: '#fff', padding: '15px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', transition: '0.3s' }}>
              Send Message
            </button>
          </form>

          {/* Contact Details for SEO & Trust */}
          <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid #eee', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ margin: '0 0 5px' }}>Email Support</h4>
              <p style={{ color: '#28a745', fontWeight: 'bold', margin: 0 }}>info@saudirate.com</p>
            </div>
            <div>
              <h4 style={{ margin: '0 0 5px' }}>Response Time</h4>
              <p style={{ color: '#666', margin: 0 }}>Within 24-48 hours</p>
            </div>
          </div>
        </div>

        {/* Bottom Ad Unit */}
        <div style={{ marginTop: '30px', backgroundColor: '#fff', padding: '20px', borderRadius: '15px', border: '1px solid #eee', textAlign: 'center' }}>
          <div style={{ minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ddd' }}>Footer Ad Banner</div>
        </div>
      </div>
    </main>
  );
}