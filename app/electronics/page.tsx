import React from 'react';

export default function ElectronicsPage() {
  const products = [
    { 
      id: 1, 
      name: "iPhone 15 Pro Max", 
      brand: "Apple", 
      price: "4,699 SAR", 
      specs: "256GB, Titanium Blue",
      icon: "📱" 
    },
    { 
      id: 2, 
      name: "Samsung Galaxy S24 Ultra", 
      brand: "Samsung", 
      price: "4,249 SAR", 
      specs: "512GB, Titanium Gray",
      icon: "🤖" 
    },
    { 
      id: 3, 
      name: "MacBook Air M3", 
      brand: "Apple", 
      price: "4,100 SAR", 
      specs: "13.6-inch, 8GB RAM",
      icon: "💻" 
    },
    { 
      id: 4, 
      name: "Sony PlayStation 5", 
      brand: "Sony", 
      price: "2,299 SAR", 
      specs: "Slim Edition, 1TB",
      icon: "🎮" 
    }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      
      <h1 style={{ textAlign: 'center', color: '#333', fontSize: '2rem', marginBottom: '10px' }}>Latest Electronics Deals</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>Best prices for mobile phones and gadgets in Saudi Arabia</p>

      {/* Product Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
        gap: '20px' 
      }}>
        {products.map((item) => (
          <div key={item.id} style={{ 
            backgroundColor: 'white', 
            borderRadius: '20px', 
            padding: '20px', 
            textAlign: 'center',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            border: '1px solid #f0f0f0',
            transition: 'transform 0.2s'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '15px' }}>{item.icon}</div>
            <div style={{ color: '#007bff', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>{item.brand}</div>
            <h3 style={{ fontSize: '1.2rem', margin: '10px 0', color: '#222' }}>{item.name}</h3>
            <p style={{ fontSize: '0.85rem', color: '#888', marginBottom: '15px' }}>{item.specs}</p>
            <div style={{ 
              fontSize: '1.4rem', 
              fontWeight: 'bold', 
              color: '#28a745',
              backgroundColor: '#f1fcf4',
              padding: '10px',
              borderRadius: '10px'
            }}>
              {item.price}
            </div>
            <button style={{ 
              marginTop: '15px', 
              width: '100%', 
              padding: '10px', 
              borderRadius: '8px', 
              border: 'none', 
              backgroundColor: '#333', 
              color: 'white', 
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Check Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}