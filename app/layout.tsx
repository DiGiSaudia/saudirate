import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
        minHeight: '100vh' // اس سے فوٹر ہمیشہ نیچے رہے گا
      }}>
        
        {/* مینیو بار - اوپر */}
        <Navbar />

        {/* صفحے کا اصل مواد - درمیان میں */}
        <main style={{ flex: 1 }}>
          {children}
        </main>

        {/* فوٹر - سب سے نیچے */}
        <Footer />

      </body>
    </html>
  );
}