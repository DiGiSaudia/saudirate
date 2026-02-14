import React from 'react';

export default function ElectronicsPage() {
  const products = [
    { 
      name: "iPhone 15 Pro (256GB)", 
      price: "4,199 SAR", 
      oldPrice: "4,699 SAR",
      discount: "10% OFF",
      brand: "Apple", 
      image: "https://z.nooncdn.com/products/tr:n-t_400/v1694762008/N53432547A_1.jpg",
      storeLink: "https://www.noon.com/saudi-en/iphone-15-pro-256gb-natural-titanium-5g-with-facetime-middle-east-version/N53432547A/p/"
    },
    { 
      name: "Samsung Galaxy S24 Ultra", 
      price: "4,350 SAR", 
      oldPrice: "4,999 SAR",
      discount: "13% OFF",
      brand: "Samsung", 
      image: "https://z.nooncdn.com/products/tr:n-t_400/v1705663455/N70035306V_1.jpg",
      storeLink: "https://www.noon.com/saudi-en/galaxy-s24-ultra-dual-sim-titanium-gray-12gb-ram-256gb-5g-middle-east-version/N70035306V/p/"
    },
    { 
      name: "MacBook Air M3 (13-inch)", 
      price: "4,499 SAR", 
      oldPrice: "4,999 SAR",
      discount: "10% OFF",
      brand: "Apple", 
      image: "https://z.nooncdn.com/products/tr:n-t_400/v1710323334/N70043818V_1.jpg",
      storeLink: "https://www.noon.com/saudi-en/macbook-air-13-inch-display-m3-chip-8-core-cpu-8-core-gpu-8gb-unified-memory-256gb-ssd-storage-arabic-english-keyboard-starlight/N70043818V/p/"
    },
    { 
      name: "Sony PlayStation 5 Slim", 
      price: "2,099 SAR", 
      oldPrice: "2,499 SAR",
      discount: "16% OFF",
      brand: "Sony", 
      image: "https://z.nooncdn.com/products/tr:n-t_400/v1701344403/N70027666V_1.jpg",
      storeLink: "https://www.noon.com/saudi-en/playstation-5-console-disc-version-slim/N70027666V/p/"
    },
    { 
      name: "Apple Watch Series 9", 
      price: "1,549 SAR", 
      oldPrice: "1,799 SAR",
      discount: "14% OFF",
      brand: "Apple", 
      image: "https://z.nooncdn.com/products/tr:n-t_400/v1694762000/N53432432A_1.jpg",
      storeLink: "https://www.noon.com/saudi-en/watch-series-9-gps-45mm-starlight-aluminium-case-with-starlight-sport-band-m-l/N53432432A/p/"
    },
    { 
      name: "AirPods Pro (2nd Gen)", 
      price: "899 SAR", 
      oldPrice: "1,099 SAR",
      discount: "18% OFF",
      brand: "Apple", 
      image: "https://z.nooncdn.com/products/tr:n-t_400/v1662708316/N53348815A_1.jpg",
      storeLink: "https://www.noon.com/saudi-en/airpods-pro-2nd-generation-with-magsafe-charging-case-white/N53348815A/p/"
    },
    { 
      name: "HP Victus Gaming Laptop", 
      price: "3,299 SAR", 
      oldPrice: "3,899 SAR",
      discount: "15% OFF",
      brand: "HP", 
      image: "https://z.nooncdn.com/products/tr:n-t_400/v1689582522/N53400581A_1.jpg",
      storeLink: "https://www.noon.com/saudi-en/victus-gaming-laptop-15-fa0031nx-15-6-inch-display-intel-core-i5-12500h-nvidia-geforce-rtx-3050-ti-8gb-ram-512gb-ssd-english-arabic-keyboard-mica-silver/N53400581A/p/"
    },
    { 
      name: "Samsung 55\" 4K Crystal TV", 
      price: "1,899 SAR", 
      oldPrice: "2,399 SAR",
      discount: "20% OFF",
      brand: "Samsung", 
      image: "https://z.nooncdn.com/products/tr:n-t_400/v1679313271/N53372275A_1.jpg",
      storeLink: "https://www.noon.com/saudi-en/55-inch-crystal-uhd-4k-smart-tv-2023-ua55cu7000uxum-titan-gray/N53372275A/p/"
    },
  ];

  return (
    <div style={{ padding: "40px 15px", maxWidth: "1200px", margin: "0 auto", boxSizing: "border-box" }}>
      <h1 style={{ textAlign: "center", color: "#1976d2", fontSize: "2.2rem", fontWeight: "bold" }}>Best Electronics Deals</h1>
      <p style={{ textAlign: "center", color: "#666", marginBottom: "40px" }}>Real-time Prices & Direct Links to Stores</p>
      
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
            <div style={{ 
              position: "absolute", top: "12px", left: "12px", 
              backgroundColor: "#d32f2f", color: "white", 
              padding: "4px 10px", borderRadius: "6px", 
              fontSize: "0.8rem", fontWeight: "bold", zIndex: 2 
            }}>
              {p.discount}
            </div>

            <div style={{ width: "100%", height: "250px", padding: "15px", backgroundColor: "#fff", boxSizing: "border-box" }}>
              <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} loading="lazy" />
            </div>

            <div style={{ padding: "20px", borderTop: "1px solid #f9f9f9" }}>
              <p style={{ fontSize: "0.75rem", color: "#1976d2", fontWeight: "bold", marginBottom: "5px" }}>{p.brand}</p>
              <h3 style={{ fontSize: "1rem", color: "#333", height: "42px", overflow: "hidden", margin: "0 0 10px 0" }}>{p.name}</h3>
              
              <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                <span style={{ fontSize: "1.4rem", color: "#d32f2f", fontWeight: "bold" }}>{p.price}</span>
                <span style={{ fontSize: "0.8rem", color: "#aaa", textDecoration: "line-through" }}>{p.oldPrice}</span>
              </div>

              {/* اب بٹن کلک کرنے پر اصلی لنک کھلے گا */}
              <a href={p.storeLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button style={{ 
                  marginTop: "15px", width: "100%", padding: "12px", 
                  backgroundColor: "#1976d2", color: "white", border: "none", 
                  borderRadius: "8px", fontWeight: "bold", cursor: "pointer",
                  fontSize: "0.9rem"
                }}>
                  View on Noon.com
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}