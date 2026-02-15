'use client';
import React from 'react';

const ContactPage = () => {
  return (
    <div style={{ padding: '60px 20px', backgroundColor: '#f9f9f9', minHeight: '80vh' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* سادہ اور روشن ہیڈر */}
        <h1 style={{ color: '#333', fontSize: '2.5rem', marginBottom: '10px' }}>Contact Us</h1>
        <p style={{ color: '#666', marginBottom: '40px' }}>
          Have a question or feedback? We'd love to hear from you.
        </p>

        {/* کانٹیکٹ فارم جو باقی ویب سائٹ سے میچ کرتا ہے */}
        <div style={{ 
          backgroundColor: 'white', 
          padding: '40px', 
          borderRadius: '15px', 
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          border: '1px solid #eee',
          textAlign: 'left'
        }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>Name</label>
              <input type="text" placeholder="Your full name" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>Email</label>
              <input type="email" placeholder="your@email.com" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>Message</label>
              <textarea placeholder="How can we help you?" rows={5} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', resize: 'none' }}></textarea>
            </div>

            <button type="button" style={{ 
              backgroundColor: '#1a73e8', // آپ کی ویب سائٹ کا نیلا رنگ
              color: 'white', 
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

        {/* رابطہ کی معلومات */}
        <div style={{ marginTop: '40px', color: '#888', fontSize: '0.9rem' }}>
          <p>Email: <b>info@saudirate.com</b></p>
          <p>Riyadh, Saudi Arabia</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;