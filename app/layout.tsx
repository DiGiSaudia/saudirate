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
      <head>
        {/* یہ حصہ موبائل پر اسکرین کو فٹ کرنے کے لیے جادو کا کام کرتا ہے */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body style={{ 
        margin: 0, 
        padding: 0, 
        backgroundColor: "#f4f7f6",
        fontFamily: "Arial, sans-serif",
        overflowX: "hidden", // اس سے موبائل پر دائیں بائیں فالتو اسکرولنگ ختم ہو جائے گی
        width: "100%"
      }}>
        {/* نیوبار جو ہر پیج پر ہوگا */}
        <Navbar /> 
        
        {/* پیج کا اصلی مواد */}
        <main style={{ width: "100%", overflowX: "hidden" }}>
          {children}
        </main>

        {/* یہ ہمارا واحد فوٹر ہے */}
        <footer style={{
          textAlign: "center",
          padding: "30px 20px",
          color: "#888",
          fontSize: "0.8rem",
          marginTop: "40px",
          borderTop: "1px solid #eee"
        }}>
          © 2026 saudiprice.com | Reliable Daily Updates
          <br />
          <span style={{ fontSize: "0.7rem" }}>Arabic support coming in 6 months.</span>
        </footer>
      </body>
    </html>
  );
}