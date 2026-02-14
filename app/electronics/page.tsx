import React from 'react';

export default function ElectronicsPage() {
  const products = [
    { 
      name: "iPhone 15 Pro (256GB)", 
      price: "4,199 SAR", 
      oldPrice: "4,699 SAR",
      discount: "10% OFF",
      brand: "Apple", 
      image: "https://m.media-amazon.com/images/I/81Sig6biN2L._AC_SL1500_.jpg" 
    },
    { 
      name: "Samsung Galaxy S24 Ultra", 
      price: "4,350 SAR", 
      oldPrice: "4,999 SAR",
      discount: "13% OFF",
      brand: "Samsung", 
      image: "https://m.media-amazon.com/images/I/71RZA9S878L._AC_SL1500_.jpg" 
    },
    { 
      name: "MacBook Air M3 (13-inch)", 
      price: "4,499 SAR", 
      oldPrice: "4,999 SAR",
      discount: "10% OFF",
      brand: "Apple", 
      image: "https://m.media-amazon.com/images/I/71ItM9kooOL._AC_SL1500_.jpg" 
    },
    { 
      name: "Sony PlayStation 5 Slim", 
      price: "2,099 SAR", 
      oldPrice: "2,499 SAR",
      discount: "16% OFF",
      brand: "Sony", 
      image: "https://m.media-amazon.com/images/I/510uTHY66rL._AC_SL1500_.jpg" 
    },
    { 
      name: "Apple Watch Series 9", 
      price: "1,549 SAR", 
      oldPrice: "1,799 SAR",
      discount: "14% OFF",
      brand: "Apple", 
      image: "https://m.media-amazon.com/images/I/71XvO7p2Y6L._AC_SL1500_.jpg" 
    },
    { 
      name: "AirPods Pro (2nd Gen)", 
      price: "899 SAR", 
      oldPrice: "1,099 SAR",
      discount: "18% OFF",
      brand: "Apple", 
      image: "https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_SL1500_.jpg" 
    },
    { 
      name: "HP Victus Gaming Laptop", 
      price: "3,299 SAR", 
      oldPrice: "3,899 SAR",
      discount: "15% OFF",
      brand: "HP", 
      image: "https://m.media-amazon.com/images/I/71h6PP6R8eL._AC_SL1500_.jpg" 
    },
    { 
      name: "Samsung 55\" 4K Crystal TV", 
      price: "1,899 SAR", 
      oldPrice: "2,399 SAR",
      discount: "20% OFF",
      brand: "Samsung", 
      image: "https://m.media-amazon.com/images/I/71f29F1mSML._AC_SL1500_.jpg" 
    },
  ];

  return (
    <div style={{ padding: "40px 15px", maxWidth: "1200px", margin: "0 auto", boxSizing: "border-box" }}>
      <h1 style={{ textAlign: "center", color: "#1976d2", fontSize: "2.2rem", fontWeight: "bold" }}>Best Deals on Electronics</h1>
      <p style={{ textAlign: "center", color: "#666", marginBottom: "40px" }}>Latest Market Prices from Amazon, Noon & Jarir</p>
      
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
        gap: "25px" 
      }}>
        {products.map((p, i) => (
          <div key={i} style={{ 
            backgroundColor: "white", borderRadius: "15px", 
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)", overflow: "hidden", 
            position: "relative", border: "1px solid #eee"
          }}>
            {/* Discount Badge */}
            <div style={{ 
              position: "absolute", top: "12px", left: "12px", 
              backgroundColor: "#d32f2f", color: "white", 
              padding: "4px 10px", borderRadius: "6px", 
              fontSize: "0.8rem", fontWeight: "bold", zIndex: 2 
            }}>
              {p.discount}
            </div>

            <div style={{ width: "100%", height: "250px", padding: "15px", backgroundColor: "#fff", boxSizing: "border-box" }}>
              <img 
                src={p.image} 
                alt={p.name} 
                style={{ width: "100%", height: "100%", objectFit: "contain" }} // contain سے تصویر کٹے گی نہیں
                loading="lazy"
              />
            </div>

            <div style={{ padding: "20px", borderTop: "1px solid #f9f9f9" }}>
              <p style={{ fontSize: "0.75rem", color: "#1976d2", fontWeight: "bold", marginBottom: "5px" }}>{p.brand}</p>
              <h3 style={{ fontSize: "1.05rem", color: "#333", height: "42px", overflow: "hidden", margin: "0 0 10px 0", lineHeight: "1.4" }}>
                {p.name}
              </h3>
              
              <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                <span style={{ fontSize: "1.5rem", color: "#d32f2f", fontWeight: "bold" }}>{p.price}</span>
                <span style={{ fontSize: "0.9rem", color: "#aaa", textDecoration: "line-through" }}>{p.oldPrice}</span>
              </div>

              <button style={{ 
                marginTop: "15px", width: "100%", padding: "12px", 
                backgroundColor: "#1976d2", color: "white", border: "none", 
                borderRadius: "8px", fontWeight: "bold", cursor: "pointer",
                fontSize: "0.9rem"
              }}>
                View on Store
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}