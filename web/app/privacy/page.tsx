export default function PrivacyPage() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const email = process.env.NEXT_PUBLIC_EMAIL_ACCOUNT;
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-extrabold text-primary mb-2">
        Kebijakan Privasi
      </h1>
      <p className="text-sm text-gray-400 mb-10">
        Terakhir Diperbarui: 24 Februari 2026
      </p>

      <section className="space-y-8">
        <div>
          <p>
            Selamat datang di <strong>Rizqiya Home Care (RHC)</strong>. Kami
            sangat menghargai privasi Anda dan berkomitmen untuk melindungi data
            pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami
            mengumpulkan, menggunakan, dan menjaga informasi Anda saat Anda
            menggunakan layanan kami, terutama pada fitur{" "}
            <strong>Ruang Edukasi</strong>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            1. Informasi yang Kami Kumpulkan
          </h2>
          <p className="mb-2">
            Kami mengumpulkan informasi yang terbatas hanya untuk keperluan
            layanan, yaitu:
          </p>
          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            <li>
              <strong>Informasi Identitas:</strong> Alamat email untuk akses
              konten premium.
            </li>
            <li>
              <strong>Informasi Transaksi:</strong> Detail pembayaran yang
              diproses melalui <strong>Midtrans</strong>.
            </li>
            <li>
              <strong>Data Akses:</strong> ID konten yang Anda beli di sistem{" "}
              <strong>Sanity CMS</strong>.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            2. Penggunaan Informasi
          </h2>
          <p className="mb-2">Kami menggunakan data Anda untuk:</p>
          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            <li>Verifikasi pembelian konten.</li>
            <li>Membuka akses slide premium dan tombol unduh ZIP.</li>
            <li>Mengirimkan konfirmasi akses jika diperlukan.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            3. Keamanan & Pihak Ketiga
          </h2>
          <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-primary">
            <p className="text-sm">
              <strong>Penting:</strong> Kami tidak menyimpan informasi kartu
              kredit Anda. Semua transaksi diproses secara aman oleh{" "}
              <strong>Midtrans</strong>. Data email Anda disimpan secara aman di{" "}
              <strong>Database kami</strong> hanya untuk verifikasi.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            5. Kontak Kami
          </h2>
          <p>Jika ada pertanyaan, silakan hubungi kami:</p>
          <div className="mt-2 text-primary font-medium">
            <p>Email: {email}</p>
            <p>WhatsApp: {phoneNumber}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
