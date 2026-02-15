'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const ElectronicsPage = () => {
  const [filter, setFilter] = useState('All');

  const products = [
    { 
      id: 1, 
      category: 'Mobile', 
      name: "iPhone 16 Pro Max", 
      price: "5,699", 
      store: "Jarir Bookstore", 
      img: "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-pro-and-iphone-16-pro-max/article/Apple-iPhone-16-Pro-hero-240909_inline.jpg.large.jpg",
      buyLink: "https://www.jarir.com/sa-en/catalogsearch/result/?q=iphone%2016%20pro%20max" 
    },
    { 
      id: 2, 
      category: 'Mobile', 
      name: "Samsung Galaxy S24 Ultra", 
      price: "4,199", 
      store: "Noon.com", 
      img: "https://images.samsung.com/is/image/samsung/p6pim/sa/2401/gallery/sa-galaxy-s24-s928-sm-s928bztvmea-539330922?$650_519_PNG$",
      buyLink: "https://www.noon.com/saudi-en/search/?q=s24%20ultra" 
    },
    { 
      id: 3, 
      category: 'Gaming', 
      name: "PlayStation 5 Slim", 
      price: "2,149", 
      store: "Extra", 
      img: "https://m.media-amazon.com/images/I/510uTH76GvL._AC_SL1000_.jpg",
      buyLink: "https://www.extra.com/en-sa/search/?text=ps5%20slim"
    },
    { 
      id: 4, 
      category: 'Accessories', 
      name: "AirPods Pro 2", 
      price: "899", 
      store: "Lulu Hypermarket", 
      img: "https://m.media-amazon.com/images/I/61f1YfLfKVL._AC_SL1500_.jpg",
      buyLink: "https://www.luluhypermarket.com/en-sa/search/?text=airpods%20pro%202"
    },
    { 
      id: 5, 
      category: 'Laptop', 
      name: "MacBook Air M3", 
      price: "4,399", 
      store: "Panda", 
      img: "https://m.media-amazon.com/images/I/71ItM6oa16L._AC_SL1500_.jpg",
      buyLink: "https://panda.com.sa/en/catalogsearch/result/?q=macbook"
    }
  ];

  const filteredProducts = filter === 'All' ? products : products.filter(p => p.category === filter);

  return (
    <div style={{ padding: '40px 20px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1a1a1a' }}>Electronics Prices in KSA</h1>
          <p style={{ color: '#666' }}>Compare latest prices from Jarir, Noon, Extra, and Lulu.</p>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {['All', 'Mobile', 'Laptop', 'Gaming', 'Accessories'].map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)} style={{
                padding: '10px 25px', borderRadius: '25px', border: 'none',
                backgroundColor: filter === cat ? '#1a73e8' : '#fff',
                color: filter === cat ? '#fff' : '#555',
                fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}>{cat}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {filteredProducts.map((item) => (
            <div key={item.id} style={{ backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
              <div style={{ height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px', backgroundColor: '#fff' }}>
                <img 
                  src={item.img} 
                  alt={item.name} 
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
                  onError={(e: any) => { e.target.src = "https://via.placeholder.com/300?text=Product+Image"; }} // اگر امیج لوڈ نہ ہو تو یہ دکھائے
                />
              </div>
              
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', height: '50px' }}>{item.name}</h3>
                <p style={{ color: '#888', fontSize: '0.8rem' }}>Check price at: <b>{item.store}</b></p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                  <span style={{ fontSize: '1.4rem', fontWeight: '900', color: '#1a73e8' }}>
                    {item.price} <small style={{ fontSize: '0.7rem' }}>SAR</small>
                  </span>
                  <a href={item.buyLink} target="_blank" rel="noopener noreferrer" style={{ 
                    backgroundColor: '#ffcc00', color: '#000', padding: '10px 15px', 
                    borderRadius: '8px', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 'bold' 
                  }}>
                    View Store →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElectronicsPage;