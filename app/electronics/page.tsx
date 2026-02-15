'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const ElectronicsPage = () => {
  const [filter, setFilter] = useState('All');

  const products = [
    { id: 1, category: 'Mobile', name: "iPhone 16 Pro Max", price: "5,699", store: "Jarir", img: "https://images.unsplash.com/photo-1695610334542-9975a6c1a851?w=400" },
    { id: 2, category: 'Mobile', name: "Samsung S24 Ultra", price: "4,299", store: "Extra", img: "https://images.unsplash.com/photo-1707065090150-f86536323f46?w=400" },
    { id: 3, category: 'Gaming', name: "PlayStation 5 Slim", price: "2,149", store: "Noon", img: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400" },
    { id: 4, category: 'Accessories', name: "AirPods Pro 2", price: "949", store: "Amazon", img: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400" },
    { id: 5, category: 'Laptop', name: "MacBook Air M3", price: "4,499", store: "Jarir", img: "https://images.unsplash.com/photo-1517336714460-d5a837120b81?w=400" },
  ];

  const filteredProducts = filter === 'All' ? products : products.filter(p => p.category === filter);

  return (
    <div style={{ padding: '40px 20px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1a1a1a' }}>Tech & Electronics Prices KSA</h1>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>Compare the latest gadget prices across Saudi Arabia's top retailers.</p>
        </div>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {['All', 'Mobile', 'Laptop', 'Gaming', 'Accessories'].map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '10px 25px',
                borderRadius: '25px',
                border: 'none',
                backgroundColor: filter === cat ? '#ffcc00' : '#fff',
                color: filter === cat ? '#000' : '#555',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                transition: '0.3s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '30px' 
        }}>
          {filteredProducts.map((item) => (
            <div key={item.id} className="card" style={{ 
              backgroundColor: 'white', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
              border: '1px solid #eee'
            }}>
              <div style={{ position: 'relative' }}>
                <img src={item.img} alt={item.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#ffcc00', padding: '5px 12px', borderRadius: '15px', fontSize: '0.7rem', fontWeight: 'bold' }}>
                  {item.category}
                </span>
              </div>
              
              <div style={{ padding: '25px' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem', fontWeight: '700' }}>{item.name}</h3>
                <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '15px' }}>Available at <span style={{color: '#1a73e8'}}>{item.store}</span></p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: '900', color: '#333' }}>
                    {item.price} <small style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>SAR</small>
                  </span>
                  <Link href={`/contact`} style={{ backgroundColor: '#1a1a1a', color: 'white', padding: '10px 20px', borderRadius: '10px', textDecoration: 'none', fontSize: '0.9rem' }}>
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link href="/" style={{ color: '#666', textDecoration: 'underline' }}>Return to Homepage</Link>
        </div>
      </div>

      <style jsx>{`
        .card { transition: transform 0.3s ease; }
        .card:hover { transform: translateY(-10px); }
      `}</style>
    </div>
  );
};

export default ElectronicsPage;