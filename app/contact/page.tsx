"use client";
import React from 'react';

export default function ContactUs() {
  return (
    <div style={{ backgroundColor: '#020617', color: '#F8FAFC', minHeight: '100vh', padding: '60px 20px' }}>
      
      {/* Brand Identity */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div style={{ fontSize: '36px', fontWeight: '950' }}>
          <span style={{ color: '#10B981' }}>Contact</span>
          <span style={{ color: '#FACC15' }}> Support</span>
        </div>
        <p style={{ color: '#94A3B8', marginTop: '10px' }}>Have a question? We're here to help you 24/7.</p>
      </div>

      <main style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        
        {/* Contact Form */}
        <div style={{ background: '#0F172A', padding: '35px', borderRadius: '30px', border: '1px solid #1E293B' }}>
          <h3 style={{ marginBottom: '25px', fontSize: '22px', fontWeight: '700' }}>Send a Message</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ fontSize: '12px', color: '#64748B', fontWeight: '800' }}>FULL NAME</label>
              <input type="text" placeholder="John Doe" style={{ width: '100%', background: '#020617', border: '1px solid #334155', padding: '12px', borderRadius: '10px', color: 'white', marginTop: '5px' }} />
            </div>
            <div>
              <label style={{ fontSize: '12px', color: '#64748B', fontWeight: '800' }}>EMAIL ADDRESS</label>
              <input type="email" placeholder="example@mail.com" style={{ width: '100%', background: '#020617', border: '1px solid #334155', padding: '12px', borderRadius: '10px', color: 'white', marginTop: '5px' }} />
            </div>
            <div>
              <label style={{ fontSize: '12px', color: '#64748B', fontWeight: '800' }}>MESSAGE</label>
              <textarea rows={4} placeholder="How can we help?" style={{ width: '100%', background: '#020617', border: '1px solid #334155', padding: '12px', borderRadius: '10px', color: 'white', marginTop: '5px', resize: 'none' }} />
            </div>
            <button style={{ background: '#10B981', color: 'white', padding: '15px', borderRadius: '12px', border: 'none', fontWeight: '800', cursor: 'pointer', transition: '0.3s' }}>
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details & WhatsApp */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <div style={{ background: '#0F172A', padding: '30px', borderRadius: '30px', border: '1px solid #1E293B' }}>
            <h4 style={{ color: '#10B981', marginBottom: '10px' }}>Email Support</h4>
            <p style={{ fontWeight: '600' }}>info@saudirate.com</p>
          </div>

          <div style={{ background: '#0F172A', padding: '30px', borderRadius: '30px', border: '1px solid #1E293B' }}>
            <h4 style={{ color: '#FACC15', marginBottom: '10px' }}>Our Location</h4>
            <p style={{ fontWeight: '600' }}>Riyadh, Saudi Arabia</p>
          </div>

          <a href="https://wa.me/yournumber" target="_blank" style={{ textDecoration: 'none', background: '#25D366', color: 'white', padding: '30px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', transition: '0.3s' }}>
             <span style={{ fontSize: '24px' }}>💬</span>
             <div style={{ textAlign: 'left' }}>
               <div style={{ fontSize: '12px', fontWeight: 'bold', opacity: 0.8 }}>FAST RESPONSE</div>
               <div style={{ fontSize: '18px', fontWeight: '900' }}>Chat on WhatsApp</div>
             </div>
          </a>
        </div>
      </main>

      {/* Ad Slot for Contact Page */}
      <div style={{ maxWidth: '900px', height: '100px', background: '#0F172A', border: '1px dashed #334155', margin: '50px auto 0', borderRadius: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#64748B' }}>
        ADVERTISEMENT SPACE
      </div>
    </div>
  );
}