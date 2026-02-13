export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center border-t-4 border-blue-600">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Saudi Price 🇸🇦
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          آپ کی اپنی ویب سائٹ اب پروفیشنل بن رہی ہے
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            قیمتیں دیکھیں
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition">
            رابطہ کریں
          </button>
        </div>
      </div>
      <footer className="mt-8 text-gray-500 text-sm">
        © 2026 DiGi Saudia - All Rights Reserved
      </footer>
    </div>
  );
}