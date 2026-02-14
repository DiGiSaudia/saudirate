import React from 'react';

export default function ElectronicsPage() {
  const products = [
    { 
      name: "iPhone 15 Pro (256GB)", 
      price: "4,199 SAR", 
      oldPrice: "4,699 SAR",
      discount: "10% OFF",
      brand: "Apple", 
      image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=400" 
    },
    { 
      name: "Samsung Galaxy S24 Ultra", 
      price: "4,350 SAR", 
      oldPrice: "4,999 SAR",
      discount: "13% OFF",
      brand: "Samsung", 
      image: "https://images.unsplash.com/photo-1707230103251-098544200762?w=400" 
    },
    { 
      name: "MacBook Air M3 (13-inch)", 
      price: "4,499 SAR", 
      oldPrice: "4,999 SAR",
      discount: "10% OFF",
      brand: "Apple", 
      image: "https://images.unsplash.com/photo-1517336714460-4c98882c3fae?w=400" 
    },
    { 
      name: "Sony PlayStation 5", 
      price: "2,099 SAR", 
      oldPrice: "2,499 SAR",
      discount: "16% OFF",
      brand: "Sony", 
      image: "https://images.unsplash.com/photo-1606813907291-d86ebb995431?w=400" 
    },
    { 
      name: "Apple Watch Series 9", 
      price: "1,549 SAR", 
      oldPrice: "1,799 SAR",
      discount: "14% OFF",
      brand: "Apple", 
      image: "https://images.unsplash.com/photo-1546868871-70ca48370731?w=400" 
    },
    { 
      name: "AirPods Pro (2nd Gen)", 
      price: "899 SAR", 
      oldPrice: "1,099 SAR",
      discount: "18% OFF",
      brand: "Apple", 
      image: "https://images.unsplash.com/photo-1588423770574-91993ca0a85a?w=400" 
    },
    { 
      name: "HP Victus Gaming Laptop", 
      price: "3,299 SAR", 
      oldPrice: "3,899 SAR",
      discount: "15% OFF",
      brand: "HP", 
      image: "https://plus.unsplash.com/premium_photo-1681313824743-7b5a28639918?w=400" 
    },
    { 
      name: "Samsung 55\" 4K UHD TV", 
      price: "1,899 SAR", 
      oldPrice: "2,399 SAR",
      discount: "20% OFF",
      brand: "Samsung", 
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400" 
    },
  ];

  return (
    <div style={{ padding: "40px 15px", maxWidth: "1200px", margin: "0 auto", boxSizing: "border-box" }}>
      <h1 style={{ textAlign: "center", color: "#1976d2", fontSize: "2.2rem" }}>Best Deals on Electronics</h1>
      <p style={{ textAlign: "center", color: "#666", marginBottom: "40px" }}>Latest Discounted Prices in KSA</p>
      
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", 
        gap: "25px" 
      }}>
        {products.map((p, i) => (
          <div key={i} style={{ 
            backgroundColor: "white", borderRadius: "15px", 
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)", overflow: "hidden", 
            position: "relative", // ڈسکاؤنٹ لیبل کے لیے
            border: "1px solid #eee"
          }}>
            {/* ڈسکاؤنٹ لیبل */}
            <div style={{ 
              position: "absolute", top: "10px", left: "10px", 
              backgroundColor: "#d32f2f", color: "white", 
              padding: "5px 10px", borderRadius: "5px", 
              fontSize: "0.8rem", fontWeight: "bold", zIndex: 1 
            }}>
              {p.discount}
            </div>

            <div style={{ width: "100%", height: "200px" }}>
              <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            <div style={{ padding: "20px" }}>
              <p style={{ fontSize: "0.7rem", color: "#888", marginBottom: "5px" }}>{p.brand}</p>
              <h3 style={{ fontSize: "1rem", color: "#333", height: "40px", overflow: "hidden", margin: "0 0 10px 0" }}>{p.name}</h3>
              
              <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                <span style={{ fontSize: "1.4rem", color: "#d32f2f", fontWeight: "bold" }}>{p.price}</span>
                <span style={{ fontSize: "0.9rem", color: "#aaa", textDecoration: "line-through" }}>{p.oldPrice}</span>
              </div>

              <button style={{ 
                marginTop: "15px", width: "100%", padding: "10px", 
                backgroundColor: "#1976d2", color: "white", border: "none", 
                borderRadius: "8px", fontWeight: "bold", cursor: "pointer" 
              }}>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}