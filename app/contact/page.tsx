import React from 'react';

export default function ContactPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', padding: '0 20px', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center', color: '#1976d2' }}>Contact Us</h1>
      <p style={{ textAlign: 'center', color: '#666' }}>Have any questions or suggestions? We'd love to hear from you!</p>

      <div style={{ 
        backgroundColor: '#f9f9f9', 
        padding: '30px', 
        borderRadius: '15px', 
        marginTop: '30px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
      }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Your Name</label>
            <input type="text" placeholder="Enter your name" style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email Address</label>
            <input type="email" placeholder="Enter your email" style={inputStyle} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Message</label>
            <textarea rows={5} placeholder="How can we help you?" style={inputStyle}></textarea>
          </div>
          <button type="button" style={{
            padding: '12px',
            backgroundColor: '#1976d2',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>Send Message</button>
        </form>
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <h4>Email Us Directly</h4>
        <p style={{ color: '#1976d2', fontWeight: 'bold' }}>info@saudiprice.com</p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ddd',
  boxSizing: 'border-box' as const
};