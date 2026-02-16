import React from 'react';

export default function ContactPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', padding: '0 20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#1976d2', fontSize: '2.5rem' }}>Contact Us</h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>Have a question or need assistance? Send us a message!</p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '40px',
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        
        {/* Contact Form */}
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={labelStyle}>Full Name</label>
            <input type="text" placeholder="Enter your name" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Email Address</label>
            <input type="email" placeholder="email@example.com" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Message</label>
            <textarea rows={5} placeholder="How can we help you?" style={inputStyle}></textarea>
          </div>
          <button type="button" style={buttonStyle}>Send Message</button>
        </form>

        {/* Contact Details */}
        <div style={{ backgroundColor: '#f0f7ff', padding: '25px', borderRadius: '10px' }}>
          <h3 style={{ color: '#1976d2', marginTop: 0 }}>Contact Details</h3>
          <p style={{ color: '#444' }}><strong>Email:</strong> info@saudirate.com</p>
          <p style={{ color: '#444' }}><strong>Location:</strong> Riyadh, Saudi Arabia</p>
          <hr style={{ border: '0.5px solid #d0e3ff', margin: '20px 0' }} />
          <h4>WhatsApp Support</h4>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>Chat with us for quick price updates.</p>
          <a href="https://wa.me/966XXXXXXXXX" target="_blank" style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#25D366',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold'
          }}>Chat on WhatsApp</a>
        </div>
      </div>
    </div>
  );
}

const labelStyle = { display: 'block', marginBottom: '5px', fontWeight: 'bold' };
const inputStyle = { width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', boxSizing: 'border-box' as const };
const buttonStyle = { padding: '15px', backgroundColor: '#1976d2', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' };