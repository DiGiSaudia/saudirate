import type { Metadata } from "next";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// یہ حصہ گوگل سرچ (SEO) کے لیے ہے
export const metadata: Metadata = {
  title: "Saudi Price | Live Gold Rates, Currency & Electronics in KSA",
  description: "Get the latest 24K, 22K gold prices, SAR exchange rates for PKR, INR, and best electronics deals in Saudi Arabia.",
  keywords: "Saudi Gold Rate, SAR to PKR, Saudi Electronics Prices, iPhone Prices KSA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ 
        margin: 0, 
        padding: 0, 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh' 
      }}>
        <Navbar />
        
        <main style={{ flex: 1 }}>
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}