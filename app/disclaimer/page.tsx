export default function Disclaimer() {
  return (
    <div style={{ backgroundColor: '#020617', color: '#F8FAFC', minHeight: '100vh', padding: '60px 20px' }}>
      <main style={{ maxWidth: '800px', margin: '0 auto', background: '#0F172A', padding: '40px', borderRadius: '30px', border: '1px solid #1E293B' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#FACC15', marginBottom: '20px' }}>Disclaimer</h1>
        
        <div style={{ background: 'rgba(250, 204, 21, 0.05)', borderLeft: '4px solid #FACC15', padding: '20px', marginBottom: '30px' }}>
          <p style={{ color: '#FACC15', fontWeight: 'bold' }}>Important Notice:</p>
          <p style={{ color: '#CBD5E1', fontSize: '15px' }}>The rates provided are for informational purposes only. Always verify with your bank before making a transaction.</p>
        </div>

        <section style={{ lineHeight: '1.8', color: '#CBD5E1' }}>
          <h3 style={{ color: 'white' }}>No Financial Advice</h3>
          <p>SaudiRate.com is not a financial institution. We provide market trends and live rates, but this should not be considered as professional financial advice.</p>
          
          <h3 style={{ color: 'white', marginTop: '20px' }}>Accuracy of Data</h3>
          <p>While we strive to provide the most accurate data, market conditions change rapidly. We are not responsible for any losses resulting from the use of this information.</p>
        </section>
      </main>
    </div>
  );
}