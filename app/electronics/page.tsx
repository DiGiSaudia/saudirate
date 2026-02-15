'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const ElectronicsPage = () => {
  const [filter, setFilter] = useState('All');

  // مستحکم امیجز اور ریئل اسٹور لنکس
  const products = [
    { 
      id: 1, 
      category: 'Mobile', 
      name: "iPhone 16 Pro Max", 
      price: "5,699", 
      store: "Jarir Bookstore", 
      img: "https://images.unsplash.com/photo-1695610334542-9975a6c1a851?w=500&q=80",
      buyLink: "https://www.jarir.com/sa-en/catalogsearch/result/?q=iphone%2016%20pro%20max" 
    },
    { 
      id: 2, 
      category: 'Mobile', 
      name: "Samsung Galaxy S24 Ultra", 
      price: "4,199", 
      store: "Noon KSA", 
      img: "https://images.unsplash.com/photo-1707065090150-f86536323f46?w=500&q=80",
      buyLink: "https://www.noon.com/saudi-en/search/?q=s24%20ultra" 
    },
    { 
      id: 3, 
      category: 'Gaming', 
      name: "PlayStation 5 Slim", 
      price: "2,149", 
      store: "Extra KSA", 
      img: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&q=80",
      buyLink: "https://www.extra.com/en-sa/search/?text=ps5%20slim"
    },
    { 
      id: 4, 
      category: 'Accessories', 
      name: "AirPods Pro (2nd Gen)", 
      price: "899", 
      store: "Amazon SA", 
      img: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=500&q=80",
      buyLink: "https://www.amazon.sa/-/en/dp/B0BDHWDR12"
    },
    { 
      id: 5, 
      category: 'Laptop', 
      name: "MacBook Air M3", 
      price: "4,399", 
      store: "Jarir", 
      img: "https://images.unsplash.com/photo-1517336714460-d5a837120b81?w=500&q=80",
      buyLink: "https://www.jarir.com/sa-en/catalogsearch/result/?q=macbook%20air%20m3"
    }
  ];

  const filteredProducts = filter === 'All' ? products : products.filter(p => p.category === filter);

  return (
    <div style={{ padding: '40px 20px', backgroundColor: '#f5f5f7', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1d1d1f', marginBottom: '15px' }}>Tech & Electronics Prices</h1>
          <p style={{ color: '#86868b', fontSize: '1.2rem' }}>Latest prices from top retailers in Saudi Arabia</p>
        </div>

        {/* Filter Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px', overflowX: 'auto', paddingBottom: '10px' }}>
          {['All', 'Mobile', 'Laptop', 'Gaming', 'Accessories'].map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)} style={{
                padding: '12px 24px', borderRadius: '30px', border: 'none',
                backgroundColor: filter === cat ? '#0071e3' : '#fff',
                color: filter === cat ? '#fff' : '#1d1d1f',
                fontWeight: '600', cursor: 'pointer', whiteSpace: 'nowrap',
                boxShadow: '0 2px 10px rgba(0,0,0,0.05)', transition: '0.3s'
            }}>{cat}</button>
          ))}
        </div>

        {/* Product Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
          {filteredProducts.map((item) => (
            <div key={item.id} className="card" style={{ backgroundColor: '#fff', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', transition: 'transform 0.3s ease' }}>
              <div style={{ height: '240px', overflow: 'hidden', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src={item.img} 
                  alt={item.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  onError={(e: any) => { e.target.src = "https://via.placeholder.com/400x300?text=Price+Update+KSA"; }}
                />
              </div>
              
              <div style={{ padding: '20px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#0071e3', textTransform: 'uppercase' }}>{item.category}</span>
                <h3 style={{ fontSize: '1.2rem', margin: '8px 0', color: '#1d1d1f', height: '2.8rem', overflow: 'hidden' }}>{item.name}</h3>
                <p style={{ fontSize: '0.85rem', color: '#86868b', marginBottom: '20px' }}>Store: <b>{item.store}</b></p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f5f5f7', paddingTop: '15px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#1d1d1f' }}>{item.price}</span>
                    <span style={{ fontSize: '0.7rem', color: '#86868b' }}>SAR (approx)</span>
                  </div>
                  <a href={item.buyLink} target="_blank" rel="noopener noreferrer" style={{ 
                    backgroundColor: '#1d1d1f', color: '#fff', padding: '10px 18px', 
                    borderRadius: '10px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold' 
                  }}>
                    Check Price
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .card:hover { transform: translateY(-5px); }
      `}</style>
    </div>
  );
};

export default ElectronicsPage;