import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar'; // نیویگیشن بار امپورٹ کی
import Footer from './components/Footer'; // فوٹر امپورٹ کیا

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Saudi Price - Gold, Currency & Electronics Rates',
  description: 'Daily updated gold rates, currency exchange, and electronics prices in Saudi Arabia.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0, backgroundColor: '#f5f5f5' }}>
        {/* یہ نیویگیشن بار اب ہر پیج پر نظر آئے گی */}
        <Navbar />

        {/* یہاں ہر پیج کا اپنا مواد لوڈ ہوگا */}
        <main style={{ minHeight: '80vh' }}>
          {children}
        </main>

        {/* فوٹر بھی ہر پیج کے آخر میں نظر آئے گا */}
        <Footer />
      </body>
    </html>
  );
}