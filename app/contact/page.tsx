"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  // Aapka original state logic
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* Navbar - Mobile optimized */}
      <nav style={{ backgroundColor: '#000', color: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#fff', textDecoration: 'none' }}>
          SAUDI<span style={{ color: '#FFD700' }}>RATE</span>
        </Link>
        <Link href="/" style={{ color: '#FFD700', textDecoration: 'none', fontSize: '13px' }}>Home</Link>
      </nav>

      {/* Main Container - Added width: '90%' and boxSizing for mobile */}
      <div style={{ 
        maxWidth: '500px', 
        width: '95%', 
        margin: '30px auto', 
        padding: '10px',
        boxSizing: 'border-box' 
      }}>
        
        <div style={{ 
          backgroundColor: '#fff', 
          padding: '20px', 
          borderRadius: '15px', 
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)' 
        }}>
          <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Contact Us</h2>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            
            <div style={{ width: '100%' }}>
              <label style={{ display: 'block', fontSize: '13px', marginBottom: '5px' }}>Name</label>
              <input 
                type="text"
                required
                value={formData.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({...formData, name: e.target.value})}
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  borderRadius: '8px', 
                  border: '1px solid #ddd',
                  boxSizing: 'border-box' // Isse input screen se bahar nahi jayega
                }} 
              />
            </div>

            <div style={{ width: '100%' }}>
              <label style={{ display: 'block', fontSize: '13px', marginBottom: '5px' }}>Email</label>
              <input 
                type="email"
                required
                value={formData.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({...formData, email: e.target.value})}
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  borderRadius: '8px', 
                  border: '1px solid #ddd',
                  boxSizing: 'border-box'
                }} 
              />
            </div>

            <div style={{ width: '100%' }}>
              <label style={{ display: 'block', fontSize: '13px', marginBottom: '5px' }}>Message</label>
              <textarea 
                rows={4}
                required
                value={formData.message}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setFormData({...formData, message: e.target.value})}
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  borderRadius: '8px', 
                  border: '1px solid #ddd',
                  boxSizing: 'border-box'
                }} 
              />
            </div>

            <button 
              type="submit"
              style={{ 
                backgroundColor: '#000', 
                color: '#FFD700', 
                padding: '14px', 
                borderRadius: '10px', 
                border: 'none', 
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '16px'
              }}>
              Send Now
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}