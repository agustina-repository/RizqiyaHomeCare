export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-gray-800 leading-relaxed">

      <h1 className="text-4xl font-extrabold text-primary mb-2">Syarat & Ketentuan</h1>
      <p className="text-sm text-gray-400 mb-10">Terakhir Diperbarui: 24 Februari 2026</p>

      <section className="space-y-8">
        <div>
          <p>
            Dengan mengakses dan membeli konten di <strong>Ruang Edukasi Rizqiya Home Care (RHC)</strong>, Anda dianggap telah membaca, memahami, dan menyetujui seluruh syarat dan ketentuan yang berlaku di bawah ini.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">1. Lisensi & Hak Akses</h2>
          <p className="mb-2">Pembelian konten premium memberikan Anda hak akses untuk:</p>
          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            <li>Melihat seluruh slide materi di website secara penuh.</li>
            <li>Mengunduh file pendukung (ZIP) untuk penggunaan pribadi.</li>
            <li>Akses konten selamanya (selama layanan RHC beroperasi) menggunakan email yang terdaftar saat transaksi.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">2. Larangan Penyalahgunaan</h2>
          <p className="mb-2 text-red-600 font-medium italic">Penting untuk diperhatikan:</p>
          <ul className="list-disc ml-6 space-y-1 text-gray-700">
            <li>Dilarang keras memperjualbelikan kembali (reselling) konten digital RHC dalam bentuk apa pun.</li>
            <li>Dilarang membagikan link unduhan atau file ZIP kepada pihak lain secara publik.</li>
            <li>Satu pembelian hanya berlaku untuk satu pengguna (berdasarkan alamat email).</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">3. Pembayaran & Refund</h2>
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
            <p className="text-sm">
              Karena produk yang kami jual adalah produk digital yang dapat langsung diakses setelah pembayaran, maka <strong>tidak ada kebijakan pengembalian dana (Refund)</strong> setelah transaksi dinyatakan berhasil oleh Midtrans. Mohon pastikan email yang Anda masukkan sudah benar sebelum membayar.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-3">4. Masalah Teknis</h2>
          <p>
            RHC bertanggung jawab memastikan sistem verifikasi email bekerja dengan baik. Jika Anda sudah membayar namun konten tetap terkunci, silakan hubungi Admin dengan melampirkan bukti pembayaran untuk aktivasi manual.
          </p>
        </div>

        <div className="pt-6 border-t border-gray-100 text-center">
          <p className="text-gray-500 italic">
            "Terima kasih telah menghargai karya kami dengan tidak menyebarluaskan konten secara ilegal."
          </p>
        </div>
      </section>
    </main>
  );
}