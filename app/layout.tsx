import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Saudi Rate | Live Gold and Currency Rates',
  description: 'Real-time gold prices and currency exchange rates in Saudi Arabia.',
  verification: {
    google: 'efzBC_IHaO50KyVO_vqOR44y3kXBDSRh_gcsnBsEAl8',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* براہِ راست ہیڈ میں میٹا ٹیگ ڈالنا تاکہ گوگل فوراً پہچان لے */}
        <meta name="google-site-verification" content="efzBC_IHaO50KyVO_vqOR44y3kXBDSRh_gcsnBsEAl8" />
      </head>
      <body className={inter.className} style={{ margin: 0, backgroundColor: '#f5f5f5' }}>
        <Navbar />
        <main style={{ minHeight: '80vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}