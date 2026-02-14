import React from 'react';

export default function ElectronicsPage() {
  const products = [
    { 
      name: "iPhone 15 Pro (256GB)", 
      price: "4,199 SAR", 
      brand: "Apple", 
      image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=300" 
    },
    { 
      name: "Samsung Galaxy S24 Ultra", 
      price: "4,350 SAR", 
      brand: "Samsung", 
      image: "https://images.unsplash.com/photo-1707230103251-098544200762?auto=format&fit=crop&q=80&w=300" 
    },
    { 
      name: "MacBook Air M3 (13-inch)", 
      price: "4,499 SAR", 
      brand: "Apple", 
      image: "https://images.unsplash.com/photo-1517336714460-4c98882c3fae?auto=format&fit=crop&q=80&w=300" 
    },
    { 
      name: "Sony PlayStation 5", 
      price: "2,099 SAR", 
      brand: "Sony", 
      image: "https://images.unsplash.com/photo-1606813907291-d86ebb995431?auto=format&fit=crop&q=80&w=300" 
    },
    { 
      name: "Apple Watch Series 9", 
      price: "1,549 SAR", 
      brand: "Apple", 
      image: "https://images.unsplash.com/photo-1546868871-70ca48370731?auto=format&fit=crop&q=80&w=300" 
    },
    { 
      name: "AirPods Pro (2nd Gen)", 
      price: "899 SAR", 
      brand: "Apple", 
      image: "https://images.unsplash.com/photo-1588423770574-91993ca0a85a?auto=format&fit=crop&q=80&w=300" 
    },
    { 
      name: "HP Victus Gaming Laptop", 
      price: "3,299 SAR", 
      brand: "HP", 
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=300" 
    },
    { 
      name: "Samsung 55\" 4K UHD TV", 
      price: "1,899 SAR", 
      brand: "Samsung", 
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=300" 
    },
  ];

  return (
    <div style={{ 
      padding: "40px 15px", 
      maxWidth: "1100px", 
      margin: "0 auto", 
      fontFamily: "Arial, sans-serif",
      boxSizing: "border-box"
    }}>
      <h1 style={{ textAlign: "center", color: "#1976d2", fontSize: "2.2rem", fontWeight: "bold" }}>
        Electronics Prices in Saudi Arabia
      </h1>
      <p style={{ textAlign: "center", color: "#666", marginBottom: "40px" }}>
        Latest market prices for top gadgets in KSA
      </p>
      
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", 
        gap: "25px", 
        marginTop: "30px" 
      }}>
        {products.map((p, i) => (
          <div key={i} style={{ 
            padding: "0", 
            backgroundColor: "white", 
            borderRadius: "15px", 
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)", 
            border: "1px solid #eef2f6",
            textAlign: "center",
            overflow: "hidden", // تصویر کے کونوں کو گول کرنے کے لیے
            transition: "transform 0.2s"
          }}>
            {/* تصویر کا سیکشن */}
            <div style={{ width: "100%", height: "200px", overflow: "hidden", backgroundColor: "#f9f9f9" }}>
              <img 
                src={p.image} 
                alt={p.name} 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
            </div>

            <div style={{ padding: "20px" }}>
              <span style={{ fontSize: "0.75rem", color: "#1976d2", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>
                {p.brand}
              </span>
              <h3 style={{ margin: "10px 0", color: "#333", fontSize: "1.05rem", height: "40px", overflow: "hidden" }}>
                {p.name}
              </h3>
              <p style={{ fontSize: "1.4rem", color: "#d32f2f", fontWeight: "bold", margin: "10px 0" }}>
                {p.price}
              </p>
              <button style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#1976d2",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "0.9rem"
              }}>
                View Full Specs
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <a href="/" style={{ color: "#0070f3", textDecoration: "none", fontWeight: "bold", fontSize: "1.1rem" }}>
          ← Back to Home
        </a>
      </div>
    </div>
  );
}