'use client';
import React from 'react';

const ContactPage = () => {
  return (
    <div style={{ 
      padding: '60px 20px', 
      backgroundColor: '#f4f4f4', 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ 
        maxWidth: '900px', 
        width: '100%',
        backgroundColor: 'white', 
        borderRadius: '25px', 
        overflow: 'hidden', 
        boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        
        {/* Left Side: Info */}
        <div style={{ 
          flex: '1 1 300px', 
          backgroundColor: '#1a1a1a', 
          color: 'white', 
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <h2 style={{ color: '#ffcc00', fontSize: '2rem', marginBottom: '20px' }}>Get in Touch</h2>
          <p style={{ lineHeight: '1.6', color: '#ccc', marginBottom: '30px' }}>
            Have a question about Saudi Gold rates or Currency exchange? Drop us a message and our team will get back to you.
          </p>
          
          <div style={{ marginBottom: '20px' }}>
            <p style={{ marginBottom: '10px' }}><strong>📍 Location:</strong> Riyadh, Saudi Arabia</p>
            <p style={{ marginBottom: '10px' }}><strong>📧 Email:</strong> info@saudirate.com</p>
            <p style={{ marginBottom: '10px' }}><strong>💬 WhatsApp:</strong> Coming Soon</p>
          </div>

          <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
            {/* Social Icons Placeholder */}
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>f</div>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>x</div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div style={{ flex: '1 1 400px', padding: '40px' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>Full Name</label>
              <input type="text" placeholder="Enter your name" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>Email Address</label>
              <input type="email" placeholder="email@example.com" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ marginBottom: '5px', fontWeight: 'bold', color: '#333' }}>Message</label>
              <textarea placeholder="How can we help you?" rows={4} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', resize: 'none' }}></textarea>
            </div>

            <button type="button" style={{ 
              marginTop: '10px',
              backgroundColor: '#ffcc00', 
              color: '#000', 
              padding: '15px', 
              borderRadius: '8px', 
              border: 'none', 
              fontWeight: 'bold', 
              fontSize: '1rem',
              cursor: 'pointer',
              transition: '0.3s'
            }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;