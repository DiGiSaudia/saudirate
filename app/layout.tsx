import React from 'react';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Saudi Price Portal',
  description: 'Daily Gold, Currency and Electronics prices in Saudi Arabia',
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
        backgroundColor: "#f4f7f6",
        fontFamily: "Arial, sans-serif" 
      }}>
        {/* نیوبار جو ہر صفحے پر اوپر نظر آئے گا */}
        <Navbar /> 
        
        {/* پیج کا اصلی مواد */}
        <main>
          {children}
        </main>

        {/* ایک چھوٹا سا فوٹر جو ہر صفحے کے نیچے ہوگا */}
        <footer style={{
          textAlign: "center",
          padding: "20px",
          color: "#888",
          fontSize: "0.8rem",
          marginTop: "40px"
        }}>
          © 2026 saudiprice.com | Reliable Daily Updates
        </footer>
      </body>
    </html>
  );
}